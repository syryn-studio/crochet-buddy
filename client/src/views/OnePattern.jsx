import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import PatternService from "../services/pattern.services";
import NavBar from "../components/NavBar";

const OnePattern = () => {
    const {id} = useParams();
    const [pattern, setPattern] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        PatternService.getOnePattern(id)
            .then((res) => {setPattern(res)})
    }, []);

    const deletePattern = () => {
        PatternService.deletePattern(id)
            .then(() => {navigate("/")})
    };

    return (
        <>
            <NavBar />
            <h1 class="d-flex justify-content-center mx-auto p-2 text-info">{pattern.patternTitle}</h1>
            <p class="d-flex justify-content-center mx-auto p-2 my-3">{pattern.patternDesc}</p>
            <p class="d-flex justify-content-center mx-auto p-2 my-3">Pattern Type: {pattern.patternType}</p>
            <p class="d-flex justify-content-center mx-auto p-2 my-3">Hook Size: {pattern.hookSize}</p>
            <p class="d-flex justify-content-center mx-auto p-2 my-3">Yarn Color(s): {pattern.yarn}</p>
            <p class="d-flex justify-content-center mx-auto p-2 my-3">Yarn Type: {pattern.yarnType}</p>
            <div>
                <h3 class="d-flex justify-content-center mx-auto p-2 text-info">Instructions</h3>
                <p class="d-flex justify-content-center mx-auto p-2 my-3">1: {pattern.instructions}</p>
                <p class="d-flex justify-content-center mx-auto p-2 my-3">2: {pattern.instructions2}</p>
                <p class="d-flex justify-content-center mx-auto p-2 my-3">3: {pattern.instructions3}</p>
                <p class="d-flex justify-content-center mx-auto p-2 my-3">4: {pattern.instructions4}</p>
                <p class="d-flex justify-content-center mx-auto p-2 my-3">5: {pattern.instructions5}</p>
                <p class="d-flex justify-content-center mx-auto p-2 my-3">6: {pattern.instructions6}</p>
                <p class="d-flex justify-content-center mx-auto p-2 my-3">7: {pattern.instructions7}</p>
                <p class="d-flex justify-content-center mx-auto p-2 my-3">8: {pattern.instructions8}</p>
                <p class="d-flex justify-content-center mx-auto p-2 my-3">9: {pattern.instructions9}</p>
                <p class="d-flex justify-content-center mx-auto p-2 my-3">10: {pattern.instructions10}</p>
            </div>
            <div class="d-flex justify-content-evenly mx-5 p-2 my-1" >
                <Link to={`/patterns/${pattern._id}/edit`} class="btn gradient-advanced col-2">Edit</Link> <br />
                <button onClick={deletePattern} class="btn btn-danger">Delete this Pattern</button>
            </div>
        </>
    )
}

export default OnePattern;