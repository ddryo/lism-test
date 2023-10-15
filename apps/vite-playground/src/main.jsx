import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/root.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from '@/routes/index';
import PageOneColumn from '@/routes/page-one-column';
import HasSidebarPage from '@/routes/has-sidebar';
import TestPage from '@/routes/test-page';

import ErrorPage from '@/error-page';
import './index.css';
import '@lism/core/scss/all.scss';

// [React Router]: https://reactrouter.com/en/main/start/tutorial
const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Index /> },
			{ path: '/page-one-column', element: <PageOneColumn /> },
			{ path: '/has-sidebar', element: <HasSidebarPage /> },
			{ path: '/test/:slug', element: <TestPage /> },
			// { path: '/about', element: <About /> },
			// { path: '/access', element: <Access /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
