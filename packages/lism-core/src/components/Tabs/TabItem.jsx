// import {useContext} from 'react';
import { Lism } from '../Lism';

export default function TabItem({ panelId, isActive, children, ...attrs }) {
	// const { tabId, activeIndex } = useContext(TabContext);

	// 表示対象になっているタブのみコンテンツ描画
	return (
		<Lism
			lismClass='l--tab__panel'
			role='tabpanel'
			id={panelId}
			aria-hidden={isActive ? 'false' : 'true'}
			{...attrs}
		>
			{children}
		</Lism>
	);
	// return index === activeIndex ? <>{children}</> : null;
}

// bkup:
// useLayoutEffect(() => {
// 	// setTabsの中でtabsを参照できるので、内部で一気に処理する
// 	setTabs((tabs) => {
// 		const alreadyExists = tabs.some((item) => item.index === index);

// 		// すでに追加されていれば何もせずそのまま返す
// 		if (alreadyExists) return tabs;

// 		// 新要素の場合は追加して返す
// 		return [...tabs, { title, index }];
// 	});
// }, [setTabs, title, index]);
