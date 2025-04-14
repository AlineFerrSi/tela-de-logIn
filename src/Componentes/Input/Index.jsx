import styles from "./Input.module.css";
const Input = ({titulo,placeholder,className,handleValue})=>{
    
    function handleChange(e){
        handleValue(e.target.value ) 
        
    }


    return(
        <div className={styles.containerInput}>
            <label>{titulo}</label>
            <input 
            placeholder={placeholder} 
            className={`${className}`}
            onChange={(e)=>{handleChange(e)}}
            ></input>
            
        </div>
    )
}

export default Input;