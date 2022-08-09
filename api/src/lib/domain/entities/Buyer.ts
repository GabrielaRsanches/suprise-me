import { Guid } from "guid-typescript";
import { AddressEntity } from "./Address";
import { EmailInterface } from "src/infrastructure/emailInterface";
import { OrderEntity } from "./Order";

export class Buyer {

    id: Guid
    address: AddressEntity[]
    email: EmailInterface
    order: OrderEntity[]


}