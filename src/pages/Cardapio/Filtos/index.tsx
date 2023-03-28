import filtros from "./filtros.json";
import styles from "./Filtros.module.scss";

type IOpcaoFiltro = typeof filtros[0];
interface Props {
	filtro: number | null;
	setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtros({ filtro, setFiltro }: Props) {
	function selectFiltro(opcaoFiltro: IOpcaoFiltro) {
		if (filtro === opcaoFiltro.id) return setFiltro(null);
		return setFiltro(opcaoFiltro.id);
	}

	return (
		<div className={styles.filtros}>
			{filtros.map((filtroItem) => (
				<button
					className={`${styles.filtros__filtro} ${
						filtro === filtroItem.id &&
						styles["filtros__filtro--ativo"]
					}`}
					key={filtroItem.id}
					onClick={() => selectFiltro(filtroItem)}
				>
					{filtroItem.label}
				</button>
			))}
		</div>
	);
}
