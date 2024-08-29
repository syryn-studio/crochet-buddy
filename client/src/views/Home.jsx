import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import AllPatterns from "../components/AllPatterns";

const Home = () => {
    return (
        <>
            <NavBar />
            <AllPatterns />
        </>
    )
};

export default Home;