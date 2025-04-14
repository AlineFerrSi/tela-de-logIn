
import styled from "styled-components";
import Form from "../../Componentes/Form/Index";
import RegistrationSection from "../../Componentes/RegistrationSection/Index";
import styles from "./Inicial.module.css";

const Inicial = () => {
    return (
        <div className={styles.container}>
            <div className={styles.boxLogIn}>
                <Form />
                <RegistrationSection></RegistrationSection>
            </div>
        </div>
    )
};

export default Inicial;

