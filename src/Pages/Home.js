import React from 'react'

const Home = () => {
  const userName = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      hii - {userName.name}
      
    </div>
  )
}

export default Home
