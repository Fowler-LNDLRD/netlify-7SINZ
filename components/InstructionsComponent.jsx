import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					create<span>7 Sinz Toke</span>
				</h1>
				<p>
					Coming Soon{" "}
					<span>/</span>
				</p>
			</div>
			<div className={styles.footer}>
				<a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
					<img
						id="badge-button"
						style={{ width: "240px", height: "53px" }}
						src="https://static.alchemyapi.io/images/marketing/badgeLight.png"
						alt="Alchemy Supercharged"
					/>
				</a>
				<div className={styles.icons_container}>

					<div>
						<a
							href="https://twitter.com/7sinztoken"
							target={"_blank"}
						>
							Follow us on Twitter
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
