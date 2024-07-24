export const fetchTrackingData = async (courier, awb) => {
    const apiKey = 'e6ec4c84e753fea9e2b006bd4cba8eaa09c9a34c63ad03662e45c110c2d0b2e8';
    const url = `https://api.binderbyte.com/v1/track?api_key=${apiKey}&courier=${courier}&awb=${awb}`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    return data;
  };
  