import * as types from '../constants/ActionTypes';

export const AddtoItem=(product)=>{
        return{
            type:types.ADD_TO_PRODUCTS,
            product
        }
}
export const AddtoMenu=(NewItem)=>{
    return{
        type:types.ADD_TO_MENU,
        NewItem 
    }
}
export const AddtoItemHot=(itemHot)=>{
    return{
        type:types.ADD_ITEM_HOT,
        itemHot 
    }
}
export const AllProducts=(AllProduct)=>{
    return{
        type:types.ALL_PRODUCTS,
        AllProduct 
    }
}
