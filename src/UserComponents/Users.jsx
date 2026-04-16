import React, { useState } from 'react'
import users from './Data'
import  './Users.css'

const Users = () => {
    const [userList, setuserList] = useState(users)

    const filterUser = (e) => {
      const value = e.target.value.toLowerCase()
      if(value === ""){
        setuserList(users)
      }else{
          const filteredUser = users.filter((user)=> user.name.toLowerCase().includes(value))
          setuserList(filteredUser)
      }
    }

  return (
    <>
      <div className="users-container">
      <div className="users-card">
        <h1 className="title">User Directory</h1>
        <p className="subtitle">Search users by name</p>

        <input
          type="text"
          placeholder="Search User"
          onChange={filterUser}
          className="search-input"
        />

        <div className="users-list">
          {userList.length > 0 ? (
            userList.map((user) => (
              <div className="user-item" key={user.id}>
                <div>
                  <h3>{user.name}</h3>
                  <p>Age: {user.age}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="no-user">No user found</p>
          )}
        </div>
      </div>
    </div>
    </>
  )
}

export default Users


 