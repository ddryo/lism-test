/**
 * .astro でLismコンポーネントを配布
 */

// Memo: 取り急ぎ、コアのものを全部 export しつつ、.astro で用意できたものから上書きしていく。
export * from '@loos/lism-core'; // core はReact であることに注意。

export * from './Core';
// export { default as Layouter } from './Core/Layouter.astro';
export * from './Flex';
export * from './Grid';
export * from './Box';
export * from './Icon';
export * from './Alert';
export * from './Note';
// export { default as Columns } from './Columns';
export * from './Tab';
// export * from './Banner';
// export * from './Layer';
export * from './Accordion';

export * from './Chat';

// 呼び出し元が .js か .astro かで自動で分けれる...？
// https://docs.astro.build/ja/reference/publish-to-npm/#exports
