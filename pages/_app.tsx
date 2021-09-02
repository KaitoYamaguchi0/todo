// After: _app.tsx
import '../styles/globals.css'
import {AppProps} from "next/app";
import { AuthContext, AuthProvider } from './src/auth/AuthProvider';
import { Children } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    )
}

export default MyApp