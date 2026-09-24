import { describeStep } from '../services/addition'
import type { AdditionStep } from '../types'
import { copy, getPlaceLabel, type Language } from '../i18n'

type StepCardProps = { language: Language; step: AdditionStep; number: number }

export function StepCard({ language, step, number }: StepCardProps) {
  const text = copy[language]

  return (
    <article className={`step-card ${step.kind}`}>
      <div className="step-number">{number}</div>
      <div className="step-copy">
        <div className="step-heading"><span className="step-dot" />{getPlaceLabel(language, step.kind, step.index)} {text.column}</div>
        <p>{describeStep(step, language)}</p>
      </div>
      {step.carryOut > 0 && <div className="carry-chip">{text.carry} {step.carryOut}</div>}
    </article>
  )
}
