// <lism-placeholder-tabitem> → div.tabitem へ 変換
export default function transformHTML(htmlString, tabID, defaultIndex) {
	let index = 0;
	let itmes = '';
	let panels = '';

	const regex = /<lism-placeholder-tabitem>(.*?)<\/lism-placeholder-tabitem>/gs;
	const matches = [...htmlString.matchAll(regex)];

	matches.forEach((match) => {
		const tabContent = match[1];
		const TABID = `${tabID}-${index}`;
		const isActive = index === defaultIndex;
		index++;

		// 各aria属性
		const ariaSelected = isActive ? 'true' : 'false';
		const ariaHidden = isActive ? 'false' : 'true';

		// <lism-placeholder-tablabel>からタブボタンを生成
		const labelMatch = tabContent.match(
			/<lism-placeholder-tablabel>(.*?)<\/lism-placeholder-tablabel>/s
		);
		const labelContent = labelMatch ? labelMatch[1] : '';

		itmes +=
			`<button role="tab" class="c--tab__button"` +
			` aria-selected="${ariaSelected}"` +
			` aria-controls="${TABID}">${labelContent}</button>`;

		// <lism-placeholder-tabpanel>からタブボタンを生成
		const panelMatch = tabContent.match(
			/<lism-placeholder-tabpanel>(.*?)<\/lism-placeholder-tabpanel>/s
		);
		const panelContent = panelMatch ? panelMatch[1] : '';

		panels +=
			`<div class="c--tab__panel" role="tabpanel" id="${TABID}" ` +
			` aria-hidden="${ariaHidden}">${panelContent}</div>`;
	});

	return `<div class='c--tab__list' role='tablist'>${itmes}</div><div class='c--tab__panels'>${panels}</div>`;
}
