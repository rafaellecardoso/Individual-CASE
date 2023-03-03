import { useState, useEffect } from "react";
import axios from 'axios'

  const [visu, setVisu] = useState([]);
  const [nomejogo,setNomeJogo] = useState()
  const [nomeempresa,setEmpresa] = useState()
  const [ano_lancamento,setAno_lancamento] = useState() 
  const [genero,setGenero] = useState()



  


   // get de todos os jogos
   useEffect(()=>{ 
    axios.get("http://localhost:3000").then((res) =>{
     const jogos = res.data;
     setVisu(jogos);

    });
   }, [])


function JogosGet () {
    return(
    
     <div>
           {visu.map((item) => (
                        <div key={item.id}>
                         <p>
                         <span>Nome:</span> {item.nomejogo} <br></br> <span>Nome da empresa:</span> {item.nome_empresa} <br></br> <span>Nome:</span> {item.ano_lancamento} <br></br> <span>Genero:</span> {item.genero}

                         </p>

                         
                        </div>
                      ))}
                     

                    </div>
    
    

        
    )

}

export default JogosGet