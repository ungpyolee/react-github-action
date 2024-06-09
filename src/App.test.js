import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { act } from 'react'; // react에서 act를 가져옵니다.

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
