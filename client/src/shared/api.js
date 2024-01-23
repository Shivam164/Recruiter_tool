import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;

export const getAllCandidates = async () => {

  try{
      const { data } = await axios.get (`${apiUrl}/api/candidate/getAllCandidates`);
      return data;
  }catch(error){
      throw error;
  }
}

export const getSingleCandidate = async (id) => {

  try{
    const config = {
      headers : {
        "Content-Type" : "application/json"
      }
    }

    const { data } = await axios.get(
      `${apiUrl}/api/candidate/getSingleCandidate?id=${Number(id)}`,
      config);

    return data;
  }catch(error){
      throw error;
  }
}

export const addCandidate = async ({ name, emailId, phone, reactJS, nodeJS, expected_salary, current_status }) => {
  try{
    const config = {
      headers : {
        "Content-Type" : "application/json"
      }
    }

    const BODY = {
      name: name,
      emailId: emailId,
      phone: phone,
      reactJS: Number(reactJS),
      nodeJS: Number(nodeJS),
      expected_salary: Number(expected_salary),
      current_status: current_status,
    }

    const response = await axios.post(
      `${apiUrl}/api/candidate/addCandidate`,
      BODY,
      config);

  }catch(error){
    throw error;
  }
}

export const updateCandidate = async ({ name, emailId, phone, reactJS, nodeJS, expected_salary, current_status }) => {
  try{
    const config = {
      headers : {
        "Content-Type" : "application/json"
      }
    }

    const BODY = {
      name: name,
      emailId: emailId,
      phone: phone,
      reactJS: Number(reactJS),
      nodeJS: Number(nodeJS),
      expected_salary: Number(expected_salary),
      current_status: current_status,
    }

    const response = await axios.put(
      `${apiUrl}/api/candidate/updateCandidate`,
      BODY,
      config);

  }catch(error){
    throw error;
  }
}

export const deleteCandidate = async (email) => {
  try{
    const config = {
      headers: {
        "Content-Type" : "application/json"
      },
      data: {
        emailId: email,
      }
    };

    const response = await axios.delete(
      `${apiUrl}/api/candidate/deleteCandidate`,
      config);

  }catch(error){
    throw error;
  }
}