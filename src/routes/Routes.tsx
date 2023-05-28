import { Route, Routes, BrowserRouter } from "react-router-dom";
import Inicio from '../pages/Inicio';
import Agendamentos from '../pages/Agendamentos';

export function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Inicio />} />
                <Route path="/" element={<Inicio />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/agendamentos" element={<Agendamentos />} />
            </Routes>
        </BrowserRouter>
    )
}
