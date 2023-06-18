// カラー用のプリセット値と一致していればvar()にして返す
export const PRESETS = ["xs", "sm", "md", "lg", "xl", "circle"];

export const isRadiusPresetValue = (bdrs) => {
	return PRESETS.includes(bdrs);
};

export default function maybeGetRadiusVar(bdrs) {
	if (isRadiusPresetValue(bdrs)) {
		return "var(--ls--bdrs--" + bdrs + ")";
	}

	// それ以外はそのまま
	return bdrs;
}
