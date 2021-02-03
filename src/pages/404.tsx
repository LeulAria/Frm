import { useRouter } from 'next/router'
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '@/layout/Footer';

export default function NotFound() {
	const router = useRouter(); 

	const goBack = () => {
		router.back()
	}

  return (
    <div className="container">
      <Head>
        <title>Page Not Found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="grid">
          <div onClick={goBack}>
            <div className="card">
              <h4>Whooops! &nbsp; Page Not Found.</h4>
              <p style={{fontSize: '.9rem'}}>Sorry the page you'r looking for does not exist</p>
							<small>go back &larr;</small>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
