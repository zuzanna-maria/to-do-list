import { render, fireEvent, screen } from '@testing-library/react';
import InputBar from './input-bar.js'
import userEvent from '@testing-library/user-event'

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

});

test('Clicking the save button adds todo item to the list on the page', () => {
    const setInput = jest.fn((value) => {});
    const { queryByPlaceholderText } = render(<InputBar setInput={setInput}/>);
    const input = queryByPlaceholderText("Todo's...");
    fireEvent.change(input, { target: { value: 'Do the food shop' } });
    fireEvent.click(screen.getByText('Save'));
    const todoElement = screen.getByText('Do the food shop');
    expect(todoElement).toBeInTheDocument();
});

test('Clicking link clears list', () => {
  render(<InputBar />);
  userEvent.type(screen.getByRole("textbox"), 'Do the food shop')
  userEvent.click(screen.getByRole("button"))
  const element = screen.getByText('Do the food shop')
  userEvent.click(screen.getByRole("link"))
  expect(element).not.toBeInTheDocument()

})
