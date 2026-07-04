function DashboardLayout({ left, right }) {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
            <div className="space-y-8">
                {left}
            </div>

            <div className="space-y-8">
                {right}
            </div>
        </div>
    );
}

export default DashboardLayout;