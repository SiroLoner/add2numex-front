import type { ColumnKind } from './types'

export type Language = 'en' | 'vi'

type Copy = {
  languageName: string
  switchLanguage: string
  additionPractice: string
  heroEyebrow: string
  heroTitleBefore: string
  heroTitleEmphasis: string
  heroTitleAfter: string
  heroText: string
  startHere: string
  pickTwoNumbers: string
  prompt: string
  firstNumber: string
  secondNumber: string
  calculate: string
  checking: string
  tryExample: string
  answerWillAppear: string
  enterPrompt: string
  tip: string
  try: string
  warmUp: string
  letsAddItUp: string
  answer: string
  oneColumnAtATime: string
  startOnRight: string
  column: string
  carry: string
  greatWork: string
  madeFor: string
  curiousMinds: string
  keepGoing: string
  invalidInput: string
  tooLarge: string
  apiUnavailable: string
  placeNames: Record<ColumnKind, string>
}

export const copy: Record<Language, Copy> = {
  en: {
    languageName: 'VI',
    switchLanguage: 'Switch language',
    additionPractice: 'Addition practice',
    heroEyebrow: 'A tiny math adventure',
    heroTitleBefore: 'Make numbers',
    heroTitleEmphasis: 'click',
    heroTitleAfter: 'together.',
    heroText: "Build your answer one column at a time. We'll show you exactly what happens to every digit.",
    startHere: 'Start here',
    pickTwoNumbers: 'Pick two numbers',
    prompt: 'What would you like to add today?',
    firstNumber: 'First number',
    secondNumber: 'Second number',
    calculate: 'Calculate',
    checking: 'Checking...',
    tryExample: 'Try an example',
    answerWillAppear: 'Your answer will appear here',
    enterPrompt: 'Enter two whole numbers, then press calculate to see the magic happen.',
    tip: 'Tip',
    try: 'Try',
    warmUp: 'to warm up.',
    letsAddItUp: "Let's add it up",
    answer: 'Answer',
    oneColumnAtATime: 'One column at a time',
    startOnRight: 'Start on the right and hop left.',
    column: 'column',
    carry: 'Carry',
    greatWork: 'Great work!',
    madeFor: 'Made for',
    curiousMinds: 'curious minds',
    keepGoing: 'Keep going, one digit at a time.',
    invalidInput: 'Please enter a whole number in both boxes so we can add them.',
    tooLarge: 'Those numbers are a little too big. Try numbers with fewer digits.',
    apiUnavailable: 'We could not reach the addition helper. Check the connection and try again.',
    placeNames: { ones: 'Ones', tens: 'Tens', hundreds: 'Hundreds', thousands: 'Thousands' },
  },
  vi: {
    languageName: 'EN',
    switchLanguage: 'Đổi ngôn ngữ',
    additionPractice: 'Luyện phép cộng',
    heroEyebrow: 'Một chuyến phiêu lưu toán học nhỏ',
    heroTitleBefore: 'Cùng làm',
    heroTitleEmphasis: 'số',
    heroTitleAfter: 'thật dễ hiểu.',
    heroText: 'Xây dựng đáp án theo từng cột. Chúng tôi sẽ cho bạn thấy chính xác điều gì xảy ra với mỗi chữ số.',
    startHere: 'Bắt đầu tại đây',
    pickTwoNumbers: 'Chọn hai số',
    prompt: 'Hôm nay bạn muốn cộng hai số nào?',
    firstNumber: 'Số thứ nhất',
    secondNumber: 'Số thứ hai',
    calculate: 'Tính',
    checking: 'Đang kiểm tra...',
    tryExample: 'Thử một ví dụ',
    answerWillAppear: 'Đáp án sẽ xuất hiện ở đây',
    enterPrompt: 'Nhập hai số nguyên rồi nhấn tính để xem điều kỳ diệu.',
    tip: 'Mẹo',
    try: 'Thử',
    warmUp: 'để khởi động.',
    letsAddItUp: 'Cùng cộng nhé',
    answer: 'Đáp án',
    oneColumnAtATime: 'Từng cột một',
    startOnRight: 'Bắt đầu từ bên phải rồi chuyển dần sang trái.',
    column: 'hàng',
    carry: 'Nhớ',
    greatWork: 'Làm tốt lắm!',
    madeFor: 'Dành cho',
    curiousMinds: 'những tâm hồn ham học hỏi',
    keepGoing: 'Cứ tiếp tục, từng chữ số một.',
    invalidInput: 'Vui lòng nhập số nguyên vào cả hai ô để chúng ta có thể cộng.',
    tooLarge: 'Hai số hơi lớn. Hãy thử nhập ít chữ số hơn.',
    apiUnavailable: 'Không thể kết nối tới dịch vụ cộng. Hãy kiểm tra kết nối và thử lại.',
    placeNames: { ones: 'Đơn vị', tens: 'Chục', hundreds: 'Trăm', thousands: 'Nghìn' },
  },
}

export function getPlaceLabel(language: Language, kind: ColumnKind, index: number) {
  return index < 4 ? copy[language].placeNames[kind] : `${10 ** index}s`
}
