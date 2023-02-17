import Link from 'next/link'
import styles from "../styles/SideBar.module.scss"

const SideBar = () => {




  return (
    <nav className={styles.sidebar}>
        <section className={styles.logo}>
            <Link href={"/"}>
              <h1>NewsHive</h1>
            </Link>
        </section>
        <section className={styles.categories}>
            <h3>Countries</h3>
            <Link href={"/country/ng"}>Nigeria</Link><br />
            <Link href={"/country/us"}>United States</Link><br />
            <Link href={"/country/gb"}>United Kingdom</Link><br />
            <Link href={"/country/ie"}>Ireland</Link><br />
            <Link href={"/country/ca"}>Canada</Link><br />

            <h3>Interests</h3>
            <Link href={"/interest/sport"}>Sports</Link><br />
            <Link href={"/interest/business"}>Business</Link><br />
            <Link href={"/interest/health"}>Health</Link><br />
            <Link href={"/interest/technology"}>Technology</Link><br />
            <Link href={"/interest/entertainment"}>Entertainment</Link>
        </section>
    </nav>
  )
}

export default SideBar