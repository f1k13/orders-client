import { AlertNotification } from "@/entities/alert/ui";
import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

const MainProvider = ({ children }: { children: ReactNode }) => {
    return (
        <BrowserRouter>
            <AlertNotification />
            {children}
        </BrowserRouter>
    );
};

export default MainProvider;
