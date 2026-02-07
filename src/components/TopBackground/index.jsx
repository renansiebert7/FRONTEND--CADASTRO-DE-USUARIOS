import UsersImage from '../../assets/users.png'
import { Background } from './styles.js'

function TopBackground() {
    return (
    <Background>
        <img src={UsersImage} alt='Imagem Usuários' />
    </Background>
    )
}

export default TopBackground;