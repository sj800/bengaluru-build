import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

const isSnap = navigator.userAgent.includes('HeadlessChrome');

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <App />);
} else {
  const root = createRoot(rootElement);
  root.render(<App />);
}

// Tell react-snap when page is ready
if (isSnap) {
  window.snapSaveState = () => {
    return document.readyState === 'complete';
  };
}