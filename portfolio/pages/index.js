import Head from 'next/head';
import HomePageIntro from '../grid/Homepage_Intro_Grid';
import SkillsComponent from '../grid/skills';
export default function Home() {
  return (
    <div >
      <Head>
        <title>Ilyes Ben Rached</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomePageIntro/>
      </main>

      

    </div>
  );
}
