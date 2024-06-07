import dynamic from "next/dynamic";
import Head from "next/head";

const NavBar = dynamic(()=> import('../components/NavBar/NavBar'))

export default function Home() {
  return (
    <>
    <Head>
      <title>Home | The Daisy Dreams </title>
      
      <meta property="title" content="Home | The Daisy Dreams" />
      <meta property="type" content="website" />
      <meta property="URL" content="https://the-daisy-dreams.vercel.app" />
      <meta property="image" content="/icon.png" />
      <meta property="description" content="The Daisy Dream is a passion project by software engineer Rohan Sadhukhan and Designer Priya mondal it is completely design by Priya mondal and Developed by Rohan Sadhukhan" />

      <meta property="og:title" content="Home | The Daisy Dreams" />
      <meta property="og:type" content="website" />
      <meta property="og:URL" content="https://the-daisy-dreams.vercel.app" />
      <meta property="og:image" content="/icon.png" />
      <meta property="og:description" content="The Daisy Dream is a passion project by software engineer Rohan Sadhukhan and Designer Priya mondal it is completely design by Priya mondal and Developed by Rohan Sadhukhan" />
    </Head>
      <NavBar />
    </>
  );
}
