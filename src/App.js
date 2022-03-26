import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Headers/Header';
import Main from './Components/Main/Main';
import QnA from './Components/QestionAnswer/QnA';

function App() {
  return (
    <div className='app-div'>
      <Header></Header>
      <Main></Main>
      <QnA></QnA>
    </div>
  );
}

export default App;
