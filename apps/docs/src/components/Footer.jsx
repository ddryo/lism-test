import { Container } from '@lism/core';
// import Preview from '@/components/Preview';

export default function Footer() {
	return (
		<Container tag='footer' className='a--footer' isConstrained pY={40} w='100%'>
			{/* <Preview> */}
			<div className='a--footer__inner'>
				<p>footer...</p>
			</div>
			{/* // </Preview> */}
		</Container>
	);
}
