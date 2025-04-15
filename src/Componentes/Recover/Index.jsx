import Button from "../ButtonContainer/Index";
import Input from "../Input/Index";
import Line from "../Line/Index";
import Title from "../Title/Title";
import styles from "./Recover.module.css";
import { Link, useLocation } from "react-router-dom";


const Recover = () =>{
    return(
        <form  className={styles.form} >

            <div className={styles.CamptitleForm}>
                <Title className={styles.title} >Recupere a senha</Title>
                <Line />
            </div>

            <div className={styles.containerInputs}>
                <Input className={styles.inputStyles}
                    titulo="Digite seu email"
                    placeholder="Ex: seuemail123@gmail.com"
                />
            </div>

            <Button>Enviar ao Email</Button>

            <div>
                <Link className={styles.returnMain}>
                    <p>Voltar ao logIn</p>
                </Link>
            </div>

        </form>
    
    )
}

export default Recover;
