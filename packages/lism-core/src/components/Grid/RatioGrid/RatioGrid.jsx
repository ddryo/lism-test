import React from 'react';
import Grid from '../Grid';
import { isEmptyObj, getLismMainProp } from '@/lib';

// 1:2:3 → 1fr 2fr 3fr に変換
function getFrs(ratio) {
	if (!ratio) return null;

	// ":" で分解し、配列化し、その配列要素に "fr" を付けて連結

	const splitArray = ratio.split(':');
	const result = splitArray.map((s) => `${s}fr`).join(' ');

	return result.trim();
}

export default function RatioGrid({ ratio, ...props }) {
	// let frs = getLismMainProp(ratio);
	let { baseValue, bpValues } = getLismMainProp(ratio);

	baseValue = getFrs(baseValue);

	// objの 中身に getFrs() を適用する
	bpValues = Object.entries(bpValues).reduce((newObj, [key, r]) => {
		newObj[key] = getFrs(r);
		return newObj;
	}, {});

	// デフォルト値の削除
	// if ('1fr 1fr' === gtcs._) delete gtcs._;

	const theProps = {
		lismStyle: {},
	};

	if (null != baseValue) {
		theProps.lismStyle['--gtc'] = baseValue;
	}

	if (!isEmptyObj(bpValues)) {
		theProps.columns = bpValues;
	}

	return <Grid lismClass='l--ratioGrid' {...theProps} {...props} />;
}
