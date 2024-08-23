import { createSlice } from '@reduxjs/toolkit'

// every initial state slice should have a state so it can know how to behave and what to do when it is called 
// 

const initialState = {
    // we are using this to keep tract of authentiocation of usres 
    // false meaning the user is not authenticated here
    status: false,
    // using the user data here if it  filled up meaning it will be there if not then it is null
    // this data will be giving to us by the appwrite from the backend here
    // such as the uer name , email , numbers anything that we have asked from the user
    userData: null
}


const authSlice = createSlice({
    // creating our slice which takes objects as parametters here
    // naming what  all our slices will be called . we can have many slices here so the names too will be like and array of names here
    // so we called this one Auth  for authentication use only
    name: "auth",
    initialState,
    reducers: {
        // this is an object where we create all our methods ()in here of what we are tracking
        login: (state, action)=>{
            // state what dey have inside the store 
            // action what they give back to us 
            state.status = true;
            // kif the user is loggin then it is true
            state.userData = action.payload.userData
            // this will only be accessed if a user in login in the system if not u cant have acces to all this 
        },
        logout: (state)=>{
            state.status = false;
            state.userData = null 
        }
    }
})


export const { login, logout } = authSlice.actions

export default authSlice.reducer