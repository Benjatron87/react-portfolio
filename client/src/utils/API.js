import axios from 'axios';

export default {
    sendForm: function(emailData) {
       return axios.post('/email', emailData)
    }
}