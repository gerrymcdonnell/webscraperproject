//https://www.youtube.com/watch?v=-3lqUHeZs_0&ab_channel=CodewithAniaKub%C3%B3w

const PORT=8000

const axios=require('axios')
const cheerio=require('cheerio')
const express=require('express')

const app=express()

const url='http://www.guardian.com/uk'

axios(url)
    .then(response=>
        {
            const html=response.data
            //console.log(html)
            const $=cheerio.load(html)
            const articles=[]
            
            $('.fc-item__title',html).each(function () {
                const title=$(this).text()
                const url=$(this).find('a').attr('href')
                articles.push({
                    title,
                    url
                })

            })
            console.log(articles)
        }).catch(err=>console.log(err))

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))
