import Link from 'next/link';
import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import Layout from '@/layout/Layout';

export default function Home() {
  return (
    <Layout>
      <>
      <Head>
        <title>Remedy | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">
          Remedy <a>Messeging App</a>
        </h1>

        <div className="grid">
          <Link href="/message">
            <div className="card">
              <h3>Start Chatting &rarr;</h3>
            </div>
          </Link>
        </div>
      </main>
      </>
    </Layout>
  );
}
