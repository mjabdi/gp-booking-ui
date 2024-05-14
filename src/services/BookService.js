import API from './api';

export default class BookService {

    static bookAppointment = (payload) =>
    {
       return API.post("/api/paediatrician/book/bookappointment", payload);
    }

    static getNewReference = () =>
    {
        return API.get('/api/book/getnewreference');
    }

    static getBookingById = (id) =>
    {
        return API.get(`/api/book/paediatrician/getbookingbyid?id=${id}`);
    }

}