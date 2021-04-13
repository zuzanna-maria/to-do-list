import { render, fireEvent, screen } from '@testing-library/react';
import InputBar from './input-bar.js'

test('Renders input bar on the page', () => {
    render(<InputBar />);
    const inputElement = screen.getByPlaceholderText("Todo's...");
    expect(inputElement).toBeInTheDocument();
  });

test('Testing that the input bar renders on page and we can add a value to it', () => {
    const setInput = jest.fn((value) => {});
    const { queryByPlaceholderText } = render(<InputBar setInput={setInput}/>);
    const input = queryByPlaceholderText("Todo's...");
    fireEvent.change(input, { target: { value: 'Do the food shop' } });
    expect(input.value).toBe('Do the food shop');
})