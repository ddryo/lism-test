import React, { useLayoutEffect, useContext } from 'react';
import { Lism } from '../Lism';
import { TabContext } from './context';

export default function Item({ title, index, children, ...attrs }) {
	const { tabId, activeIndex, setTabs } = useContext(TabContext);

	useLayoutEffect(() => {
		// setTabsの中でtabsを参照できるので、内部で一気に処理する
		setTabs((tabs) => {
			const alreadyExists = tabs.some((item) => item.index === index);

			// すでに追加されていれば何もせずそのまま返す
			if (alreadyExists) return tabs;

			// 新要素の場合は追加して返す
			return [...tabs, { title, index }];
		});
	}, [setTabs, title, index]);

	// 表示対象になっているタブのみコンテンツ描画
	return (
		<Lism
			lismClass='l--tab__panel'
			role='tabpanel'
			id={`${tabId}-${index}`}
			aria-hidden={activeIndex === index ? 'false' : 'true'}
			{...attrs}
		>
			{children}
		</Lism>
	);
	// return index === activeIndex ? <>{children}</> : null;
}
