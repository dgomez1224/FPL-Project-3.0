import Head from 'next/head'


import CupBracket from 'components/cup-bracket-function';


export default function Bracket() {
  return (
    <div>
      <Head>
        <title>League of Lads</title>
        <meta name="description" content="FPL Webpage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <CupBracket />
      </body>
    </div>
  )
}