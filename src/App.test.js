import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils'; // 변경 전

test('renders learn react link', () => {
    act(() => {
        render(<App />);
    });
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
