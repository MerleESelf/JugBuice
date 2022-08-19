import Head from 'next/head'
import Header from '../components/Header'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <div className={styles.container}>
      <Head>
        <title>Bug Juice </title>
        <meta name="description" content="A task and bug tracking app generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bug Juice
        </h1>

        <div className={styles.user}>
          {loading && <div className={styles.title}>Loading...</div>}
          {session && <> <p style={{ marginBottom: '10px' }}> Welcome, {session.user.name ?? session.user.email}</p> <br />
            <img src={session.user.image} alt="" className={styles.avatar} />
          </>}
          {!session &&
            <>
              <p className={styles.title}>Please Sign in</p>
              <img src="https://media.giphy.com/media/wBJbv6JL5u2C4/giphy.gif" alt="" className={styles.avatar} />
            </>
          }
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
