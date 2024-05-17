import axios from "axios";

const apiKey = "11aa0db00c0f3928bded35d7b525d361"

const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
  });

  export const fetchWeatherData = async (city) => {
    try {
      const response = await api.get('/forecast', {
        params: {
          q: city,
          appid: apiKey,
          units: 'metric', 
        },

        
      });
  
      console.log('Alınan Veri:', response.data);

      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
