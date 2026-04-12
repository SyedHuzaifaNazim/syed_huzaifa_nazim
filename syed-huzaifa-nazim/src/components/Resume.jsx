"use client";

import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { motion, AnimatePresence } from "framer-motion";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// ✅ All imports first, then constants
const resumeFile = "/Syed-Huzaifa-Nazim.pdf";

// ✅ Legacy build — fixes "DOMMatrix is not defined" in Next.js
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Resume = () => {
    const [showPdf, setShowPdf] = useState(false);
    const [pdfWidth, setPdfWidth] = useState(750);

    useEffect(() => {
        const handleResize = () => {
            setPdfWidth(Math.min(window.innerWidth * 0.85, 750));
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Lock body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = showPdf ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [showPdf]);

    return (
        <section
            id="resume"
            style={{
                padding: "120px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "transparent",
                position: "relative",
            }}
        >
            {/* Section Label */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "6px 14px",
                    borderRadius: "999px",
                    background: "rgba(99,102,241,0.08)",
                    border: "1px solid rgba(99,102,241,0.2)",
                    color: "#818cf8",
                    fontSize: "13px",
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                    marginBottom: "20px",
                }}
            >
                <span style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: "#818cf8",
                    boxShadow: "0 0 6px #818cf8"
                }} />
                My Resume
            </motion.div>

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                    fontSize: "clamp(2rem, 5vw, 3rem)",
                    fontWeight: 700,
                    color: "#f1f5f9",
                    textAlign: "center",
                    marginBottom: "12px",
                    letterSpacing: "-0.02em",
                }}
            >
                Curriculum Vitae
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                style={{
                    color: "#94a3b8",
                    fontSize: "1rem",
                    textAlign: "center",
                    maxWidth: "420px",
                    lineHeight: 1.7,
                    marginBottom: "48px",
                }}
            >
                A detailed overview of my professional journey, technical expertise, and academic background.
            </motion.p>

            {/* CTA Card */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                style={{
                    position: "relative",
                    background: "rgba(15,23,42,0.6)",
                    border: "1px solid rgba(99,102,241,0.15)",
                    borderRadius: "24px",
                    padding: "48px 40px",
                    maxWidth: "480px",
                    width: "100%",
                    textAlign: "center",
                    backdropFilter: "blur(12px)",
                    overflow: "hidden",
                }}
            >
                {/* Subtle glow */}
                <div style={{
                    position: "absolute",
                    top: "-60px", left: "50%",
                    transform: "translateX(-50%)",
                    width: "300px", height: "200px",
                    background: "radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)",
                    pointerEvents: "none",
                }} />

                {/* Document icon */}
                <div style={{
                    width: "64px", height: "64px",
                    borderRadius: "18px",
                    background: "rgba(99,102,241,0.1)",
                    border: "1px solid rgba(99,102,241,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 24px",
                }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10 9 9 9 8 9"/>
                    </svg>
                </div>

                <p style={{ color: "#64748b", fontSize: "13px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
                    Syed Huzaifa Nazim
                </p>
                <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "32px" }}>
                    Full Stack · AI/ML Engineer · MERN Stack Developer
                </p>

                {/* Buttons */}
                <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => setShowPdf(true)}
                        style={{
                            display: "inline-flex", alignItems: "center", gap: "8px",
                            padding: "13px 28px",
                            background: "linear-gradient(135deg, #4f46e5, #6366f1)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "12px",
                            fontSize: "15px",
                            fontWeight: 600,
                            cursor: "pointer",
                            boxShadow: "0 4px 24px rgba(99,102,241,0.3)",
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                        </svg>
                        View Resume
                    </motion.button>

                    <motion.a
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        href={resumeFile}
                        download="Syed-HuzaifaNazim.pdf"
                        style={{
                            display: "inline-flex", alignItems: "center", gap: "8px",
                            padding: "13px 28px",
                            background: "rgba(255,255,255,0.04)",
                            color: "#94a3b8",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: "12px",
                            fontSize: "15px",
                            fontWeight: 500,
                            cursor: "pointer",
                            textDecoration: "none",
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                            <polyline points="7 10 12 15 17 10"/>
                            <line x1="12" y1="15" x2="12" y2="3"/>
                        </svg>
                        Download
                    </motion.a>
                </div>
            </motion.div>

            {/* ── MODAL ── */}
            <AnimatePresence>
                {showPdf && (
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={() => setShowPdf(false)}
                        style={{
                            position: "fixed", inset: 0,
                            background: "rgba(2,6,23,0.92)",
                            backdropFilter: "blur(10px)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            zIndex: 2000,
                            padding: "20px",
                        }}
                    >
                        <motion.div
                            key="modal"
                            initial={{ scale: 0.94, opacity: 0, y: 32 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.94, opacity: 0, y: 32 }}
                            transition={{ type: "spring", damping: 28, stiffness: 320 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                background: "#0f172a",
                                border: "1px solid rgba(99,102,241,0.2)",
                                borderRadius: "20px",
                                width: "100%",
                                maxWidth: "880px",
                                height: "90vh",
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "column",
                                boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(99,102,241,0.1)",
                                position: "relative",
                            }}
                        >
                            {/* Modal Header */}
                            <div style={{
                                padding: "14px 20px",
                                borderBottom: "1px solid rgba(255,255,255,0.06)",
                                display: "flex", justifyContent: "space-between", alignItems: "center",
                                background: "rgba(15,23,42,0.95)",
                                backdropFilter: "blur(8px)",
                                flexShrink: 0,
                            }}>
                                {/* Traffic-light dots */}
                                <div style={{ display: "flex", gap: "7px", alignItems: "center" }}>
                                    {["#ff5f57","#ffbd2e","#28c840"].map((c, i) => (
                                        <div key={i} style={{ width: 12, height: 12, borderRadius: "50%", background: c, opacity: 0.85 }} />
                                    ))}
                                </div>

                                {/* Filename pill */}
                                <div style={{
                                    display: "flex", alignItems: "center", gap: "8px",
                                    padding: "5px 14px",
                                    background: "rgba(99,102,241,0.08)",
                                    border: "1px solid rgba(99,102,241,0.15)",
                                    borderRadius: "999px",
                                    color: "#94a3b8",
                                    fontSize: "13px",
                                    fontWeight: 500,
                                }}>
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                        <polyline points="14 2 14 8 20 8"/>
                                    </svg>
                                    Syed-HuzaifaNazim.pdf
                                </div>

                                {/* Action buttons */}
                                <div style={{ display: "flex", gap: "8px" }}>
                                    <a href={resumeFile} download="Syed-HuzaifaNazim.pdf" style={{ textDecoration: "none" }}>
                                        <motion.button
                                            whileHover={{ background: "rgba(99,102,241,0.15)", color: "#818cf8" }}
                                            style={iconBtnStyle}
                                            title="Download"
                                        >
                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                                <polyline points="7 10 12 15 17 10"/>
                                                <line x1="12" y1="15" x2="12" y2="3"/>
                                            </svg>
                                        </motion.button>
                                    </a>
                                    <motion.button
                                        whileHover={{ background: "rgba(239,68,68,0.12)", color: "#f87171" }}
                                        onClick={() => setShowPdf(false)}
                                        style={iconBtnStyle}
                                        title="Close"
                                    >
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                            <line x1="18" y1="6" x2="6" y2="18"/>
                                            <line x1="6" y1="6" x2="18" y2="18"/>
                                        </svg>
                                    </motion.button>
                                </div>
                            </div>

                            {/* PDF Viewer */}
                            <div style={{
                                flex: 1,
                                overflowY: "auto",
                                background: "#1e293b",
                                padding: "32px 0",
                                display: "flex",
                                justifyContent: "center",
                            }}>
                                <Document
                                    file={resumeFile}
                                    loading={<LoadingState />}
                                    error={<ErrorState />}
                                >
                                    <div style={{
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                                    }}>
                                        <Page
                                            pageNumber={1}
                                            width={pdfWidth}
                                            renderAnnotationLayer={true}
                                            renderTextLayer={true}
                                        />
                                    </div>
                                </Document>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

const iconBtnStyle = {
    width: "32px",
    height: "32px",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.06)",
    background: "rgba(255,255,255,0.04)",
    color: "#64748b",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s",
};

const LoadingState = () => (
    <div style={{ color: "#64748b", textAlign: "center", padding: "60px 40px" }}>
        <div style={{
            width: "36px", height: "36px",
            border: "2px solid rgba(99,102,241,0.2)",
            borderTop: "2px solid #6366f1",
            borderRadius: "50%",
            margin: "0 auto 16px",
            animation: "spin 0.8s linear infinite",
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <p style={{ fontSize: "14px" }}>Loading resume...</p>
    </div>
);

const ErrorState = () => (
    <div style={{ color: "#f87171", textAlign: "center", padding: "60px 40px" }}>
        <p style={{ fontSize: "14px" }}>Failed to load PDF. Please download instead.</p>
    </div>
);

export default Resume;