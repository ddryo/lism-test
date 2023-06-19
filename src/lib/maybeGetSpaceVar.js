export default function maybeGetSpaceVar(size) {
	// sizeが数値の場合
	if (typeof size === 'number') return 'var(--ls--space--' + size + ')';

	// オブジェクトで渡ってきてしまっていれば、それを知らせる変数名で返す
	if (typeof size === 'object') return 'var(--error--objectPassed)';
	/* eslint-disable-next-line  eqeqeq */
	// if (null == size) return false;

	// それ以外はそのまま
	return size;
}
