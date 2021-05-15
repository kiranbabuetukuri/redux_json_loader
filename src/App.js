import logo from './logo.svg';
import './App.css';
import UserContainer from './components/UserContainer';
import { Provider } from 'react-redux';
import {store} from './components/store/store'
import Component1 from './components/Component1';
function App() {
  return (
    <div className="App" >
           <Provider store={store}>
             <span>
             <div style={{float:'left', width:'300px'}}>
      <UserContainer style={{float:'left', width:'300px'}}></UserContainer>  </div>
 <div style={{float:'right', width:'300px'}}>
<Component1 ></Component1> </div></span>
      </Provider>
    </div>
  );
}

export default App;
