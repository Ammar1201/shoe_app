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

export const addShoe = async () => {
  try {

  }
  catch (error) {
    console.log(error);
  }
}

export const updateShoe = async () => {
  try {

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