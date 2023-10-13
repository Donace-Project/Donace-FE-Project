import { type } from "os"

export type EndPoint = {
    DONACE_API_ENDPOINT: string
}
export const endpoint: EndPoint = {
    DONACE_API_ENDPOINT: "https://dev-be-du-an-tot-nghiep.azurewebsites.net/api",
}

export type BaseResponse<T> = {
    success: boolean
    message: string
    result: T
}

export type LoginRequest = {
    email: string,
    password: string
}

export type LoginReponse = {
    token: string
}