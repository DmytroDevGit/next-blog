import { describe, expect, it, vi } from "vitest";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '@/app/components/UI/Button/Button';

describe('Button Component', () => {
  const classVariants = {
    primary: 'border-2 border-blue-200 bg-blue-200 hover:bg-blue-300 active:bg-blue-400 text-gray-700',
    secondary: 'border-2 border-black bg-black hover:bg-white hover:text-black active:bg-gray-200 text-white',
    success: 'border-2 border-green-200 bg-green-200 hover:bg-green-300 active:bg-green-400 text-gray-700',
    warning: 'border-2 border-red-200 bg-red-200 hover:bg-red-300 active:bg-red-400 text-gray-700',
    default: 'border-2 border-black bg-gray-200 hover:bg-gray-50 active:bg-gray-100'
  }

  it('renders the button with the correct label', () => {
    render(<Button onClick={() => {}}>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    await userEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('Button primary variant', async () => {
    render(<Button variant={'primary'}>Click me</Button>);
    const button = screen.getByText('Click me');
    expect(button.getAttribute('class')).toContain(classVariants.primary);
  });

  it('Button secondary variant', async () => {
    render(<Button variant={'secondary'}>Click me</Button>);
    const button = screen.getByText('Click me');
    expect(button.getAttribute('class')).toContain(classVariants.secondary);
  });

  it('Button success variant', async () => {
    render(<Button variant={'success'}>Click me</Button>);
    const button = screen.getByText('Click me');
    expect(button.getAttribute('class')).toContain(classVariants.success);
  });

  it('Button warning variant', async () => {
    render(<Button variant={'warning'}>Click me</Button>);
    const button = screen.getByText('Click me');
    expect(button.getAttribute('class')).toContain(classVariants.warning);
  });

  it('Button default variant', async () => {
    render(<Button>Click me</Button>);
    const button = screen.getByText('Click me');
    expect(button.getAttribute('class')).toContain(classVariants.default);
  });
});
