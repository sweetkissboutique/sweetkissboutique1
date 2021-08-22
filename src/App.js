import logo from './ak.png';
import './App.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
         <br/>
         <br/>
        <div>
        <InstagramIcon style={{ fontSize: 80 }} />
        <Typography>
            Instagram
        </Typography>
        </div>
      </header>
    </div>
  );
}

export default App;
