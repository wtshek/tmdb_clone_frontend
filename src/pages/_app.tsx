import { Layout } from '@/components/common/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';

const sourceCodePro = Roboto({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={sourceCodePro.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
