import { useForm } from "react-hook-form";
import type Model from "../../../model/model";

const AdminModelForm = () => {
    // handSubmit = permet de gérer la soumission du formulaire
    // register = permet de référencer les champs de formulaire
    // errors = permet de gérer les messages d'erreur
    const { handleSubmit, register, formState : {errors} } = useForm<Model>();
    // soumission du formulaire
    const onSubmitModel = (values: Model) => {
        console.log(values);
        
    };
    
    return <form onSubmit={ handleSubmit( onSubmitModel )}>
        <p>
            <label htmlFor="name">Name:</label>
            {/* reprendre STRICTEMENT le nom des colonnes SQL */}
            <input type="text" {...register('name',{
                required: "Nom requis",
                minLength:{
                    value: 2,
                    message: "Nom trop court"
                }
            })} />
            <small>{errors.name?.message}</small>
        </p>

        <p>
            <label htmlFor="image">Image:</label>
            {/* reprendre STRICTEMENT le nom des colonnes SQL */}
            <input type="file" {...register('image',{
                required: "Image requise",
                minLength:{
                    value:2,
                    message: "Cette image est indisponible"
                }
            })} />
            <small>{errors.image?.message}</small>
        </p>

        <p>
            <label htmlFor="type">Type:</label>
            {/* reprendre STRICTEMENT le nom des colonnes SQL */}
            <input type="text" {...register('type',{
                required: "Type requis",
                minLength:{
                    value:2,
                    message:"Type requis"
                }
            })} />
            <small>{errors.type?.message}</small>
        </p>

        <p>
            <label htmlFor="type_id">Type:</label>
            {/* reprendre STRICTEMENT le nom des colonnes SQL */}
            <input type="text" {...register('type_id',{
                required: "Type requis",
                minLength:{
                    value:2,
                    message:"Type requis"
                }
            })} />
            <small>{errors.type_id?.message}</small>
        </p>


        
        <p>
            <button type="submit">Submit</button>
        </p>

    </form>;

};

export default AdminModelForm;
