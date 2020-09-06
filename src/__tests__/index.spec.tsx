import React from 'react';
import Layout from '../components/layout';
import Home from '../pages';
import {render} from '@testing-library/react';

describe('Home page', () => {
  it('renders correctly', async () => {
    const {getByTestId} = render(
      <Layout>
        <Home />
      </Layout>,
    );
    const element = getByTestId('text');
    expect(element).toBeDefined();
  });
});