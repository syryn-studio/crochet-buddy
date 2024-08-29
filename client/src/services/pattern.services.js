import axios from "axios";

const http = axios.create({
    "baseURL": "http://localhost:8000/api/patterns"
})

const PatternService ={
    "createNewPattern": async (patternData) => {
        try {
            const res = await http.post("/", patternData)
            return res.data
        } catch(err) { throw err }
    },
    "getAllPatterns": async () => {
        try {
            const res = await http.get("/")
            return res.data
        } catch(err) { throw err }
    },
    "getOnePattern": async (id) => {
        try {
            const res = await http.get(`/${id}`)
            return res.data
        } catch(err) { throw err }
    },
    "updatePattern": async (id, data) => {
        try {
            const res = await http.put(`/${id}`, data)
            return res.data
        } catch(err) { throw err }
    },
    "deletePattern": async (id) => {
        try {
            const res = await http.delete(`/${id}`)
            return res.data
        } catch(err) { throw err }
    }
}

export default PatternService;