import React from 'react';
import Layout from '../components/layout';
import About from '../pages/about';
import {render} from '@testing-library/react';

describe('Home page', () => {
  it('renders correctly', async () => {
    const {getByTestId} = render(
      <Layout>
        <About />
      </Layout>,
    );
    const element = getByTestId('text');
    expect(element).toBeDefined();
  });
});