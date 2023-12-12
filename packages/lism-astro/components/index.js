/**
 * "use client" の記述を加えて返す。
 */

// そのままでいいもの
// export { Box, ... } from "../dist";
// export * from '@loos/lism-core/components/index.js';
export * from '@loos/lism-core';

export { default as Core } from './Core.astro';
export { default as Layouter } from './Layouter.astro';
export * from './Flex';

// export { default as Columns } from './Columns';
export { Tabs, TabItem } from './Tab';
export { Banner } from './Banner';
export { MediaLayer } from './MediaLayer';

// export { Accordion } from './Accordion';
// components/index.tsx"
// export * as Accordion from './Accordion';

// console.log('next!');

export { default as Accordion } from './Accordion/Accordion.astro';
export { default as AccordionHeader } from './Accordion/AccordionHeader.astro';
export { default as AccordionBody } from './Accordion/AccordionBody.astro';
export { default as AccordionIcon } from './Accordion/AccordionIcon.astro';
export { default as AccordionLabel } from './Accordion/AccordionLabel.astro';

// export { default as AccordionHeader } from './AccordionHeader';
// export { default as AccordionBody } from './AccordionBody';

// 呼び出し元が .js か .astro かで自動で分けれる...？
// https://docs.astro.build/ja/reference/publish-to-npm/#exports
