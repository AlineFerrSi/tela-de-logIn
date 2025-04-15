import Recover from '../../Componentes/Recover/Index';
import styles from './RecoverPassword.module.css'; 


const RecoverPassword = () =>{
    return(
        <div className={styles.container}>
        <div className={styles.boxHelpPassword}>
           <Recover />
        </div>
    </div>
    )
}

export default RecoverPassword;