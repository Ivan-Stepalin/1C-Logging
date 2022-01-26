import axios from "axios"
import {BASE_URL} from "../../../../../utils/defaultValues"

const instance = axios.create({
	baseURL: BASE_URL
})

export default {
	postFeedback: async function (params) {
		return instance.post("/v1/tech/send_message/", params)
	}
}
