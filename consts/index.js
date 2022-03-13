export const NAMING_CONVENTION = {
  EUROPEAN: 'EUROPEAN',
  USA: 'USA',
  NEO_LATIN: 'NEO_LATIN',
  INDIAN: 'INDIAN',
  JAPAN: 'JAPAN',
};

export const CHROMATIC_SCALE = {
  [NAMING_CONVENTION.EUROPEAN]: ["C", "C#/D♭", "D", "D#/E♭", "E", "F", "F#/G♭", "G", "G#/A♭", "A", "A#/B", "H"],
  [NAMING_CONVENTION.USA]: ["C", "C#/D♭", "D", "D#/E♭", "E", "F", "F#/G♭", "G", "G#/A♭", "A", "A#/B♭", "B"],
  [NAMING_CONVENTION.NEO_LATIN]: ['do', 'do♯/re♭', 're', 're#/mi♭', 'mi', 'fa', 'fa#/sol♭', 'sol', 'sol#/la♭', 'la', 'la#/si♭', 'si', 'si#/do♭', 'do'],
  [NAMING_CONVENTION.INDIAN]: ['সা', 'ঋ', 'রে', 'জ্ঞ', 'গ', 'ম', 'হ্ম', 'প', 'দ', 'ধ', 'ণ', 'নি'],
  [NAMING_CONVENTION.JAPAN]: ['ハ', '嬰ハ)/変ニ', 'ニ', '嬰ニ/変ホ', 'ホ', 'ヘ', '嬰へ/変ト', 'ト', '嬰ト/変イ', 'イ', '嬰イ/変ロ', 'ロ'],
};
