export { default as Reference } from './Reference.jsx';
// export * from './Preview.jsx';
export * from './Badges.jsx';
export { default as DammyText } from './DammyText.jsx';

export const HelpText = ({ children }) => {
	return (
		<small className='-lh:xs -d:b -mt:' style={{ '--mt': 'var(--em--3)' }}>
			{children}
		</small>
	);
};

// export const CellHelp = ({title,children}) => (
// 	<>
// 		<br/><small className="-lh:xs -d:if">{children}</small>
// 	</>
// )
