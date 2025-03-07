import { describe, expect, test } from 'vitest';

import { Button } from '@/components/ui/button';
import { render, screen } from '@/tests/react-test-utils';

describe('Button', () => {
  test('given no props: renders a text', () => {
    render(<Button>Click Me</Button>);

    // Check if the text "Click Me" is rendered within the Button component
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  test('renders with correct class names when using default variant', () => {
    render(<Button>Click Me</Button>);

    // Check if the button has the default classes based on the default variant
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass(
      'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 h-10 px-4 py-2'
    );
  });

  test('renders with correct size class for "sm"', () => {
    render(<Button size='sm'>Click Me</Button>);

    // Check if the button has the correct class for small size
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass('h-8 rounded-md px-3 text-xs');
  });

  test('renders with "outline" variant', () => {
    render(<Button variant='outline'>Click Me</Button>);

    // Check if the button has the correct class for "outline" variant
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass(
      'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2'
    );
  });

  test('renders with "asChild" prop correctly', () => {
    render(
      <Button asChild>
        <span>Click Me</span>
      </Button>
    );

    // The button should render as a span element because of the asChild prop
    const button = screen.getByText('Click Me');
    expect(button.tagName).toBe('SPAN');
  });
});
