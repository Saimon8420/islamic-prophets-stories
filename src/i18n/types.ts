export type Language = 'en' | 'bn' | 'ar';

export interface TranslationKeys {
  common: {
    appName: string;
    loading: string;
    error: string;
    tryAgain: string;
    back: string;
    next: string;
    previous: string;
    close: string;
    search: string;
    noResults: string;
    readMore: string;
    continueReading: string;
    completed: string;
    tabs: {
      stories: string;
      timeline: string;
      familyTree: string;
      bookmarks: string;
      search: string;
    };
  };

  stories: {
    title: string;
    subtitle: string;
    allProphets: string;
    readStory: string;
    continueStory: string;
    chapters: string;
    chapter: string;
    progress: string;
    era: string;
    nation: string;
    keyEvents: string;
    miracles: string;
    lessons: string;
    quranMentions: string;
    startReading: string;
    markComplete: string;
    completed: string;
    notStarted: string;
  };

  references: {
    title: string;
    quran: string;
    ibnKathir: string;
    hadith: string;
    surah: string;
    ayah: string;
    narrator: string;
    grade: string;
    collection: string;
    sahih: string;
    hasan: string;
    daif: string;
    showReferences: string;
    hideReferences: string;
    source: string;
  };

  lessons: {
    title: string;
    subtitle: string;
    keyLessons: string;
  };

  timeline: {
    title: string;
    subtitle: string;
    chronologicalOrder: string;
    viewStory: string;
  };

  familyTree: {
    title: string;
    subtitle: string;
    lineOfIsmail: string;
    lineOfIshaq: string;
    prophet: string;
    nonProphet: string;
    father: string;
    mother: string;
    spouse: string;
    sons: string;
    daughters: string;
  };

  kids: {
    title: string;
    subtitle: string;
    simplifiedStory: string;
    quiz: string;
    quizTitle: string;
    question: string;
    correct: string;
    incorrect: string;
    tryAgain: string;
    score: string;
    excellent: string;
    good: string;
    keepLearning: string;
    nextQuestion: string;
    seeResults: string;
    retakeQuiz: string;
  };

  bookmarks: {
    title: string;
    subtitle: string;
    noBookmarks: string;
    addBookmark: string;
    removeBookmark: string;
    bookmarkAdded: string;
    bookmarkRemoved: string;
    savedFrom: string;
  };

  search: {
    title: string;
    placeholder: string;
    searchInStories: string;
    filterByProphet: string;
    filterByType: string;
    allProphets: string;
    allTypes: string;
    resultsFor: string;
    noResults: string;
    tryDifferent: string;
  };

  settings: {
    title: string;
    description: string;
    theme: string;
    themeLight: string;
    themeDark: string;
    themeSystem: string;
    language: string;
    fontSize: string;
    fontSmall: string;
    fontMedium: string;
    fontLarge: string;
    fontXLarge: string;
    kidsMode: string;
    kidsModeDesc: string;
    contentSources: string;
    showQuran: string;
    showQuranDesc: string;
    showIbnKathir: string;
    showIbnKathirDesc: string;
    showHadith: string;
    showHadithDesc: string;
    resetDefaults: string;
  };

  footer: {
    about: string;
    dataSources: string;
    quranSource: string;
    ibnKathirSource: string;
    hadithSource: string;
    developer: string;
    developerDesc: string;
    portfolio: string;
    madeWith: string;
    forUmmah: string;
  };

  errors: {
    loadFailed: string;
    storyNotFound: string;
    somethingWrong: string;
  };
}
