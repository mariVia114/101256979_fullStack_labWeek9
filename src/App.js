import logo from './logo.svg';
import './App.css';
import Header from './Header';
import StudentDetails from './StudentDetails';


function App() {
  return (
    <div className="App">
    <img src={logo} alt="logo" />
      <Header></Header>
      <StudentDetails fullName="Marie Vianca Pagaduan" studentID="101256979" college="George Brown College, Toronto"></StudentDetails>
    </div>
  );
}

export default App;
