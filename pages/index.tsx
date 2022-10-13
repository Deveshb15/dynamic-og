import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dynamic Github OG</title>
        <meta name="description" content="Dynamic Github OG based on your username" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen justify-center items-center">
        <h1 className="text-2xl font-bold">Devesh</h1>
      </main>

    </div>
  )
}

export default Home
