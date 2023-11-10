/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Propsの値のタイプを判別し、'string', 'array', 'object' のいずれかを返す
export function getPropType(value) {
	if (typeof value !== 'string' && !Array.isArray(value)) {
		return 'string';
	}
	if (typeof value === 'string') {
		return 'string';
	}
	const isObject = value.every((v) => typeof v === 'object');
	return isObject ? 'object' : 'array';
}

// propのエラーを取得する
export function getPropErrors(prop) {
	const { key, value } = prop;
	const propType = getPropType(value);
	const errors = {};

	// Keyのエラーチェック
	if (!key) {
		errors.key = __('Key is required.', 'lism-blocks');
	} else if (key && !/^[a-z]+$/.test(key)) {
		errors.key = __('Key must be lowercase alphanumeric.', 'lism-blocks');
	}

	// Valueのエラーチェック (Prop TypeがStringの時)
	if (propType === 'string' && !value) {
		errors.value = __('Value is required.', 'lism-blocks');
	}

	// Valueのエラーチェック (Prop TypeがArrayの時)
	if (propType === 'array') {
	}

	// Valueのエラーチェック (Prop TypeがObjectの時)
	if (propType === 'object') {
	}

	return errors;
}

// 実際に生成されるPropsの文字列を取得する
export function getPropString(key, value) {
	if (!key && !value) {
		return __('Not set', 'lism-blocks');
	}
	if (!key || !value) {
		return false;
	}

	const propType = getPropType(value);

	if (propType === 'string') {
		return `${key}={"${value}"}`;
	}
	if (propType === 'array') {
		const valueStrings = value.map((v) => (v ? `"${v}"` : 'null'));
		return `${key}={[${valueStrings.join(', ')}]}`;
	}
	if (propType === 'object') {
		const hasInvalidValue = value.some((v) => !v.key || !v.value);
		if (hasInvalidValue) {
			return false;
		}
		const valueStrings = value.map((v) => (v ? `${v.key}:"${v.value}"` : `${v.key}:null`));
		return `${key}={{${valueStrings.join(', ')}}}`;
	}

	return __('Not set', 'lism-blocks');
}

// Propsの値のタイプが変わった時に、出来るだけ値を引き継ぐように変換する
export function transformPropValue(value, newPropType) {
	const propType = getPropType(value);
	if (propType === newPropType) {
		return value;
	}
	// String -> Array
	if (propType === 'string' && newPropType === 'array') {
		return [value];
	}
	// String -> Object
	if (propType === 'string' && newPropType === 'object') {
		return [{ key: '', value }];
	}
	// Array -> String
	if (propType === 'array' && newPropType === 'string') {
		return value[0];
	}
	// Array -> Object
	if (propType === 'array' && newPropType === 'object') {
		return value.map((v) => ({ key: '', value: v }));
	}
	// Object -> Array
	if (propType === 'object' && newPropType === 'array') {
		return value.slice(0, 4).map((v) => v.value);
	}
	// Object -> String
	if (propType === 'object' && newPropType === 'string') {
		return value[0].value;
	}

	return value;
}
