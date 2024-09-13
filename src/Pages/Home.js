import React from 'react'

const Home = () => {
  const name = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      hii - {name.name}
      
    </div>
  )
}

export default Home
