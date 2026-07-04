function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-6">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between">

          <div>
            <div className="flex items-center gap-3">

              <span className="text-4xl">🦷</span>

              <div>
                <h1 className="text-3xl font-bold text-blue-700">
                  DentAI
                </h1>

                <p className="text-gray-600 mt-1">
                  AI-powered Dental X-ray Analysis
                </p>
              </div>

            </div>
          </div>

          <div className="mt-5 md:mt-0 flex gap-3">

            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              YOLO11
            </span>

            <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
              FastAPI
            </span>

            <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
              React
            </span>

          </div>

        </div>

      </div>
    </header>
  );
}

export default Header;