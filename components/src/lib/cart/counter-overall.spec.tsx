import { render } from '@testing-library/react';

import CounterOverall from './counter-overall';

describe('CounterOverall', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CounterOverall />);
    expect(baseElement).toBeTruthy();
  });
});
