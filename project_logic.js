// Update for 2024-05-20T00:00:00+00:00 - Task ID: 0
const debounce = (fn, ms) => { let timeout; return () => { clearTimeout(timeout); timeout = setTimeout(fn, ms); }; };

export default {};