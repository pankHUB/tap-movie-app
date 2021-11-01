import React from 'react';

import { useParams } from 'react-router-dom';

const Moviedetails = () => {
    const {movieId} = useParams();
    return (
        <><h1>{movieId}</h1></>
    );
}

export default Moviedetails;


