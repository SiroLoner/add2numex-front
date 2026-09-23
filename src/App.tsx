import { useState } from 'react'
import { AdditionForm } from './components/AdditionForm'
import { ErrorBanner } from './components/ErrorBanner'
import { ExampleSelector } from './components/ExampleSelector'
import { ResultPanel } from './components/ResultPanel'
import { requestAddition } from './services/api'
import { buildCalculation } from './services/addition'
import type { Calculation } from './types'
import './styles.css'

const initialCalculation = buildCalculation(24, 17, 41)

function App() {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [calculation, setCalculation] = useState<Calculation | null>(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const selectExample = (exampleA: number, exampleB: number) => {
    setA(String(exampleA)); setB(String(exampleB)); setError(''); setCalculation(null)
  }

  const calculate = async () => {
    setError('')
    if (!/^\d+$/.test(a) || !/^\d+$/.test(b)) {
      setError('Please enter a whole number in both boxes so we can add them.')
      return
    }
    const first = Number(a); const second = Number(b)
    if (!Number.isSafeInteger(first) || !Number.isSafeInteger(second)) {
      setError('Those numbers are a little too big. Try numbers with fewer digits.')
      return
    }
    setIsLoading(true)
    try {
      const total = await requestAddition(first, second)
      setCalculation(buildCalculation(first, second, total))
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'We could not reach the addition helper. Check the connection and try again.')
    } finally { setIsLoading(false) }
  }

  return (
    <main className="app-shell">
      <div className="background-shape shape-one" /><div className="background-shape shape-two" />
      <header className="topbar"><a className="brand" href="/"><span className="brand-mark">+</span><span>Add<span>2</span>Num<span className="brand-x">Ex</span></span></a><div className="level-pill"><span className="level-dot" />Addition practice</div></header>
      <section className="hero">
        <div className="hero-copy"><p className="eyebrow">A tiny math adventure</p><h1>Make numbers<br /><em>click</em> together.</h1><p className="hero-text">Build your answer one column at a time. We&apos;ll show you exactly what happens to every digit.</p></div>
        <div className="hero-doodle" aria-hidden="true"><div className="doodle-card doodle-card-top">7 <span>+</span> 4</div><div className="doodle-card doodle-card-bottom">= 11</div><span className="doodle-spark spark-one">+</span><span className="doodle-spark spark-two">*</span></div>
      </section>
      <section className="workspace">
        <div className="input-panel"><div className="panel-intro"><span className="step-tag">Start here</span><h2>Pick two numbers</h2><p>What would you like to add today?</p></div><AdditionForm a={a} b={b} isLoading={isLoading} onAChange={setA} onBChange={setB} onSubmit={calculate} /><ExampleSelector onSelect={selectExample} />{error && <ErrorBanner message={error} />}</div>
        {calculation ? <ResultPanel calculation={calculation} /> : <section className="empty-panel"><div className="empty-illustration"><span>2</span><span>+</span><span>3</span><strong>?</strong></div><h2>Your answer will appear here</h2><p>Enter two whole numbers, then press calculate to see the magic happen.</p><div className="sample-note"><span>Tip</span> Try <button type="button" onClick={() => selectExample(24, 17)}>24 + 17</button> to warm up.</div></section>}
      </section>
      <footer><span>Made for curious minds</span><span>Keep going, one digit at a time.</span></footer>
    </main>
  )
}

export default App
