import Head from "next/head";
import Link from "next/link";
import { useAuthUserContext } from "../components/AuthUserContextProvider";
import styles from "../styles/Home.module.css";

export default function Home() {
  // TODO: when we hook up the user db, change session to user
  const { session, logOut } = useAuthUserContext();

  return (
    <div className={styles.container}>
      <Head>
        <title>Bug Juice </title>
        <meta
          name="description"
          content="A task and bug tracking app generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Bug Juice</h1>
        {session ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Link href="/my-todos">
              <button className="logo">MY TODOS</button>
            </Link>
            <button className="logo" onClick={logOut}>
              Sign Out
            </button>
          </div>
        ) : (
          <Link href="/login">
            <button className="logo">LOGIN</button>
          </Link>
        )}
      </main>
    </div>
  );
}
