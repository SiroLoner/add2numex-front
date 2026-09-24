import { useState } from 'react'
import { AdditionForm } from './components/AdditionForm'
import { ErrorBanner } from './components/ErrorBanner'
import { ExampleSelector } from './components/ExampleSelector'
import { ResultPanel } from './components/ResultPanel'
import { requestAddition } from './services/api'
import { buildCalculation } from './services/addition'
import type { Calculation } from './types'
import { copy, type Language } from './i18n'
import './styles.css'

const initialCalculation = buildCalculation(24, 17, 41)

function App() {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [calculation, setCalculation] = useState<Calculation | null>(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [language, setLanguage] = useState<Language>('en')
  const text = copy[language]

  const selectExample = (exampleA: number, exampleB: number) => {
    setA(String(exampleA)); setB(String(exampleB)); setError(''); setCalculation(null)
  }

  const calculate = async () => {
    setError('')
    if (!/^\d+$/.test(a) || !/^\d+$/.test(b)) {
      setError(text.invalidInput)
      return
    }
    const first = Number(a); const second = Number(b)
    if (!Number.isSafeInteger(first) || !Number.isSafeInteger(second)) {
      setError(text.tooLarge)
      return
    }
    setIsLoading(true)
    try {
      const total = await requestAddition(first, second)
      setCalculation(buildCalculation(first, second, total))
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : text.apiUnavailable)
    } finally { setIsLoading(false) }
  }

  return (
    <main className="app-shell">
      <div className="background-shape shape-one" /><div className="background-shape shape-two" />
      <header className="topbar"><a className="brand" href="/"><span className="brand-mark">+</span><span>Add<span>2</span>Num<span className="brand-x">Ex</span></span></a><div className="topbar-actions"><div className="level-pill"><span className="level-dot" />{text.additionPractice}</div><button className="language-button" type="button" onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')} aria-label={text.switchLanguage}>{text.languageName}</button></div></header>
      <section className="hero">
        <div className="hero-copy"><p className="eyebrow">{text.heroEyebrow}</p><h1>{text.heroTitleBefore}<br /><em>{text.heroTitleEmphasis}</em> {text.heroTitleAfter}</h1><p className="hero-text">{text.heroText}</p></div>
        <div className="hero-doodle" aria-hidden="true"><div className="doodle-card doodle-card-top">7 <span>+</span> 4</div><div className="doodle-card doodle-card-bottom">= 11</div><span className="doodle-spark spark-one">+</span><span className="doodle-spark spark-two">*</span></div>
      </section>
      <section className="workspace">
        <div className="input-panel"><div className="panel-intro"><span className="step-tag">{text.startHere}</span><h2>{text.pickTwoNumbers}</h2><p>{text.prompt}</p></div><AdditionForm language={language} a={a} b={b} isLoading={isLoading} onAChange={setA} onBChange={setB} onSubmit={calculate} /><ExampleSelector language={language} onSelect={selectExample} />{error && <ErrorBanner message={error} />}</div>
        {calculation ? <ResultPanel language={language} calculation={calculation} onTryAnother={() => { setCalculation(null); setError('') }} /> : <section className="empty-panel"><div className="empty-illustration"><span>2</span><span>+</span><span>3</span><strong>?</strong></div><h2>{text.answerWillAppear}</h2><p>{text.enterPrompt}</p><div className="sample-note"><span>{text.tip}</span> {text.try} <button type="button" onClick={() => selectExample(24, 17)}>24 + 17</button> {text.warmUp}</div></section>}
      </section>
      <footer><span>{text.madeFor} {text.curiousMinds}</span><span>{text.keepGoing}</span></footer>
    </main>
  )
}

export default App
