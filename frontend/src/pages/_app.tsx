// src/pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SidebarProvider } from '@/components/sidebar/SidebarProvider';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvider>
      <Component {...pageProps} />
    </SidebarProvider>
  );
}
