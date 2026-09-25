import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { copy } from '../../src/i18n'
import { buildCalculation } from '../../src/services/addition'
import { ResultPanel } from '../../src/components/ResultPanel'

const calculation = buildCalculation(24, 17, 41)

afterEach(cleanup)

function renderPanel(language: 'en' | 'vi' = 'en') {
  return render(<ResultPanel language={language} calculation={calculation} onTryAnother={() => undefined} />)
}

describe('ResultPanel guided flow', () => {
  it('gives feedback for an incorrect attempt and shows a hint', () => {
    renderPanel()

    fireEvent.click(screen.getByRole('button', { name: copy.en.checkStep }))
    expect(screen.getByText(copy.en.incorrectFeedback)).toBeTruthy()

    fireEvent.click(screen.getByRole('button', { name: copy.en.showHint }))
    expect(screen.getByText(copy.en.hintText(11))).toBeTruthy()
  })

  it('accepts a correct answer and advances to the next column', () => {
    renderPanel()

    fireEvent.change(screen.getByLabelText(copy.en.writeQuestion), { target: { value: '1' } })
    fireEvent.change(screen.getByLabelText(copy.en.carryQuestion), { target: { value: '1' } })
    fireEvent.click(screen.getByRole('button', { name: copy.en.checkStep }))
    expect(screen.getByText(copy.en.correctFeedback)).toBeTruthy()

    fireEvent.click(screen.getByRole('button', { name: copy.en.nextStep }))
    expect(screen.getByText('2 + 1 + 1 = ?')).toBeTruthy()
  })

  it('can reveal the answer and complete the exercise', () => {
    renderPanel()

    fireEvent.click(screen.getByRole('button', { name: copy.en.showHint }))
    fireEvent.click(screen.getByRole('button', { name: copy.en.showAnswer }))

    expect(screen.getByText(copy.en.greatWork)).toBeTruthy()
    expect(screen.getByText('24 + 17 = 41')).toBeTruthy()
  })

  it('preserves the current inputs when the language changes', () => {
    const view = renderPanel()
    const resultInput = screen.getByLabelText(copy.en.writeQuestion)
    const carryInput = screen.getByLabelText(copy.en.carryQuestion)
    fireEvent.change(resultInput, { target: { value: '1' } })
    fireEvent.change(carryInput, { target: { value: '1' } })

    view.rerender(<ResultPanel language="vi" calculation={calculation} onTryAnother={() => undefined} />)

    expect((screen.getByLabelText(copy.vi.writeQuestion) as HTMLInputElement).value).toBe('1')
    expect((screen.getByLabelText(copy.vi.carryQuestion) as HTMLInputElement).value).toBe('1')
  })
})
