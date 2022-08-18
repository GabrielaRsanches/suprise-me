import { Guid } from "guid-typescript";
import { paymentMethodEnum } from "api/domain/services/paymentService";


export class PaymentEntity {

    id: Guid
    method: paymentMethodEnum
    token: string
    
}