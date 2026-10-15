import { useState } from 'react';
const KEY = 'ai-academy-progress-v1';
type Progress = Record<string, boolean>;
function initial(): Progress { try { return JSON.parse(localStorage.getItem(KEY) || '{}') as Progress; } catch { return {}; } }
export function useProgress() {
 const [completed, setCompleted] = useState<Progress>(initial);
 function toggle(id: string) { setCompleted(old => { const next = { ...old, [id]: !old[id] }; localStorage.setItem(KEY, JSON.stringify(next)); return next; }); }
 return { completed, toggle };
}
