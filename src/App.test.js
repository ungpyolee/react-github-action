import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // MemoryRouter를 추가
import App from './App';
import { act } from 'react-dom/test-utils'; // 변경 전

test('renders learn react link', () => {
    act(() => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
    });
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
