import { ActionTypeEnum } from '../actions'
import { connect } from 'react-redux'
import { AddMember, sortingByNumber, 
    sortingByName, CompareSort } from '../actions'
import App from './App'

const mapStateProp = (state, dispatch) => {
    let { reducerMember, reducerSort } = state
    let newState = []
  
    //  if(reducerSort.type == ActionTypeEnum.SORT_NAME)
    //  {
    //    if(reducerSort.asc) 
    //       newState = reducerMember.sort(CompareSort.Name_Asc)
    //     else
    //       newState = reducerMember.sort(CompareSort.Name_Desc)
  
    //  }else {
       
    //   if(reducerSort.asc) 
    //       newState = reducerMember.sort(CompareSort.Number_Asc)
    //     else
    //       newState = reducerMember.sort(CompareSort.Number_Desc)
    //  }
debugger
    switch(reducerSort.type)
    {
      case ActionTypeEnum.SORT_NAME:
        switch(reducerSort.asc){
          case true :
            newState = reducerMember.sort(CompareSort.Name_Asc)
            break;
          case false:
            newState = reducerMember.sort(CompareSort.Name_Desc)
            break;
          
        }
      break;
      case ActionTypeEnum.SORT_NO :
        switch(reducerSort.asc){
          case true :
            newState = reducerMember.sort(CompareSort.Number_Asc)
            break;
          case false:
            newState = reducerMember.sort(CompareSort.Number_Desc)
            break;
        }
      break;
    }

    return { list : newState }
  }
  
  const mapDispatchProp = (dispatch) => ({
    AddNewMember : (name, age) => dispatch(AddMember(name, age)),
    SortName : (asc) => dispatch(sortingByName(asc)) ,
    SortNumber : (asc) => dispatch(sortingByNumber(asc))
  })
  
  export default connect(mapStateProp, mapDispatchProp, 
                null, { pure: false })(App)
  