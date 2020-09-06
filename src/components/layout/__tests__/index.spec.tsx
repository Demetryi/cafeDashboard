import React from 'react';
import Layout from '../';
import {render, fireEvent, act} from '@testing-library/react';

describe('Home page', () => {
  it('renders correctly and toggle drawer events', async () => {
    const {getByTestId, getByLabelText} = render(
      <Layout>
        <div/>
      </Layout>,
    );
    const drawer = getByTestId('Drawer');
    expect(drawer).toBeDefined();
    const drawerShowButton = getByLabelText('Show drawer');
    await act(async () => await fireEvent.click(drawerShowButton));
    expect(drawer).toBeDefined();
    const drawerHideButton = getByLabelText('Hide drawer');
    await act(async () => await fireEvent.click(drawerHideButton));
    expect(drawer).toBeDefined();
  });
});