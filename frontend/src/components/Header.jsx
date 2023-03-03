import styles from './Header.module.css'
import {BrowserRouter,Routes, Route, Link } from 'react-router-dom'
import Rotas from '../routes/rotas'






function Header(){
  return(
    <>
     <div className={styles.header}>
        
       <ul>
        
         <Link to={'/'}><li>GameNote</li></Link>
         <Link to={'/sobre'}><li>Sobre</li></Link>
         <Link to={'/contato'}><li>Contato</li></Link>
      
       </ul>

     </div>
    
    </>

  )


}

export default Header