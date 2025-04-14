import Button from "../ButtonContainer/Index";
import Input from "../Input/Index";
import Line from "../Line/Index";
import Title from "../Title/Title";
import styles from "./Form.module.css";
import { useState } from "react";
import { useContext } from "react";
import { UserFormLogInContext } from "../../Context/UserFormLogIn";

const Form = () => {
    const { forLogIn, setforLogIn } = useContext(UserFormLogInContext);
    
    const [manterLogado, setManterLogado] = useState(true);
    

    const [logIn, setLogIn] = useState({

        email: '',
        password: '',
        keepLoggedIn: ''

    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setforLogIn(logIn);

    };

    const updateValue = (field, value) => {

        setLogIn((prev) => ({
            ...prev,
            [field]: value
        }));
    };

       


    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.CamptitleForm}>
                <Title className={styles.title}>Login</Title>
                <Line />
            </div>

            <div className={styles.containerInputs}>
                <Input
                    className={styles.inputStyles}
                    titulo="Email"
                    placeholder="seuemail123@gmail.com"
                    handleValue={(e) => updateValue("email", e)}
                    value={logIn.email}
                />

                <Input
                    className={styles.inputStyles}
                    titulo="Password"
                    placeholder="12345"
                    handleValue={(e) => updateValue("password", e)}
                    value={logIn.password}
                />
            </div>

            <div className={styles.containerCheckbox}>
                <input 
                    type="checkbox" 
                    id="manterLogado"
                    value = {manterLogado}
                    onChange={()=> updateValue("keepLoggedIn", manterLogado)}
                    onClick={() => setManterLogado(!manterLogado) }
                      
                />
                <p>manter-me logado</p>
            </div>

            <Button>Logar</Button>
        </form>
    );
};

export default Form;
