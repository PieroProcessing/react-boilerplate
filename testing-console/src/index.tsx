import App from './App';
import './assets/scss/index.scss';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
container && createRoot(container).render(<App />);
