import React from 'react'

const TableUsers = ({users,openModal}) => {

    const handleOnClickUser = (user) => {
        return () => {
            openModal(user)
        }
    }
    return (
        <>
        <table className="table table-striped table-bordered table-custom mb-3 mt-3 w-75">
            <thead className="bg-success text-white">
                <tr>
                <th scope="col" className='w-10'>id</th>
                <th scope="col" className='w-30'>Username</th>
                <th scope="col" className='w-30'>Email</th>
                <th scope="col"className='w-30'>Address</th>
                </tr>
            </thead>

            <tbody>
            {users.map((user) => (
                <tr key={user.id}  onClick={handleOnClickUser(user)} data-toggle="modal" data-target="#myModal">
                <th scope="row">{user.id}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.street}</td>
                </tr>      
        ))}
            </tbody>
        </table>
        </>
    )
}

export default TableUsers