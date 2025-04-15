import styles from "../assets/css/plandusite.module.css"
import { Link } from 'react-router-dom'

const Plandusite = () => {
  return (
    <div className={styles.psite}>
      <h1>Header</h1>
                <Link to={"/prestation"}>Prestation</Link>
				<Link to={"/tarifs"}>Tarifs</Link>
				<Link to={"/contact"}>Contact</Link>
                <Link to={"/moncompte"}>Mon compte</Link>
                <Link to={"/"}>Page d'acceuil</Link>
      <h1>Footer</h1>
            <Link to={"/plan"}>Plan du site</Link>
			<Link to={"/mentionslegales"}>Mentions Legales</Link>
			<Link to={"/contact"}>Contact</Link>
			<Link to={"/confidentialite"}>Politique de confidentialité</Link>
    </div>
  )
}

export default Plandusite
