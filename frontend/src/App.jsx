import axios from "axios"
import { useEffect, useState } from "react";
import styles from '../style/Form.css'
import Footer from './components/Footer'
import Header from './components/Header'



import ModalJogos from './components/ModalJogos'



function App() {

  const [nome, setNome] = useState();
  const [ano_lancamento, setAno_lancamento] = useState();
  const [nome_empresa, setNome_empresa] = useState();
  const [genero, setGenero] = useState();
 // const [visu, setVisu] = useState([]);
  const [apagar , setApagar] = useState()

// get de todos os jogos
 //  useEffect(()=>{ 
  //   axios.get("http://localhost:3000").then((res) =>{
   //   const  jogos = res.data;
  //    setVisu(jogos);

  //   });
  //  }, [])

    // cadastrar um novo jogo
   function cadastrarUsuario() {
    axios.post("http://localhost:3000/", {
        nome: nome,
        ano_lancamento: ano_lancamento,
        nome_empresa: nome_empresa,
        genero: genero
      })
      .then((res) => {
        console.log(res);
      });
  }

   

  
   

  return (
    <>
      <Header/>
      <div className="container-principal">

      <div className="container">
      
        
      <ModalJogos/>
      

        </div>


       <div className="container"> 
      
       
      <form onSubmit={cadastrarUsuario}>

      <h1>Adicionar jogos jogados </h1>
        <label htmlFor="nome" >Nome do jogo:</label>
       
        <input  className='input-label'type="text" name="nome" id="nome" placeholder="Digite o nome do jogo" onChange={(e) => setNome(e.target.value)}/>
        
        <label htmlFor="ano_lancamento">Ano de Lançamento:</label>
        
        <input className='input-label' type="number" name="ano_lancamento" id="ano_lancamento" placeholder="Digite o ano de lançamento" onChange={(e) => setAno_lancamento(e.target.value)}/>
        
        <label htmlFor="nome_empresa">Nome da empresa:</label>
        
        <input className='input-label' type="text" name="nome_empresa" id="nome_empresa"  placeholder="Digite o nome da empresa" onChange={(e) => setNome_empresa(e.target.value)}/>
        
        <label htmlFor="genero">Gênero:</label>
        
        <input className='input-label' type="text" name="genero" id="genero"  placeholder="Digite o gênero" onChange={(e) => setGenero(e.target.value)}/>
          
        <input  className='button-enviar'type="submit" value="Enviar" />
      </form>
      
        
      </div>

      </div>
      

      

      <Footer/>
    </>
    )
}

export default App;
