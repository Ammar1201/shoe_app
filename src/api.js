import axios from 'axios';

const baseUrl = 'https://6373823c348e9472990e6f26.mockapi.io/shoes/';

export const getShoesReq = async () => {
  try {
    const res = await axios.get(baseUrl);
    const { data } = res;
    return data;
  }
  catch (error) {
    console.log(error);
  }
}

export const getShoeReq = async (id) => {
  try {
    const res = await axios.get(baseUrl + id);
    const { data } = res;
    return data;
  }
  catch (error) {
    console.log(error);
  }
}

export const addShoeReq = async (shoe) => {
  try {
    const res = await axios({
      method: 'post',
      url: baseUrl,
      data: {
        ...shoe
      }
    })
    return res.data;
  }
  catch (error) {
    console.log(error);
  }
}

export const updateShoeReq = async (toUpdateId, shoe) => {
  try {
    const res = await axios({
      method: 'put',
      url: `${baseUrl}${toUpdateId}`,
      data: {
        ...shoe
      }
    })
    return res.data;
  }
  catch (error) {
    console.log(error);
  }
}

export const deleteShoeReq = async (toDeleteId) => {
  try {
    const res = await axios({
      method: 'delete',
      url: `${baseUrl}${toDeleteId}`,
    })
    return res.data;
  }
  catch (error) {
    console.log(error);
  }
}