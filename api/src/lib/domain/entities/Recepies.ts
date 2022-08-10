import { Guid } from "guid-typescript"



export type Ingredients = [{

}]

export class RecepiesEntity {

    id: Guid
    name: string
    ingredients: Ingredients[]
    stepByStep: string

    
    addRecipe(){

    }
    
    deleteRecipe(){
        
    }

    updateRecipe(){

    }

}
