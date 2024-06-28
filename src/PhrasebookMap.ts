import { LanguageCode } from './LanguageCode';

export type MarkdownPhrase = { md: string };
export type SinglePhrasebook = Record<string, string | MarkdownPhrase>;
export type PhrasebookMap = Partial<Record<LanguageCode, SinglePhrasebook>>;
