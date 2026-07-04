import {
    Activity,
    Brain,
    FileCheck,
    TrendingUp,
} from "lucide-react";

function StatsCards({ prediction }) {
    const totalFindings = prediction?.findings?.length ?? 0;

    const confidence =
        prediction?.findings?.length
            ? (
                prediction.findings.reduce(
                    (sum, item) => sum + item.confidence,
                    0
                ) /
                prediction.findings.length *
                100
            ).toFixed(1)
            : "--";

    const cards = [
        {
            title: "Findings",
            value: totalFindings,
            icon: Activity,
            color: "text-sky-600",
            bg: "bg-sky-100",
        },
        {
            title: "Confidence",
            value:
                confidence === "--"
                    ? "--"
                    : `${confidence}%`,
            icon: TrendingUp,
            color: "text-emerald-600",
            bg: "bg-emerald-100",
        },
        {
            title: "Report",
            value: prediction ? "Ready" : "--",
            icon: FileCheck,
            color: "text-purple-600",
            bg: "bg-purple-100",
        },
        {
            title: "AI Model",
            value: "YOLO11",
            icon: Brain,
            color: "text-orange-600",
            bg: "bg-orange-100",
        },
    ];

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {cards.map((card) => {
                const Icon = card.icon;

                return (
                    <div
                        key={card.title}
                        className="bg-white rounded-2xl shadow-lg p-6"
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-gray-500 text-sm">
                                    {card.title}
                                </p>

                                <h2 className="text-3xl font-bold mt-2">
                                    {card.value}
                                </h2>
                            </div>

                            <div
                                className={`${card.bg} p-3 rounded-xl`}
                            >
                                <Icon
                                    className={card.color}
                                    size={28}
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default StatsCards;