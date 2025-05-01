import styles from "./ResetPassword.module.css";

const ResetPassword = () =>{
    return(
        <div className={styles.container}>
        <div className={styles.boxHelpPassword}>
           <Recover />
        </div>
    </div>
    )
}

export default ResetPassword;