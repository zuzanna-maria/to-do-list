import { render, fireEvent, screen } from '@testing-library/react';
import InputBar from '../input-bar/input-bar.js'

test('Clicking the save button adds todo item to the list on the page', () => {
    const setInput = jest.fn((value) => {});
    const { queryByPlaceholderText } = render(<InputBar setInput={setInput}/>);
    const input = queryByPlaceholderText("Todo's...");
    fireEvent.change(input, { target: { value: 'Do the food shop' } });
    fireEvent.click(screen.getByText('Save'));
    const todoElement = screen.getByText('Do the food shop');
    expect(todoElement).toBeInTheDocument();
})