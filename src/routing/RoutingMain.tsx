import { Routes, Route } from "react-router-dom";
import {
    HomePage,
    AboutUsPage,
    LocationPage,
    NotFoundPage,
    PlanPage,
    WishesPage,
} from "../pages";

// Kommentar

export function RoutingMain() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/planen-for-dagen" element={<PlanPage />} />
            <Route path="/om-stedet" element={<LocationPage />} />
            <Route path="/om-oss" element={<AboutUsPage />} />
            <Route path="/ønskeliste" element={<WishesPage />} />
        </Routes>
        
    );
}
