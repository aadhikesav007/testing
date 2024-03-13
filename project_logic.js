// Update for 2024-03-13T02:00:00+00:00 - Task ID: 2
const debounce = (fn, ms) => { let timeout; return () => { clearTimeout(timeout); timeout = setTimeout(fn, ms); }; };

export default {};