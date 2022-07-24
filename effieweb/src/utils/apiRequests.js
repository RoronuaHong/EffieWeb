import axios from 'axios'

export const getRequest = async(url, payload = {}) => {
  const data = await axios.get(url, payload)
    .then(res => 
      res.data
    ).catch(err => ({
      error: err.response.data
    }))

    return data
}

export const postRequest = async(url, payload = {}) => {
  const data = await axios.post(url, payload)
    .then(res => 
      res.data
    ).catch(err => ({
      error: err.response.data
    }))

    return data
}

export const putRequest = async(url, payload = {}) => {
  const data = await axios.put(url, payload)
    .then(res => 
      res.data
    ).catch(err => ({
      error: err.response.data
    }))
    
    return data
}

export const deleteRequest = async(url, payload = {}) => {
  const data = await axios.delete(url, payload)
    .then(res => 
      res.data
    ).catch(err => ({
      error: err.response.data
    }))

    return data
}

