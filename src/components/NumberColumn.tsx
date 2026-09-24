import type { CSSProperties } from 'react'
import type { Calculation } from '../types'
import { copy, type Language } from '../i18n'

type NumberColumnProps = { language?: Language; calculation: Calculation }

export function NumberColumn({ language = 'en', calculation }: NumberColumnProps) {
  const digits = (value: number) => String(value).split('').reverse()
  const topDigits = digits(calculation.a)
  const bottomDigits = digits(calculation.b)
  const resultDigits = digits(calculation.total)
  const columnCount = Math.max(topDigits.length, bottomDigits.length, resultDigits.length)
  const gridStyle: CSSProperties = {
    gridTemplateColumns: `30px repeat(${columnCount}, minmax(32px, 1fr))`,
    minWidth: `${30 + columnCount * 32}px`,
  }

  return (
    <div className="number-board" aria-label={`${copy[language].firstNumber}: ${calculation.a} + ${copy[language].secondNumber}: ${calculation.b}`}>
      <div className="number-row" style={gridStyle}>
        <span className="operator-space" />
        {Array.from({ length: columnCount }, (_, index) => <span className="digit-cell" key={index}>{topDigits[index] ?? ''}</span>).reverse()}
      </div>
      <div className="number-row" style={gridStyle}>
        <span className="operator">+</span>
        {Array.from({ length: columnCount }, (_, index) => <span className="digit-cell" key={index}>{bottomDigits[index] ?? ''}</span>).reverse()}
      </div>
      <div className="answer-line" />
      <div className="number-row result-row" style={gridStyle}>
        <span className="operator-space" />
        {Array.from({ length: columnCount }, (_, index) => <span className="digit-cell" key={index}>{resultDigits[index] ?? ''}</span>).reverse()}
      </div>
    </div>
  )
}
