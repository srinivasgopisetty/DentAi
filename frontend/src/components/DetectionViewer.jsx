import { useEffect, useRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const getColor = (label) => {
    switch (label) {
        case "Cavity":
            return "#ef4444";
        case "Implant":
            return "#3b82f6";
        case "Fillings":
            return "#22c55e";
        case "Impacted Tooth":
            return "#f59e0b";
        default:
            return "#8b5cf6";
    }
};

function DetectionViewer({ image, detections }) {
    const imageRef = useRef(null);

    const [showOverlay, setShowOverlay] = useState(true);

    const [size, setSize] = useState({
        width: 0,
        height: 0,
        naturalWidth: 0,
        naturalHeight: 0,
    });

    useEffect(() => {
        if (!imageRef.current) return;

        const img = imageRef.current;

        const updateSize = () => {
            setSize({
                width: img.clientWidth,
                height: img.clientHeight,
                naturalWidth: img.naturalWidth,
                naturalHeight: img.naturalHeight,
            });
        };

        updateSize();

        window.addEventListener("resize", updateSize);

        return () => window.removeEventListener("resize", updateSize);
    }, [image]);

    if (!image) return null;

    return (
        <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

            <div className="flex justify-between items-center mb-6">

                <div>
                    <h2 className="text-2xl font-bold text-slate-800">
                        AI Detection Viewer
                    </h2>

                    <p className="text-gray-500 text-sm">
                        {detections?.length || 0} detections found
                    </p>
                </div>

                <button
                    onClick={() => setShowOverlay(!showOverlay)}
                    className="flex items-center gap-2 bg-sky-700 hover:bg-sky-800 text-white px-4 py-2 rounded-xl transition"
                >
                    {showOverlay ? <EyeOff size={18} /> : <Eye size={18} />}

                    {showOverlay ? "Hide Overlay" : "Show Overlay"}
                </button>

            </div>

            <div className="flex flex-wrap gap-3 mb-6">

                {["Cavity", "Fillings", "Implant", "Impacted Tooth"].map((item) => (

                    <div
                        key={item}
                        className="flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-full"
                    >
                        <div
                            className="w-3 h-3 rounded-full"
                            style={{
                                backgroundColor: getColor(item),
                            }}
                        />

                        <span className="text-sm font-medium">
                            {item}
                        </span>

                    </div>

                ))}

            </div>

            <div className="relative inline-block">

                <img
                    ref={imageRef}
                    src={image}
                    alt="Dental X-ray"
                    className="rounded-2xl border shadow-lg max-w-full"
                />

                {showOverlay && size.width > 0 && (

                    <svg
                        className="absolute inset-0"
                        width={size.width}
                        height={size.height}
                        viewBox={`0 0 ${size.width} ${size.height}`}
                    >

                        {detections?.map((detection, index) => {

                            const [x1, y1, x2, y2] = detection.bbox;

                            const scaleX =
                                size.width / size.naturalWidth;

                            const scaleY =
                                size.height / size.naturalHeight;

                            const left = x1 * scaleX;
                            const top = y1 * scaleY;
                            const width = (x2 - x1) * scaleX;
                            const height = (y2 - y1) * scaleY;

                            const labelOffset = (index % 3) * 14;

                            return (
                                <g key={index}>

                                    <rect
                                        x={left}
                                        y={top}
                                        width={width}
                                        height={height}
                                        fill="transparent"
                                        stroke={getColor(detection.class_name)}
                                        strokeWidth="2"
                                    />

                                    <foreignObject
                                        x={left}
                                        y={top - 18 - labelOffset}
                                        width="170"
                                        height="30"
                                    >
                                        <div
                                            style={{
                                                background: getColor(detection.class_name),
                                                color: "white",
                                                fontSize: "11px",
                                                fontWeight: "600",
                                                padding: "3px 6px",
                                                borderRadius: "5px",
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                                            }}
                                        >
                                            {detection.class_name} ({(
                                                detection.confidence * 100
                                            ).toFixed(0)}
                                            %)
                                        </div>
                                    </foreignObject>

                                </g>
                            );
                        })}

                    </svg>

                )}

            </div>

        </div>
    );
}

export default DetectionViewer;