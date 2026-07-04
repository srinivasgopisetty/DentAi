import {
    Activity,
    FileText,
    CheckCircle2,
    Download,
} from "lucide-react";
import api from "../services/api";
function ResultsPanel({ findings, reportName }) {
    if (!findings || findings.length === 0) {
        return null;
    }

    const downloadReport = () => {
        window.open(
            `${api.defaults.baseURL}/reports/${reportName}`,
            "_blank"
        );
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Activity className="text-sky-700" size={30} />
                AI Findings
            </h2>

            {findings.map((finding, index) => (
                <div
                    key={index}
                    className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 mb-6"
                >
                    <div className="flex justify-between items-center">

                        <div className="flex items-center gap-3">

                            <div className="bg-sky-100 p-3 rounded-xl">
                                <Activity
                                    className="text-sky-700"
                                    size={22}
                                />
                            </div>

                            <div>
                                <h3 className="text-xl font-bold">
                                    {finding.class_name}
                                </h3>

                                <p className="text-sm text-gray-500">
                                    AI Detected Condition
                                </p>
                            </div>

                        </div>

                        <div className="bg-emerald-100 text-emerald-700 font-bold px-4 py-2 rounded-full">
                            {(finding.confidence * 100).toFixed(1)}%
                        </div>

                    </div>

                    <div className="mt-6">

                        <div className="flex items-center gap-2 mb-2">
                            <FileText
                                size={18}
                                className="text-slate-600"
                            />

                            <h4 className="font-semibold">
                                Clinical Description
                            </h4>
                        </div>

                        <p className="text-gray-600 leading-7">
                            {finding.description}
                        </p>

                    </div>

                    <div className="mt-6">

                        <div className="flex items-center gap-2 mb-3">
                            <CheckCircle2
                                size={18}
                                className="text-green-600"
                            />

                            <h4 className="font-semibold">
                                Recommendations
                            </h4>
                        </div>

                        <ul className="space-y-2">
                            {finding.recommendations.map((rec, idx) => (
                                <li
                                    key={idx}
                                    className="bg-slate-50 rounded-lg p-3 border border-slate-200"
                                >
                                    ✓ {rec}
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            ))}

            <button
                onClick={downloadReport}
                className="w-full mt-6 flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl transition font-semibold"
            >
                <Download size={20} />
                Download Clinical Report
            </button>

        </div>
    );
}

export default ResultsPanel;