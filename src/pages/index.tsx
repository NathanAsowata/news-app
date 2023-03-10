import Navigation from "@/components/Navigation"
import NewsCard from "@/components/NewsCard"
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

      <main className={styles.main}>
        {/* This component renders the appropriate navigation menu for mobile and desktop screen sizes */}
        <Navigation />
        
        <section className={styles.content}>
            {data.articles.map((article, index) => {
              return <NewsCard article={article} key={index} />
            })}
        </section>
      </main>
    </>
  )
}

export default Home


export async function getServerSideProps () {
  
  const posts = await axios.get(`https://newsapi.org/v2/top-headlines?language=en&apiKey=${process.env.API_KEY}`)
  
  return{
    props: {
      data: posts.data
    }
  }
}