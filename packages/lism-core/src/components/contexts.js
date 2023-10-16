import { createContext } from 'react';
export const LayoutContext = createContext(null);

// import {createContext} from "react"; で 使うと、関係ないコンポーネントも use client が必要になってしまう。
