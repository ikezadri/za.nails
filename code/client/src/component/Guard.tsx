import { useContext, useEffect } from "react";
import type GuardProps from "../model/props/guard_props";
import { UserContext } from "../provider/UserProvider";
import { useNavigate } from "react-router-dom";

const Guard = ({ children, role }:GuardProps) => {

    const { user } = useContext(UserContext);

     // redirection
     const navigate = useNavigate();

    useEffect(() => {
        // tester le rôle de l'utilisateur 
        // si le rôle de l'utilisateur n'est pas présent dans la liste des rôles autoriser
        if( role.indexOf(user.role?.name) === -1 ){
            // stocker un message dans la session 
            window.sessionStorage.setItem("notice", 'Access denied');
            // redirection
            navigate('/');
        }
    },[role, user, navigate]);

  return <>{children}</>;
};

export default Guard;
