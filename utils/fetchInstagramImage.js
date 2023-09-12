const axios = require('axios');

const fetchInstagramImage = async (url) => {
  try {
    const response = await axios.get(url);
    // Extract the required data from the response
    return response.data;
  } catch (error) {
    console.error('Error fetching Instagram image:', error);
    return null;
  }
};

module.exports = fetchInstagramImage;
