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
		

      console.log(values);
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
            <h2>Réservez votre séance</h2>
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
                    <label htmlFor="time">Heure (optionnelle)</label>
                    <input type="time" id="time" {...register("date_time")} />
                </div>

                <div className={styles.field}>
                    <label htmlFor="type">Type de model</label>
                    <select id="type" {...register("types", { required: "Veuillez choisir un model" })}>
                        <option value="">Sélectionner...</option>
                        <option value="soi">Manicure</option>
                        <option value="animal">Pose capsule</option>
                        <option value="situation">Soins</option>
                    </select>
                    <small>{typeof errors.types?.message}</small>
                </div>

               

                <button type="submit" className={styles.submitButton}>Réserver</button>
            </form>
        </div>
    );
};

export default ReservationPage;