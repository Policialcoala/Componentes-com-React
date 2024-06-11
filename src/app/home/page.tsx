import Header from "../components/header";
import Navegacao from "../components/nav";
import Rodape from "../components/foolter";
import "./estilo.css";

export default function Home() {
    return (
        <div>
            <Navegacao />
            <Header />
            <Rodape />
        </div>
    )
}