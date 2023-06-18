// カラー用のプリセット値と一致していればvar()にして返す
export const PRESETS = ["solid", "sm", "md", "lg"];

export const isShadowPresetValue = (shadow) => {
	return PRESETS.includes(shadow);
};

export default function maybeGetShadowVar(shadow) {
	if (isShadowPresetValue(shadow)) {
		return "var(--ls--bxsh--" + shadow + ")";
	}

	// それ以外はそのまま
	return shadow;
}
