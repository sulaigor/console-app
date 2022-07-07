import 'assets/styles/main.scss';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root') as Element);
root.render(createElement(App));
