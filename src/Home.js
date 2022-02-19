import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="king">
            <h1 style={{ color: "red", fontFamily : "Papyrus"}}>
            NOBEL PRIZE WINNERS
            </h1>
            <br></br>
            <Link to ="/Nobel"><b>PRIZE WINNERS</b></Link>
            <br>
            </br>
            <br>
            </br>
            <Link to ="/Yeardropbox"><b>CATEGORIZE WINNERS</b></Link>
        </div>
    );

}

export default Home;