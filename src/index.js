import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Theme><App /></Theme>)