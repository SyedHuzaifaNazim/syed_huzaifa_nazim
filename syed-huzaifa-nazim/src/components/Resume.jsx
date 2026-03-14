import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { motion, AnimatePresence } from "framer-motion";

// Import your asset
import resumeFile from "../assets/Syed-Huzaifa-Nazim.pdf";

// CSS Imports
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
    const [showPdf, setShowPdf] = useState(false);

    return (
        <div style={{ padding: "80px 20px", textAlign: "center", background: "#f8fafc" }}>
            
            {/* Main Interactive Card */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                    maxWidth: "500px",
                    margin: "0 auto",
                    padding: "40px",
                    background: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "24px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                    border: "1px solid rgba(255,255,255,0.3)"
                }}
            >
                <h2 style={{ fontSize: "2rem", marginBottom: "10px", color: "#1e293b" }}>Curriculum Vitae</h2>
                <p style={{ color: "#64748b", marginBottom: "30px", lineHeight: "1.6" }}>
                    Explore my professional journey, technical expertise, and academic background in a detailed overview.
                </p>

                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,114,177,0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowPdf(true)}
                    style={{
                        background: "linear-gradient(135deg, #0072b1 0%, #00a0dc 100%)",
                        color: "#fff",
                        border: "none",
                        borderRadius: "12px",
                        padding: "16px 32px",
                        fontSize: "16px",
                        fontWeight: "600",
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px"
                    }}
                >
                    View Experience 
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                </motion.button>
            </motion.div>

            {/* Animated Fullscreen Modal */}
            <AnimatePresence>
                {showPdf && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowPdf(false)}
                        style={{
                            position: "fixed",
                            inset: 0,
                            background: "rgba(15, 23, 42, 0.9)",
                            backdropFilter: "blur(8px)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 2000,
                            padding: "20px"
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 50 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                background: "#fff",
                                borderRadius: "20px",
                                width: "100%",
                                maxWidth: "850px",
                                height: "90vh",
                                overflow: "hidden",
                                position: "relative",
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                            }}
                        >
                            {/* Modal Header */}
                            <div style={{
                                padding: "15px 25px",
                                borderBottom: "1px solid #eee",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                background: "#fff"
                            }}>
                                <span style={{ fontWeight: 600, color: "#1e293b" }}>Resume_Final.pdf</span>
                                <div style={{ display: "flex", gap: "10px" }}>
                                    <a href={resumeFile} download style={{ textDecoration: 'none' }}>
                                        <button style={circleButtonStyle}>↓</button>
                                    </a>
                                    <button onClick={() => setShowPdf(false)} style={circleButtonStyle}>✕</button>
                                </div>
                            </div>

                            {/* PDF Viewer Area */}
                            <div style={{ 
                                height: "calc(90vh - 70px)", 
                                overflowY: "auto", 
                                background: "#525659",
                                padding: "40px 0"
                            }}>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <Document file={resumeFile} loading={<LoadingState />}>
                                        <Page 
                                            pageNumber={1} 
                                            width={Math.min(window.innerWidth * 0.85, 750)}
                                            renderAnnotationLayer={true}
                                            renderTextLayer={true}
                                        />
                                    </Document>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// Sub-components for cleaner code
const LoadingState = () => (
    <div style={{ color: "#fff", textAlign: "center", padding: "20px" }}>
        <div className="spinner"></div>
        <p>Polishing the details...</p>
    </div>
);

const circleButtonStyle = {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    border: "none",
    background: "#f1f5f9",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    transition: "background 0.2s"
};

export default Resume;