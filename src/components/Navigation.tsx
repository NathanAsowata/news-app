import styles from "../styles/Navigation.module.scss"
import MobileNavBar from "./MobileNavBar"
import SideBar from "./SideBar"


// This component returns the appropriate navigation menu for mobile and desktop views
// Since Nextjs runs in a server-side environment, the "window" object does not work.
// Therefore, I used CSS to apply the logic
// Go to "../styles/Navigation.module.scss" to see the logic 
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