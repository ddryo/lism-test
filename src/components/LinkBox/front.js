import setEvent from "./setEvent";

// console.log("linkbox.js");
// document.addEventListener("DOMContentLoaded", function () {
// 	console.log("DOMContentLoaded");
(function () {
	const linkBoxs = document.querySelectorAll('.is--linkBox[data-linkbox="div"]');
	linkBoxs.forEach((lb) => {
		setEvent(lb);
	});
})();
// });