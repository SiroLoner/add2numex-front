import { useEffect, useState } from 'react'
import type { Calculation } from '../types'
import { NumberColumn } from './NumberColumn'
import { StepCard } from './StepCard'
import { copy, type Language } from '../i18n'

type ResultPanelProps = { language: Language; calculation: Calculation; onTryAnother: () => void }
type Feedback = 'idle' | 'correct' | 'incorrect' | 'hint' | 'revealed'

export function ResultPanel({ language, calculation, onTryAnother }: ResultPanelProps) {
  const text = copy[language]
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [completedSteps, setCompletedSteps] = useState(0)
  const [resultAnswer, setResultAnswer] = useState('')
  const [carryAnswer, setCarryAnswer] = useState('')
  const [feedback, setFeedback] = useState<Feedback>('idle')
  const [attempts, setAttempts] = useState(0)
  const [answers, setAnswers] = useState<Record<number, { result: string; carry: string }>>({})

  useEffect(() => {
    setCurrentStepIndex(0)
    setCompletedSteps(0)
    setResultAnswer('')
    setCarryAnswer('')
    setFeedback('idle')
    setAttempts(0)
    setAnswers({})
  }, [calculation])

  const currentStep = calculation.steps[currentStepIndex]
  const isComplete = completedSteps >= calculation.steps.length || feedback === 'revealed'
  const loadStep = (index: number) => {
    const answer = answers[index]
    setCurrentStepIndex(index)
    setResultAnswer(answer?.result ?? '')
    setCarryAnswer(answer?.carry ?? '')
    setFeedback('idle')
    setAttempts(0)
  }

  const checkStep = () => {
    const expectedCarry = currentStep.carryOut > 0 ? String(currentStep.carryOut) : ''
    const isCorrect = resultAnswer === String(currentStep.resultDigit) && carryAnswer === expectedCarry
    if (isCorrect) {
      setAnswers((previous) => ({ ...previous, [currentStepIndex]: { result: resultAnswer, carry: carryAnswer } }))
      setCompletedSteps((previous) => Math.max(previous, currentStepIndex + 1))
      setFeedback('correct')
      return
    }
    setAttempts((previous) => previous + 1)
    setFeedback('incorrect')
  }

  const revealAnswer = () => {
    setResultAnswer(String(currentStep.resultDigit))
    setCarryAnswer(currentStep.carryOut > 0 ? String(currentStep.carryOut) : '')
    setCompletedSteps(calculation.steps.length)
    setFeedback('revealed')
  }

  const nextStep = () => {
    if (currentStepIndex >= calculation.steps.length - 1) {
      setCompletedSteps(calculation.steps.length)
      return
    }
    loadStep(currentStepIndex + 1)
  }

  const previousStep = () => {
    if (currentStepIndex > 0) loadStep(currentStepIndex - 1)
  }

  return (
    <section className="result-panel" aria-live="polite">
      <div className="section-heading">
        <div><h2>{text.letsAddItUp}</h2></div>
        <div className="answer-badge"><span>{text.answer}</span><strong>{isComplete ? calculation.total : '?'}</strong></div>
      </div>
      <NumberColumn language={language} calculation={calculation} activeStepIndex={isComplete ? -1 : currentStepIndex} revealedStepCount={completedSteps} showAnswer={isComplete} />
      <div className="steps-heading"><span className="arrow-mark" aria-hidden="true">&larr;</span><div><h3>{text.oneColumnAtATime}</h3><p>{text.startOnRight}</p></div></div>
      {!isComplete && <div className="guided-card" aria-live="polite">
        <div className="guided-kicker">{text.guidedTitle} · {currentStepIndex + 1}/{calculation.steps.length}</div>
        <h3>{text.stepQuestion(currentStep.topDigit, currentStep.bottomDigit, currentStep.carryIn)}</h3>
        <p>{text.writeQuestion}</p>
        <div className="guided-inputs">
          <label><span>{text.writeQuestion}</span><input inputMode="numeric" value={resultAnswer} onChange={(event) => setResultAnswer(event.target.value.replace(/\D/g, ''))} placeholder={text.resultPlaceholder} aria-label={text.writeQuestion} /></label>
          {currentStep.carryOut > 0 && <label><span>{text.carryQuestion}</span><input inputMode="numeric" value={carryAnswer} onChange={(event) => setCarryAnswer(event.target.value.replace(/\D/g, ''))} placeholder={text.carryPlaceholder} aria-label={text.carryQuestion} /></label>}
        </div>
        {currentStep.carryIn > 0 && <p className="carry-reminder">{text.carry}: {currentStep.carryIn}</p>}
        {(feedback === 'incorrect' || feedback === 'hint') && <p className="guided-feedback guided-feedback-warm">{feedback === 'hint' ? text.hintText(currentStep.subtotal) : text.incorrectFeedback}</p>}
        {feedback === 'correct' && <p className="guided-feedback guided-feedback-good">{text.correctFeedback}</p>}
        <div className="guided-actions">
          <button type="button" onClick={checkStep}>{text.checkStep}</button>
          <button type="button" className="secondary-action" onClick={() => setFeedback('hint')}>{text.showHint}</button>
          {(attempts > 0 || feedback === 'hint') && <button type="button" className="secondary-action" onClick={revealAnswer}>{text.showAnswer}</button>}
        </div>
        <div className="guided-navigation">
          <button type="button" className="secondary-action" onClick={previousStep} disabled={currentStepIndex === 0}>{text.previousStep}</button>
          <button type="button" onClick={nextStep} disabled={feedback !== 'correct'}>{text.nextStep}</button>
        </div>
      </div>}
      <div className="steps-list">{calculation.steps.slice(0, isComplete ? calculation.steps.length : completedSteps).map((step, index) => <StepCard key={step.index} language={language} step={step} number={index + 1} />)}</div>
      {isComplete && <div className="completion-actions"><div className="total-message"><span aria-hidden="true">*</span><p>{text.greatWork} <strong>{calculation.a} + {calculation.b} = {calculation.total}</strong></p></div><button type="button" className="try-another-button" onClick={onTryAnother}>{text.tryAnother}</button></div>}
    </section>
  )
}
