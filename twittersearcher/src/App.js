import MainPage from './Pages/MainPage/MainPage'
import Provider from './GlobalState/Provider'

function App() {
  return (
    <Provider>
      <MainPage />
    </Provider>
  );
}

export default App;
