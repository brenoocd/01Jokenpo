
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <span className='title'>Pedra, Papel e Tesoura</span><br />
                <span className='you'>Você: <br /> Bot: </span>
       
            </nav>
        </header>
    )    
}

export default Header