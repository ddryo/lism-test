import React from 'react';
import { Box } from '../Box';

export default function Flex(props) {
	return <Box isFlex {...props} />;
}

// Cluster: is--flexでflex-wrap: wrap;なもの
// Stack: 縦方向のCluster

// Flow: .l--Box.is--flow
// Flex: .l--Box.is--flex
// Grid: .l--Box.is--grid

// smサイズだけreelとか → reel > flex,grid に対して処理するだけで済む？
// reel > flex → fw: nowrapに
// reel→ "lgで解除" という考え方？
// reel.only-sm とかの直下にflexなどをおく。
