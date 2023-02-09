import React, { useState } from 'react'
import './MyForm.css'

const MyForm = () => {

  //Gerenciamento de dados:

  const [name, setName]= useState()
  const [email, setEmail]= useState()

  const handleName = (e)=>{
    setName(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log('Enviando formulário...')
    console.log(name,email)
  }

  //console.log(name)
  //console.log(email)

  return (
    <div className='principal'>
        <form onSubmit={handleSubmit}>
            <div>
            {/*Exemplos de label por fora do input fazendo a ligação entre htmlFor e name e a label envolvendo o input sem
            precisar dos recursos de htmlFor */}
            
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" id="name" placeholder='Digite seu nome...' onChange={handleName}/>

            <label>
              <span>Email:</span>
              <input type="email" name="email" placeholder='exemplo@email.com' onChange={(e)=> setEmail(e.target.value)}/>
            </label>

            </div>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm