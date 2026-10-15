import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { ModulePage } from './pages/ModulePage';
import { LessonPage } from './pages/LessonPage';
import { useProgress } from './hooks/useProgress';
export default function App() { const {completed,toggle}=useProgress();return <BrowserRouter><div className="app-shell"><Sidebar/><main className="main"><header className="topbar"><span>AI ACADEMY <span className="topbar-dot">/</span> CURSO EXPERTO</span><span className="version">v1.0 · Base modular</span></header><div className="page"><Routes><Route path="/" element={<Dashboard completed={completed}/>}/><Route path="/modulos/:id" element={<ModulePage completed={completed}/>}/><Route path="/modulos/:id/clases/:lessonId" element={<LessonPage completed={completed} toggle={toggle}/>}/><Route path="*" element={<Dashboard completed={completed}/>}/></Routes></div></main></div></BrowserRouter> }
