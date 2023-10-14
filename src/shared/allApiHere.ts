import fetcher from "./fetcher";
import {
} from "./types";
import { endpoint, LoginRequest, LoginReponse } from "./types";
import axios from "../../node_modules/axios/dist/browser/axios.cjs"


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

// const axios = require('./'); // browser

export const LoginAPI = (body: any) => {
    // return fetcher<LoginReponse>(
    //     `${endpoint.DONACE_API_ENDPOINT}/api/Authentication/login`, {
    //     method: "POST",
    //     headers: {
    //         Accept: "*/*",
    //         "content-type": "application/json",
    //     },
    //     body: JSON.stringify(body),
    // })
    
    let data = JSON.stringify({
        "email": "bao@demo.com",
        "password": "bao123"
      });
      
      let config = {
        method: 'post',
        withCredentials: true,
        maxBodyLength: Infinity,
        url: 'https://localhost:8000/api/Authentication/login',
        headers: { 
          'accept': 'text/plain', 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
      
}

