const records = [
  { name: "Aarav Sharma", time: "09:02 AM", date: "2026-03-05", status: "Present" },
  { name: "Priya Patel", time: "09:05 AM", date: "2026-03-05", status: "Present" },
  { name: "Rahul Verma", time: "—", date: "2026-03-05", status: "Absent" },
  { name: "Sneha Gupta", time: "09:15 AM", date: "2026-03-05", status: "Late" },
  { name: "Vikram Singh", time: "08:58 AM", date: "2026-03-05", status: "Present" },
];

const statusColor: Record<string, string> = {
  Present: "bg-green-500/20 text-green-400",
  Absent: "bg-red-500/20 text-red-400",
  Late: "bg-yellow-500/20 text-yellow-400",
};

const DashboardPreview = () => (
  <section className="relative py-24 px-4 z-10" id="dashboard">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
        <span className="gradient-text">Dashboard Preview</span>
      </h2>
      <p className="text-muted-foreground text-center mb-16">A glance at the attendance dashboard</p>

      <div className="glass-card overflow-hidden glow-secondary">
        <div className="p-4 md:p-6 border-b border-glass-border flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-4 text-sm text-muted-foreground font-medium">attendance-dashboard.app</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-glass-border">
                <th className="px-6 py-4 text-sm font-semibold text-muted-foreground">Student Name</th>
                <th className="px-6 py-4 text-sm font-semibold text-muted-foreground">Time</th>
                <th className="px-6 py-4 text-sm font-semibold text-muted-foreground">Date</th>
                <th className="px-6 py-4 text-sm font-semibold text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {records.map((r, i) => (
                <tr
                  key={i}
                  className="border-b border-glass-border/50 hover:bg-primary/5 transition-colors duration-200"
                >
                  <td className="px-6 py-4 font-medium text-foreground">{r.name}</td>
                  <td className="px-6 py-4 text-muted-foreground">{r.time}</td>
                  <td className="px-6 py-4 text-muted-foreground">{r.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor[r.status]}`}>
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
);

export default DashboardPreview;
