import styles from './Card.module.css'

export default function Menu() {
    return <ul className={styles.li}>
        <li styles><a href="/profile" li>Home</a></li>
        <li><a href="/news">News</a></li>
        <li>Contact</li>
    </ul>
}