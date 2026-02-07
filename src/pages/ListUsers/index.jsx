import Button from "../../components/button";
import api from "../../services/api";
import { useEffect, useState } from "react";
import TopBackground from "../../components/TopBackground";
import Trash from "../../assets/trash.svg";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Title,
  ContainerUsers,
  CardUsers,
  TrashIcon,
  AvatarUser,
} from "./styles";

function ListUsers() {
  //TODA vez que o useEffect for chamado, essa função será executada
  //TODA vez que uma variavel MUDA, essa função será executada
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/usuarios");
      setUsers(data);
    }
    getUsers();
  }, [])

  async function DeleteUser(id) {
    await api.delete(`/usuarios/${id}`);
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  }

  return (
    <Container>
      <TopBackground />
      <Title>Listar Usuários</Title>
      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUser src={`https://ui-avatars.com/api/?name=${user.name}`}/>
            <div>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
            <TrashIcon src={Trash} alt='Lixeira' onClick={() => DeleteUser(user.id)}/>
          </CardUsers>
        ))}
      </ContainerUsers>

      <Button type="button" onClick={() => navigate('/')}>Voltar</Button>
    </Container>
  );
}  

export default ListUsers;