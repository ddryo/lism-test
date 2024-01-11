export const defaultProps = {};

// export const IconPresets = {
// 	note: phicons.NotePencil,
// 	alert: phicons.WarningCircle,
// 	ban: phicons.Prohibit,
// 	warning: phicons.Warning,
// 	check: phicons.Check,
// 	help: phicons.Question,
// 	lightbulb: phicons.Lightbulb,
// 	info: phicons.Info,
// 	good: phicons.ThumbsUp,
// 	bad: phicons.ThumbsDown,
// 	star: phicons.Star,
// 	'star-half': phicons.StarHalf,
// 	'star-fill': phicons.StarFill,
// 	bookmark: phicons.BookBookmark,
// 	'book-open': phicons.BookOpenText,
// 	'caret-down': phicons.CaretDown,
// 	// omg,
// 	// smile,

// 	// note: 'U+2712',
// 	// danger: 'U+1F6AB',
// 	// warning: 'U+26A0',
// 	// success: 'U+2705',
// 	// help: 'U+2754',
// 	// point: 'U+1F4A1',
// 	// info: 'U+2139',
// };

export const AlertPresets = {
	note: {
		icon: 'note',
		color: 'gray',
		label: 'Note:',
	},
	alert: {
		icon: 'alert',
		color: 'red',
		label: 'Alert:',
	},
	danger: {
		icon: 'ban',
		color: 'red',
		label: 'Danger:',
	},
	warning: {
		icon: 'warning',
		color: 'yellow',
		label: 'Warning:',
	},
	check: {
		icon: 'check',
		color: 'green',
		label: 'Check:',
	},
	success: {
		icon: 'check',
		color: 'green',
		label: 'Success:',
	},
	help: {
		icon: 'help',
		color: 'purple',
		label: 'Help:',
	},
	// reference
	reference: {
		icon: 'book-open',
		color: 'pink',
		label: 'Reference:',
	},
	point: {
		icon: 'lightbulb',
		color: 'orange',
		label: 'Point:',
	},
	info: {
		icon: 'info',
		color: 'blue',
		label: 'Info:',
	},
	good: {
		icon: 'good',
		color: 'green',
		label: 'Good:',
	},
	bad: {
		icon: 'bad',
		color: 'blue',
		label: 'Bad:',
	},
};
export const NotePresets = AlertPresets;
