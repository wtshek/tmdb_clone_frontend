import { render } from '@testing-library/react';
import Layout from './Layout';

describe('Layout component', () => {
  it('should render children and footer', () => {
    const { container } = render(
      <Layout>
        <div>Test</div>
      </Layout>
    );
    expect(container).toMatchSnapshot();
  });
});
