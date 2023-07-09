import React from 'react';

export const PhPencilSimple = (props) => (
	<svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'>
		<rect width={256} height={256} fill='none' />
		<path
			d='M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z'
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={16}
		/>
		<line
			x1={136}
			y1={64}
			x2={192}
			y2={120}
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={16}
		/>
	</svg>
);

export const PhWarningCircle = (props) => (
	<svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'>
		<rect width={256} height={256} fill='none' />
		<circle
			cx={128}
			cy={128}
			r={96}
			fill='none'
			stroke='currentColor'
			strokeMiterlimit={10}
			strokeWidth={16}
		/>
		<line
			x1={128}
			y1={80}
			x2={128}
			y2={136}
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={16}
		/>
		<circle cx={128} cy={172} r={12} />
	</svg>
);

export const PhWarning = (props) => (
	<svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'>
		<rect width={256} height={256} fill='none' />
		<line
			x1={128}
			y1={104}
			x2={128}
			y2={144}
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={16}
		/>
		<path
			d='M114.2,40l-88,152A16,16,0,0,0,40,216H216a16,16,0,0,0,13.8-24l-88-152A15.9,15.9,0,0,0,114.2,40Z'
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={16}
		/>
		<circle cx={128} cy={180} r={12} />
	</svg>
);
export const PhCheck = (props) => (
	<svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'>
		<rect width={256} height={256} fill='none' />
		<polyline
			points='216 72 104 184 48 128'
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={16}
		/>
	</svg>
);
export const PhQuestion = (props) => (
	<svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'>
		<rect width={256} height={256} fill='none' />
		<circle
			cx={128}
			cy={128}
			r={96}
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={16}
		/>
		<circle cx={128} cy={180} r={12} />
		<path
			d='M128,144v-8a28,28,0,1,0-28-28'
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={16}
		/>
	</svg>
);

export const PhLightbulb = (props) => (
	<svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'>
		<rect width={256} height={256} fill='none' />
		<line
			x1={88}
			y1={232}
			x2={168}
			y2={232}
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={16}
		/>
		<path
			d='M78.7,167A79.5,79.5,0,0,1,48,104.5C47.8,61.1,82.7,25,126.1,24a80,80,0,0,1,51.3,142.9A24.2,24.2,0,0,0,168,186v6a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-6A24.4,24.4,0,0,0,78.7,167Z'
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={16}
		/>
		<path
			d='M136.1,56.8a47.9,47.9,0,0,1,39.2,39.1'
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={16}
		/>
	</svg>
);

export const PhInfo = (props) => (
	<svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'>
		<rect width={256} height={256} fill='none' />
		<circle
			cx={128}
			cy={128}
			r={96}
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={16}
		/>
		<polyline
			points='120 120 128 120 128 176 136 176'
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={16}
		/>
		<circle cx={126} cy={84} r={12} />
	</svg>
);
