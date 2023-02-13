import MobileNavBar from "@/components/MobileNavBar"
import Navigation from "@/components/Navigation"
import NewsArticle from "@/components/NewsArticle"
import SideBar from "@/components/SideBar"
import axios from "axios"
import Head from "next/head"
import styles from "../styles/Home.module.scss"


interface NewsArticles {
  data: {  
    articles: {
        title: string,
        url: string,
        urlToImage: string,
        publishedAt: string
      }[]
  }
}

const Home = ({data}: NewsArticles) => {

  return (
    <>
      <Head>
        <title>NewsHive</title>
        <link rel="shortcut icon" href="icon.png" type="image/x-icon" />
      </Head>

      {/* This component renders the appropriate navigation menu for mobile and desktop screen sizes */}
      <Navigation />
      
      <main className={styles.main}>
          {data.articles.map((article, index) => {
            return <NewsArticle article={article} key={index} />
          })}
      </main>
    </>
  )
}

export default Home


export async function getServerSideProps () {
  
  const posts = await axios.get(`https://newsapi.org/v2/top-headlines?country=ng&apiKey=${process.env.API_KEY}`)
  
  return{
    props: {
      data: posts.data
    }
  }
}