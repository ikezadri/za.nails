import styles from "../assets/css/prestationpage.module.css";

const PrestationPage = () => {
	return (
		<>
			{/* Skip link pour l'accessibilité clavier */}
			<a href="#main-content" className={`${styles.skipLink} sr-only-focusable`}>
				Aller au contenu principal
			</a>

			<main id="main-content">
				<section className={styles.onglem} aria-labelledby="section-mariage-title">
					<h1 id="section-mariage-title">Exprimez votre style jusqu’au bout des ongles !</h1>
					<article className={styles.ongle_article}>
						<p>
							Laissez-vous séduire par l’élégance intemporelle d’une French blanche revisitée, modernisée avec justesse pour répondre aux envies d’aujourd’hui. Cette pose capsule, à la fois solide grâce à la qualité du gel et d’une finesse remarquable, offre un équilibre parfait entre durabilité et raffinement.

							Les pointes sont soigneusement travaillées avec des motifs artistiques délicats, dessinés à la main avec précision et créativité. Chaque ongle devient une véritable miniature d’art, révélant votre goût pour les détails subtils et le style affirmé. Le rendu est à la fois sophistiqué, moderne et ultra-tendance — idéal pour celles qui souhaitent se démarquer tout en conservant une allure chic et naturelle.

							Pensée autant pour les grandes occasions que pour le quotidien, cette pose s’adapte à votre rythme de vie sans compromis sur l’élégance. Que ce soit pour un mariage, une soirée importante ou simplement pour sublimer votre quotidien, elle incarne la féminité jusque dans les moindres détails.
						</p>
						<img src="/img/mariage.jpg" alt="Pose d’ongles French blanche revisitée pour un mariage" />
					</article>
				</section>

				<section className={styles.bboomer1} aria-label="Pose Babyboomer">
					<article className={styles.bbomer_article}>
						<img src="/img/babyboomer1.jpg" alt="Manucure Babyboomer rose pâle avec pointe blanche nette" />
						<p>
							Intemporelle et universellement reconnue pour sa sophistication, la French manucure classique traverse les tendances sans jamais perdre de sa superbe. C’est le symbole d’un style soigné, discret et toujours élégant.

							Cette pose emblématique se distingue par sa finition nette et délicate : une base rose pâle subtilement translucide qui sublime la carnation naturelle de l’ongle, surmontée d’un bord blanc parfaitement dessiné. Le contraste doux entre la base et la pointe crée un effet à la fois raffiné et lumineux, pour une allure propre, soignée et naturellement chic.

							La French manucure est idéale en toutes circonstances : pour un mariage, un entretien, une sortie ou simplement pour rehausser votre quotidien avec une touche de fraîcheur. Son charme réside dans sa simplicité apparente, mais sa réalisation exige rigueur, précision et un savoir-faire maîtrisé.
						</p>
					</article>
				</section>

				<section className={styles.fleur} aria-label="Pose fleurie">
					<article className={styles.fleur_article}>
						<p>
							Plongez dans l’univers délicat de cette pose d’ongles, pensée comme une véritable ode à la féminité et à la douceur. Chaque détail est minutieusement travaillé pour sublimer vos mains avec grâce, légèreté et créativité.

							Cette création unique met en valeur un vernis pastel lilas, tendre et apaisant, qui évoque les premiers jours du printemps et le renouveau de la nature. Cette teinte subtile apporte instantanément une sensation de fraîcheur, tout en restant élégante et moderne.

							Pour parfaire cette base, de délicats motifs floraux sont peints à la main avec précision, comme une caresse artistique sur chaque ongle. Les fleurs, inspirées de la nature et des jardins en fleurs, ajoutent une touche romantique et poétique à l’ensemble. Chaque ongle devient alors un petit tableau, une expression douce et raffinée de votre style personnel.
						</p>
						<img src="/img/fleur.jpg" alt="Manucure lilas pastel avec motifs floraux peints à la main" />
					</article>
				</section>
			</main>
		</>
	);
};

export default PrestationPage;