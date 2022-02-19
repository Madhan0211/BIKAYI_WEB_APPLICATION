const Price = ({ info }) => {
    return (
        <center>
        <table style={{borderWidth:"1px", borderColor:"#aaaaaa", borderStyle:"solid"}}>
        <div className = "Supes">
            {info.map((finish) => (
                <div>
                <tr>
                <td style={{borderWidth:"1px", borderColor:"#aaaaaa", align:"center", borderStyle:"solid"}}><h4> { finish.category } </h4></td> 
                {/* <br></br> */}
                <td style={{borderWidth:"1px", borderColor:"#aaaaaa", align:"center", borderStyle:"solid"}}><h4> { finish.year } </h4></td> 
                {
                    (typeof(finish.laureates) == 'object')?
                    <div>
                        {
                            finish.laureates.map((subrow) =>
                            <div>
                                <td style={{borderWidth:"1px", borderColor:"#aaaaaa", align:"center", borderStyle:"solid"}}> <h4>{ subrow.firstname }{ subrow.surname } </h4> </td>
                            </div>
                            )
                        }
                    </div>
                    :
                    null
                }
                </tr>
                </div>
            ))}
        </div>
        </table>
        </center> 
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

export default Price;