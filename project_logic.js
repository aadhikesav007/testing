// Update for 2024-02-04T08:00:00+00:00 - Task ID: 8
const debounce = (fn, ms) => { let timeout; return () => { clearTimeout(timeout); timeout = setTimeout(fn, ms); }; };

export default {};