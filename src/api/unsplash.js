import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 2d683a242b174617a07ce0963d8ee89e50220f5b9166d2706bc9c88f38dd1ace'
    }
});