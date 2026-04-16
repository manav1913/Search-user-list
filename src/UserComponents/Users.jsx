import React, { useState } from 'react'
import users from './Data'

const Users = () => {
    const [userList, setuserList] = useState(users)

    const filterUser = (user) => {
      if(user.target.value === ""){
        setuserList(users)
      }
    }

  return (
    <>
    <input type="text" placeholder='Search User' onChange={filterUser} />
    <div>
      {userList.map((user)=><div key={user.id}>
        <h3>{user.name} • {user.age}</h3>
      </div>)}
    </div>
    </>
  )
}

export default Users
