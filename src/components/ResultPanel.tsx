import type { Calculation } from '../types'
import { NumberColumn } from './NumberColumn'
import { StepCard } from './StepCard'
import { copy, type Language } from '../i18n'

type ResultPanelProps = { language: Language; calculation: Calculation }

export function ResultPanel({ language, calculation }: ResultPanelProps) {
  const text = copy[language]

  return (
    <section className="result-panel" aria-live="polite">
      <div className="section-heading">
        <div><h2>{text.letsAddItUp}</h2></div>
        <div className="answer-badge"><span>{text.answer}</span><strong>{calculation.total}</strong></div>
      </div>
      <NumberColumn language={language} calculation={calculation} />
      <div className="steps-heading"><span className="arrow-mark" aria-hidden="true">&larr;</span><div><h3>{text.oneColumnAtATime}</h3><p>{text.startOnRight}</p></div></div>
      <div className="steps-list">{calculation.steps.map((step, index) => <StepCard key={step.index} language={language} step={step} number={index + 1} />)}</div>
      <div className="total-message"><span aria-hidden="true">*</span><p>{text.greatWork} <strong>{calculation.a} + {calculation.b} = {calculation.total}</strong></p></div>
    </section>
  )
}
