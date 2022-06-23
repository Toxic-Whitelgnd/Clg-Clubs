import { BrowserRouter as Router } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeadContent from './components/headContent';
import MiddleComponent from "./components/middlesection";

function App() {
  return (
    <Router>
    <div className="App">
      <HeadContent />
      <MiddleComponent />
    </div>
    </Router>
  );
}

export default App;
