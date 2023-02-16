import { FiMenu, FiX } from "react-icons/fi"
import styles from "../styles/MobileNavBar.module.scss"
import SideBar from "./SideBar"
import { useState } from "react"


const MobileNavBar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [newClass, setNewClass] = useState(`${styles.hideSideBar}`)
  const [logoStyle, setLogoStyle] = useState(`${styles.logo}`)

  const displayMenu = () => {
    if(isVisible === false){
      setNewClass(`${styles.showSideBar}`)
      setLogoStyle(`${styles.hideNavLogo}`)
      setIsVisible(true)
    }
    else{
      setNewClass(`${styles.hideSideBar}`)
      setLogoStyle(`${styles.showNavLogo}`)
      setIsVisible(false)
    }
  }

  return (
    <>
    <nav className={styles.nav}>
        <FiMenu className={styles.menu} onClick={displayMenu} />
        <h1 className={`${logoStyle} ${styles.logo}`}>NewsHive</h1>
        <FiX className={`${newClass} ${styles.icon}`} onClick={displayMenu} />
    </nav>
    <div className={newClass}>
      <SideBar />
    </div>
    </>
  )
}

export default MobileNavBar