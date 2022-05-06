import { useEffect, useState } from "react";

const usePerfumeById = perfumeId =>{
    const [perfume, setPerfume] = useState({});

    useEffect( () =>{
        const url = `http://localhost:5000/perfume/${perfumeId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setPerfume(data));

    }, [perfumeId]);
    return [perfume, setPerfume]
}

export default usePerfumeById;