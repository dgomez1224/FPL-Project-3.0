import Head from 'next/head'
import Layout from 'components/layout';
import FindFixture from 'components/find-fixture';
import GetStandings from 'components/standings';


export default function Home() {
  return (
    <div>
      <Head>
        <title>League of Lads</title>
        <meta name="description" content="FPL Webpage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <FindFixture />
        <GetStandings/>
      </Layout>
    </div>
  )
}