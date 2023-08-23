import styles from './RepositoryList.module.scss';
import { RepositoryProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons";
const RepositoryList=(data:RepositoryProps)=>{
    const {description,name,stargazers_count}=data;
    return (
        <section className={styles.container}>
           
            <section className={styles.container__leftContent}>
               <span>{name}</span>
               <span>{description}</span>
            </section>
            <section className={styles.container__rightContent}>
               <span>{stargazers_count}  <FontAwesomeIcon icon={faStar} color="#000" size="1x" /></span>
            </section>
        </section>
    )
}

export default RepositoryList