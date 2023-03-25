import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SINDHIONISM - IO Techno Labs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <a href="sindhionism.com" title="It all starts with a name!"><Header title="SINDHIONISM.COM" /></a>
        <a href="sindhionism.org" title="It all starts with a name!"><Header title="SINDHIONISM.ORG" /></a>
        <a href="sindhionism.co.in" title="It all starts with a name!"><Header title="SINDHIONISM.CO.IN" /></a>
        <p className="description">
          Get each domain for just $2499! <br /><center> OR </center><br />Get a bundle deal for just $5499!
        </p>
        <p>
          Contact now and grab the deal!<br /><a href="mailto:sales@iotechnolabs.com">sales@iotechnolabs.com</a>
        </p>
      </main>
      <Footer />
    </div>
  )
}