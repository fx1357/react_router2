import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Card, Button, Container, Row, Col} from 'react-bootstrap';
import {CardView} from "../components";

const Home = () => {

    const [articles, setArticles] = useState([])
    const getData = async () => {

        try{
            const {data} = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2022-03-17&sortBy=publishedAt&apiKey=f1c87e2bb86248de9f9492e513f93e1f")
            setArticles(data.articles)
            console.log(articles)
        }catch (e){
            console.log(e)
        }
    }
    useEffect(()=>{
        getData()
    }, [])


    return (
        <Container>
            <Row>
                {articles.map((article, index) => (
                    <CardView
                        key={index}
                        title={article.title}
                        desc={article.description}
                        img={article.urlToImage ? article.urlToImage : require("../assets/empty_image.png")}
                        link={"/news"}
                    />
                ))}
            </Row>

        </Container>

    );
};

export default Home;
