/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * @Internal dependencies
 */
import { BREAKPOINTS } from '@/gutenberg/constants';

// Propsの値のタイプを判別し、'string', 'array', 'object' のいずれかを返す
export function getPropType(value) {
	if (typeof value !== 'string' && !Array.isArray(value)) {
		return 'string';
	}
	if (typeof value === 'string') {
		return 'string';
	}
	const isObjectValue =
		value.length > 0 &&
		value.every((v) => typeof v === 'object' && v?.key !== undefined && v?.value !== undefined);

	return isObjectValue ? 'object' : 'array';
}

// propのエラーを取得する
// エラーがない場合はfalseを返す
export function getPropErrors(prop) {
	const { key, value } = prop;
	const propType = getPropType(value);
	const error = {};

	// Keyのエラーチェック
	if (!key) {
		error.key = __('Key is required.', 'lism-blocks');
	} else if (key && !/^[a-zA-Z]+$/.test(key)) {
		// 半角英字(小文字・大文字)のみを許可
		error.key = __('Key must be lowercase alphabetic.', 'lism-blocks');
	}

	// Valueのエラーチェック (Prop TypeがStringの時)
	if (propType === 'string') {
		if (!value) {
			error.value = __('Value is required.', 'lism-blocks');
		} else if (!/^[a-z0-9]+$/.test(value)) {
			// 半角英数字のみを許可
			error.value = __('Value must be lowercase alphanumeric.', 'lism-blocks');
		}
		const hasError = error.key || error.value;
		if (!hasError) {
			return false;
		}
	}

	// Valueのエラーチェック (Prop TypeがArrayの時)
	if (propType === 'array') {
		error.values = BREAKPOINTS.map((_, index) => {
			// 数字のみを許可
			if (value?.[index] && !/^[0-9]+$/.test(value[index])) {
				return __('Value must be numeric.', 'lism-blocks');
			}
			return null;
		});
		const hasError = error.key || error.values.some((v) => v);
		if (!hasError) {
			return false;
		}
	}

	// Valueのエラーチェック (Prop TypeがObjectの時)
	if (propType === 'object') {
		error.values = value.map((v) => {
			const valueError = {
				key: null,
				value: null,
			};
			// keyは半角英字のみを許可
			if (!v.key) {
				valueError.key = __('Key is required.', 'lism-blocks');
			} else if (v.key && !/^[a-z]+$/.test(v.key)) {
				valueError.key = __('Key must be lowercase alphabetic.', 'lism-blocks');
			}

			// valueは半角英数字のみを許可
			if (!v.value) {
				valueError.value = __('Value is required.', 'lism-blocks');
			} else if (!/^[a-z0-9]+$/.test(v.value)) {
				valueError.value = __('Value must be lowercase alphanumeric.', 'lism-blocks');
			}
			return valueError;
		});
		const hasError = error.key || error.values.some((v) => v.key || v.value);
		if (!hasError) {
			return false;
		}
	}

	return error;
}

// 実際に生成されるPropsの文字列を取得する
// propにエラーがある場合はfalseを返す
export function getPropString(prop) {
	const { key, value } = prop;
	if (!key && !value) {
		return __('Not set', 'lism-blocks');
	}

	const propErrors = getPropErrors(prop);

	if (propErrors) {
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
		return value.length > 0
			? value.map((v) => ({ key: '', value: v }))
			: [{ key: '', value: '' }];
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
