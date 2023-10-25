// import { Link } from 'react-router-dom';
import { Container, Box } from '@loos/lism-core';
export default function OneColumn({ title = '', children }) {
	return (
		<Box py={50}>
			<Container isConstrained hasGutter>
				<h1>{title || 'page title...'} </h1>
			</Container>

			{/* start content */}
			<Container isConstrained hasGutter isFlow className='entry-content' mbs={50}>
				{children}
			</Container>
		</Box>
	);
}
