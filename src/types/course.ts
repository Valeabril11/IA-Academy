export type QuizQuestion = { id: string; question: string; options: string[]; correctIndex: number; explanation: string };
export type Flashcard = { front: string; back: string };
export type Lesson = { id: string; title: string; description: string; durationMinutes: number; objectives: string[]; sections: { heading: string; body: string }[]; example?: string; quiz: QuizQuestion[]; flashcards: Flashcard[] };
export type CourseModule = { id: string; number: number; title: string; subtitle: string; color: string; lessons: Lesson[]; status: 'draft' | 'ready' };
