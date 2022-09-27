import { createContext, useState } from 'react';

export const LoginContext = createContext(null);

const ContextProvider = ({children}) => {

    
    const [ account, setAccount ] = useState('');
    

    return (
        <LoginContext.Provider value={{ account, setAccount }}>
            {children}
        </LoginContext.Provider>
    )
}

export default ContextProvider;


// const loginCall = async event => {
//     event.preventDefault();
//     let formData = {
//       username: username,
//       password: password,
//       token: token
//     };
//     console.log("object", formData);

//     try {
//       let res = await fetch(`${config.BASE_URL}login`, {
//         method: "POST",
//         body: JSON.stringify(formData),
//         headers: { "Content-type": "application/json; charset=UTF-8" }
//       });
//       let resJson = await res.json();
//       // let data = resJson
//       console.log("fbhffff", resJson);
//       if (resJson.token) {
//         swal("Success", resJson.status, "Success", {
//           buttons: false,
//           timer: 2000
//         });
//       } else {
//         swal("No login Please try  again", {
//           buttons: false,
//           timer: 2000
//         });
//       }
//     } catch (error) {
//       console.log("error is", error);
//     }
//   };