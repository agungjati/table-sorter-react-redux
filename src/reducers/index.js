import { ActionTypeEnum } from '../actions'
import { combineReducers } from 'redux'


const reducerMember = ( state = [] , action) => {
    switch(action.type) {
        case ActionTypeEnum.ADD_MEMBER :
            return [
                ...state,
                {
                   id: action.id,
                    name : action.name,
                    age : action.age
                }
            ]
        case ActionTypeEnum.SORT :
        default :
            return state
    }
}

const reducerSort = ( state = { type : ActionTypeEnum.SORT_NO, asc : true },
                    action) => {
    
    switch(action.type) {
        case ActionTypeEnum.SORT_NO :
        case ActionTypeEnum.SORT_NAME :
            return { type : action.type, asc : action.asc }
        default :        
            return state    
    }
}

export default combineReducers({ reducerMember, reducerSort })