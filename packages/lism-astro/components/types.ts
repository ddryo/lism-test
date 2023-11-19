export interface LismClass {
	b?: string;
	c?: string;
	l?: string;
	e?: string;
}
export interface LismStyle {
	[key: string]: number | string; // 任意のプロパティを受け取る
}

export interface LismProps {
	lismClass?: LismClass;
	lismStyle?: LismStyle;
	[key: string]: any;
}
