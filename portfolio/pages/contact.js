import Head from 'next/head';
import Layout from '../grid/Layout';
import ContactMe from '../grid/Contactme_grid';
import  SpeedDial  from '../grid/SpeedDial';
import Footer from '../grid/footer';


export default function Home() {
  return (
    <Layout >
      <Head>
        <title>Ilyes Ben Rached</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ContactMe/>
        <SpeedDial/>
        <Footer/>
      </main>

      

    </Layout>
  );
}
