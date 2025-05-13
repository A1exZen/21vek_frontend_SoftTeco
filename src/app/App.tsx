import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';

import router from './constants/router';
import queryClient from './constants/queryClient';

import './styles/globals.scss';

import { ConfigProvider } from 'antd';
import { getAntdLocale } from '@utils/antdLocale.ts';
import { antdTheme } from '@app/config/antd/antdTheme.ts';

const App = () => (
  <ConfigProvider locale={getAntdLocale()} theme={antdTheme}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </ConfigProvider>
);

export default App;
