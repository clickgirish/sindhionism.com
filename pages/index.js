import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SINDHIONISM.COM - IO Techno Labs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="SINDHIONISM.COM" />
        <Header title="SINDHIONISM.ORG" />
        <Header title="SINDHIONISM.CO.IN" />
        <p className="description">
          Get each domain for just $2499!
        </p>
        <p className="description">
          Get a bundle deal for just $5499!
        </p>
        <p>
          Contact now and grab the deal!
        </p>
        <p>
          <a href="mailto:sales@iotechnolabs.com">sales@iotechnolabs.com</a>
        </p>
      </main>
      <Footer />
    </div>
  )
}
