//Create Post Page
import Navbar from "../components/Navbar"
import CreateForm from "../components/CreateForm"
import styles from "../styles/Form.module.css"
export default function Create() {
    return <>
    <div className={styles.container}>
        <CreateForm/>
    </div></>
  }