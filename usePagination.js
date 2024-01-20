import { useEffect, useState } from "react";

const LIMIT = 10;

const usePagination = ({ limit = LIMIT, pageNumber }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/todos?limit=${limit}&skip=${pageNumber*LIMIT}`)
            .then(res => res.json())
            .then(responseData => setData(prevData => [...prevData, ...responseData?.todos]));

    }, [limit, pageNumber])
    
    return { data };
}


export default usePagination;

// PageNumber: 0, 1, 2, 3, ....
// skip:       0, 10, 20, 
// data: 1 - 10,  11 - 20, 21 - 30, ...