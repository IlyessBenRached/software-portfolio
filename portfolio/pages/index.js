import Head from 'next/head';
import Layout from '../grid/Layout';
import HomePageIntro from '../grid/Homepage_Intro_Grid';
import Skills from '../grid/Skills';
import SkillsScraping from '../grid/skills_scraping';
import SkillNlp from '../grid/skills_nlp';
import PastWork from '../grid/pastwork';
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
        <HomePageIntro/>
        <Skills/>
        <SkillsScraping/>
        <SkillNlp/>
        <PastWork/>
        <SpeedDial/>
        <Footer/>

      </main>

      

    </Layout>
  );
}
