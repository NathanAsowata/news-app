import Link from "next/link"
import styles from "../styles/NewsArticle.module.scss"

interface NewsArticle {
    article:{   
        author: string,
        title: string,
        description: string
        url: string,
        urlToImage: string,
    }
}

const NewsArticle = ({article}:NewsArticle) => {
  return (
    
    <div className={styles.newsCard}>           
        <Link href={article.url} target={"_blank"}>     
            <img src={article.urlToImage} alt={article.title} className={styles.image} />           
            <h3>{article.title}</h3>          
            <p>{article.description}</p>
        </Link>
    </div>
    
  )
}

export default NewsArticle