import '../styles/globals.css'
import { RecoilEnv } from 'recoil';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';

//recoil Config
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

// App
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
