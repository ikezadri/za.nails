import { useForm } from "react-hook-form";
import styles from "../assets/css/reservation.module.css";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import BookingAPI from "../service/booking_api.ts";
import Notice from "../component/common/Notice";
import type Booking from "../model/booking";

const ReservationPage = () => {
    // const [message, setMessage] = useState<string>();
    // const navigate = useNavigate();

    // Configuration du formulaire de réservation
    const {
      handleSubmit,
      register,
      formState: { errors },
          //reset
    } = useForm<Booking>();

    // Fonction de soumission du formulaire
    const onSubmit = async (values: Booking) => {
		

    //   console.log(values);
      //console.log(formData);
  
      //requete HTTP
      const request = await new BookingAPI().register(values);
  
      console.log(request);
  
      // if ([200, 201].indexOf(request.status) > -1) {
      // 	// redirection
      // 	navigate("/admin/post");
      // }
    };

    return (
        <div className={styles.container}>
            <h2>Prenez rendez-vous</h2>
            {/* {onmessage && <div className={styles.message}>{onmessage}</div>} */}
            <Notice />

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.field}>
                    <label htmlFor="date_time">Date</label>
                    <input
                        type="date"
                        id="date"
                        {...register("date_time", { required: "Veuillez choisir une date" })}
                    />
                    <small>{typeof errors.date_time?.message === "string" ? errors.date_time.message : ""}</small>

                </div>

                <div className={styles.field}>
                    <label htmlFor="time">Heure</label>
                    <input type="time" id="time" {...register("date_time")} />
                </div>

                <div className={styles.field}>
                    <label htmlFor="type">Modèle</label>
                    <select id="type" {...register("types", { required: "Veuillez choisir un modèle" })}>
                        <option value="">Sélectionner...</option>
                        <option value="">Manucure</option>
                        <option value="">Pose capsule</option>
                        <option value="">Soins</option>
                    </select>
                    <small>{typeof errors.types?.message}</small>
                </div>

               

                <button type="submit" className={styles.submitButton}>Prendre rendez-vous</button>
            </form>
        </div>
    );
};

export default ReservationPage;