import { useForm } from "react-hook-form";
import styles from "../assets/css/contact.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type Contact from "../model/contact";
import ContactAPI from "../service/contact_api";
import Notice from "../component/common/Notice";

const ContactPage = () => {
    const [message, setMessage] = useState<string>();
    const navigate = useNavigate();
    
    // Configuration du formulaire de contact
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset
    } = useForm<Contact>();
    
    // Fonction de soumission du formulaire
    const onSubmit = async (values: Contact) => {
        console.log("Contact:", values);
        
        try {
            // Requête HTTP
            const request = await new ContactAPI().insert(values);
            console.log(request);
            
            if ([200, 201].indexOf(request.status) > -1) {
                setMessage("Votre message a été envoyé avec succès!");
                // Réinitialiser le formulaire
                reset();
                // Redirection après 2 secondes
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            } else {
                setMessage("Erreur lors de l'envoi du message - Veuillez réessayer");
            }
        } catch (error) {
            console.error("Erreur lors de l'envoi du message:", error);
            setMessage("Erreur lors de l'envoi du message - Veuillez réessayer");
        }
    };
  
    return (
        <div className={styles.container}>
            <h2>Contactez-nous</h2>
            
            {message && <div className={styles.message}>{message}</div>}
            <Notice />
            
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email"
                        {...register("email", {
                            required: "Veuillez saisir votre email",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Adresse email invalide"
                            }
                        })}
                        placeholder="Votre adresse email"
                    />
                    <small>{errors.email?.message}</small>
                </div>
                
                <div className={styles.field}>
                    <label htmlFor="subject">Sujet</label>
                    <input 
                        type="text" 
                        id="subject"
                        {...register("subject", {
                            required: "Veuillez préciser un sujet",
                            minLength: {
                                value: 3,
                                message: "Le sujet doit contenir au moins 3 caractères"
                            }
                        })}
                        placeholder="Sujet de votre message"
                    />
                    <small>{errors.subject?.message}</small>
                </div>
                
                <div className={styles.field}>
                    <label htmlFor="message">Message</label>
                    <textarea 
                        id="message"
                        {...register("message", {
                            required: "Veuillez saisir votre message",
                            minLength: {
                                value: 10,
                                message: "Votre message doit contenir au moins 10 caractères"
                            },
                            maxLength: {
                                value: 500,
                                message: "Votre message ne doit pas dépasser 500 caractères"
                            }
                        })}
                        placeholder="Votre message"
                        rows={6}
                    />
                    <small>{errors.message?.message}</small>
                </div>
                
                <button type="submit" className={styles.submitButton}>
                    Envoyer
                </button>
            </form>
        </div>
    );
};
  
export default ContactPage;