import Head from 'next/head';
import Layout from '../grid/Layout';
import  SpeedDial  from '../grid/SpeedDial';
import Footer from '../grid/footer';
import Aboutme from '../grid/Aboutme_grid';

export default function Home() {
  return (
    <Layout >
      <Head>
        <title>Ilyes Ben Rached</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Aboutme/>
        <SpeedDial/>
        <Footer/>
      </main>

      

    </Layout>
  );
}
