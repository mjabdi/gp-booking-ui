import API from './api';

export default class PaymentService {

    static doPayment = (payload) =>
    {
       return API.post("/api/paediatrician/payment/dopayment", payload);
    }


}