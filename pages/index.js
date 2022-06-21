import Head from 'next/head'

// Sections
import Search from '../components/Search';
import Services from '../components/Services';
import Services2 from '../components/Services2';




export default function Home({ hero }) {

  

  return (
    <>
      <Head>
        <title>Bertify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Search />
      <Services />
      <Services2 />

    </>
  )
}
