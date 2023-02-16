import Link from 'next/link'
import styles from "../styles/SideBar.module.scss"
import { useState } from "react"

const SideBar = () => {




  return (
    <nav className={styles.sidebar}>
        <section className={styles.logo}>
            <h1>NewsHive</h1>
        </section>
        <section className={styles.categories}>
            <h3>Countries</h3>
            <Link href={"/#"}>Nigeria</Link><br />
            <Link href={"/#"}>United States</Link><br />
            <Link href={"/#"}>Great Britain</Link><br />
            <Link href={"/#"}>Ireland</Link><br />
            <Link href={"/#"}>Canada</Link><br />

            <h3>Interests</h3>
            <Link href={"/#"}>Sports</Link><br />
            <Link href={"/#"}>Business</Link><br />
            <Link href={"/#"}>Health</Link><br />
            <Link href={"/#"}>Technology</Link><br />
            <Link href={"/#"}>Entertainment</Link>
        </section>
    </nav>
  )
}

export default SideBar