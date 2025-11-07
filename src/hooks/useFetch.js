import { useState, useEffect } from "react";


export default function useFetch(url) {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


useEffect(() => {
let mounted = true;
setLoading(true);
setError(null);


fetch(url)
.then((r) => {
if (!r.ok) throw new Error("Network response was not ok");
return r.json();
})
.then((json) => {
if (mounted) setData(json);
})
.catch((err) => {
if (mounted) setError(err.message || "Error");
})
.finally(() => {
if (mounted) setLoading(false);
});


return () => (mounted = false);
}, [url]);


return { data, loading, error };
}