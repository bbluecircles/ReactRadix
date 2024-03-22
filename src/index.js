import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { Theme, ThemePanel } from '@radix-ui/themes';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Theme appearance="light" accentColor="teal" grayColor="sand" radius="small" scaling="95%">
        <App />
        <ThemePanel />
    </Theme>
)