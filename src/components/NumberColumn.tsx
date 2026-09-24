import type { CSSProperties } from 'react'
import type { Calculation } from '../types'
import { copy, type Language } from '../i18n'

type NumberColumnProps = {
  language?: Language
  calculation: Calculation
  activeStepIndex?: number
  revealedStepCount?: number
  showAnswer?: boolean
}

export function NumberColumn({ language = 'en', calculation, activeStepIndex = -1, revealedStepCount = 0, showAnswer = false }: NumberColumnProps) {
  const digits = (value: number) => String(value).split('').reverse()
  const topDigits = digits(calculation.a)
  const bottomDigits = digits(calculation.b)
  const resultDigits = digits(calculation.total)
  const columnCount = Math.max(topDigits.length, bottomDigits.length, resultDigits.length)
  const gridStyle: CSSProperties = {
    gridTemplateColumns: `30px repeat(${columnCount}, minmax(32px, 1fr))`,
    minWidth: `${30 + columnCount * 32}px`,
  }
  const isRevealed = (index: number) => showAnswer || index < revealedStepCount
  const showCarry = (index: number) => showAnswer || index < revealedStepCount || index === activeStepIndex
  const cellClass = (index: number, extraClass = '') => `${extraClass} ${index === activeStepIndex ? 'active-digit' : ''}`.trim()

  return (
    <div className="number-board" aria-label={`${copy[language].firstNumber}: ${calculation.a} + ${copy[language].secondNumber}: ${calculation.b}`}>
      <div className="carry-row" style={gridStyle} aria-label={copy[language].carry}>
        <span />
        {Array.from({ length: columnCount }, (_, index) => {
          const carry = calculation.steps[index]?.carryIn ?? 0
          return <span className={showCarry(index) && carry > 0 ? 'carry-value' : ''} key={index}>{showCarry(index) && carry > 0 ? carry : ''}</span>
        }).reverse()}
      </div>
      <div className="number-row" style={gridStyle}>
        <span className="operator-space" />
        {Array.from({ length: columnCount }, (_, index) => <span className={cellClass(index, 'digit-cell')} key={index}>{topDigits[index] ?? ''}</span>).reverse()}
      </div>
      <div className="number-row" style={gridStyle}>
        <span className="operator">+</span>
        {Array.from({ length: columnCount }, (_, index) => <span className={cellClass(index, 'digit-cell')} key={index}>{bottomDigits[index] ?? ''}</span>).reverse()}
      </div>
      <div className="answer-line" />
      <div className="number-row result-row" style={gridStyle}>
        <span className="operator-space" />
        {Array.from({ length: columnCount }, (_, index) => <span className={cellClass(index, 'digit-cell')} key={index}>{isRevealed(index) ? resultDigits[index] ?? '' : '?'}</span>).reverse()}
      </div>
    </div>
  )
}
