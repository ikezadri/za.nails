import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type User from "../model/user";
import SecurityAPI from "../service/security_api";
import { UserContext } from "../provider/UserProvider";
import Notice from "../component/common/Notice";
import styles from "../assets/css/moncompte.module.css";

const MoncomptePage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [message, setMessage] = useState<string>();
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const { id } = useParams(); // Récupérer l'id si nécessaire

    // Configuration du formulaire de connexion
    const {
        handleSubmit: handleLoginSubmit,
        register: registerLogin,
        formState: { errors: loginErrors },
    } = useForm<User>();

    // Configuration du formulaire d'inscription
    const {
        handleSubmit: handleRegisterSubmit,
        register: registerRegister,
        formState: { errors: registerErrors },
    } = useForm<User>();

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setMessage(undefined); // Réinitialiser le message lors du changement de formulaire
    };

    // Fonction de soumission pour la connexion
    const onLoginSubmit = async (values: User) => {
        setMessage(undefined);

        try {
            const request = await new SecurityAPI().login(values);

            if ([200, 201].includes(request.status)) {
                setUser(request.data);

                if (request.data.role?.name === "admin") {
                    navigate("/admin");
                } else {
                    navigate("/");
                }
            } else {
                setMessage("Identifiants incorrects. Veuillez réessayer.");
            }
        } catch (error) {
            console.error("Erreur lors de la connexion :", error);
            setMessage("Une erreur est survenue. Veuillez réessayer.");
        }
    };

    // Fonction de soumission pour l'inscription
    const onRegisterSubmit = async (values: User) => {
        setMessage(undefined);

        try {
            const request = await new SecurityAPI().register(values);

            if ([200, 201].includes(request.status)) {
                setMessage("Inscription réussie ! Vous pouvez maintenant vous connecter.");
                setIsLogin(true);
            } else {
                setMessage("Erreur lors de l'inscription. Veuillez réessayer.");
            }
        } catch (error) {
            console.error("Erreur lors de l'inscription :", error);
            setMessage("Une erreur est survenue. Veuillez réessayer.");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.toggleButtons}>
                <button
                    type="button"
                    className={isLogin ? styles.activeBtn : styles.inactiveBtn}
                    onClick={() => setIsLogin(true)}
                >
                    Connexion
                </button>
                <button
                    type="button"
                    className={!isLogin ? styles.activeBtn : styles.inactiveBtn}
                    onClick={() => setIsLogin(false)}
                >
                    Inscription
                </button>
            </div>

            {message && <div className={styles.message}>{message}</div>}
            <Notice />

            {isLogin ? (
                // Formulaire de connexion
                <form onSubmit={handleLoginSubmit(onLoginSubmit)} className={styles.form}>
                    <h2>Connexion</h2>

                    <div className={styles.field}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            {...registerLogin("email", { required: "Email requis" })}
                        />
                        <small>{loginErrors.email?.message}</small>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="password">Mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            {...registerLogin("password", {
                                required: "Mot de passe requis",
                                minLength: { value: 4, message: "Minimum 4 caractères" },
                            })}
                        />
                        <small>{loginErrors.password?.message}</small>
                    </div>

                    <button type="submit" className={styles.submitButton}>
                        Se connecter
                    </button>
                </form>
            ) : (
                // Formulaire d'inscription
                <form onSubmit={handleRegisterSubmit(onRegisterSubmit)} className={styles.form}>
                    <h2>Inscription</h2>

                    <div className={styles.field}>
                        <label htmlFor="firstname">Prénom</label>
                        <input
                            type="text"
                            id="firstname"
                            {...registerRegister("firstname", {
                                required: "Prénom obligatoire",
                                minLength: { value: 2, message: "Prénom trop court" },
                            })}
                        />
                        <small>{registerErrors.firstname?.message}</small>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="lastname">Nom</label>
                        <input
                            type="text"
                            id="lastname"
                            {...registerRegister("lastname", { required: "Nom obligatoire" })}
                        />
                        <small>{registerErrors.lastname?.message}</small>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="registerEmail"
                            {...registerRegister("email", { required: "Email requis" })}
                        />
                        <small>{registerErrors.email?.message}</small>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="phone_number">Numéro de téléphone</label>
                        <input
                            type="text"
                            id="phone_number"
                            {...registerRegister("phone_number", { required: "Numéro requis" })}
                        />
                        <small>{registerErrors.phone_number?.message}</small>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="password">Mot de passe</label>
                        <input
                            type="password"
                            id="registerPassword"
                            {...registerRegister("password", {
                                required: "Mot de passe requis",
                                minLength: { value: 8, message: "Minimum 8 caractères" },
                            })}
                        />
                        <small>{registerErrors.password?.message}</small>
                    </div>

                    <input type="hidden" {...registerRegister("id")} value={id || ""} />

                    <button type="submit" className={styles.submitButton}>
                        S'inscrire
                    </button>
                </form>
            )}
        </div>
    );
};

export default MoncomptePage;

