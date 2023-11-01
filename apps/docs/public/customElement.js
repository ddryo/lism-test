// return;
// rootで定義されたCSSカスタムプロパティはコンポーネント内で利用することができますので、デザイントークンなどとも相性は良いです。

// console.log('customElement.js');

// const css = new CSSStyleSheet(`@import '/css/lism.css';`);
// css.replace(`
// 	@import '/css/lism.css';
// 	*{color:red !important}
// `);
// import styles from '/css/lism.css';
// console.log('Document.styleSheets', styles);

class LismDemo extends HTMLElement {
	constructor() {
		// Always call super first in constructor
		super();

		// Shado DOM を構築
		this.attachShadow({ mode: 'open' });
		this.renderContent(this.getAttribute('src'));

		// this.shadowRoot.adoptedStyleSheets = [css];

		// shadow.innerHTML = this.createDOM(this.getAttribute('src'));

		// shadow.querySelector('.title').innerText = this.getAttribute('title');

		// // write element functionality in here
		// const shadow = this.attachShadow({ mode: 'open' });
		// // Apply external styles to the shadow DOM
		// const linkElem = document.createElement('link');
		// linkElem.setAttribute('rel', 'stylesheet');
		// linkElem.setAttribute('href', 'style.css');

		// // Attach the created element to the shadow DOM
		// shadow.appendChild(linkElem);
	}

	// src属性の変更を監視する
	static get observedAttributes() {
		return ['src'];
	}

	// connectedCallback() {
	// 	this.loadCss();
	// }

	// loadCss() {
	// 	const sheet = new CSSStyleSheet();
	// 	sheet.insertRule(`@import '/css/lism.css';`);
	// 	// const sheet = new CSSStyleSheet(`@import '/css/lism.css';`);
	// 	// sheet.replace(`@import '/css/lism.css';`).then(() => {
	// 	// 	// this.render();
	// 	// 	this.renderContent(this.getAttribute('src'));
	// 	// });
	// 	this.renderContent(this.getAttribute('src'));
	// 	this.shadowRoot.adoptedStyleSheets = [sheet];
	// }

	// 属性値が変更されたときに呼ばれる。初回も呼ばれる
	attributeChangedCallback(name, oldValue, newValue) {
		// console.log('name', name, oldValue, newValue);
		if ('src' === name) {
			this.renderContent(newValue);
		}
	}

	renderContent(src) {
		// const dataFlow = this.getAttribute('data-flow');
		// this.flowClass = dataFlow ? `is--flow:${dataFlow}` : '';

		// <template>要素を作成して、src属性からDOM作成し、コピーしたものをshadow DOMに追加する
		// const TEMPLATE = document.createElement('template');
		// TEMPLATE.innerHTML = this.createDOM(src);
		// this.shadowRoot.appendChild(TEMPLATE.content.cloneNode(true));

		// ↓
		// 単純にinnerHTMLにセットで良さそう。
		this.shadowRoot.innerHTML = this.createDOM(src);
	}

	// <style>:root{font-size: clamp(14px, 0.625rem + 1cqw, 16px);}</style>
	createDOM = (src) => {
		// let assets = '';
		let assets = '<link href="/css/lism.css" type="text/css" rel="stylesheet" />';
		return `
		${assets}
		<div class='preview'>${src}</div>
	`;
	};
}

customElements.define('lism-demo', LismDemo);

// <lism-demo title='hoge'>
//   <p slot="text">定価の30倍も 中古おもちゃ高騰</p>
// </lism-demo>
