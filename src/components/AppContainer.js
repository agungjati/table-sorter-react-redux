import { ActionTypeEnum } from '../actions'
import { connect } from 'react-redux'
import { AddMember, sortingByNumber, 
    sortingByName } from '../actions'
import App from './App'

const CompareSort = {
  Number_Asc : (a,b) => (a.id > b.id) ? 1 :  -1,
  Number_Desc : (a,b) => (a.id < b.id) ? 1 :  -1,
  Name_Asc : (a,b) => (a.name > b.name) ? 1 :  -1,
  Name_Desc : (a,b) => (a.name < b.name) ? 1 :  -1,
}

const mapStateProp = (state) => {
    let { reducerMember, reducerSort } = state
    let newState = []
  
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
          default:
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
          default:
            break;
        }
      break;
      default:
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
  