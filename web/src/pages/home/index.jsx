import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'

function Home() {
  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  useEffect(() => {
    async function getUsers() {
      const usersFromApi = await api.get('/users')
      setUsers(usersFromApi.data)
      console.log(usersFromApi.data)
    }
    getUsers()
  }, [])

  async function createUsers(event) {
    event.preventDefault()

    const newUser = {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    }

    const response = await api.post('/users', newUser)

    setUsers([...users, response.data])

    inputName.current.value = ''
    inputAge.current.value = ''
    inputEmail.current.value = ''
  }

  async function deleteUsers(id) {
    try {
      await api.delete(`/users/${id}`)
      setUsers(users.filter(user => (user.id || user._id) !== id))
    } catch (error) {
      console.error("Erro ao deletar usuário:", error)
    }
  }

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input type="text" placeholder="Nome" id="nome" ref={inputName} />
        <input type="number" placeholder="Idade" id="idade" ref={inputAge} />
        <input type="email" placeholder="Email" id="email" ref={inputEmail} />
        <button type="submit" onClick={createUsers}>Cadastrar</button>
      </form>

      {users.map(user => {
        const userId = user.id || user._id;
        return (
          <div key={userId} className='card'>
            <div>
              <p>Nome: <span>{user.name}</span></p>
              <p>Idade: <span>{user.age}</span></p>
              <p>Email: <span>{user.email}</span></p>
            </div>
            <button onClick={() => deleteUsers(userId)}>
              <img src={Trash} alt="Imagem de lixeira(remover)" />
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Home
