import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../helpers/persistance-storage'
import { logoutUser } from '../slice/auth'

const Navbar = () => {
    const { loggedIn, user } = useSelector(state => state.auth)
    const navigation = useNavigate()
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logoutUser())
        removeItem('token')
        navigation('/login')
    }

    console.log(loggedIn);

    return (
        <div className='container p-3 bg-secondary'>
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <Link to={'/'}>
                    <img src={logo} width={100} alt="logo" />
                </Link>

                <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    {loggedIn ? (
                        <>
                            <p className="me-3 m-0 py-2 link-body-emphasis text-white text-decoration-none">{user.username}</p>
                            <Link className="me-3 link-body-emphasis text-white text-decoration-none" to={'/create-article'}><button className='btn btn-success'>Create atribute</button></Link>
                            <button className='btn btn-danger' onClick={logoutHandler}>Logout</button>
                        </>
                    ) :
                        (
                            <>
                                <Link className="me-3 py-2 link-body-emphasis text-white text-decoration-none" to={'/login'}>Login</Link>
                                <Link className="me-3 py-2 link-body-emphasis text-white text-decoration-none" to={'/register'}>Register</Link>
                            </>
                        )
                    }

                </nav>
            </div>
        </div>
    )
}

export default Navbar
