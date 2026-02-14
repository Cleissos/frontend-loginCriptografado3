// const API_URL = "http://localhost:8080/api/usuarios";

// export const cadastrarUsuario = async (userData) => {
//     const response = await fetch(`${API_URL}/register`, {
//         method: 'POST',
//         headers: {
//             'Content-Type':'application/json'
//         },
//         body: JSON.stringify(userData)
//     })

//     return response;
// }

// export const listarUsuarios = async() => {
//     const response = await fetch(`${API_URL}/user`, {
//         method: 'GET',
//         headers: {
//             'Content-Type':'application/json'
//         }
//     })

//     if (!response) {
//         throw new Error("Erro ao buscar usuários.");
//     }

//     return response.json();
// }

// export const loginUsuario = async(credentials) => {
//     const response = await fetch(`${API_URL}/login`, {
//         method: 'POST',
//         headers: {
//             'Content-Type':'application/json'
//         },
//         body: JSON.stringify(credentials)
//     })

//     return response;
// }

const API_URL = process.env.REACT_APP_API_URL;

export const cadastrarUsuario = async (userData) => {
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(userData)
    })

    return response;
}

export const listarUsuarios = async() => {
    const response = await fetch(`${API_URL}/user`, {
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }
    })

    if (!response.ok) {  // <- melhor verificar ok do que só se existe response
        throw new Error("Erro ao buscar usuários.");
    }

    return response.json();
}

export const loginUsuario = async(credentials) => {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(credentials)
    })

    return response;
}
