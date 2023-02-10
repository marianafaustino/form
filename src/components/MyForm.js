import React, { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {

  //Gerenciamento de dados:

  const [name, setName]= useState(user ? user.name : '')
  const [email, setEmail]= useState(user ? user.email : '')
  const [bio,setBio]= useState('')
  const [role, setRole]= useState('')

  const handleName = (e)=>{
    setName(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log('Enviando formulário...')
    console.log(name,email,bio,role)

    //limpando o form
    setName("")
    setEmail("")
    setBio("")
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
            <input 
            type="text" 
            name="name"
            placeholder='Digite seu nome...' 
            value={name} 
            onChange={handleName}/>

            <label>
              <span>Email:</span>
              <input 
              type="email" 
              name="email" 
              placeholder='exemplo@email.com' 
              value={email} 
              onChange={(e)=> setEmail(e.target.value)}/>
            </label>

            <label>
              <span>Bio:</span>
              <textarea 
              name="bio" 
              placeholder='Faça uma breve descrição sobre você...' 
              onChange={(e)=> setBio(e.target.value)} 
              value={bio} >
              </textarea>
            </label>

            <label>
              <span>Função no sistema:</span>
              <select name="role" onChange={(e)=> setRole(e.target.value)}>
                <option value="user">Usuário</option>
                <option value="editor">Editor</option>
                <option value="admin">Administrador</option>
              </select>
            </label>

            </div>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm