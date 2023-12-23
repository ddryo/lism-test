export const HelpText = ({ children }) => {
	return (
		<small className='-lh:xs -d:b -mt:' style={{ '--mt': 'var(--em--3)' }}>
			{children}
		</small>
	);
};
