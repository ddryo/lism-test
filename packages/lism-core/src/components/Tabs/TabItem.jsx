// import {useContext} from 'react';
import { Layouter } from '../Layouter';

// Note: <Tabs>側でループして色々処理される。
export default function TabItem({ panelId, isActive, label, children, ...attrs }) {
	// const { tabId, activeIndex } = useContext(TabContext);

	// label: ボタンのテキスト
	// children: パネルの中身
	return (
		<Layouter
			lismClass='c--tab__panel'
			id={panelId}
			role='tabpanel'
			label={label}
			aria-hidden={isActive ? 'false' : 'true'}
			{...attrs}
		>
			{children}
		</Layouter>
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
