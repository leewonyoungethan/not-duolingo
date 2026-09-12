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
  return CHOICE_SETS.map((set, index) => ({
    ...set,
    word: words[index][0],
    pronunciation: words[index][1],
  }))
}

const questionSets = {
  english: {
    label: '영어',
    flag: '🇺🇸',
    questions: buildQuestions([
      ['apple', '애플'],
      ['dog', '도그'],
      ['water', '워터'],
      ['book', '북'],
      ['friend', '프렌드'],
      ['house', '하우스'],
      ['run', '런'],
      ['happy', '해피'],
    ]),
  },
  chinese: {
    label: '중국어',
    flag: '🇨🇳',
    questions: buildQuestions([
      ['苹果', '핑궈'],
      ['狗', '거우'],
      ['水', '쉐이'],
      ['书', '슈'],
      ['朋友', '펑여우'],
      ['房子', '팡즈'],
      ['跑', '파오'],
      ['快乐', '콰이러'],
    ]),
  },
  german: {
    label: '독일어',
    flag: '🇩🇪',
    questions: buildQuestions([
      ['Apfel', '아펠'],
      ['Hund', '훈트'],
      ['Wasser', '바서'],
      ['Buch', '부흐'],
      ['Freund', '프로인트'],
      ['Haus', '하우스'],
      ['rennen', '레넨'],
      ['glücklich', '글뤽리히'],
    ]),
  },
  russian: {
    label: '러시아어',
    flag: '🇷🇺',
    questions: buildQuestions([
      ['яблоко', '야블라코'],
      ['собака', '사바카'],
      ['вода', '바다'],
      ['книга', '크니가'],
      ['друг', '드룩'],
      ['дом', '돔'],
      ['бегать', '베가치'],
      ['счастливый', '샤슬리비'],
    ]),
  },
  japanese: {
    label: '일본어',
    flag: '🇯🇵',
    questions: buildQuestions([
      ['りんご', '링고'],
      ['犬', '이누'],
      ['水', '미즈'],
      ['本', '혼'],
      ['友達', '토모다치'],
      ['家', '이에'],
      ['走る', '하시루'],
      ['幸せ', '시아와세'],
    ]),
  },
  french: {
    label: '프랑스어',
    flag: '🇫🇷',
    questions: buildQuestions([
      ['pomme', '폼'],
      ['chien', '시앙'],
      ['eau', '오'],
      ['livre', '리브르'],
      ['ami', '아미'],
      ['maison', '메종'],
      ['courir', '쿠리르'],
      ['heureux', '외뢰'],
    ]),
  },
  spanish: {
    label: '스페인어',
    flag: '🇪🇸',
    questions: buildQuestions([
      ['manzana', '만사나'],
      ['perro', '페로'],
      ['agua', '아구아'],
      ['libro', '리브로'],
      ['amigo', '아미고'],
      ['casa', '카사'],
      ['correr', '코레르'],
      ['feliz', '펠리스'],
    ]),
  },
}

export default questionSets
