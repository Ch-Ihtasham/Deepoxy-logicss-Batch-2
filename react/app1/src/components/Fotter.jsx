import React from 'react'

export default function Fotter() {
    return (
        <footer style={{
            background: "#0f172a",
            color: "white",
            padding: "30px 20px",
            textAlign: "center",
            marginTop: "40px"
        }}>
            <h3 style={{ marginBottom: "10px" }}>My React App</h3>
            <p style={{ opacity: 0.8 }}>
                © {new Date().getFullYear()} All Rights Reserved.
            </p>
        </footer>
    )
}
