import React, { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("Checking API...");

  useEffect(() => {
    fetch("/api/health")
      .then((response) => response.json())
      .then((data) => {
        setStatus(
          data.database
            ? "Frontend + Express + MongoDB are connected."
            : "Express is running, but MongoDB is not connected."
        );
      })
      .catch(() => setStatus("Could not connect to the Express API."));
  }, []);

  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <h1>Azure MERN App</h1>
        <p>React frontend served by an Express/Node.js backend.</p>
        <div style={styles.status}>{status}</div>
        <p style={styles.note}>
          Deploy this application to Microsoft Azure and connect it to MongoDB Atlas.
        </p>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f6f8",
    fontFamily: "Arial, sans-serif",
    padding: "20px"
  },
  card: {
    maxWidth: "650px",
    width: "100%",
    background: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  status: {
    margin: "25px 0",
    padding: "15px",
    borderRadius: "8px",
    background: "#eef6ff"
  },
  note: {
    color: "#666"
  }
};

export default App;
