import { render } from '@testing-library/react';

import IncrementServer from './increment-server';

describe('IncrementServer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IncrementServer />);
    expect(baseElement).toBeTruthy();
  });
});
