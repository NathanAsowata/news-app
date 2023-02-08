
import Link from "next/link"


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
        <div>
            <img src={article.urlToImage} alt={article.title} />
            <h3>{article.title}</h3>
            <h5>by {article.author}</h5>
            <p>{article.description}</p>
        </div>
    </Link>
  )
}

export default NewsArticle