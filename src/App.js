import logo from './logo.svg';
import './App.css';
import './components/Geral.css'
import { PaginaSobre } from './components/PaginaSobre';
import { PaginaLogin } from './components/PaginaLogin';
import { PaginaCadastro} from './components/PaginaCadastro';
import { PaginaExterna} from './components/PaginaExterna';
import { MenuExterno } from "./components/MenuExterno";

function App() {
  return (
    <PaginaExterna/>
  );
}

export default App;
