import React from 'react';
// import Wave1 from "./wave1.jsx";
// import Wave from "./wave.svg";
import { ReactComponent as Wave1 } from './wave1.svg';
import { ReactComponent as Wave2 } from './wave2.svg';
import { ReactComponent as Wave3 } from './wave3.svg';

// import Wave4 from "./wave4.svg";
// import { ReactComponent as Wave } from "./wave.svg";

// console.log(Wave);
const DividerSVG = {
	// wave-curve-opacity
	Wave1: (props) => {
		return <Wave1 {...props} />;
	},
	Wave2: (props) => {
		return <Wave2 {...props} />;
	},
	Wave3: (props) => {
		return <Wave3 {...props} />;
	},
};

export default DividerSVG;
