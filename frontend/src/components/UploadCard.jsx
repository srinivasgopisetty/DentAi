import { useRef, useState } from "react";
import {
    UploadCloud,
    ImagePlus,
    LoaderCircle,
} from "lucide-react";
import api from "../services/api";
import toast from "react-hot-toast";
function UploadCard({
    onPrediction,
    onImageSelected,
}) {
    const fileInputRef = useRef(null);

    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [dragActive, setDragActive] = useState(false);
    const [fileInfo, setFileInfo] = useState(null);

    const chooseImage = () => {
        fileInputRef.current.click();
    };

    const handleFile = async (file) => {
        if (!file) return;

        const previewUrl = URL.createObjectURL(file);

        setPreview(previewUrl);
        onImageSelected(previewUrl);

        setFileInfo({
            name: file.name,
            size: (file.size / (1024 * 1024)).toFixed(2),
        });

        const formData = new FormData();
        formData.append("file", file);

        setLoading(true);

        try {
            const response = await api.post("/predict", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            onPrediction(response.data);
            toast.success("Analysis completed successfully!");

        } catch (error) {
            console.error(error);

            toast.error(
                error?.response?.data?.detail ||
                "Prediction failed. Please try again."
            );

        } finally {
            setLoading(false);
        }
    };

    const uploadImage = async (event) => {
        handleFile(event.target.files[0]);
    };

    const removeImage = () => {
        setPreview(null);
        setFileInfo(null);

        onPrediction(null);
        onImageSelected(null);

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <div className="bg-white rounded-3xl shadow-lg p-8">

            <div className="flex items-center gap-3 mb-6">

                <div className="bg-sky-100 p-3 rounded-xl">
                    <ImagePlus
                        className="text-sky-700"
                        size={26}
                    />
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-slate-800">
                        Upload Dental X-ray
                    </h2>

                    <p className="text-gray-500">
                        AI-assisted panoramic X-ray analysis
                    </p>
                </div>

            </div>

            <div
                onDragOver={(e) => {
                    e.preventDefault();
                    setDragActive(true);
                }}
                onDragLeave={() => setDragActive(false)}
                onDrop={(e) => {
                    e.preventDefault();
                    setDragActive(false);
                    handleFile(e.dataTransfer.files[0]);
                }}
                className={`border-2 border-dashed rounded-2xl p-8 transition ${dragActive
                        ? "border-sky-600 bg-sky-100"
                        : "border-sky-300 bg-sky-50/40 hover:border-sky-500"
                    }`}
            >

                {preview ? (

                    <div className="flex flex-col items-center">

                        <img
                            src={preview}
                            alt="Dental X-ray"
                            className="rounded-2xl shadow-lg border max-h-[420px] object-contain"
                        />

                        {fileInfo && (
                            <div className="mt-4 text-center">
                                <p className="font-medium text-slate-700">
                                    {fileInfo.name}
                                </p>

                                <p className="text-sm text-gray-500">
                                    {fileInfo.size} MB
                                </p>
                            </div>
                        )}

                        {loading ? (

                            <div className="mt-8 w-full max-w-sm">

                                <div className="flex items-center justify-center gap-3 text-sky-700 font-semibold">

                                    <LoaderCircle
                                        className="animate-spin"
                                        size={24}
                                    />

                                    AI Analysis in Progress...

                                </div>

                                <div className="mt-4 h-2 bg-slate-200 rounded-full overflow-hidden">

                                    <div className="h-full w-full bg-sky-600 animate-pulse rounded-full"></div>

                                </div>

                                <p className="mt-3 text-sm text-center text-gray-500">
                                    Detecting findings and generating clinical report...
                                </p>

                            </div>

                        ) : (

                            <div className="mt-8 flex gap-4">

                                <button
                                    onClick={chooseImage}
                                    className="flex items-center gap-2 bg-sky-700 hover:bg-sky-800 text-white px-6 py-3 rounded-xl transition"
                                >
                                    <UploadCloud size={20} />
                                    Choose Another Image
                                </button>

                                <button
                                    onClick={removeImage}
                                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl transition"
                                >
                                    Remove
                                </button>

                            </div>

                        )}

                    </div>

                ) : (

                    <div className="flex flex-col items-center">

                        <div className="bg-sky-100 rounded-full p-6">

                            <UploadCloud
                                className="text-sky-700"
                                size={48}
                            />

                        </div>

                        <h3 className="mt-6 text-2xl font-semibold text-slate-800">
                            Upload Dental X-ray
                        </h3>

                        <p className="text-gray-500 mt-2 text-center">
                            Drag & Drop your panoramic X-ray
                            <br />
                            or choose a file from your computer.
                        </p>

                        <button
                            onClick={chooseImage}
                            className="mt-8 bg-sky-700 hover:bg-sky-800 text-white px-8 py-3 rounded-xl transition font-semibold"
                        >
                            Choose Image
                        </button>

                        <p className="mt-6 text-sm text-gray-400">
                            Supported formats:
                            <span className="font-medium">
                                {" "}JPG • JPEG • PNG
                            </span>
                        </p>

                    </div>

                )}

            </div>

            <input
                type="file"
                accept=".jpg,.jpeg,.png"
                ref={fileInputRef}
                onChange={uploadImage}
                className="hidden"
            />

        </div>
    );
}

export default UploadCard;