import React from 'react';
import { getCollection } from 'astro:content';
import { NavMenu, NavMenuItem, Box } from '@loos/lism-core';
import { getLangFromURL } from '~/util';

const blogEntries = await getCollection('docs');

const baseProps = {
	hover: { bgc: 'lightgray' },
	linkProps: {
		pX: 20,
		pY: 25,
	},
};
const activeProp = {
	bgc: 'main',
	c: 'white',
	fw: 'bold',
	hover: '',
	linkProps: {
		pX: 20,
		pY: 25,
	},
};

// この形式でドキュメントリストを作る
// ドキュメント階層を予め定義する

// comp
//  - hoge.mdx
//  - layout
//    - grid.mdx
//    - flex.mdx
//  - block
//    - card.mdx
//    - section.mdx
//    ...

const getDocListByLang = (lang) => {
	const DOCS = {
		topLevel: [],

		components: {
			title: 'Components',
			isAccordion: true,
			pages: [],
			// [slug]: { title, slug },
			// [subdir]: { title, pages: [] },
			subpages: {
				layout: {
					title: 'Layout Modules',
					pages: [],
				},
				block: {
					title: 'Block Modules',
					pages: [],
				},
				_undefinedYet: { title: '---', pages: [] },
			},
		},
		design: {
			title: 'Design',
			pages: [],
		},
		others: { title: 'その他', pages: [] },
		_undefinedYet: { title: '---', pages: [] },
	};

	// data: 例: { title: 'Box', description: 'description...', i18n: true },
	// slug: 例: 'ja/components/Box'
	blogEntries.forEach(({ data, slug }) => {
		// [lang]/dir/...path/[filename] → ['lang', 'dir', ..., 'filename'] に分割.
		const docPaths = slug.split('/');

		// 先頭 = 言語
		const docLang = docPaths.shift();

		// 現在の言語と違う言語のドキュメントは無視
		if (docLang !== lang) return;

		// 最後 = ファイル名 を取得して配列から削除
		const fileName = docPaths.pop();

		const dirs = [...docPaths];
		const nestedLevel = dirs.length;

		const pageData = { title: data.title, path: slug, nestedLevel };

		// 残った階層の数で分岐
		if (nestedLevel === 0) {
			DOCS.topLevel.push(pageData);
			return;
		}

		// 未定義の階層の場合
		const parentDir = dirs[0];
		if (DOCS[parentDir] === undefined) {
			DOCS._undefinedYet.pages.push(pageData);
			return;
		}

		// level1
		if (nestedLevel === 1) {
			// [lang]/dir/doc.mdx ... という階層の場合
			DOCS[parentDir].pages.push(pageData);
		}

		if (nestedLevel > 1) {
			// [lang]/dir/childDir/doc.mdx ... という階層の場合
			// console.log('nestedLevel > 1', pageData);

			const childDir = dirs[1];

			// DOCS[dir].pages に { childDir

			// サブディレクトリ定義されているかチェック
			const subpageList = DOCS[parentDir].subpages;
			if (subpageList[childDir]) {
				subpageList[childDir].pages.push(pageData);
			} else {
				// 未登録のディレクトリ
				subpageList._undefinedYet.pages.push(pageData);
			}
		}
	});

	return DOCS;
};

const renderPageNav = (pages, currentUrl) => {
	return pages.map(({ title, path }) => {
		const href = `/docs/${path}`;
		const isActive = currentUrl === href;
		const itemProp = isActive ? activeProp : baseProps;

		return <NavMenuItem key={path} href={href} text={title} {...itemProp} />;
	});
};

export default function SideDocMenu({ url }) {
	const currentLang = getLangFromURL(url);

	const { topLevel: topDocs, ...nestedDocs } = getDocListByLang(currentLang);

	// console.log('topDocs', topDocs);
	// console.log('nestedDocs', nestedDocs);
	// pageData :{ title, path, nestedLevel };
	return (
		<Box
			isFlow
			flowGap={30}
			p={{ X: 20, Y: 50 }}
			style={{ position: 'sticky', overflowY: 'auto' }}
			top={0}
			h='100vh'
		>
			<NavMenu variant='bdY' bdc='lightgray'>
				{renderPageNav(topDocs, url)}

				{Object.keys(nestedDocs).map((docDir) => {
					const { title, pages, isAccordion = false, subpages = {} } = nestedDocs[docDir];
					return (
						<NavMenuItem key={docDir} text={title} isAccordion={isAccordion}>
							<NavMenu nestLevel={1}>
								{renderPageNav(pages, url)}

								{Object.keys(subpages).map((subDir) => {
									const { title, pages, isAccordion = false } = subpages[subDir];
									return (
										<NavMenuItem
											key={subDir}
											text={title}
											isAccordion={isAccordion}
										>
											<NavMenu nestLevel={2}>
												{renderPageNav(pages, url)}
											</NavMenu>
										</NavMenuItem>
									);
								})}
							</NavMenu>
						</NavMenuItem>
					);
				})}
			</NavMenu>
		</Box>
	);
}
