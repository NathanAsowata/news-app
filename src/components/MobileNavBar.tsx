import { FiMenu } from "react-icons/fi"
import styles from "../styles/MobileNavBar.module.scss"


const MobileNavBar = () => {
  return (
    <nav className={styles.nav}>
        <FiMenu className={styles.menu} />
        <h1 className={styles.logo}>NewsHive</h1>
    </nav>
  )
}

export default MobileNavBar