import Button from "../ButtonContainer/Index";
import styles from "./Registration.module.css"; 
import { Link, useLocation } from 'react-router-dom';

const RegistrationSection = () => {
    const location = useLocation();
    const isCreateAccountPage = location.pathname === "/createacont";

    return (
        <div className={styles.registation}>
            <p>
                {isCreateAccountPage 
                    ? "Já tem uma conta? Faça login!" 
                    : "Ainda não tem conta?"}
            </p>
            <Link to={isCreateAccountPage ? "/" : "/createacont"}>
                <Button className={styles.customButton}>
                    {isCreateAccountPage ? "Entrar" : "Cadastre-se"}
                </Button>
            </Link>
        </div>
    );
}

export default RegistrationSection;
