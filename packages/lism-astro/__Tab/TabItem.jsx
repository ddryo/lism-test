import React, { useEffect, useContext } from 'react';
import { useStore } from "@nanostores/react";
import { Lism } from '../Lism';
import { TabContext } from './context';
import { theTabID, theActiveIndex } from "./store";

// const useIsomorphicLayoutEffect = 
//   typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// useIsomorphicLayoutEffect(() => {
//   // ...
// }, [/* dependencies */]);

export default function Item({ title, index, children, ...attrs }) {
	const { setTabs } = useContext(TabContext);

	const $theTabID = useStore(theTabID);
	const $theActiveIndex = useStore(theActiveIndex);
	
	useEffect(() => {
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
			id={`${$theTabID}-${index}`}
			aria-hidden={$theActiveIndex === index ? 'false' : 'true'}
			{...attrs}
		>
			{children}
		</Lism>
	);
	// return index === activeIndex ? <>{children}</> : null;
}
