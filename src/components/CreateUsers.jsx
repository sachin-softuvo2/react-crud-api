import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../actions/usersAction';
import Loader from './common/Loader';

const CreateUsers = () => {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        address: '',
        contactNumber: ''
    })
    const navigate = useNavigate();
    let { firstName, lastName, userName, address, contactNumber } = state;
    const users = useSelector((state) => state.users);
    const { loading } = users;
    const dispatch = useDispatch();

    const createUserHandler = async (e) => {
        e.preventDefault();
        await dispatch(createUser(firstName, lastName, userName, address, contactNumber));
    }

    return (
        <form className='w-75 m-auto'>
            {loading && <Loader />}
            <h1 className='text-center mb-3'>Create User</h1>
            <div className="mb-3 row">
                <div className="col-sm-12">
                    <input onChange={(e) => setState({ ...state, firstName: e.target.value })} type="text" className="form-control" placeholder='enter firstName' autoComplete='true' />
                </div>
            </div>
            <div className="mb-3 row">
                <div className="col-sm-12">
                    <input onChange={(e) => setState({ ...state, lastName: e.target.value })} type="text" className="form-control" placeholder='enter lastName' autoComplete='true' />
                </div>
            </div>
            <div className="mb-3 row">
                <div className="col-sm-12">
                    <input onChange={(e) => setState({ ...state, userName: e.target.value })} type="text" className="form-control" placeholder='enter userName' autoComplete='true' />
                </div>
            </div>
            <div className="mb-3 row">
                <div className="col-sm-12">
                    <input onChange={(e) => setState({ ...state, address: e.target.value })} type="text" className="form-control" placeholder='enter address' autoComplete='true' />
                </div>
            </div>
            <div className="mb-3 row">
                <div className="col-sm-12">
                    <input onChange={(e) => setState({ ...state, contactNumber: e.target.value })} type="number" className="form-control" placeholder='enter contactNumber' autoComplete='true' />
                </div>
            </div>
            <div className='d-flex'>
                <button type='button' className='btn btn-primary' onClick={() => navigate('/')}>Back</button>
                <button type='button'
                    disabled={firstName === '' || lastName === '' || userName === '' || address === '' || contactNumber === '' || loading}
                    className='btn btn-primary d-block m-auto' onClick={(e) => createUserHandler(e)}>Create</button>
            </div>
        </form>
    )
}

export default CreateUsers