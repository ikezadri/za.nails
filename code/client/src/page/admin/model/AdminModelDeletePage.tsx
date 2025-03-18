import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ModelAPI from "../../../service/model_api";

const AdminModelDeletePage = () => {
    
    // récupère l'id dans l'URL
    const { id } = useParams();

    // navigation
    const navigate = useNavigate();

    useEffect(() => {
        // créer un formData 
        const formData = new FormData();
        formData.append("id", id as unknown as string);

        new ModelAPI().delete(formData).then(response => {
            navigate('/admin/model');
        });

    }, [id, navigate]);
  
    return <></>;
}

export default AdminModelDeletePage
