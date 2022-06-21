import * as constantBooks from '../constants/constantBooks';
export const findBook=(payload)=>{
    return {
        type:constantBooks.FIND_BOOK,
        payload
    }
}
export const getBook=(payload)=>{
    
    return {
        type:constantBooks.GET_BOOK,
        payload
    }
}
export const getBreakCrumb=(payload)=>{
    return {
        type:constantBooks.GET_BREAKCRUMB,
        payload
    }
}