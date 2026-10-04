import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentProfile from './Pages/StudentProfile';
import MarksView from './Pages/MarksView';
import AttendanceView from './Pages/AttendanceView';

function App() {
return (
<BrowserRouter>
<div className="bg-gray-100 min-h-screen p-8">
<Routes>
<Route path="/" element={<StudentProfile />}>
<Route path="marks" element={<MarksView />} />
<Route path="attendance" element={<AttendanceView />} />
</Route>
</Routes>
</div>
</BrowserRouter>
);
}

export default App;