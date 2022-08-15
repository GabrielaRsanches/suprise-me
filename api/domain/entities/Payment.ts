import { Guid } from "guid-typescript";
import { paymentMethodEnum } from "api/infra/services/paymentService";


export class PaymentEntity {

    id: Guid
    method: paymentMethodEnum
    token: string
    
}