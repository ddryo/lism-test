import React from 'react';
import { LayoutContext } from '../contexts';
import { Base } from '../Base';

const LismProvider = ({ component, itemProps, children, ...props }) => {
	const Component = component || Base;
	return (
		<Component {...props}>
			<LayoutContext.Provider value={itemProps}>{children}</LayoutContext.Provider>
		</Component>
	);
};
export default LismProvider;
