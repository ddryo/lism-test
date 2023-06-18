export default function maybeGetSpaceVar(size) {
	// sizeが数値の場合
	if (typeof size === "number") return "var(--ls--space--" + size + ")";

	// null or undefined は false で返す
	/* eslint-disable-next-line  eqeqeq */
	// if (null == size) return false;

	// それ以外はそのまま
	return size;
}
