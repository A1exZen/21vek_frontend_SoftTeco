import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';

import router from './constants/router';
import queryClient from './constants/queryClient';
import store from '@/store';

import './styles/globals.scss';

import { ConfigProvider } from 'antd';
import { getAntdLocale } from '@utils/antdLocale.ts';
import { antdTheme } from '@app/config/antd/antdTheme.ts';

const App = () => (
  <ConfigProvider locale={getAntdLocale()} theme={antdTheme}>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </ConfigProvider>
);

export default App;
