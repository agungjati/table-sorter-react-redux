let no = 1
export const ActionTypeEnum = {
    ADD_MEMBER : "ADD_MEMBER",
    SORT_NO : "SORTING_NUMBER",
    SORT_NAME : "SORTING_NAME",
    SORT: "SORT"
}

export const AddMember =  (name, age) => ({
    id : no++,
    type : ActionTypeEnum.ADD_MEMBER,
    name : name,
    age : age
})

export const sortingByNumber = (asc) => ({
    type : ActionTypeEnum.SORT_NO,
    asc : asc
})

export const sortingByName = (asc) => ({
    type : ActionTypeEnum.SORT_NAME,
    asc : asc
})

export const CompareSort = {
    Number_Asc : (a,b) => (a.id > b.id) ? 1 :  -1,
    Number_Desc : (a,b) => (a.id < b.id) ? 1 :  -1,
    Name_Asc : (a,b) => (a.name > b.name) ? 1 :  -1,
    Name_Desc : (a,b) => (a.name < b.name) ? 1 :  -1,
}