
import styled from "styled-components";
import styles from "./CreateACont.module.css";
import FormCadastro from "../../Componentes/FormCadastro/FormCadastro";
import RegistrationSection from "../../Componentes/RegistrationSection/Index";

const CreateACont = () => {
    return (

        <div className={styles.container}>
            <div className={styles.boxLogIn}>

                <FormCadastro />
                <RegistrationSection />
            </div>
        </div>

    )
}

export default CreateACont;


