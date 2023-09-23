import Link from "next/link"
import styles from "@/styles/Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <hr />

            <ul className={styles.navItems}>
                <li className={styles.navItem}>
                    <Link href="https://next-auth.js.org">Documentation</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="https://www.npmjs.com/package/next-auth">NPM</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="https://github.com/nextauthjs/next-auth-example">GitHub</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/policy">Policy</Link>
                </li>
            </ul>
        </footer>
    )
}