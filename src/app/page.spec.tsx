import Home from './page';

import { render } from '@testing-library/react';

test('sum', () => {
  const { getByText } = render(<Home />);

  expect(getByText(`Hello World`)).toBeInTheDocument;
});
