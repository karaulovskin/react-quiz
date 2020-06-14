import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-db3ec.firebaseio.com/'
})