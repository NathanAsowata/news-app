import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req:NextApiRequest, res:NextApiResponse) {
    
    let newsCategory = req.query.category
    let categoryName = req.query.name

    if (newsCategory === "country") {
        axios.get(`https://newsapi.org/v2/top-headlines?country=${categoryName}&language=en&apiKey=${process.env.API_KEY}`)
        .then(result => res.send(result.data))
        .catch(err => res.send(err))
    }
    else if (newsCategory === "interest") {
        axios.get(`https://newsapi.org/v2/top-headlines?category=${categoryName}&language=en&apiKey=${process.env.API_KEY}`)
        .then(result => res.send(result.data))
        .catch(err => res.send(err))
    }
    else {
        res.status(404).send("<h1>Error 404! <br> Page not found</h1>")
    }
}