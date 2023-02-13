import styles from "../styles/Navigation.module.scss"
import MobileNavBar from "./MobileNavBar"
import SideBar from "./SideBar"


// This component returns the appropriate navigation menu for mobile and desktop views
const Navigation = () => {
  return(
    <>
      <div className={styles.mobileView}>
        <MobileNavBar />
      </div>
      <div className={styles.desktopView}>
        <SideBar />
      </div>
    </>
  )
}

export default Navigation