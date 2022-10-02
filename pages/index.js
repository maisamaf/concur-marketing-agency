import Head from 'next/head'

// components
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import WhatWeDo from "../sections/WhatWeDo";
import WhoWeAre from "../sections/WhoWeAre"
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Concur | Marketing Agency</title>
        <meta name="description" content="Choose Concur as your digital marketing agency." />
        <link rel="icon" href="./images/logo.png" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      </Head>

      <main>
        <Navbar />
        <Header />
        <WhatWeDo />
        <WhoWeAre />
        <Footer />
      </main>
    </div>
  )
}
