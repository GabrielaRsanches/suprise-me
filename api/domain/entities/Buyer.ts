import { Guid } from "guid-typescript";
import { AddressInterface } from "api/domain/interfaces/addressInterface";
import { EmailInterface } from "api/domain/interfaces/emailInterface";
import { OrderEntity } from "./Order";
import { BuyersController } from "api/controllers/buyers.controller";


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