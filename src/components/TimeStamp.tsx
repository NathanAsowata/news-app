import styles from "../styles/TimeStamp.module.scss"

type TimeStampProps = {
    timestamp: string
}

const TimeStamp = ({timestamp}:TimeStampProps) => {
 let currentTime = new Date()
 let givenTime = new Date(timestamp)
 let timeDifference = currentTime.getTime() - givenTime.getTime()

 let seconds = Math.floor(timeDifference / 1000)
 let minutes = Math.floor(seconds / 60)
 let hours = Math.floor(minutes / 60)
 let days = Math.floor(hours / 24)

if(seconds < 60) {
    return <p className={styles.time}>{`${seconds} seconds ago`}</p>
} else if (minutes < 60) {
    return <p className={styles.time}>{`${minutes} minutes ago`}</p>
} else if (hours < 24) {
    return <p className={styles.time}>{`${hours} hours ago`}</p>
} else {
    return <p className={styles.time}>{`${days} days ago`}</p>
}

}

export default TimeStamp