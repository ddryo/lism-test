/**
 * "use client" の記述を加えて返す。
 */

// 全読み込みしちゃうと use client 必要なもので怒られる?
// export * from '@loos/lism-core';
// export * from '@loos/lism-core/components';

// components を src から読み込むなら↓
// export { Box } from '@loos/lism-core/src/components/Box';
// export { Container } from '@loos/lism-core/src/components/Container';
// export { Flow } from '@loos/lism-core/src/components/Flow';
// export { Flex } from '@loos/lism-core/src/components/Flex';
// export { Stack } from '@loos/lism-core/src/components/Flex/Stack';
// ...

// components/* が dist なら↓
export { default as Box } from '@loos/lism-core/components/Box';
export { default as Container } from '@loos/lism-core/components/Container';
export { default as Flow } from '@loos/lism-core/components/Flow';
export { default as Flex } from '@loos/lism-core/components/Flex';
export { default as Stack } from '@loos/lism-core/components/Flex/Stack';
export { default as Cluster } from '@loos/lism-core/components/Flex/Cluster';
export { default as Center } from '@loos/lism-core/components/Flex/Center';
export { default as FluidFix } from '@loos/lism-core/components/Flex/FluidFix';
export { default as Grid } from '@loos/lism-core/components/Grid';
export { default as Columns } from '@loos/lism-core/components/Grid/Columns';
export { default as TileGrid } from '@loos/lism-core/components/Grid/TileGrid';
export { default as RatioGrid } from '@loos/lism-core/components/Grid/RatioGrid';
export { default as AreaGrid } from '@loos/lism-core/components/Grid/AreaGrid';
export { default as SwitchFix } from '@loos/lism-core/components/Grid/SwitchFix';
export { default as Reel } from '@loos/lism-core/components/Reel';
export { default as Frame } from '@loos/lism-core/components/Frame';
export { default as Layer } from '@loos/lism-core/components/Layer';
export { default as MediaLayer } from '@loos/lism-core/components/Layer/MediaLayer';
export { default as FilterLayer } from '@loos/lism-core/components/Layer/FilterLayer';
export { default as Divider } from '@loos/lism-core/components/Divider';
export { default as Spacer } from '@loos/lism-core/components/Spacer';
export { default as LinkBox } from '@loos/lism-core/components/LinkBox';
export { default as Item } from '@loos/lism-core/components/Item';
// ...

/*
	use client をつけて返すもの
*/
export { default as Accordion } from './Accordion';
export { default as AccordionHeader } from './AccordionHeader';
export { default as AccordionBody } from './AccordionBody';

// export { Accordion, AccordionBody, AccordionHeader } from './AccordionHeader';

// export { Tab, TabItem } from './Tab';
