import './App.css';
import ClockSlogan from './components/Clockslogan';
import ClockHeading from './components/ClockHeadind';
import CurrentTime from './components/CurrentTime';
import 'bootstrap/dist/css/bootstrap.min.css'

function App(){
  return  (
  <center>
    <ClockHeading></ClockHeading>
    <ClockSlogan></ClockSlogan>
    <CurrentTime></CurrentTime>
  </center>
  );
}
export default App;