import Head from 'next/head';
import Layout from '../grid/Layout';
import  SpeedDial  from '../grid/SpeedDial';
import Footer from '../grid/footer';
import ExperienceIntro from '../grid/Experience_intro_grid';
import Experience from '../components/Experience_Internships';
export default function Home() {
  return (
    <Layout >
      <Head>
        <title>Ilyes Ben Rached</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ExperienceIntro/>
        <Experience/>
        <SpeedDial/>
        <Footer/>
      </main>

      

    </Layout>
  );
}
