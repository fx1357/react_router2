import React, {useEffect, useState} from 'react';
import {useParams, useLocation} from "react-router-dom";
import axios from "axios";
import {Container, Row, Col} from "react-bootstrap";
import movie from "./Movie";

const Detail = () => {
    const params = useParams()
    const location = useLocation()
    const [item, setItem] = useState({})
    const getData = async () =>{
        try{

                // // const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US`)
                // setItem(data)
                // console.log(item)

            const {data} = location.pathname.includes("movie")
                            ? await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US`)
                            : await axios.get(`https://api.themoviedb.org/3/tv/${params.id}?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US`)

            console.log("###########", data)
            setItem(data)

        }catch (e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getData()
        },[])

    return (
        <Container>
            <br />
            <Row className={"pt-3"}>
                <h1>{item.title ? item.title : item.name}</h1>
                <h3>{item.overview}</h3>
                <img
                    className={{width:"400px"}}
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title}
                />
                <br/>

                {item.genres && item.genres.map((genre, index)=>(
                    <Col key={index}>
                        <h3>{genre.name}</h3>
                    </Col>
                ))}

            </Row>
        </Container>
    );
};

export default Detail;