import { Formularios } from "./components/Formularios";
import { Header } from "./components/Header";
import { ListadoPacientes } from "./components/ListadoPacientes";

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formularios />
        <ListadoPacientes />
      </div>
    </div>
  );
}

export default App;
