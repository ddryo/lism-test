const ANIMATION_TIME = 250;
const OFFSET_TIME = 5;

document.addEventListener("DOMContentLoaded", function () {
	const accordions = document.querySelectorAll(".l--accordion");
	accordions.forEach((accordion) => {
		const header = accordion.querySelector(".l--accordion__header");

		// <summary> 'click' イベント
		header.addEventListener("click", (e) => {
			// すぐに open 属性が切り替わらないようにする
			e.preventDefault();

			// オープン / クローズ 処理
			if (!accordion.open) {
				// open属性を最初にセット
				accordion.open = true;

				// open付与から少しだけ遅らせた方が動作が安定する
				setTimeout(() => {
					accordion.classList.add("is-opened"); // クラスの追加
				}, OFFSET_TIME);
				//
			} else if (accordion.open) {
				accordion.classList.remove("is-opened"); // クラスを削除

				// アニメーション完了後にopen属性を削除。（CSS側のアニメーション時間+少しだけ余裕をもたせている）
				setTimeout(() => {
					accordion.open = false;
				}, ANIMATION_TIME + OFFSET_TIME);
			}
		});

		// <details> 'toggle' イベント
		accordion.addEventListener("toggle", () => {
			// e.preventDefault();
			const hasOpenedClass = accordion.classList.contains("is-opened");

			if (accordion.open && !hasOpenedClass) {
				// open はセットされたのに is-opened クラスがついてない時
				accordion.classList.add("is-opened");
			} else if (!accordion.open && hasOpenedClass) {
				// open は削除されたのに is-opened クラスがまだついている時
				accordion.classList.remove("is-opened");
			}
		});
	});
});
