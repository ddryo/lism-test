// カラー用のプリセット値と一致していればvar()にして返す
export const PRESETS = ["6L", "5L", "4L", "3L", "2L", "L", "S", "2S", "R"]; // "M"

export const isFzPresetValue = (fz) => {
	return PRESETS.includes(fz);
};

export default function maybeGetFzVar(fz) {
	if (isFzPresetValue(fz)) {
		return "var(--ls--fz--" + fz + ")";
	}

	// それ以外はそのまま
	return fz;
}
