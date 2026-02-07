import { useRef } from 'react'
import api from '../../services/api.js'
import Button from '../../components/button'
import TopBackground from "../../components/TopBackground";
import { useNavigate } from 'react-router-dom';

import {
  Title, Container, Form, ContainerInputs, Input,
  InputLabel
} from './styles.js'
/*export*/ function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser() {
    await  api.post('/usuarios', {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value),
      email: inputEmail.current.value
    })
  }

  return (
    <Container>
      <TopBackground />
      <Form>
        <Title>Cadastrar Usuários</Title>

        <ContainerInputs>
            <div>
              <InputLabel>Nome<span> *</span></InputLabel>
              <Input type="text" placeholder='Nome do Usuário' ref={inputName}/>
            </div>

            <div>
              <InputLabel>Idade<span> *</span></InputLabel>
              <Input type="number" placeholder='Idade do Usuário' ref={inputAge} />
            </div>
        </ContainerInputs>

        <div style={{width: '100%'}}>
          <InputLabel>E-mail<span> *</span></InputLabel>
          <Input type="email" placeholder='E-mail do Usuário' ref={inputEmail} />
        </div>

        <Button type='button' onClick={() => { registerNewUser(); window.alert("Usuário cadastrado com sucesso"); }} theme='primary'>Cadastrar Usuário</Button>
      </Form>
       <Button type='button' onClick={() => navigate('/listagem-de-usuarios')}>Ver Lista de Usuários</Button>

    </Container >
  )
}

/*export function App2() {


  return (
    <div>

      <h1>Vite + React</h1>

    </div>
  )
}*/

export default Home //se tiver mais de uma coisa pra exportar nao pode usar o default aí usa só o export

/*
  Exportar "Padrão" -> uma coisa só por página
  Apenas Exportar -> várias coisas por página
*/