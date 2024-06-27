export type MarkdownPhrase = { md: string };
export type SinglePhrasebook = Record<string, string | MarkdownPhrase>;
export type PhrasebookMap = Record<string, SinglePhrasebook>;
