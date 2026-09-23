import { describeStep } from '../services/addition'
import type { AdditionStep } from '../types'

type StepCardProps = { step: AdditionStep; number: number }

export function StepCard({ step, number }: StepCardProps) {
  return (
    <article className={`step-card ${step.kind}`}>
      <div className="step-number">{number}</div>
      <div className="step-copy">
        <div className="step-heading"><span className="step-dot" />{step.placeLabel} column</div>
        <p>{describeStep(step)}</p>
      </div>
      {step.carryOut > 0 && <div className="carry-chip">Carry {step.carryOut}</div>}
    </article>
  )
}
