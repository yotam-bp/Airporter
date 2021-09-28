import axios from 'axios';

export const getflightsData = async (query,begin,end,airport) => {
   try {
       console.log('api',query,begin,end,airport);
        const { data } = await axios.get(`https://yotybp:8Kbey.aWz.hr4Cp@opensky-network.org/api/flights/${query}?airport=${airport}&begin=${begin}&end=${end}`);
        return data;
    } catch (error) {
        console.log(error);
    }
};




