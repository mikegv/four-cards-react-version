import './App.css';
import Top from './components/top/Top';
import Card from "./components/card/Card"
function App() {
  return (
    <div className="App">
      <Top />
      <div id="cards">
      <div className="side">
        <Card color={"lightseagreen"} label="Supervisor" description="Monitors activity to identify project roadblocks" logo="/icon-supervisor.svg"/>
        </div>
        <div className="cardholder">
        <Card color={"red"} label="Team Builder" description="Scans our talent network to create the optimal team for your project" logo="/icon-team-builder.svg"/>  
        <Card color={"orange"} label="Karma" description="Regularly evaluates our talent to ensure quality" logo="/icon-karma.svg"/>
        </div>
        <div className="side">
        <Card color="blue" label="Calculator" description="Uses data from past projects to provide better delivery estimates" logo="/icon-calculator.svg"/>
        </div>        
      </div>
    </div>
  );
}

export default App;

