import { AuthUserProvider } from "../contexts/AuthUserContext";
import Layout from "../components/Layout";
import { init } from "../libs/sentry";
import "../styles/global.css";

init();

export default function App({ Component, pageProps, err }) {
  // Workaround for https://github.com/vercel/next.js/issues/8592
  return (
    <AuthUserProvider>
      <Layout>
        <Component {...pageProps} err={err} />
      </Layout>
    </AuthUserProvider>
  );
}
