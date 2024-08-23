import { StrictMode } from 'react'
import { createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from './pages/Home.jsx'
import Protected from './components/AuthLayout.jsx'
import Login from './components/pages/Login.jsx'
import Signup from './components/pages/Signup.jsx'
import  AllPost from './components/pages/AllPost.jsx'
import AddPost from './components/pages/AddPost.jsx'
import EditPost from './components/pages/EditPost.jsx'
import Post from './components/pages/Post.jsx'
import Home from './components/pages/Home.jsx'



 
const router = createBrowserRouter([
  {
    // taking some objects for the routing stating from the app to the home 
    path: "/",
    element : <App/>,
    children: [
     { // what follows next after the app which is the home screen 
      // called and array of children being passed in to the app here
      path: "/",
      Element: <Home/>
    },
    {
      // providing a mechanism where users can not get acces to the other pages if they arent loged in or authenticated in to the system 
      path: "/login",
      element: (
        // using parenthesis so we make our work easier to load all the neccessary screen from the here
        <Protected authentication = {false}>
          {/* this taking a prop of authentication false  */}
          {/* wrapping all our elements here with the Protected componet where all the logics are found 
          for users not to have acces to all post and other pages if they are not loged in or signup in to the
          system . except they have before they would so we used the authLoayout to componenet as a wrapper */}
          <Login />
        </Protected>
      )
    },
    {
      // providing a mechanism where users can not get acces to the other pages if they arent loged in or authenticated in to the system 
      path: "/signup",
      element: (
        // using parenthesis so we make our work easier to load all the neccessary screen from the here
        <Protected authentication = {false}>
          {/* this taking a prop of authentication false  */}
          {/* wrapping all our elements here with the Protected componet where all the logics are found 
          for users not to have acces to all post and other pages if they are not loged in or signup in to the
          system . except they have before they would so we used the authLoayout to componenet as a wrapper */}
          <Signup />
        </Protected>
      )
    },
    {
      // providing a mechanism where users can not get acces to the other pages if they arent loged in or authenticated in to the system 
      path: "/all-posts",
      element: (
        // using parenthesis so we make our work easier to load all the neccessary screen from the here
        <Protected authentication>
        {/* <Protected authentication = {true}> onlly  if you are loggin which should be true then u 
        can see allPost here if not then u can not see anythin  */}
          {/* this taking a prop of authentication false  */}
          {/* wrapping all our elements here with the Protected componet where all the logics are found 
          for users not to have acces to all post and other pages if they are not loged in or signup in to the
          system . except they have before they would so we used the authLoayout to componenet as a wrapper */}
          <AllPost />
        </Protected>
      )
    },
    {
      // providing a mechanism where users can not get acces to the other pages if they arent loged in or authenticated in to the system 
      path: "/add-posts",
      element: (
        // using parenthesis so we make our work easier to load all the neccessary screen from the here
        <Protected authentication>
        {/* <Protected authentication = {true}> onlly  if you are loggin which should be true then u 
        can see allPost here if not then u can not see anythin  */}
          {/* this taking a prop of authentication false  */}
          {/* wrapping all our elements here with the Protected componet where all the logics are found 
          for users not to have acces to all post and other pages if they are not loged in or signup in to the
          system . except they have before they would so we used the authLoayout to componenet as a wrapper */}
          <AddPost />
        </Protected>
      )
    },
    {
      // providing a mechanism where users can not get acces to the other pages if they arent loged in or authenticated in to the system 
      path: "/edit-post/:slug",
      element: (
        // using parenthesis so we make our work easier to load all the neccessary screen from the here
        <Protected authentication>
        {/* <Protected authentication = {true}> onlly  if you are loggin which should be true then u 
        can see allPost here if not then u can not see anythin  */}
          {/* this taking a prop of authentication false  */}
          {/* wrapping all our elements here with the Protected componet where all the logics are found 
          for users not to have acces to all post and other pages if they are not loged in or signup in to the
          system . except they have before they would so we used the authLoayout to componenet as a wrapper */}
          <EditPost />
        </Protected>
      )
    },
    {
      // providing a mechanism where users can not get acces to the other pages if they arent loged in or authenticated in to the system 
      path: "/post/:slug",
      element: (
        // using parenthesis so we make our work easier to load all the neccessary screen from the here
        <Protected authentication>
        {/* <Protected authentication = {true}> onlly  if you are loggin which should be true then u 
        can see allPost here if not then u can not see anythin  */}
          {/* this taking a prop of authentication false  */}
          {/* wrapping all our elements here with the Protected componet where all the logics are found 
          for users not to have acces to all post and other pages if they are not loged in or signup in to the
          system . except they have before they would so we used the authLoayout to componenet as a wrapper */}
          <Post />
        </Protected>
      )
    }
    ]
  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />

    </Provider>
    
  </StrictMode>,
)
