
import './App.css';
import AuthProvider from './Context';
import RouterConfigCompo from './RouterConfig';
function App() {
  return (
    <>
      <h1>Rohit Azad Learn Coding with bhai </h1>
      <AuthProvider>
          <RouterConfigCompo />
      </AuthProvider>
      
    </>
  );
}

export default App;
