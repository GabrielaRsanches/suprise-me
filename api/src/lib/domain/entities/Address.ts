import { Guid } from "guid-typescript"
import { OrderEntity } from "./Order"
import { EmailInterface } from "src/infrastructure/emailInterface"

export class AddressEntity {

    id: Guid
    name: string
    address: AddressEntity[]
    email: EmailInterface
    order: OrderEntity[]



    
}

// oi yago 