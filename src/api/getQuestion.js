import axios from "axios";

export const getQuestion = async (id) => {
      return { 
        firstTitle: "Машина",
        secondTitle: "Девушка",
        firstPic :"https://cdn.forbes.ru/files/c/1082x683/photo_galleries/1920-02_tcm-3173-1834873.jpg__1582289253__55999.webp",
        secondPic : "https://avatars.dzeninfra.ru/get-zen_doc/1532998/pub_5de4fdf898fe7900ad8ec707_5de4fe0204af1f00b27079c5/scale_1200",
        firstPercent: 40,
        secondPercent: 60 }
    try {
        
        const response = await axios.get('/get', { id });
        // console.log(response);
        // const reds = await response;
        // console.log(reds);
        if (response.status === 200) {
            return { isGeted: true }
        }
    } catch (error) {
        console.error('Ошибка получения:', error);
        return { isGeted: false, error: error }
    }
};