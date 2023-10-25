// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

import { Box, Container, Columns, Spacer } from '@loos/lism-core';
import ContanerTest from './test/ContanerTest.jsx';
import DecoratorTest from './test/DecoratorTest.jsx';

function App() {
	return (
		<>
			<h1>Playground</h1>
			<Spacer h={40} />
			<DecoratorTest />
			{/* <ContanerTest /> */}
			<Spacer h={40} />
		</>
	);
}

export default App;
