import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from  './Contato.module.css'
import SVG from '../img/horror-video-game-animate.svg'


function Contato() {
 return(

    <>
    <Header/>
      <div className={styles.container_principal}>

      <div className={styles.card_img}>
       <h1>Entre em contato com a gente </h1>
       <img className={styles.img_svg}  src={SVG} alt="" srcset="" />
      </div>
     <div className={styles.container_contato}>

      <div className={styles.container_login}>
      
         <h1>Formulário de Contato</h1>

          <div className={styles.text_input}>
       <label htmlFor="nome">Nome</label>
       <input type='text' placeholder='Digite seu nome'></input>
       <label htmlFor="email">Email</label>
       <input type='email' placeholder='Digite seu email'></input>
       <label htmlFor="telefone">Telefone para contato</label>
       <input type='tel' placeholder='Digite seu telefone'></input>
       <button type='submit'>Enviar</button>
       </div>
     
       </div>
     

     </div>
     </div>


     <Footer/>
    </>
 )

}


export default Contato 




