import fetcher from "./fetcher";
import {
} from "./types";
import { endpoint, LoginRequest, LoginReponse } from "./types";

// export function TokenBalance(body: TokenBalanceRequestBody) {
//     return fetcher<BaseResponse<TokenBalance>>(
//         `${hi.SHYFT_API_ENDPOINT}/wallet/token_balance`,
//         {
//             method: "GET",
//             headers: {
//                 "content-type": "application/json",
//                 "x-api-key": hi.SHYFT_API_KEY,
//                 // Accept: "*/*",
//                 // "Access-Control-Allow-Origin": "*"
//             },
//             body: JSON.stringify(body),
//         }
//     );
// }

export const LoginAPI = (body: LoginRequest) => {
    return fetcher<LoginReponse>(
        `${endpoint.DONACE_API_ENDPOINT}/Authentication/login`, {
        method: "POST",
        headers: {
            Accept: "*/*",
            "content-type": "application/json",
        },
        body: JSON.stringify(body),
    })
}