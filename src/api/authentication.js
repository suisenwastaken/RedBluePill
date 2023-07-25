import axios from "axios";

export const login = async (userName, password) => {
     return { isLoggedIn: true }
    try {
        
        const response = await axios.post('/lortrgin', { userName, password });
        // console.log(response);
        // const reds = await response;
        // console.log(reds);
        if (response.status === 200) {
            alert("Вы успешно зашли!")
            return { isLoggedIn: true }
        }
    } catch (error) {
        console.error('Ошибка входа:', error);
        alert("Произошла ошибка!")
        return { isLoggedIn: false, error: error }
    }
};