import Head from 'next/head'

// components
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import WhatWeDo from "../sections/WhatWeDo";
import WhoWeAre from "../sections/WhoWeAre"
export default function Home() {
  return (
    <div>
      <Head>
        <title>Creative Agency</title>
        <meta name="description" content="Choose Creative Agency as your digital marketing agency." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Header />
        <WhatWeDo />
        <WhoWeAre />
      </main>
    </div>
  )
}
