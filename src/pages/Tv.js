import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Container, Row} from "react-bootstrap";
import {CardView} from "../components";

const Tv = () => {

    const [tvs, setTvs] = useState([])

    const getData = async () => {
        try {
            const {data} = await axios.get("https://api.themoviedb.org/3/tv/airing_today?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1")
            setTvs(data.results)
        }catch (e){
            console.log(e)
        }

    }
    useEffect(()=>{
        getData()
    },[])

    return (
        <Container>
            <Row>
                {tvs.map((tv, index) => (
                    <CardView
                        key={index}
                        title={tv.name}
                        desc={tv.overview}
                        img={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                        link={`/tv/${tv.id}`}
                    />
                    ))}
            </Row>
        </Container>
    );
};

export default Tv;