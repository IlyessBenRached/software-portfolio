// _app.js or _app.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Load Bootstrap JS on the client side
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then((bootstrap) => {
        // You can use Bootstrap JS features here if needed
      })
      .catch((error) => console.error('Error loading Bootstrap', error));
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
