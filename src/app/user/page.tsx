import React from 'react'

const User = async() => {
    await new Promise((resolve)=>{
       setTimeout(()=>{
        resolve("Content is Loading")
       },6000)
    })
  return (
    <div>
      User
    </div>
  )
}

export default User
