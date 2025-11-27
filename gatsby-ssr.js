import React from 'react';
import { ContactProvider } from './src/components/Contact';

// Wrap the entire app with ContactProvider for SSR
export const wrapRootElement = ({ element }) => {
    return <ContactProvider>{element}</ContactProvider>;
};
