import EmailSent from "../../Componentes/EmailSent/Index";
import styles from "./CheckEmail.module.css"; 
const CheckEmail = () => {

    return (
        <div className={styles.container}>
           <EmailSent />
        </div>
    );
}

export default CheckEmail ;
