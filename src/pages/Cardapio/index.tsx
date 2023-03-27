import styles from "./Cardapio.module.scss";

export default function Cardapio() {
	return (
		<main>
			<nav className={styles.menu}>
				<img src="../../assets/logo.svg" alt="logo Aluroni" />
				Aluroni
			</nav>
		</main>
	);
}
