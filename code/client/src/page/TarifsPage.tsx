import { Link } from "react-router-dom"
import styles from "../assets/css/tarifspage.module.css"

const TarifsPage = () => {
	//    fragment : balise sans nom (anonyme) = <> </>
	return (
		<>
			<section className={styles.prix}>

        		<div className={styles.premier}>
        			<h1>Premier tarif</h1>
          			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati harum, non blanditiis libero suscipit voluptatem, sunt ut accusamus inventore minus fuga soluta dolores iste corrupti in beatae aspernatur laboriosam? Nobis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente perferendis nam iusto ex harum aliquam suscipit deserunt, incidunt consequatur, possimus hic magni eos qui aliquid temporibus, fugiat fuga esse sequi.</p>
          					<div className={styles.lien}>
         	 					<Link to={'/reservation'}>Réserver</Link>
          					</div>
        		</div>

        	<div className={styles.deuxieme}>
        		<h1>Deuxième tarif</h1>
          		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati harum, non blanditiis libero suscipit voluptatem, sunt ut accusamus inventore minus fuga soluta dolores iste corrupti in beatae aspernatur laboriosam? Nobis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente perferendis nam iusto ex harum aliquam suscipit deserunt, incidunt consequatur, possimus hic magni eos qui aliquid temporibus, fugiat fuga esse sequi. Lorem ipsum, dolor sit amet </p>
          			<div className={styles.lien}>
          				<Link to={'/reservation'}>Réserver</Link>
          			</div>
        	</div>


        	<div className={styles.troisieme}>
        		<h1>Troisième tarif</h1>
          		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati harum, non blanditiis libero suscipit voluptatem, sunt ut accusamus inventore minus fuga soluta dolores iste corrupti in beatae aspernatur laboriosam? Nobis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente perferendis nam iusto ex harum aliquam suscipit deserunt, incidunt consequatur, possimus hic magni eos qui aliquid temporibus, fugiat fuga esse sequi. Lorem ipsum, dolor sit amet </p>
          			<div className={styles.lien}>
          				<Link to={'/reservation'}>Réserver</Link>
          			</div>
        	</div>
        
        <br />
			</section>
		</>
	);
};

export default TarifsPage;
