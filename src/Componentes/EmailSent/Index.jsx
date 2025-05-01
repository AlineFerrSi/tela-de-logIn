import Button from "../ButtonContainer/Index";
import styles from "./emailSent.module.css"; 
import { Link } from "react-router-dom";

const EmailSent = () => {

    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <p>Nova senha enviada a seu email! </p>
                <p>Verifique se chegou.</p>
            </div>
            <div>
                <Link to={"/"}>
                    <Button>volte ao inicio</Button>
                </Link>
            </div>

        </div>
    );
}

export default EmailSent;
