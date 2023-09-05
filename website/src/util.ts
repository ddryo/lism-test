import type { CollectionEntry } from 'astro:content';

export function getLangFromURL(pathname: string) {
	const langCodeMatch = pathname.match(/\/docs\/([a-z]{2}-?[a-z]{0,2})\//);
	return langCodeMatch ? langCodeMatch[1] : 'en';
}

/** Remove \ and / from beginning of string */
export function removeLeadingSlash(path: string) {
	return path.replace(/^[/\\]+/, '');
}

/** Remove \ and / from end of string */
export function removeTrailingSlash(path: string) {
	return path.replace(/[/\\]+$/, '');
}

/** Get a page’s slug, without the language prefix (e.g. `'en/migrate'` => `'migrate'`). */
export const stripLangFromSlug = (slug: CollectionEntry<'docs'>['slug']) =>
	slug.split('/').slice(1).join('/');

/** Get a page’s lang tag from its slug (e.g. `'en/migrate'` => `'en'`). */
export const getLangFromSlug = (slug: CollectionEntry<'docs'>['slug']) => slug.split('/')[0];


// 特定のlangページかどうかを判定する関数
// export function createIsLangEntry(lang: string) {
// 	return (entry: any): boolean => entry.slug.startsWith('/docs/' + lang + '/');
// }
// export const isEnglishEntry = createIsLangEntry('en');
