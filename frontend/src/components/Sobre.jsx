import Header from '../components/Header'
import Footer from '../components/Footer'
import style from './Sobre.module.css'
import SVG from '../img/horror-animation.svg'

function Sobre(){
    

  return(
    <>
   
    <Header/>
    <div className={style.titulo_principal}>

   
    
    </div>
    <div className={style.container_mainsobre}>
  
  
       <div className={style.container_imgleft}>

       <img className={style.img_sobre}  src={SVG} alt="" srcset="" />
       
           
          </div>

        <div className={style.container_textsobre}>

       

        <p> 
        
        ORGANIZE SEUS JOGOS COM O GAMENOTE <br></br> <br></br> <br></br>O gamenote é um projeto focado em video games que tem como 
          intuito ser uma agenda/caderno pessoal de jogos contendo informações sobre games jogados e registrando.</p> 

        </div>
        
    

       

    </div>
   
    



   <Footer/>
   </>

  )


}

export default Sobre