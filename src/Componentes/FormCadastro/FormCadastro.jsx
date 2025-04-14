import Button from "../ButtonContainer/Index";
import Input from "../Input/Index";
import Line from "../Line/Index";
import Title from "../Title/Title";
import styles from "./Form.module.css";
import { useState} from "react";
import { useContext } from "react";
import { UserFormCreateLogIn } from "../../Context/UserFormCreateLogIn";

const FormCadastro = () => {

    const { createACont, setcreateACont } = useContext(UserFormCreateLogIn);

    const [logIn, setLogIn] = useState({

        name: '',
        email: '',
        password: ''

    });

  

    const handleSubmit = (e) => {
        e.preventDefault();
        setcreateACont(logIn);

    };

    const updateValue = (field, value) => {
    
        setLogIn((prev) => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <form  className={styles.form} onSubmit={handleSubmit}>

            <div className={styles.CamptitleForm}>
                <Title className={styles.title} >Cadastre-se</Title>
                <Line />
            </div>

            <div className={styles.containerInputs}>
                <Input className={styles.inputStyles}
                    titulo="Nome"
                    placeholder="Ex: Maria Lima"
                    handleValue={(e) => updateValue("name", e) }
                    value={logIn.name}


                />

                <Input className={styles.inputStyles}
                    titulo="Email"
                    placeholder="seuemail123@gmail.com"
                    handleValue={(e) =>  updateValue("email", e) }
                    value={logIn.email}

                />

                <Input className={styles.inputStyles}
                    titulo="Senha"
                    placeholder="12345"
                    handleValue={(e) => updateValue("password", e) }
                    value={logIn.password}
                />
            
            </div>
           
        
            <Button>Cadastre-se</Button>
            

        </form>
    )
}

export default FormCadastro;