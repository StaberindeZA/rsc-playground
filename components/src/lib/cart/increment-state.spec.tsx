import { render } from '@testing-library/react';

import IncrementState from './increment-state';

describe('IncrementState', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IncrementState />);
    expect(baseElement).toBeTruthy();
  });
});
