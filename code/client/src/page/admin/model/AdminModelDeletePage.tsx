import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ModelAPI from "../../../service/model_api";
import SecurityAPI from "../../../service/security_api";

const AdminModelDeletePage = () => {
    
    // récupère l'id dans l'URL
    const { id } = useParams();

    const { user, setUser } = useContext(UserContext);

    // navigation
    const navigate = useNavigate();

    useEffect(() => {
        // créer un formData 
        const formData = new FormData();
        formData.append("id", id as unknown as string);

       new SecurityAPI().auth(user).then((authResponse) => {
        console.log(authResponse.data.token);
       });

        new ModelAPI().delete(formData, auth.data.token).then(response => {
            window.sessionStorage.setItem("notice","Model deleted");
            
            // redirection 
            navigate('/admin/model');
        });

    }, [id, user]);
  
    return <></>;
}

export default AdminModelDeletePage
