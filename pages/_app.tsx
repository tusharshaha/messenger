import { WebsocketProvider, socket } from '@/context/websocket.context'
import { persistor, store } from '../redux/store';
import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <WebsocketProvider value={socket}>
        <Component {...pageProps} />
        <Toaster />
      </WebsocketProvider>
    </PersistGate>
  </Provider>

}
