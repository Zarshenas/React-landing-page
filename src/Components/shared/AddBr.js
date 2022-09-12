import styles from './AddBr.module.css';
const addBrToText = (text) =>{
    const splitedText = text.split(" ");
    const brAdded = <a href="# " className={styles.feacherName}>{splitedText[0]} <br/> {splitedText[1]} {splitedText[2]&&splitedText[2]}</a>
    return brAdded;
}
export default addBrToText;