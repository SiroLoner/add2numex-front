import type { Calculation } from '../types'
import { NumberColumn } from './NumberColumn'
import { StepCard } from './StepCard'

type ResultPanelProps = { calculation: Calculation }

export function ResultPanel({ calculation }: ResultPanelProps) {
  return (
    <section className="result-panel" aria-live="polite">
      <div className="section-heading">
        <div><span className="eyebrow">Your math map</span><h2>Let&apos;s add it up</h2></div>
        <div className="answer-badge"><span>Answer</span><strong>{calculation.total}</strong></div>
      </div>
      <NumberColumn calculation={calculation} />
      <div className="steps-heading"><span className="arrow-mark" aria-hidden="true">&larr;</span><div><h3>One column at a time</h3><p>Start on the right and hop left.</p></div></div>
      <div className="steps-list">{calculation.steps.map((step, index) => <StepCard key={step.index} step={step} number={index + 1} />)}</div>
      <div className="total-message"><span aria-hidden="true">*</span><p>Great work! <strong>{calculation.a} + {calculation.b} = {calculation.total}</strong></p></div>
    </section>
  )
}
