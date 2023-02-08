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
    
    <Link href={article.url} target={"_blank"}>
       
        <div className={styles.newsCard}>
            
            <img src={article.urlToImage} alt={article.title} className={styles.image} />
            
            <h3>{article.title}</h3>
            
            <h5>by {article.author}</h5>
            
            <p>{article.description}</p>
        
        </div>
    
    </Link>
  )
}

export default NewsArticle