import api from './api';

// export const fetchAll = () => dispatch => {
// //FETCH ALL CONTACT
//   api.Contacts().fetchAll()
//       .then(res => {
//           dispatch({
//               type: "FETCH_ALL",
//               payload: res.data
//           })
//       })
//       .catch(err => console.log(err))

// }
//ADD CONTACT
export const addContact = (contact) => dispatch => {

    console.log(contact);
      dispatch({
          type: "CREATE_CONTACT",
          payload: contact
      })
    }
 
//GET CONTACT BY ID
export const getContact = (id) => ({
  type: "GET_CONTACT",
  payload : id,
  })

//UPDATE BY ID
export const UpdateContact = (id,data) => dispatch => {
  
          dispatch({
              type: "UPDATE_CONTACT",
              payload: data
          })
   
}
//DELETE BY ID
export const deleteContact = (id) => dispatch =>{

            dispatch({
                type: "DELETE_CONTACT",
                payload: id
            })
        
        
}