import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PatternService from "../services/pattern.services.js";

const AllPatterns = () => {
    const [patternList, setPatternList] = useState([]);

    useEffect(() => {
        PatternService.getAllPatterns()
            .then((patternsFromAPI) => {setPatternList(patternsFromAPI)})
    }, []);

    return (
        <div class="container-fluid">
            <h1 class="d-flex justify-content-center mx-auto p-2 text-info">Pattern Library</h1>
            <table class="table table-striped table-bordered">
                <thead>
                    <tr class="table table-info">
                        <th>Pattern</th>
                        <th>Type</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        patternList.map((pattern, ind) => (
                            <tr key={ind}>
                                <td><Link to={`/patterns/${pattern._id}`}>{pattern.patternTitle}</Link></td>
                                <td>{pattern.patternType}</td>
                                <td>
                                    <Link to={`/patterns/${pattern._id}/edit`}>Edit</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllPatterns;