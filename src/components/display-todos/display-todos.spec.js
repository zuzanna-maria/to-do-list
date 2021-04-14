import { render, fireEvent, screen } from '@testing-library/react';
import InputBar from '../input-bar/input-bar.js'
import DisplayTodos from '../display-todos/display-todos.js'
import userEvent from '@testing-library/user-event'


test('Checking box strikes through list item', () => {
  render(<DisplayTodos text="example list item"/>)
  userEvent.click(screen.getByRole('checkbox'))
  const element = screen.getByText("example list item")
  expect(element).toHaveStyle({
    textDecoration: "line-through"
  })

})
