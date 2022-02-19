import React, { useState } from 'react';
import data from 'C:/bikayi/reactjs/src/db';

// const[selyear, setSelyear] = useState();
// const[selcat, setSelcat] = useState();

function Yeardropbox()
{
        const[selyear, setSelyear] = useState();
        const[selcat, setSelcat] = useState();
        return(
            <div>
                <select onChange={(e) => 
                    {const selectyear = e.target.value;
                        setSelyear(selectyear)}}>
                    <option selected disabled="true">--SELECT YEAR--</option>
                    {
                        data.prizes.map((result) =>(<option>
                            { result.year }
                        </option>))
                    }
                </select>
                <select onChange={(e) => 
                    {const selectcat = e.target.value;
                        setSelcat(selectcat)}}>
                    <option selected disabled="true">--SELECT CATEGORY--</option>
                    {
                        data.prizes.map((result) =>(<option>
                            { result.category }
                        </option>))
                    }
                </select>
                <br>
                </br>
                <h3 style={{ color: "red", fontFamily : "Papyrus"}}>CATEGORIZED YEAR : {selyear}</h3>
                <br>
                </br>
                <h3 style={{ color: "red", fontFamily : "Papyrus"}}>CATEGORIZED DOMAIN : {selcat} </h3>
            </div>
        );
}

export default Yeardropbox;