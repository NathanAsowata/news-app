import Link from "next/link"
import { useState } from "react"
import styles from "../styles/NewsArticle.module.scss"
import TimeStamp from "./TimeStamp"

interface NewsArticle {
    article:{   
        title: string,
        url: string,
        urlToImage: string,
        publishedAt: string
    }
}

const NewsArticle = ({article}:NewsArticle) => {

  // Check if there is an image for the news article
  let imageLink;
  // If there is no image return a placeholder
  if (article.urlToImage === null){
      imageLink = "placeholder.png"
  }
  // Else if the image if it exists
  else{
    imageLink = article.urlToImage
  }

  return ( 
    <div className={styles.newsCard}>           
        
        <Link href={article.url} target={"_blank"}>     
            
            <img src={imageLink} alt={article.title} className={styles.image} />           
            
            <p className={styles.title}>{article.title}</p>
            
            <TimeStamp timestamp={article.publishedAt} />
        
        </Link>
    
    </div>
    
  )
}

export default NewsArticle