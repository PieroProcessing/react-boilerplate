
import { configure,  addDecorator } from '@storybook/react';

import React from 'react';
import { MemoryRouter, Route } from 'react-router';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

addDecorator(S => (
  <Provider store={store}>
       <MemoryRouter initialEntries={['/table/users']}>
        <Route component={(routerProps) => <S {...routerProps} />} path="/table/:content"/> 
       </MemoryRouter>
  </Provider>
));


// configure(require.context('../src', true, /\.stories\.js$/), module);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}