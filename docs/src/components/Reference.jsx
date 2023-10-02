import { Alert } from '@lism/core';

import {
	// Book,
	// Books,
	// Notebook,
	BookOpenText,
	//BookBookmark
} from '@phosphor-icons/react';

export default function Reference({ children }) {
	return (
		<Alert icon={BookOpenText} color='purple'>
			{children}
		</Alert>
	);
}
