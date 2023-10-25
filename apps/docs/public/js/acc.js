// import { setEvent } from '../../node_modules/@loos/lism-core/src/components/Accordion/script.js';

console.log('acc.js !');

// open 属性付与からクラスの付与まで、ほんの少しだけ遅らせた方が動作が安定する
const DELAY = 5;

// :scope 使う？

// animationTime: [s]
const clickedEvent = (e, details, animationTime) => {
	// すぐに open 属性が切り替わらないようにする
	e.preventDefault();
	// console.log(e.target, e.currentTarget);

	if (details.dataset.animating) return;
	details.dataset.animating = '1';

	// オープン / クローズ 処理
	if (!details.open) {
		details.open = true;
		// 少しだけ遅らせた方が動作が安定する
		setTimeout(() => {
			details.classList.add('-opened'); // クラスの追加
		}, DELAY);

		// アニメーション完了後に dataset を除去。
		setTimeout(
			() => {
				delete details.dataset.animating;
			},
			animationTime * 1000 + DELAY
		);
	} else if (details.open) {
		details.classList.remove('-opened'); // クラスを削除

		// アニメーション完了後に open属性 を除去。（CSS側のアニメーション時間 + 少しだけ余裕をもたせている）
		setTimeout(
			() => {
				details.open = false;
				delete details.dataset.animating;
			},
			animationTime * 1000 + DELAY
		);
	}
};

const toggleEvent = (e, details) => {
	// e.preventDefault();
	// console.log('toggleEvent', e.target, e.currentTarget);

	const hasOpen = details.open;
	const hasOpenedClass = details.classList.contains('-opened');

	// open はセットされたのに -opened クラスがついてない時
	if (hasOpen && !hasOpenedClass) {
		details.classList.add('-opened');
	}
	// open は削除されたのに -opened クラスがまだついている時
	if (!hasOpen && hasOpenedClass) {
		details.classList.remove('-opened');
	}
};

const setEvent = (details, animationTime = 0.3) => {
	const clickable = details.dataset.clickable || 'header';
	const clickBtn = details.querySelector(`.l--accordion__${clickable}`);

	// console.log('clickBtn', clickBtn);

	if (!clickBtn) return;

	const _clickedEvent = (e) => {
		// console.log('click!');
		clickedEvent(e, details, animationTime);
	};
	const _toggleEvent = (e) => {
		toggleEvent(e, details);
	};

	// <summary> 'click' イベント
	clickBtn.addEventListener('click', _clickedEvent);

	// <details> の'toggle' イベントで、ページ内検索時にも開閉されるようにする
	details.addEventListener('toggle', _toggleEvent);

	// アンマウントされた時にremoveEventListenerしないと2重でイベントが登録してしまう。
	return () => {
		clickBtn.removeEventListener('click', _clickedEvent);
		details.removeEventListener('toggle', _toggleEvent);
	};
};

// document.addEventListener('DOMContentLoaded', function () {
// });
(function () {
	const lismDemos = document.querySelectorAll('lism-demo');
	lismDemos.forEach((lismDemo) => {
		const shadowRoot = lismDemo.shadowRoot; // shadow root 取得
		const detailsAll = shadowRoot.querySelectorAll('.l--accordion');
		detailsAll.forEach((details) => {
			setEvent(details);
		});
	});
})();
