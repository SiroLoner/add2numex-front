import type { Calculation } from '../types'

type NumberColumnProps = { calculation: Calculation }

export function NumberColumn({ calculation }: NumberColumnProps) {
  const digits = (value: number) => String(value).split('').reverse()
  const topDigits = digits(calculation.a)
  const bottomDigits = digits(calculation.b)
  const resultDigits = digits(calculation.total)
  const columnCount = Math.max(topDigits.length, bottomDigits.length, resultDigits.length)

  return (
    <div className="number-board" aria-label={`Vertical addition: ${calculation.a} plus ${calculation.b}`}>
      <div className="board-labels">
        {Array.from({ length: columnCount }, (_, index) => {
          const labels = ['ones', 'tens', 'hundreds', 'thousands']
          return <span className={`column-label ${labels[index] ?? 'thousands'}`} key={index}>{labels[index] ?? `${10 ** index}s`}</span>
        }).reverse()}
      </div>
      <div className="number-row">
        <span className="operator-space" />
        {Array.from({ length: columnCount }, (_, index) => <span className="digit-cell" key={index}>{topDigits[index] ?? ''}</span>).reverse()}
      </div>
      <div className="number-row">
        <span className="operator">+</span>
        {Array.from({ length: columnCount }, (_, index) => <span className="digit-cell" key={index}>{bottomDigits[index] ?? ''}</span>).reverse()}
      </div>
      <div className="answer-line" />
      <div className="number-row result-row">
        <span className="operator-space" />
        {Array.from({ length: columnCount }, (_, index) => <span className="digit-cell" key={index}>{resultDigits[index] ?? ''}</span>).reverse()}
      </div>
    </div>
  )
}
