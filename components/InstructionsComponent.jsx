import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					<span>7 Sinz Toke</span>
				</h1>
				<p>
					Coming Soon{" "}
					<span>/</span>
				</p>
			</div>

				</div>
			</div>
		</div>
	);
}
