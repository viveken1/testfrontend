import { SERVER_URL } from "./SERVER_URL"
import { commonAPI } from "./commonAPI"

export const registerAPI = async (reqBody) =>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
}

export const getallUsersAPI = async () =>{
    return await commonAPI("GET",`${SERVER_URL}/allusers`,"")
}