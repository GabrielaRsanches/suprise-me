import { Guid } from "guid-typescript";
import { AddressInterface } from "api/interfaces/addressInterface";
import { EmailInterface } from "api/interfaces/emailInterface";
import { OrderEntity } from "./Order";

export class Buyer {

    id: Guid
    address: AddressInterface
    email: EmailInterface
    order: OrderEntity[]
    preferences: string


    updateAccount(){
        
    }

    deleteAccount(){

    }

    listOfOrders(){

    }

    savePreferences(){

    }

}