import Head from 'next/head'
import { Inter } from '@next/font/google'
import LatestPost from '@/components/LatestPost'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Queen's Asian Student Association</title>
        <meta name="description" content="Queen's Asian Student Association" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white">
        <div className="h-screen mx-12 lg:mx-36 xl:mx-60">
          <LatestPost />
        </div>
      </main>
    </>
  )
}
