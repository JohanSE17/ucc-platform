import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

function ResearchPage() {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState("");

  useEffect(() => {
    const fetchEntries = async () => {
      const snapshot = await getDocs(collection(db, "researchEntries"));
      setEntries(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchEntries();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newEntry.trim()) {
        const newDoc = { text: newEntry, timestamp: new Date() };
        const docRef = await addDoc(collection(db, "researchEntries"), newDoc);
        setEntries((prevEntries) => [...prevEntries, { id: docRef.id, ...newDoc }]);
        setNewEntry("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={newEntry} onChange={(e) => setNewEntry(e.target.value)} />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>{entry.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResearchPage;