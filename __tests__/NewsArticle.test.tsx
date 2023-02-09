import { screen, render } from "@testing-library/react"
import NewsArticle from "@/components/NewsArticle";

const sampleNews ={   
    title: "A mock title",
    url: "https://www.google.com/",
    urlToImage: "placeholder.png",
    publishedAt: "2023-02-09T03:23:43Z"
}


it('should render the news component', () => { 
    let newsCard = render(<NewsArticle article={sampleNews} />)
    expect(newsCard).toBeVisible
})

it('should contain an image', () => { 
    render(<NewsArticle article={sampleNews} />)
    let newsImage = screen.findByRole("img")
    expect(newsImage).toBeInTheDocument
})

it('should contain a title', () => { 
    render(<NewsArticle article={sampleNews} />)
    let newsTitle = screen.findByText("A mock title")
    expect(newsTitle).toBeInTheDocument
})