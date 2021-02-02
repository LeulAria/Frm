import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '@/layout/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          TecHawks <a>Messege</a>
        </h1>

        <div className={styles.grid}>
          <Link href="/message">
            <div className={styles.card}>
              <h3>Start Chatting &rarr;</h3>
            </div>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
