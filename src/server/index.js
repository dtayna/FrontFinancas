import axios from 'axios';

const baseURL = 'http://localhost:8080/api/';


export const api = axios.create({
  baseURL: `${baseURL}`,
  headers: {
   'Content-Type': 'application/json',
  },
});


export const list = async (endPoint) => {
  let res = null;
  const response = await api.get(endPoint)
  if (response.status == 200) {
    return response.data;
  } else {
    throw `Erro na chamada list: ${endPoint}`;
  }
}

export const save = async (endPoint, obj) => { 
  let res = null;
  const response =  await api.post(endPoint, obj);
  if(response.status == 200){
    return response.data;
  }else{
    throw `Erro na chamada save: ${endPoint}`;
  }
}

export const remove = async (endPoint, id) => {
  const response = await api.delete(endPoint.concat(id));
  if(response.status == 200){
    return response.data;
  }else{
    throw `Erro na chamada delete: ${id}`;
  }
};

export const findById = async (endPoint,  id) => {
  const response = await api.get(endPoint,id);
  if (response.data != undefined) {
    return response.data;
  } else {
    throw `Erro na chamada findById: ${id}`;
  }
};


