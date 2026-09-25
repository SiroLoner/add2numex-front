const API_URL = import.meta.env.VITE_API_URL || 'http://192.168.1.60:8080/api/v1/additions'
const API_TOKEN = import.meta.env.VITE_API_TOKEN

type AdditionResponse = {
  sum?: unknown
  result?: unknown
  data?: { sum?: unknown }
}

export async function requestAddition(a: number, b: number): Promise<number> {
  const headers: HeadersInit = { 'Content-Type': 'application/json' }
  if (API_TOKEN) headers.Authorization = `Bearer ${API_TOKEN}`

  const response = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ firstNumber: String(a), secondNumber: String(b) }),
  })

  if (!response.ok) {
    throw new Error('The addition helper is taking a little break.')
  }

  const payload = (await response.json()) as AdditionResponse
  const value = payload.sum ?? payload.result ?? payload.data?.sum
  const total = typeof value === 'number'
    ? value
    : typeof value === 'string' && value.trim() !== ''
      ? Number(value)
      : Number.NaN

  if (!Number.isFinite(total)) {
    throw new Error('We received an answer we could not read. Please try again.')
  }

  return total
}
