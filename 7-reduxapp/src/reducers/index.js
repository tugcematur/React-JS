import {combineReducers} from 'redux'

const personelReducers = () =>  {
    return [
        {id: 1,  name: 'Şamil', salary: '3000'},
        {id: 2,  name: 'Selen', salary: '2000'},
        {id: 3,  name: 'Ali', salary: '4000'},
        {id: 4,  name: 'Veli', salary: '5000'},
    ];
};
const selectedPersonelReducer = (selectedPersonel = null, action) => {
   
 
  
if (action.type === 'PERSONEL_SELECTED') {
    return action.payload
} else {
   return selectedPersonel 
}
 
}
export  default combineReducers ({
    personels : personelReducers,
    selectedPersonel: selectedPersonelReducer
});