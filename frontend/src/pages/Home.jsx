import { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import StatsCards from "../components/StatsCards";
import Navbar from "../components/Navbar";
import UploadCard from "../components/UploadCard";
import ResultsPanel from "../components/ResultsPanel";
import DetectionViewer from "../components/DetectionViewer";
import SummaryPanel from "../components/SummaryPanel";

function Home() {
    const [prediction, setPrediction] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-10">

                {/* Page Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-5xl font-bold text-slate-800">
                        AI-powered Dental X-ray Analysis
                    </h2>

                    <p className="mt-4 text-lg text-gray-600">
                        Upload a panoramic dental X-ray to receive AI-assisted
                        findings, recommendations, and a downloadable clinical report.
                    </p>
                </div>
                {/* Statistics */}
                <StatsCards prediction={prediction} />
                {/* Dashboard */}
                <DashboardLayout
                    left={
                        <>
                            <UploadCard
                                onPrediction={setPrediction}
                                onImageSelected={setImagePreview}
                            />

                            {prediction && (
                                <>
                                    <DetectionViewer
                                        image={imagePreview}
                                        detections={prediction.detections}
                                    />

                                    <SummaryPanel findings={prediction.findings} />
                                </>
                            )}
                        </>
                    }
                    right={
                        prediction ? (
                            <ResultsPanel
                                findings={prediction.findings}
                                reportName={prediction.analysis.report_name}
                            />
                        ) : (
                            <div className="bg-white rounded-2xl shadow-lg p-10 h-full flex flex-col justify-center items-center text-center">

                                <div className="w-20 h-20 rounded-full bg-sky-100 flex items-center justify-center mb-6">
                                    <span className="text-4xl">🦷</span>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-800">
                                    Ready for Analysis
                                </h3>

                                <p className="mt-4 text-gray-500 max-w-sm">
                                    Upload a dental X-ray on the left to receive AI-powered
                                    findings, confidence scores, recommendations, and a clinical
                                    PDF report.
                                </p>

                            </div>
                        )
                    }
                />

            </div>
        </div>
    );
}

export default Home;