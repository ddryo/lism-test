import { Box } from '@lism/core';

export default function Footer() {
	return (
		<Box tag='footer' className='a--footer is--constrained has--gutter' pY={40} mt='auto' bgc='whitesmoke'>
			<div className='a--footer__inner'>
				<p>footer!</p>
			</div>
		</Box>
	);
}
