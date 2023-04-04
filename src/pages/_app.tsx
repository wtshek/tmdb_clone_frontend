import Layout from '@/components/common/Layout/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Source_Code_Pro } from 'next/font/google';

const sourceCodePro = Source_Code_Pro({ subsets: [] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={sourceCodePro.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
