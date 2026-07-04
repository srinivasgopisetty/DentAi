import { Activity, ShieldCheck, Cpu } from "lucide-react";

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-sky-700 via-blue-700 to-cyan-600 shadow-xl border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                {/* Left */}
                <div className="flex items-center gap-4">

                    <div className="bg-white p-3 rounded-2xl shadow-lg">
                        <Activity
                            size={32}
                            className="text-sky-700"
                        />
                    </div>

                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                            DentAI
                        </h1>

                        <p className="text-blue-100 text-sm md:text-base">
                            AI-powered Dental X-ray Analysis
                        </p>
                    </div>

                </div>

                {/* Right */}
                <div className="flex flex-wrap items-center gap-3">

                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></div>

                        <span className="text-white text-sm font-medium">
                            AI Ready
                        </span>
                    </div>

                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2">

                        <Cpu
                            size={16}
                            className="text-yellow-300"
                        />

                        <span className="text-white text-sm font-medium">
                            YOLO11 • FastAPI • React
                        </span>

                    </div>

                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2">

                        <ShieldCheck
                            size={16}
                            className="text-green-300"
                        />

                        <span className="text-white text-sm font-medium">
                            v1.0
                        </span>

                    </div>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;