// カラー用のプリセット値と一致していればvar()にして返す
export const PRESETS = ["main", "sub", "base", "baseSub", "accent", "link", "text", "gray", "white", "black"];

export const isColorPresetValue = (color) => {
	return PRESETS.includes(color);
};

export default function maybeGetColorVar(color) {
	if (isColorPresetValue(color)) {
		return "var(--ls--color--" + color + ")";
	}

	// それ以外はそのまま
	return color;
}
