import { PhrasebookMap, Phrasebook } from './Phrasebook';
import { LanguageCode } from './LanguageCode';

export const blaze = <
	Phrasebooks extends PhrasebookMap,
	Lang extends Extract<keyof Phrasebooks, LanguageCode>,
	D extends Lang,
>(
	phrasebooks: Phrasebooks,
	d: D,
) => {
	type ProvidedPhrasebook = Phrasebooks[Lang];
	const defaultBook = phrasebooks[d];
	if (!defaultBook) throw new Error('No default book selected');
	type DefaultBook = typeof defaultBook;
	type CompactedPhrasebook = ProvidedPhrasebook & DefaultBook;
	const defaultPhrases = Object.entries(defaultBook) as [
		keyof DefaultBook,
		DefaultBook[keyof DefaultBook],
	][];
	const compactPhrasebook = (
		lang: Lang,
		book: Phrasebook,
	): [Lang, CompactedPhrasebook] => {
		if (lang === 'en-US') return [lang, defaultBook];
		defaultPhrases.forEach(([name, phrase]) => {
			if (!(name in book)) Object.assign(book, { [name]: phrase });
		});
		return [lang, book as CompactedPhrasebook];
	};
	const langList = Object.entries(phrasebooks).map(([l, b]) =>
		compactPhrasebook(l as Lang, b as Phrasebook),
	);
	const compactedPhrasebooks = Object.fromEntries(langList) as Record<
		Lang,
		CompactedPhrasebook
	>;

	const genericPhrasebooks: Record<string, CompactedPhrasebook> = {};

	for (const [lang, phrasebook] of langList) {
		for (
			let prefix: string | undefined = lang;
			prefix;
			prefix = prefix.match(/^(.+)-/)?.[1]
		) {
			if (!genericPhrasebooks[prefix]) genericPhrasebooks[prefix] = phrasebook;
		}
	}
	const getPhrasebook = (lang: string): CompactedPhrasebook =>
		lang in phrasebooks
			? compactedPhrasebooks[lang as Lang]
			: genericPhrasebooks[lang.substring(0, 2)] ?? defaultBook;
	return { compactedPhrasebooks, genericPhrasebooks, getPhrasebook };
};
