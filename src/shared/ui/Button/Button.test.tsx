import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "./Button";

describe('button', () => {
  test('with', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByAltText('TEST')).toBeInTheDocument();
  });
  test('with only', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByAltText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
