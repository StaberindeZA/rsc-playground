import { render } from '@testing-library/react';

import IncrementClient from './increment-client';

describe('IncrementClient', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IncrementClient />);
    expect(baseElement).toBeTruthy();
  });
});
