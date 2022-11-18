import axios from 'axios';

const baseUrl = 'https://6373823c348e9472990e6f26.mockapi.io/shoes/';

export const getShoes = async () => {
  try {
    const res = await axios.get(baseUrl);
    const { data } = res;
    return data;
  }
  catch (error) {
    console.log(error);
  }
}

export const getShoe = async (id) => {
  try {
    const res = await axios.get(baseUrl + id);
    const { data } = res;
    return data;
  }
  catch (error) {
    console.log(error);
  }
}

export const addShoe = async () => {
  try {

  }
  catch (error) {
    console.log(error);
  }
}

export const updateShoe = async (toUpdateId, shoe) => {
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

export const deleteShoe = async () => {
  try {

  }
  catch (error) {
    console.log(error);
  }
}