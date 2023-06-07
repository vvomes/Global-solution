import Header from "../components/Index/Header"
import Footer from "../components/Index/Footer"
import DadosFome from "../components/dados/DadosFome"

import ConteudoFome from "../components/dados/ConteudoFome";

export default function Dados() {
    return (

        <>
            <Header />
                <DadosFome />
                <ConteudoFome />
             
                <Footer />
        </>


    )
}