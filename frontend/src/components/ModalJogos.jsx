import Modal from 'react-modal'
import axios from 'axios'
import { useEffect, useState } from 'react';
import styles from './ModalJogos.module.css'
import {useParams} from 'react-router-dom'
import '../../style/global.css'



Modal.setAppElement("#root");


export default function ModalButton() {
  const [modalAberto, SetModalAberto] = useState(false);

  function openModal() {
    SetModalAberto(true);
  }

  function closeModal() {
    SetModalAberto(false);
  }


  const [visu, setVisu] = useState([]);
  const [nomejogo,setNomeJogo] = useState()
  const [nomeempresa,setEmpresa] = useState()
  const [ano_lancamento,setAno_lancamento] = useState() 
  const [genero,setGenero] = useState()



  //Atualizar algum jogo

  
  function edit() {
    const { id } = useParams()

      axios.put(`http://localhost:3000/${id}`, {
        
        nome: nomejogo,
        email: nomeempresa,
        ano_lancamento: ano_lancamento,
        genero: genero
        })
      .then(function () {
        confirm("atualizado com sucesso!")
      })
  }


   // get de todos os jogos
   useEffect(()=>{ 
    axios.get("http://localhost:3000").then((res) =>{
     const  jogos = res.data;
     setVisu(jogos);

    });
   }, [])

 // deletar algum jogo
   function deletarJogo(id){
    const apagar = confirm (
       `Excluir esse jogo da tabela ?`

    );
    if(apagar) {
      axios.delete(`http://localhost:3000/${id}`);
      setVisu(visu.filter((apagar) => apagar.id !== id ))
    }

  }


  return(
    
     <>
        <div className={styles.main_container}>

       <h2 className={styles.text_principal}>Jogos Cadastrados</h2>
         
          <div className={styles.ModalPrincipal} id="wrapModal">
          <br></br>  <br></br> 
            <button className={styles.modal_jogosprincipal} onClick={openModal}>Lista de jogos </button>
            <Modal
              id="modal"
              isOpen={modalAberto}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
            >
              <div>
                <h2 className={styles.h2_text}>Jogos Cadastrados</h2>
              </div>

              <hr></hr>
              <div id="wrapContainer">
                <div id="cliente-user">
                  <div>
                    <div>
                      {visu.map((item) => (
                        <div key={item.id}>
                          <div className={styles.infos_modal} id="infosModal">
                            <ul>
                              <li>
                                Nome do jogo:{" "}
                                <input onChange={(e) => setNomeJogo(e.target.value)} placeholder={item.nome}></input>
                              </li>
                              <li>
                                Empresa:{" "}
                                <input onChange={(e) => setEmpresa(e.target.value)}  placeholder={item.nome_empresa}></input>
                              </li>
                              <li>
                               Ano de lançamento:{" "}
                                <input  onChange={(e) => setAno_lancamento(e.target.value)}  placeholder={item.ano_lancamento}></input>
                              </li>
                              <li>
                              Genero:{" "}
                                <input  onChange={(e) => setGenero(e.target.value)}  placeholder={item.genero}></input>
                              </li>
                             
                            </ul>
                          </div>
                          <div className={styles.btn_modal} id="btnsModal">
                          <button onClick={()=> edit(item.id)}>Editar jogo</button>
                            <button onClick={() => deletarJogo(item.id)}>
                              Apagar jogo
                            </button>

                            </div>

                         
                        </div>
                      ))}
                     

                    </div>
                  </div>
                </div>
                <div id="wrapBtnFechar">
                  <button className={styles.modalbuttonFechar}id="btnFechar" onClick={closeModal}>Fechar</button>
                </div>
              </div>
            </Modal>
          </div>
          </div>
        
      
     
    </>
  );
       
   

  



}