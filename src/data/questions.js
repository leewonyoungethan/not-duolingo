const CHOICE_SETS = [
  { id: 1, choices: ['사과', '바나나', '포도', '수박'], answer: '사과' },
  { id: 2, choices: ['고양이', '개', '토끼', '말'], answer: '개' },
  { id: 3, choices: ['불', '흙', '물', '바람'], answer: '물' },
  { id: 4, choices: ['책상', '의자', '책', '연필'], answer: '책' },
  { id: 5, choices: ['가족', '친구', '선생님', '이웃'], answer: '친구' },
  { id: 6, choices: ['학교', '병원', '공원', '집'], answer: '집' },
  { id: 7, choices: ['걷다', '뛰다', '앉다', '자다'], answer: '뛰다' },
  { id: 8, choices: ['슬픈', '화난', '행복한', '피곤한'], answer: '행복한' },
  { id: 9, choices: ['시장', '병원', '학교', '공원'], answer: '학교' },
  { id: 10, choices: ['미움', '사랑', '두려움', '놀람'], answer: '사랑' },
  { id: 11, choices: ['일', '휴식', '여행', '공부'], answer: '여행' },
  { id: 12, choices: ['그림', '노래', '춤', '운동'], answer: '노래' },
]

const UNIT_DEFS = [
  {
    id: 'chapter-1',
    title: '1장 · 첫 발걸음',
    story: '새로운 언어 여행의 첫걸음! 기본 단어부터 시작해요.',
  },
  {
    id: 'chapter-2',
    title: '2장 · 새로운 인연',
    story: '마을에서 친구를 만나고, 집과 감정에 대한 단어를 배워요.',
  },
  {
    id: 'chapter-3',
    title: '3장 · 더 넓은 세상으로',
    story: '학교, 사랑, 여행, 노래... 더 넓은 세상의 단어를 만나요.',
  },
]

const UNIT_SIZE = 4

function buildUnits(words) {
  return UNIT_DEFS.map((unitDef, unitIndex) => ({
    ...unitDef,
    questions: CHOICE_SETS.slice(unitIndex * UNIT_SIZE, (unitIndex + 1) * UNIT_SIZE).map(
      (set, i) => {
        const wordIndex = unitIndex * UNIT_SIZE + i
        return { ...set, word: words[wordIndex][0], pronunciation: words[wordIndex][1] }
      },
    ),
  }))
}

const questionSets = {
  english: {
    label: '영어',
    flag: '🇺🇸',
    units: buildUnits([
      ['apple', '애플'],
      ['dog', '도그'],
      ['water', '워터'],
      ['book', '북'],
      ['friend', '프렌드'],
      ['house', '하우스'],
      ['run', '런'],
      ['happy', '해피'],
      ['school', '스쿨'],
      ['love', '러브'],
      ['travel', '트래블'],
      ['song', '송'],
    ]),
  },
  chinese: {
    label: '중국어',
    flag: '🇨🇳',
    units: buildUnits([
      ['苹果', '핑궈'],
      ['狗', '거우'],
      ['水', '쉐이'],
      ['书', '슈'],
      ['朋友', '펑여우'],
      ['房子', '팡즈'],
      ['跑', '파오'],
      ['快乐', '콰이러'],
      ['学校', '쉬에샤오'],
      ['爱', '아이'],
      ['旅行', '뤼싱'],
      ['歌', '거'],
    ]),
  },
  german: {
    label: '독일어',
    flag: '🇩🇪',
    units: buildUnits([
      ['Apfel', '아펠'],
      ['Hund', '훈트'],
      ['Wasser', '바서'],
      ['Buch', '부흐'],
      ['Freund', '프로인트'],
      ['Haus', '하우스'],
      ['rennen', '레넨'],
      ['glücklich', '글뤽리히'],
      ['Schule', '슐레'],
      ['Liebe', '리베'],
      ['Reise', '라이제'],
      ['Lied', '리트'],
    ]),
  },
  russian: {
    label: '러시아어',
    flag: '🇷🇺',
    units: buildUnits([
      ['яблоко', '야블라코'],
      ['собака', '사바카'],
      ['вода', '바다'],
      ['книга', '크니가'],
      ['друг', '드룩'],
      ['дом', '돔'],
      ['бегать', '베가치'],
      ['счастливый', '샤슬리비'],
      ['школа', '슈꼴라'],
      ['любовь', '류보피'],
      ['путешествие', '뿌쩨스트비예'],
      ['песня', '뼤스냐'],
    ]),
  },
  japanese: {
    label: '일본어',
    flag: '🇯🇵',
    units: buildUnits([
      ['りんご', '링고'],
      ['犬', '이누'],
      ['水', '미즈'],
      ['本', '혼'],
      ['友達', '토모다치'],
      ['家', '이에'],
      ['走る', '하시루'],
      ['幸せ', '시아와세'],
      ['学校', '각코'],
      ['愛', '아이'],
      ['旅行', '료코'],
      ['歌', '우타'],
    ]),
  },
  french: {
    label: '프랑스어',
    flag: '🇫🇷',
    units: buildUnits([
      ['pomme', '폼'],
      ['chien', '시앙'],
      ['eau', '오'],
      ['livre', '리브르'],
      ['ami', '아미'],
      ['maison', '메종'],
      ['courir', '쿠리르'],
      ['heureux', '외뢰'],
      ['école', '에콜'],
      ['amour', '아무르'],
      ['voyage', '부아야주'],
      ['chanson', '샹송'],
    ]),
  },
  spanish: {
    label: '스페인어',
    flag: '🇪🇸',
    units: buildUnits([
      ['manzana', '만사나'],
      ['perro', '페로'],
      ['agua', '아구아'],
      ['libro', '리브로'],
      ['amigo', '아미고'],
      ['casa', '카사'],
      ['correr', '코레르'],
      ['feliz', '펠리스'],
      ['escuela', '에스쿠엘라'],
      ['amor', '아모르'],
      ['viaje', '비아헤'],
      ['canción', '칸시온'],
    ]),
  },
}

export default questionSets
