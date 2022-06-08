import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteUser, fetchUsers, updateUser } from '../actions/usersAction';
import Loader from './common/Loader';

const AllUser = () => {

  const [userName, setUserName] = useState('')
  const [lName, setLname] = useState('')

  const usersList = useSelector((state) => state.users);
  const { loading, users } = usersList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])


  return (
    <div className='container mt-5'>
      <NavLink to="/create">
        <button type='button' className='btn btn-primary'>Create User</button>
      </NavLink>
      {loading && <Loader />}
      <ul className="list-group mt-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">userId</th>
              <th scope="col">user name</th>
              <th scope="col">name</th>
              <th scope="col">lname</th>
              <th scope="col">address</th>
              <th scope="col">contact</th>
            </tr>
          </thead>
          <tbody>
            {
                 users && users.map(user => {
                  return <tr key={user.userId}>
                    <td>{user.userId}</td>
                    <td>{user.userName}</td>
                    <td>{user.name}</td>
                    <td>{userName !== user.userName
                      ? user.lname
                      : <>
                        <input type='text' defaultValue={user.lname} onChange={(e) => setLname(e.target.value)} />
                        <button type='button' className='btn btn-primary mx-3' onClick={() => { dispatch(updateUser(userName, lName || user.lname)); setUserName('') }}>done</button>
                      </>
                    }
                    </td>
                    <td>{user.address}</td>
                    <td>{user.contact}</td>
                    <td>
                      <button type='button' className='btn btn-primary' onClick={() => setUserName(user.userName)}>Edit</button>
                      <button type='button' className='btn btn-danger mx-3' onClick={() => dispatch(deleteUser(user.userName))}>Delete</button>
                    </td>
                  </tr>
                })
            }
          </tbody>
        </table>
      </ul>
    </div>
  )
}

export default AllUser