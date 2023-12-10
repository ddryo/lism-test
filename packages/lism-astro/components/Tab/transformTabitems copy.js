// <lism-placeholder-tabitem> → div.tabitem へ 変換
export default function transformHTML(htmlString, tabID, defaultIndex) {
	let index = 0;
	let itmes = '';
	let panels = '';

	const transformedString = htmlString.replace(
		/<lism-placeholder-tabitem>(.*?)<\/lism-placeholder-tabitem>/gs,
		function (match, innerContent) {
			const TAB_ID = `${tabID}-${index}`;
			const isActiveBtn = index === defaultIndex;
			index++;
			// console.log(`====== match@${tabID} ======`);
			// console.log(match);
			// console.log(`----------------------------`);
			innerContent = innerContent.replace(
				/<lism-placeholder-tabitem-label>(.*?)<\/lism-placeholder-tabitem-label>/s,
				function (match, innerContent) {
					// items.push(`${innerContent}`);
					// console.log(`====== match@${tabID} ======`);
					// console.log(innerContent);
					// console.log(`----------------------------`);
					const ariaSelected = isActiveBtn ? 'true' : 'false';
					const tabBtn =
						`<button role="tab" class="c--tab__button"` +
						` aria-selected="${ariaSelected}"` +
						` aria-controls="${TAB_ID}">${innerContent}</button>`;
					// items.push(tabBtn);
					itmes += tabBtn;
					return '';
				}
			);

			const ariaHidden = isActiveBtn ? 'false' : 'true';
			return (
				`<div class="c--tab__panel" role="tabpanel" id="${TAB_ID}" ` +
				` aria-hidden="${ariaHidden}">${innerContent}</div>`
			);

			// return `<div data-index="${tabID}-${index++}">...</div>`;
		}
	);

	return transformedString;
}
