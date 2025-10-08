import './App.css';
import { Toaster } from 'react-hot-toast';
import CoachRoutes from './routes/coach/CoachRoutes';

function App() {
  return (
    <div className="App">
     <Toaster position="top-center" reverseOrder={false} />
     <CoachRoutes/>
    </div>
  );
}

export default App;
