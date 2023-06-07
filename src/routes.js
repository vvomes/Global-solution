import { BrowserRouter, Route, Routes } from "react-router-dom";
import NaoEncontrado from "./pages/NaoEncontrado";
import Dados from "./pages/Dados";
import Home from "./pages/Index";
import Grafico from "./pages/Grafico";
import Solucao from "./pages/Solucao";
import GlobalStyle from "./GlobalStyle";
import Metas from "./pages/MetasODS"

function AppRoutes() {
	return (
		<div>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="Dados" element={<Dados />} />
					<Route path="Grafico" element={<Grafico />} />
					<Route path="Metas" element={<Metas/>} />
					<Route path="Solucao" element={<Solucao />} />
					<Route path="*" element={<NaoEncontrado />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default AppRoutes;