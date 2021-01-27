import axios from "axios"
import { async } from "regenerator-runtime"

export default {
    install (Vue) {
        Vue.prototype.$search = async ({ searchText }) => {
            const { data } = await axios.get(`https://trusting-williams-8cacfb.netlify.app/.netlify/functions/search?apiKey=${process.env.API_KEY}&searchText=${searchText}`)
            return data
        }
    }
}