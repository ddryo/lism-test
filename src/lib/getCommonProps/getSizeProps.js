/**
 * width用のstyleオブジェクトを生成して返す
 *
 * @param {number|string} width
 * @return {Object} style
 */
export function getWidthProps(width) {
	// null or undefined なら空オブジェクトを返す
	if (null == width) return {};

	let Ws = {};
	if (typeof width === 'object') {
		Ws = width;
	} else {
		Ws._ = width;
	}

	const classNames = [];
	const styles = {};

	if (Ws._) {
		classNames.push('-w:');
		styles['--w'] = Ws._;
	}
	if (Ws.sm) {
		classNames.push('-w@sm:');
		styles['--w_Qsm'] = Ws.sm;
	}
	if (Ws.xs) {
		classNames.push('-w@xs:');
		styles['--w_Qxs'] = Ws.xs;
	}
	return {
		classNames,
		styles,
	};
}

/**
 * height用のstyleオブジェクトを生成して返す
 *
 * @param {number|string} height
 * @return {Object} style
 */
export function getHeightProps(height) {
	// null or undefined なら空オブジェクトを返す
	if (null == height) return {};

	let Hs = {};
	if (typeof height === 'object') {
		Hs = height;
	} else {
		Hs._ = height;
	}

	const classNames = [];
	const styles = {};

	if (Hs._) {
		classNames.push('-h:');
		styles['--h'] = Hs._;
	}
	if (Hs.sm) {
		classNames.push('-h@sm:');
		styles['--h_Qsm'] = Hs.sm;
	}
	if (Hs.xs) {
		classNames.push('-h@xs:');
		styles['--h_Qxs'] = Hs.xs;
	}
	return {
		classNames,
		styles,
	};
}
