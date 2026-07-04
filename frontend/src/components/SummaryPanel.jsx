function SummaryPanel({ findings }) {
  if (!findings || findings.length === 0) return null;

  const total = findings.reduce((sum, f) => sum + f.count, 0);

  const avgConfidence =
    findings.reduce((sum, f) => sum + f.confidence, 0) /
    findings.length;

  const getRiskLevel = (conf) => {
    if (conf >= 0.85) return { label: "High", color: "red" };
    if (conf >= 0.7) return { label: "Medium", color: "orange" };
    return { label: "Low", color: "green" };
  };

  const risk = getRiskLevel(avgConfidence);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">

      <h2 className="text-xl font-bold mb-4">
        AI Summary
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <div className="p-4 bg-gray-50 rounded-xl">
          <p className="text-gray-500 text-sm">
            Total Findings
          </p>
          <p className="text-2xl font-bold">
            {total}
          </p>
        </div>

        <div className="p-4 bg-gray-50 rounded-xl">
          <p className="text-gray-500 text-sm">
            Avg Confidence
          </p>
          <p className="text-2xl font-bold">
            {(avgConfidence * 100).toFixed(1)}%
          </p>
        </div>

        <div className="p-4 bg-gray-50 rounded-xl">
          <p className="text-gray-500 text-sm">
            Risk Level
          </p>
          <p
            className={`text-2xl font-bold text-${risk.color}-500`}
          >
            {risk.label}
          </p>
        </div>

        <div className="p-4 bg-gray-50 rounded-xl">
          <p className="text-gray-500 text-sm">
            Conditions
          </p>
          <p className="text-sm font-semibold">
            {findings
              .map((f) => f.class_name)
              .join(", ")}
          </p>
        </div>

      </div>

      <div className="mt-4 p-4 bg-blue-50 rounded-xl">
        <p className="text-sm text-blue-800">
          🧠 AI Insight: The scan shows{" "}
          <strong>{risk.label.toLowerCase()}</strong> level
          dental abnormalities. Recommend clinical review for
          confirmation.
        </p>
      </div>

    </div>
  );
}

export default SummaryPanel;