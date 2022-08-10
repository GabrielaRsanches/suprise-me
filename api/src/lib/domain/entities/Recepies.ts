import { Guid } from "guid-typescript"
import { OrderEntity } from "./Order"
import { EmailInterface } from "api/interfaces/emailInterface" 

export class RecepiesEntity {

    id: Guid
    name: string
    address: AddressInterface
    email: EmailInterface
    order: OrderEntity[]


    
    
}
