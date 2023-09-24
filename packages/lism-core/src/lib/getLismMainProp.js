import { BREAK_POINTS } from '@/config';
const BREAK_POINTS_ALL = ['_', ...BREAK_POINTS];

export default function getLismMainProp(propVal) {
	let values = {};

	if (typeof propVal === 'string' || typeof propVal === 'number') {
		values._ = propVal;
	} else if (Array.isArray(propVal)) {
		propVal.forEach((r, i) => {
			values[`${BREAK_POINTS_ALL[i]}`] = r;
		});
	} else if (typeof propVal === 'object') {
		values = propVal;
	}

	const { _: baseValue, ...bpValues } = values;

	return {
		baseValue,
		bpValues,
	};
}
