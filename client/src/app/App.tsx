import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';

import router from './constants/router';
import queryClient from './constants/queryClient';

import './styles/globals.scss';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

export default App;
