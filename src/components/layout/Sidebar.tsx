import { NavLink } from 'react-router-dom';
import { BrainCircuit, LayoutDashboard, BookOpen, Sparkles } from 'lucide-react';
import { course } from '../../data/course';
export function Sidebar() { return <aside className="sidebar"><NavLink to="/" className="brand">
    <span className="brand-icon"><BrainCircuit size={23}/></span><span>AI <strong>Academy</strong>
    <small>Arquitectura y Desarrollo de IA - Por Vale Molina</small></span></NavLink><div className="nav-label">PLATAFORMA</div><NavLink end to="/" className={({isActive})=>'nav-link '+(isActive?'active':'')}>
    <LayoutDashboard size={18}/> Dashboard</NavLink><div className="nav-label modules-label">TU FORMACIÓN</div>{course.map(m=><NavLink key={m.id} to={'/modulos/'+m.id} className={({isActive})=>'nav-link '+(isActive?'active':'')}><span className="module-number" style={{color:m.color}}>0{m.number}</span><span className="nav-title">{m.title}</span></NavLink>)}<div className="sidebar-footer"><Sparkles size={18}/> Aprendé, practicá y construí.</div></aside> }
