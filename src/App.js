import './App.css';
import { Todos } from './components/Todos';
import { AddTodo } from './components/AddTodo';
import { Toaster } from 'sonner';

function App() {
  return (
    <main className='py-20 sm:px-10 px-4 bg-bg text-text min-h-screen'>

    <Toaster position="top-right" richColors/>
    <div className="max-w-[1300px] w-full mx-auto"> 

      <h1 className='text-center text-4xl font-bold'>Todo App</h1>

      <div>
        <AddTodo/>
        <Todos/>
      </div>

    </div>
    </main>
  );
}

export default App;
