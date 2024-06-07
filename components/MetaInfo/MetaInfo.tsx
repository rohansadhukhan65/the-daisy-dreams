import Head from "next/head";
import React from "react";

interface Iprops {
  children?: any;
  title: string;
  description: string;
  metaImgUrl: string;
}
const MetaInfo = ({ children, title, description, metaImgUrl }: Iprops) => {
  return (
    <Head>
      <title>{title}</title>

      <meta property="title" content={title} />
      <meta property="type" content="website" />
      <meta property="URL" content="https://the-daisy-dreams.vercel.app" />
      <meta property="image" content={metaImgUrl} />
      <meta
        property="description"
        content="The Daisy Dream is a passion project by software engineer Rohan Sadhukhan and Designer Priya mondal it is completely design by Priya mondal and Developed by Rohan Sadhukhan"
      />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:URL" content="https://the-daisy-dreams.vercel.app" />
      <meta property="og:image" content={metaImgUrl} />
      <meta
        property="og:description"
        content={description}
      />

      {children}
    </Head>
  );
};

export default MetaInfo;
