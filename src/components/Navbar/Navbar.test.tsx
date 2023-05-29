import 'jest-canvas-mock';
import Navbar from './Navbar';

import { fireEvent, render } from '@testing-library/react';

describe('Navbar Component', () => {
  it('should render Navbar', () => {
    const { container } = render(<Navbar />);
    const menu = container.querySelector('#navbar-hamburger-menu');
    if (menu) {
      fireEvent.click(menu);
    }
    expect(menu).toBeInTheDocument();
    expect(container.querySelector('#navbar-link-home')).toBeInTheDocument();
    expect(
      container.querySelector('#navbar-menu-link-home')
    ).toBeInTheDocument();
    expect(
      container.querySelector('#navbar-menu-link-services')
    ).toBeInTheDocument();
    expect(
      container.querySelector('#navbar-menu-link-blog')
    ).toBeInTheDocument();
    expect(
      container.querySelector('#navbar-menu-link-about')
    ).toBeInTheDocument();
    expect(
      container.querySelector('#navbar-menu-icon-instagram')
    ).toBeInTheDocument();
    expect(
      container.querySelector('#navbar-menu-icon-facebook')
    ).toBeInTheDocument();
    expect(
      container.querySelector('#navbar-menu-icon-twitter')
    ).toBeInTheDocument();
    expect(
      container.querySelector('#navbar-menu-icon-linkedin')
    ).toBeInTheDocument();
  });
});
