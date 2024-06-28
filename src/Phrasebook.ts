import { LanguageCode } from './LanguageCode';

export type MarkdownPhrase = { md: string };
export type Phrasebook = Record<string, string | MarkdownPhrase>;
export type PhrasebookMap = Partial<Record<LanguageCode | string, Phrasebook>>;
