"use client";

import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { motion, AnimatePresence } from "framer-motion";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

const resumeFile = "/Syed-Huzaifa-Nazim.pdf";

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
            className="py-24 px-6 flex flex-col items-center justify-center relative"
        >
            {/* Section Label */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 py-1.5 px-4 rounded-xl border border-white/20 dark:border-white/5 bg-white/45 dark:bg-slate-900/40 backdrop-blur-md mb-5"
            >
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                <span className="text-[12px] font-semibold text-slate-700 dark:text-indigo-300 uppercase tracking-wider">
                    My Resume
                </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white text-center mb-3"
            >
                Curriculum Vitae
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-slate-500 dark:text-slate-400 text-sm md:text-base text-center max-w-md mb-10"
            >
                A detailed overview of my professional journey, technical expertise, and academic background.
            </motion.p>

            {/* CTA Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-panel cyber-border rounded-2xl p-8 md:p-12 max-w-lg w-full text-center relative overflow-hidden"
            >
                {/* Background glow overlay */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 h-48 pointer-events-none rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-xl" />

                {/* Document icon */}
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-center mx-auto mb-6">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10 9 9 9 8 9"/>
                    </svg>
                </div>

                <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1.5">
                    Syed Huzaifa Nazim
                </p>
                <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base font-semibold mb-8">
                    Full Stack · AI/ML Engineer · MERN Stack Developer
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3.5 justify-center">
                    <motion.button
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setShowPdf(true)}
                        className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/35 border-none cursor-pointer text-sm flex items-center gap-2"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                        </svg>
                        View Resume
                    </motion.button>

                    <motion.a
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        href={resumeFile}
                        download="Syed-Huzaifa-Nazim-Resume.pdf"
                        className="px-6 py-3 text-slate-700 dark:text-slate-200 font-semibold rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 cursor-pointer text-sm no-underline transition-all flex items-center gap-2"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                            <polyline points="7 10 12 15 17 10"/>
                            <line x1="12" y1="15" x2="12" y2="3"/>
                        </svg>
                        Download PDF
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
                        transition={{ duration: 0.2 }}
                        onClick={() => setShowPdf(false)}
                        className="fixed inset-0 bg-slate-950/85 dark:bg-black/90 backdrop-blur-md flex items-center justify-center z-[2000] p-4"
                    >
                        <motion.div
                            key="modal"
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 30, stiffness: 350 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl w-full max-w-4xl h-[90vh] overflow-hidden flex flex-col shadow-2xl relative"
                        >
                            {/* Modal Header */}
                            <div className="px-5 py-4 border-b border-slate-200 dark:border-white/5 flex justify-between items-center bg-slate-50 dark:bg-slate-950 flex-shrink-0">
                                {/* Traffic-light dots (OS X style) */}
                                <div className="flex gap-1.5 items-center">
                                    {["#ff5f57","#ffbd2e","#28c840"].map((c, i) => (
                                        <div key={i} className="w-3 h-3 rounded-full opacity-80" style={{ background: c }} />
                                    ))}
                                </div>

                                {/* Filename badge */}
                                <div className="hidden sm:flex items-center gap-2 py-1 px-4 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300/30 dark:border-white/5 text-slate-600 dark:text-slate-400 text-xs font-semibold">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                        <polyline points="14 2 14 8 20 8"/>
                                    </svg>
                                    Syed-Huzaifa-Nazim.pdf
                                </div>

                                {/* Action buttons */}
                                <div className="flex gap-2">
                                    <a href={resumeFile} download="Syed-Huzaifa-Nazim-Resume.pdf" className="no-underline">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-9 h-9 rounded-lg border border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-white/5 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 flex items-center justify-center transition-all cursor-pointer"
                                            title="Download"
                                        >
                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                                <polyline points="7 10 12 15 17 10"/>
                                                <line x1="12" y1="15" x2="12" y2="3"/>
                                            </svg>
                                        </motion.button>
                                    </a>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setShowPdf(false)}
                                        className="w-9 h-9 rounded-lg border border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-white/5 text-slate-500 hover:text-red-500 dark:text-slate-400 dark:hover:text-red-400 flex items-center justify-center transition-all cursor-pointer"
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
                            <div className="flex-1 overflow-y-auto bg-slate-100 dark:bg-slate-950/40 py-8 flex justify-center">
                                <Document
                                    file={resumeFile}
                                    loading={<LoadingState />}
                                    error={<ErrorState />}
                                >
                                    <div className="rounded-lg overflow-hidden shadow-xl border border-slate-200/50 dark:border-white/5">
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

const LoadingState = () => (
    <div className="text-slate-500 dark:text-slate-400 text-center py-12 px-6">
        <div className="w-9 h-9 border-2 border-indigo-500/20 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm font-semibold">Loading resume...</p>
    </div>
);

const ErrorState = () => (
    <div className="text-red-500 dark:text-red-400 text-center py-12 px-6">
        <p className="text-sm font-semibold">Failed to load PDF. Please download instead.</p>
    </div>
);

export default Resume;