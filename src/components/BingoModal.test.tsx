import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BingoModal } from './BingoModal';

describe('BingoModal', () => {
  it('renders the BINGO heading', () => {
    render(<BingoModal onDismiss={vi.fn()} onRetry={vi.fn()} />);
    expect(screen.getByText('BINGO!')).toBeInTheDocument();
  });

  it('renders both action buttons', () => {
    render(<BingoModal onDismiss={vi.fn()} onRetry={vi.fn()} />);
    expect(screen.getByRole('button', { name: 'Play Again' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Keep Playing' })).toBeInTheDocument();
  });

  it('calls onRetry when Play Again is clicked', () => {
    const onRetry = vi.fn();
    render(<BingoModal onDismiss={vi.fn()} onRetry={onRetry} />);
    fireEvent.click(screen.getByRole('button', { name: 'Play Again' }));
    expect(onRetry).toHaveBeenCalledOnce();
  });

  it('calls onDismiss when Keep Playing is clicked', () => {
    const onDismiss = vi.fn();
    render(<BingoModal onDismiss={onDismiss} onRetry={vi.fn()} />);
    fireEvent.click(screen.getByRole('button', { name: 'Keep Playing' }));
    expect(onDismiss).toHaveBeenCalledOnce();
  });

  it('does not call onRetry when Keep Playing is clicked', () => {
    const onRetry = vi.fn();
    render(<BingoModal onDismiss={vi.fn()} onRetry={onRetry} />);
    fireEvent.click(screen.getByRole('button', { name: 'Keep Playing' }));
    expect(onRetry).not.toHaveBeenCalled();
  });
});
