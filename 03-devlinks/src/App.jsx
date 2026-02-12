import './App.css'
import Link from './components/Link/Link';
import Perfil from './components/Perfil/Perfil';
import SocialLink from './components/SocialLink/SocialLink';

function App() {

<Perfil/>
  return (
    <div id='App'>
    <Perfil fotoPerfil={"https://placehold.co/100"} > Japonês Ambrósio </Perfil>
     <div className='switch'>botão switch</div>
     <ul>
      <Link url={""}>Inscreva-se</Link>
      <Link url={""}>Minha PlayList</Link>
      <Link url={""}>Me pague uma Coca-Cola</Link>
      <Link url={""}>Conheça o curso DEV</Link>
      
     </ul>
     <div className='links'></div>
     <div className='socialLinks'>

    <SocialLink url={"https://github.com"} icon={"logo-github"}/>
    <SocialLink url={"https://instagram.com"} icon={"logo-instagram"}/>
    <SocialLink url={"https://youtube.com"} icon={"logo-youtube"}/>
    <SocialLink url={"https://br.linkedin.com"} icon={"logo-linkedin"}/>

     </div>

     <div className='rodape'></div>
    </div>
  )
}

export default App
