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
  guidedTitle: string
  guidedIntro: string
  stepQuestion: (a: number, b: number, carry: number) => string
  writeQuestion: string
  carryQuestion: string
  resultPlaceholder: string
  carryPlaceholder: string
  checkStep: string
  nextStep: string
  previousStep: string
  showHint: string
  showAnswer: string
  showAllSteps: string
  tryAnother: string
  learningMode: string
  practiceMode: string
  practiceModeDescription: string
  teacherMode: string
  teacherModeDescription: string
  teacherInstruction: (place: string) => string
  teacherExplanation: (top: number, bottom: number, carry: number, subtotal: number, result: number, carryOut: number) => string
  teacherComplete: string
  correctFeedback: string
  incorrectFeedback: string
  hintText: (subtotal: number) => string
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
    guidedTitle: 'Your turn',
    guidedIntro: 'Solve one column, then move to the next one.',
    stepQuestion: (a, b, carry) => `${a} + ${b}${carry > 0 ? ` + ${carry}` : ''} = ?`,
    writeQuestion: 'Which digit should we write?',
    carryQuestion: 'What should we carry?',
    resultPlaceholder: 'Digit',
    carryPlaceholder: 'Carry',
    checkStep: 'Check step',
    nextStep: 'Next step',
    previousStep: 'Previous step',
    showHint: 'Show hint',
    showAnswer: 'Show answer',
    showAllSteps: 'Show all steps',
    tryAnother: 'Try another problem',
    learningMode: 'Learning mode',
    practiceMode: 'Practice',
    practiceModeDescription: 'You solve each column.',
    teacherMode: 'Teacher guide',
    teacherModeDescription: 'Watch one column at a time.',
    teacherInstruction: (place) => `Watch the ${place.toLowerCase()} column, then press next when you are ready.`,
    teacherExplanation: (top, bottom, carry, subtotal, result, carryOut) => `${top} + ${bottom}${carry > 0 ? ` + ${carry}` : ''} = ${subtotal}. Write ${result}${carryOut > 0 ? ` and carry ${carryOut}` : ''}.`,
    teacherComplete: 'Wonderful! We have built the whole answer together.',
    correctFeedback: 'That is right! You are ready for the next column.',
    incorrectFeedback: 'Almost there. Take another look at the digits.',
    hintText: (subtotal) => `Try adding the digits carefully. The total is between 0 and ${subtotal}.`,
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
    guidedTitle: 'Đến lượt bạn',
    guidedIntro: 'Giải một cột rồi chuyển sang cột tiếp theo.',
    stepQuestion: (a, b, carry) => `${a} + ${b}${carry > 0 ? ` + ${carry}` : ''} = ?`,
    writeQuestion: 'Bạn sẽ viết chữ số nào?',
    carryQuestion: 'Bạn sẽ nhớ bao nhiêu?',
    resultPlaceholder: 'Số',
    carryPlaceholder: 'Nhớ',
    checkStep: 'Kiểm tra bước',
    nextStep: 'Bước tiếp theo',
    previousStep: 'Bước trước',
    showHint: 'Xem gợi ý',
    showAnswer: 'Xem đáp án',
    showAllSteps: 'Xem tất cả các bước',
    tryAnother: 'Thử bài khác',
    learningMode: 'Chế độ học',
    practiceMode: 'Tự luyện tập',
    practiceModeDescription: 'Bạn tự giải từng cột.',
    teacherMode: 'Giáo viên hướng dẫn',
    teacherModeDescription: 'Xem từng cột một.',
    teacherInstruction: (place) => `Hãy nhìn cột ${place.toLowerCase()}, rồi nhấn bước tiếp theo khi bạn sẵn sàng.`,
    teacherExplanation: (top, bottom, carry, subtotal, result, carryOut) => `${top} + ${bottom}${carry > 0 ? ` + ${carry}` : ''} = ${subtotal}. Viết ${result}${carryOut > 0 ? ` và nhớ ${carryOut}` : ''}.`,
    teacherComplete: 'Tuyệt vời! Chúng ta đã cùng hoàn thành đáp án.',
    correctFeedback: 'Chính xác! Bạn đã sẵn sàng sang cột tiếp theo.',
    incorrectFeedback: 'Gần đúng rồi. Hãy nhìn lại các chữ số nhé.',
    hintText: (subtotal) => `Hãy cộng thật cẩn thận. Tổng sẽ nằm từ 0 đến ${subtotal}.`,
    placeNames: { ones: 'Đơn vị', tens: 'Chục', hundreds: 'Trăm', thousands: 'Nghìn' },
  },
}

export function getPlaceLabel(language: Language, kind: ColumnKind, index: number) {
  return index < 4 ? copy[language].placeNames[kind] : `${10 ** index}s`
}
