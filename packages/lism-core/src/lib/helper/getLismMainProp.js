import { BREAK_POINTS } from '../config';
const BREAK_POINTS_ALL = ['_', ...BREAK_POINTS];

export default function getLismMainProp(propVal, bpData = {}) {
	let returnObj = bpData; // {sm,md,...}

	if (typeof propVal === 'string' || typeof propVal === 'number') {
		returnObj._ = propVal;
	} else if (Array.isArray(propVal)) {
		propVal.forEach((r, i) => {
			returnObj[`${BREAK_POINTS_ALL[i]}`] = r;
		});
	} else if (typeof propVal === 'object') {
		returnObj = propVal;
	}

	return returnObj;
}
