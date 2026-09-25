// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import App from '../../src/App'
import { copy } from '../../src/i18n'
import { requestAddition } from '../../src/services/api'

vi.mock('../../src/services/api', () => ({ requestAddition: vi.fn() }))

afterEach(cleanup)

const mockedRequestAddition = vi.mocked(requestAddition)

describe('App result visibility', () => {
  beforeEach(() => {
    mockedRequestAddition.mockResolvedValue(41)
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: vi.fn().mockReturnValue({
        matches: true,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }),
    })
    Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', {
      configurable: true,
      value: vi.fn(),
    })
  })

  it('scrolls to the new result on a compact viewport after calculation', async () => {
    render(<App />)
    fireEvent.change(screen.getByLabelText(copy.en.firstNumber), { target: { value: '24' } })
    fireEvent.change(screen.getByLabelText(copy.en.secondNumber), { target: { value: '17' } })
    fireEvent.click(screen.getByRole('button', { name: copy.en.calculate }))

    await waitFor(() => expect(HTMLElement.prototype.scrollIntoView).toHaveBeenCalledTimes(1))
    expect(mockedRequestAddition).toHaveBeenCalledWith(24, 17)
  })
})
