import React from "react";
import Select from "react-select"; 

function Dropbox(props)
{
    const numbers = props.array;
    return(
        <div>
            <Select options = { numbers }/>
        </div>
    );
}

 
{/* <div className="preview" key={finish.laureates[0].id}>
                    <h3 style={{ color: "red", fontFamily : "Papyrus"}}>
                    CATEGORY : { finish.category }
                    </h3>
                    <h3 style={{ color: "red", borderRadius: "1px"}}>
                    Name : { finish.laureates[0].firstname} {finish.laureates[0].surname}
                    <br></br>
                    ID : { finish.laureates[0].id }
                    </h3> 
                    </div> */}

export default Dropbox;