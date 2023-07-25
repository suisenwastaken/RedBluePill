import axios from "axios";

export const postQuestion = async (firstAnswer, secondAnswer, firstPic, secondPic) => {
      return { isPosted: true }
    try {
        
        const response = await axios.post('/post', { firstAnswer, secondAnswer, firstPic, secondPic });
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