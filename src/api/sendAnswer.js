import axios from "axios";

export const sendAnswer = async (id, answer) => {
      return { isPosted: true }
    try {
        
        const response = await axios.post('/sendAnswer', { id, answer });
        // console.log(response);
        // const reds = await response;
        // console.log(reds);
        if (response.status === 200) {
            return { isPosted: true }
        }
    } catch (error) {
        console.error('Ошибка поста:', error);
        return { isPosted: false, error: error }
    }
};