import { WebsocketProvider, socket } from '@/context/websocket.context'
import { persistor, store } from '../redux/store';
import '@/styles/globals.css'
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  
  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <WebsocketProvider value={socket}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </WebsocketProvider>
    </PersistGate>
  </Provider>

}
