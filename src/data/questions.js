const CHOICE_SETS = [
  { id: 1, choices: ['사과', '바나나', '포도', '수박'], answer: '사과' },
  { id: 2, choices: ['고양이', '개', '토끼', '말'], answer: '개' },
  { id: 3, choices: ['불', '흙', '물', '바람'], answer: '물' },
  { id: 4, choices: ['책상', '의자', '책', '연필'], answer: '책' },
  { id: 5, choices: ['가족', '친구', '선생님', '이웃'], answer: '친구' },
  { id: 6, choices: ['학교', '병원', '공원', '집'], answer: '집' },
  { id: 7, choices: ['걷다', '뛰다', '앉다', '자다'], answer: '뛰다' },
  { id: 8, choices: ['슬픈', '화난', '행복한', '피곤한'], answer: '행복한' },
]

function buildQuestions(words) {
  return CHOICE_SETS.map((set, index) => ({ ...set, word: words[index] }))
}

const questionSets = {
  english: {
    label: '영어',
    flag: '🇺🇸',
    questions: buildQuestions(['apple', 'dog', 'water', 'book', 'friend', 'house', 'run', 'happy']),
  },
  chinese: {
    label: '중국어',
    flag: '🇨🇳',
    questions: buildQuestions(['苹果', '狗', '水', '书', '朋友', '房子', '跑', '快乐']),
  },
  german: {
    label: '독일어',
    flag: '🇩🇪',
    questions: buildQuestions(['Apfel', 'Hund', 'Wasser', 'Buch', 'Freund', 'Haus', 'rennen', 'glücklich']),
  },
  russian: {
    label: '러시아어',
    flag: '🇷🇺',
    questions: buildQuestions(['яблоко', 'собака', 'вода', 'книга', 'друг', 'дом', 'бегать', 'счастливый']),
  },
  japanese: {
    label: '일본어',
    flag: '🇯🇵',
    questions: buildQuestions(['りんご', '犬', '水', '本', '友達', '家', '走る', '幸せ']),
  },
  french: {
    label: '프랑스어',
    flag: '🇫🇷',
    questions: buildQuestions(['pomme', 'chien', 'eau', 'livre', 'ami', 'maison', 'courir', 'heureux']),
  },
  spanish: {
    label: '스페인어',
    flag: '🇪🇸',
    questions: buildQuestions(['manzana', 'perro', 'agua', 'libro', 'amigo', 'casa', 'correr', 'feliz']),
  },
}

export default questionSets
