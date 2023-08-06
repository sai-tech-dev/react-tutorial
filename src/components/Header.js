import './Header.css';
import styles from './Header.module.css';

function Header(){
    const myStyle = {
        color:"green",backgroundColor:"yellow",padding:"10px",
    }
    return (
        <>
        {/* <h1 style={myStyle}>Hello Style</h1> */}
        <h1 className={styles.bigBlue}>Class Style</h1>
        <p>Add style</p>
        </>
    )
}

export default Header