import React from 'react'

const Perfil = ({children}) => {
  return (
     <div className='Perfil'>
     <img src="https://placehold.co/200x200" alt="" />
     <p>@{children}</p>
     </div>
  )
}

export default Perfil
