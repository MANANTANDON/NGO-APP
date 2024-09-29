import { HomeGrid } from "@/components/Home/HomeGrid";
import { Layout } from "@/components/Layout/Layout";
import { Typography } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>THE NGO APP</title>
        <meta name="description" content="THE NGO APP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HomeGrid />
        <Typography>Made with Love ❤️ © 4d616e616e</Typography>
      </Layout>
    </>
  );
}
