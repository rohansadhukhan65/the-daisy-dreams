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
      
      <meta property="og:site_name" content="The Daisy Dreams"></meta>
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
