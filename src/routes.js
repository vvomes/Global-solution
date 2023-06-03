import { BrowserRouter, Route, Routes } from "react-router-dom";
import NaoEncontrado from "./pages/NaoEncontrado";
import Dados from "./pages/Dados";
import Home from "./pages/Index";
import Grafico from "./pages/Grafico";
import FaleConosco from "./pages/FaleConosco";


function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="Dados" element={<Dados />} />
				<Route path="Grafico" element={<Grafico />} />
				<Route path="FaleConosco" element={<FaleConosco/>} />
				<Route path="*" element={<NaoEncontrado />} />
			</Routes>

		</BrowserRouter>
	);
}

export default AppRoutes;