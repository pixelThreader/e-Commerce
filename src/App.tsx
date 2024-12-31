import {Routes, Route} from 'react-router-dom';

import './globals.css';

const App = () => {
  return (
    <main className="flex h-screen">
        <Routes>
            {/* Public Routes */}
            <Route path='/sign-in' element={<SignInForm />} />


            {/* Private Routes */}
            <Route index element={<Home />} />

        </Routes>
    </main>
  )
}

export default App