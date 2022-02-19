import { useState } from "react";
import Price from "./Price"; 
import { useEffect } from "react";
import Dropbox from "./Dropbox";

const Nobel = () => {

    const [info, setinfo] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/prizes')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setinfo(data);
        });
    }, []);

    const array =[]
    for(var i in info)
    {
        array.push([info[i]]);
    }

    return ( 
        <div className="Nobel">
            {info && <Price info = { info } title = "PRIZE WINNERS"/>}
            {<Dropbox array = { array } title = "PRIZE WINNERS"/>}
        </div>
     );
}
 
export default Nobel;