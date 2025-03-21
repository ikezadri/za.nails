import type React from "react";

type GuardProps = {
    children: React.JSX.Element | React.JSX.Element[];
    // liste des rôles autorisés
    role: string[];
};

export default GuardProps;