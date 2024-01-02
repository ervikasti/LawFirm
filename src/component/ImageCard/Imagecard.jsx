
import styles from "./Imagecard.module.css";
export const Imagecard = ({img,title}) => {

    return(
        <div className={styles.container}>
            <div className={styles.img}>
                 <img src={img} alt={title}/>
            </div>
            
            <div className={styles.title}>
                <h3 className={styles.title}>{title}</h3>
            </div>    
        </div>
    )
}