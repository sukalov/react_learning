import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/notes'
const config = {headers: { CORS: 'Access-Control-Allow-Origin'}}

const getAll = async () => {
    const request = axios.get(baseUrl, config)
    return request.then(response => response.data)
  }

const create = async (newObject) => {
  const request = axios.post(baseUrl, newObject)
  const response = await request
  return response.data
}

const update = async (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

// eslint-disable-next-line
export default { 
    getAll,
    create,
    update 
}