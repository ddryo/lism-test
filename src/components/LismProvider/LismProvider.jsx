import React from 'react';
import { LayoutContext } from '../contexts';

const LismProvider = ({ component, itemProps, children, ...props }) => {
	const Component = component || 'div';
	return (
		<Component {...props}>
			<LayoutContext.Provider value={itemProps}>{children}</LayoutContext.Provider>
		</Component>
	);
};
export default LismProvider;
