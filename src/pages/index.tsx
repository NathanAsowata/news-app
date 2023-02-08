import NewsArticle from "@/components/NewsArticle"
import axios from "axios"
import Head from "next/head"


interface NewsArticles {
  data: {  
    articles: {
        author: string,
        title: string,
        description: string
        url: string,
        urlToImage: string
      }[]
  }
}

const Home = ({data}: NewsArticles) => {
  return (
    <>
      <Head>
        <title>News Headlines</title>
        <link rel="shortcut icon" href="icon.png" type="image/x-icon" />
      </Head>
      <main>
        <ul>
          {data.articles.map((article, index) => {
            return <NewsArticle article={article} key={index} />
          })}
        </ul>
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