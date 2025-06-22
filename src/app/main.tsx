import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './config/i18n/i18n.ts';

createRoot(document.getElementById('root')!).render(
    <App />
);
