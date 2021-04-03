
import { Provider } from 'react-redux';

import store from './store';

import Main from './page/Main';

import './styles/Global.css';




const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Main />
      </Provider>
    </>
  );
}

export default App;