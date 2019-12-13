import React from 'react';
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from './App';

test('Renders OK', async () => {
  const { findByText } = rtl.render(<App />);
  // const linkElement = findByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
