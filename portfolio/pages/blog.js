import Head from 'next/head';
import Layout from '../grid/Layout';
import Blog from '../components/blog/coming_soon'
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
        <Blog/>
        <SpeedDial/>
        <Footer/>
      </main>

      

    </Layout>
  );
}
