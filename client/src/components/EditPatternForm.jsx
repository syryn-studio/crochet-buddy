import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import PatternService from "../services/pattern.services.js";

const EditPatternForm = (props) => {
    const {id} = useParams();

    const [patternData, setPatternData] = useState({
        formData: {
            patternTitle: "",
            patternDesc: "",
            patternType: "",
            hookSize: "",
            yarn: "",
            yarnType: "",
            instructions: "",/* , !for FDP!
            stitchCount: 0 */
            instructions2: "",
            instructions3: "",
            instructions4: "",
            instructions5: "",
            instructions6: "",
            instructions7: "",
            instructions8: "",
            instructions9: "",
            instructions10: ""
        },
        errors: {}
    });

    useEffect(() => {
        PatternService.getOnePattern(id)
            .then((res) => {setPatternData((prevPatternData) => ({...prevPatternData, formData: res}))})
    }, []);

    const navigate = useNavigate();

    const handleInputUpdate = (e) => {
        const {name, value} = e.target
        setPatternData((prevPatternData) => ({...prevPatternData, formData: {...prevPatternData.formData, [name]: value}}))
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        PatternService.updatePattern(id, patternData.formData)
            .then(() => {
                setPatternData({
                    formData: {
                        patternTitle: "",
                        patternDesc: "",
                        patternType: "",
                        hookSize: "",
                        yarn: "",
                        yarnType: "",
                        instructions: "",/* , !for FDP!
                        stitchCount: 0 */
                        instructions2: "",
                        instructions3: "",
                        instructions4: "",
                        instructions5: "",
                        instructions6: "",
                        instructions7: "",
                        instructions8: "",
                        instructions9: "",
                        instructions10: ""
                    },
                    errors: {}
                })
                navigate("/")
            })
            .catch((err) => {setPatternData((prevPatternData) => ({...prevPatternData, errors: err.response.data.errors}))})
    }

    return (
        <div className="formBox">
            <h1 class="d-flex justify-content-center mx-auto p-2 text-info">Update {patternData.formData.patternTitle} Pattern</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                {props.children}
                <div className="formInput" class="row m-3">
                    <label htmlFor="patternTitle" class="col-sm-2 col-form-label">Pattern Title: </label>
                    <div class="col-sm-10">
                        <input type="text" name="patternTitle" id="patternTitle" value={patternData.formData.patternTitle} onChange={handleInputUpdate} class="form-control" />
                        {patternData.errors.patternTitle && <p className="error">{patternData.errors.patternTitle.message}</p>}
                    </div>
                </div>
                <div className="formInput" class="row m-3">
                    <label htmlFor="patternDesc" class="col-sm-2 col-form-label">Description: </label>
                    <div class="col-sm-10">
                        <input type="text" name="patternDesc" id="patternDesc" value={patternData.formData.patternDesc} onChange={handleInputUpdate} class="form-control" />
                        {patternData.errors.patternDesc && <p className="error">{patternData.errors.patternDesc.message}</p>}
                    </div>
                </div>
                <div className="formInput" class="row m-3">
                    <label htmlFor="patternType" class="col-form-label col-sm-2 pt-0">Pattern Type: </label>
                    <div class="col-sm-10">
                        <select name="patternType" id="patternType" value={patternData.formData.patternType} onChange={handleInputUpdate} >
                            <option value="">--Select--</option>
                            <option value="shape">Simple Shape</option>
                            <option value="flat">Flat</option>
                            <option value="round">In-the-Round</option>
                            <option value="clothing">Clothing</option>
                            <option value="amigurumi">Amigurumi</option>
                            <option value="misc">Miscellaneous</option>
                        </select>
                        {patternData.errors.patternType && <p className="error">{patternData.errors.patternType.message}</p>}
                    </div>
                </div>
                <div className="formInput" class="row m-3">
                    <label htmlFor="hookSize" class="col-form-label col-sm-2 pt-0">Hook Size: </label>
                    <div class="col-sm-10">
                        <select name="hookSize" id="hookSize" value={patternData.formData.hookSize} onChange={handleInputUpdate} >
                            <option value="">--Select--</option>
                            <option value="d-3">D-3 (3.25mm)</option>
                            <option value="e-4">E-4 (3.5mm)</option>
                            <option value="f-5">F-5 (3.75mm)</option>
                            <option value="g-6">G-6 (4mm)</option>
                            <option value="7">7 (4.5mm)</option>
                            <option value="h-8">H-8 (5mm)</option>
                            <option value="i-9">I-9 (5.5mm)</option>
                            <option value="j-10">J-10 (6mm)</option>
                            <option value="k-10.5">K-10 1/2 (6.5mm)</option>
                            <option value="l-11">L-11 (8mm)</option>
                        </select>
                        {patternData.errors.hookSize && <p className="error">{patternData.errors.hookSize.message}</p>}
                    </div>
                </div>
                <div className="formInput" class="row m-3">
                    <label htmlFor="yarn" class="col-sm-2 col-form-label">Yarn Color(s): </label>
                    <div class="col-sm-10">
                        <input type="text" name="yarn" id="yarn" value={patternData.formData.yarn} onChange={handleInputUpdate} class="form-control" />
                        {patternData.errors.yarn && <p className="error">{patternData.errors.yarn.message}</p>}
                    </div>
                </div>
                <div className="formInput" class="row m-3">
                    <label htmlFor="yarnType" class="col-sm-2 col-form-label">Yarn Type: </label>
                    <div class="col-sm-10">
                        <input type="text" name="yarnType" id="yarnType" value={patternData.formData.yarnType} onChange={handleInputUpdate} class="form-control" />
                        {patternData.errors.yarnType && <p className="error">{patternData.errors.yarnType.message}</p>}
                    </div>
                </div>
                <div>
                    <h3 class="d-flex justify-content-center mx-auto p-2 text-info">Instructions:</h3>
                    <div className="formInput" class="d-flex mx-5 my-2 gap-2">
                        <label htmlFor="instructions" class="p-2 me-3">1: </label>
                        <div class="col-sm-11">
                            <input type="text" name="instructions" id="instructions" value={patternData.formData.instructions} onChange={handleInputUpdate} class="form-control" />
                            {patternData.errors.instructions && <p className="error">{patternData.errors.instructions.message}</p>}
                        </div>
                    </div>
                    <div className="formInput" class="d-flex mx-5 my-2 gap-2">
                        <label htmlFor="instructions2" class="p-2 me-3">2: </label>
                        <div class="col-sm-11">
                            <input type="text" name="instructions2" id="instructions2" value={patternData.formData.instructions2} onChange={handleInputUpdate} class="form-control" />
                            {patternData.errors.instructions2 && <p className="error">{patternData.errors.instructions2.message}</p>}
                        </div>
                    </div>
                    <div className="formInput" class="d-flex mx-5 my-2 gap-2">
                        <label htmlFor="instructions3" class="p-2 me-3">3: </label>
                        <div class="col-sm-11">
                            <input type="text" name="instructions3" id="instructions3" value={patternData.formData.instructions3} onChange={handleInputUpdate} class="form-control" />
                            {patternData.errors.instructions3 && <p className="error">{patternData.errors.instructions3.message}</p>}
                        </div>
                    </div>
                    <div className="formInput" class="d-flex mx-5 my-2 gap-2">
                        <label htmlFor="instructions4" class="p-2 me-3">4: </label>
                        <div class="col-sm-11">
                            <input type="text" name="instructions4" id="instructions4" value={patternData.formData.instructions4} onChange={handleInputUpdate} class="form-control" />
                            {patternData.errors.instructions4 && <p className="error">{patternData.errors.instructions4.message}</p>}
                        </div>
                    </div>
                    <div className="formInput" class="d-flex mx-5 my-2 gap-2">
                        <label htmlFor="instructions5" class="p-2 me-3">5: </label>
                        <div class="col-sm-11">
                            <input type="text" name="instructions5" id="instructions5" value={patternData.formData.instructions5} onChange={handleInputUpdate} class="form-control" />
                            {patternData.errors.instructions5 && <p className="error">{patternData.errors.instructions5.message}</p>}
                        </div>
                    </div>
                    <div className="formInput" class="d-flex mx-5 my-2 gap-2">
                        <label htmlFor="instructions6" class="p-2 me-3">6: </label>
                        <div class="col-sm-11">
                            <input type="text" name="instructions6" id="instructions6" value={patternData.formData.instructions6} onChange={handleInputUpdate} class="form-control" />
                            {patternData.errors.instructions6 && <p className="error">{patternData.errors.instructions6.message}</p>}
                        </div>
                    </div>
                    <div className="formInput" class="d-flex mx-5 my-2 gap-2">
                        <label htmlFor="instructions7" class="p-2 me-3">7: </label>
                        <div class="col-sm-11">
                            <input type="text" name="instructions7" id="instructions7" value={patternData.formData.instructions7} onChange={handleInputUpdate} class="form-control" />
                            {patternData.errors.instructions7 && <p className="error">{patternData.errors.instructions7.message}</p>}
                        </div>
                    </div>
                    <div className="formInput" class="d-flex mx-5 my-2 gap-2">
                        <label htmlFor="instructions8" class="p-2 me-3">8: </label>
                        <div class="col-sm-11">
                            <input type="text" name="instructions8" id="instructions8" value={patternData.formData.instructions8} onChange={handleInputUpdate} class="form-control" />
                            {patternData.errors.instructions8 && <p className="error">{patternData.errors.instructions8.message}</p>}
                        </div>
                    </div>
                    <div className="formInput" class="d-flex mx-5 my-2 gap-2">
                        <label htmlFor="instructions9" class="p-2 me-3">9: </label>
                        <div class="col-sm-11">
                            <input type="text" name="instructions9" id="instructions9" value={patternData.formData.instructions9} onChange={handleInputUpdate} class="form-control" />
                            {patternData.errors.instructions9 && <p className="error">{patternData.errors.instructions9.message}</p>}
                        </div>
                    </div>
                    <div className="formInput" class="d-flex mx-5 my-2 gap-2">
                        <label htmlFor="instructions10" class="p-2 me-1">10 :</label>
                        <div class="col-sm-11">
                            <input type="text" name="instructions10" id="instructions10" value={patternData.formData.instructions10} onChange={handleInputUpdate} class="form-control" />
                            {patternData.errors.instructions10 && <p className="error">{patternData.errors.instructions10.message}</p>}
                        </div>
                    </div>
                </div>
                <input type="submit" value={`Update Pattern`} class="gradient-advanced d-flex justify-content-center mx-auto p-2 my-3" />
            </form>
        </div>
    )
}

export default EditPatternForm;