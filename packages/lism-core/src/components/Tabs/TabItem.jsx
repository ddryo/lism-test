// import { Core } from '../Core';

// Note: <Tabs>側でループして色々処理される。
export default function TabItem(props) {
	// const { tabId, activeIndex } = useContext(TabContext);

	// label: ボタンのテキスト
	// children: パネルの中身
	return <div {...props} />;
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
