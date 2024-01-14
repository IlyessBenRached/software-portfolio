import Head from 'next/head';
import Layout from '../grid/Layout';
import  SpeedDial  from '../grid/SpeedDial';
import Footer from '../grid/footer';
import EducationIntro from '../grid/education_intro_grid';
import Degrees from '../components/education/degrees';

export default function Home() {
  return (
    <Layout >
      <Head>
        <title>Ilyes Ben Rached</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <EducationIntro/>
        <Degrees/>
        <SpeedDial/>
        <Footer/>
      </main>

      

    </Layout>
  );
}
