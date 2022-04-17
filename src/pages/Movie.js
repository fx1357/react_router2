import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Col, Container, Row} from "react-bootstrap";
import {CardView} from "../components";

const Movie = () => {

    const [movies, setMovies] = useState([])

    const getData = async () => {
        try {
            const {data} = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1")
            // console.log(data.results)
            setMovies(data.results)
            // console.log(movies)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <Container>
            <Row>
                {/*{movies.map(movie => {*/}
                {/*    return (*/}
                {/*        <h1>{movie.original_title}</h1>*/}
                {/*    )}*/}
                {/*)}*/}
                {
                    movies.map((movie, index) =>(
                        <CardView
                            key={index}
                            title={movie.title}
                            desc={movie.overview}
                            img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            link={`/movie/${movie.id}`}
                        />
                    ))
                }
            </Row>
        </Container>)
}

export default Movie;