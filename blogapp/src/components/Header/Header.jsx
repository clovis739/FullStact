import React from 'react'
import {Container} from '../container/Container'
import Logo from '../Logo'
import { Link } from 'react-router-dom'
import LogoutBtn from './LogoutBtn'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'



function Header() {
  const authStatus = useSelector((state) => state.
  auth.status)

  const navigate = useNavigate()

  const navItems = [
    // having multiple objects here in this array
    {
      name: "Home",
      slug: "/",
      active: true

    },
    {
      name: "Login",
      slug: "/login",
      // if a user is loged in here he wont get to see this login button in the home or navigation bar
      // he would only see if he isint and that means his 
      // his authStatus would be false and not true
      active: !authStatus

    },
    {
      name: "SignUp",
      slug: "/signup",
      // if a user is loged in here he wont get to see this login button in the home or navigation bar
      // he would only see if he isint and that means his 
      // his authStatus would be false and not true
      active: !authStatus

    },
    {
      name: "All Posts",
      slug: "/all-posts",
      // all post is set to be ture that is if only a user is registered
      // before he can see if meaning active state should be true 
      active: authStatus

    },
    {
      name: "Add Post",
      slug: "/add-post ",
      // all post is set to be ture that is if only a user is registered
      // before he can see if meaning active state should be true 
      active: authStatus

    },
  ]
  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to={"/"} >
            <Logo/>
            </Link>
          </div>

          <ul className="flex ml-auto">
            {
              // using {Item} to represent to all objects in the arry of navitems
              navItems.map((item) => item.active ? (
                <li key={item.name} className="">
                  <button 
                  onClick={() => navigate(item.slug)}
                  className="
                  inline-block px-6 py-2 
                        duration-200 hover:bg-blue-100 
                        rounded-full">
                          {item.name}


                  </button>
                </li>
              ) : null)
              // instaed of using null  value wer could display other empty components for the suer
              // checking if a user is active nthen display the nav 
              // items if he is not the display nll
            }
            {authStatus && (
              <li>
                <LogoutBtn/>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
 