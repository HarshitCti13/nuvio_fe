import './App.css';
import { Toaster } from 'react-hot-toast';
import CoachRoutes from './routes/coach/CoachRoutes';
import AdminRoutes from './routes/admin/AdminRoutes';

function App() {
  return (
    <div className="App">
     <Toaster position="top-center" reverseOrder={false} />
     <CoachRoutes/>
     <AdminRoutes/>
    </div>
  );
}

export default App;
