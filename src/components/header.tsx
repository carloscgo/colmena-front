import Link from "next/link"
import styles from "@/styles/Header.module.css"
import { routes } from "@/utils"

export default function Header() {
    return (
        <header>
            <nav className="my-10">
                <ul className={styles.navItems}>
                    <li className={styles.navItem}>
                        <Link href={routes.home}>Home</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href={routes.client}>Client</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href={routes.api}>API</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href={routes.dashboard.index}>Admin</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}