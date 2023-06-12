import 'jest-canvas-mock';

import Hero from './Hero';

import { render } from '@testing-library/react';

describe('Home Component', () => {
  it('should render Home', () => {
    const { container } = render(<Hero />);
    expect(container.querySelector('#hero-title')).toBeInTheDocument();
    expect(container.querySelector('#hero-title-pipe')).toBeInTheDocument();
    expect(container.querySelector('#hero-subtitle')).toBeInTheDocument();
  });
});
