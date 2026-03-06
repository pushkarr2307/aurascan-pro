import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, RefreshCw, Users, Clock, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type AttendanceRecord = {
  id: string;
  student_name: string;
  student_id: string;
  date: string;
  time: string;
  created_at: string;
};

const statusColor: Record<string, string> = {
  Present: "bg-green-500/20 text-green-400",
  Late: "bg-yellow-500/20 text-yellow-400",
};

const getStatus = (time: string) => {
  const [h, m] = time.split(":").map(Number);
  return h > 9 || (h === 9 && m > 15) ? "Late" : "Present";
};

const AdminDashboard = () => {
  const [records, setRecords] = useState<AttendanceRecord[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchRecords = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("attendance")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) setRecords(data as AttendanceRecord[]);
    setLoading(false);
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  const todayCount = records.filter(
    (r) => r.date === new Date().toISOString().split("T")[0]
  ).length;

  const uniqueStudents = new Set(records.map((r) => r.student_id)).size;

  return (
    <div className="gradient-bg min-h-screen">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                <span className="gradient-text">Admin Dashboard</span>
              </h1>
              <p className="text-sm text-muted-foreground">Attendance Management System</p>
            </div>
          </div>
          <Button
            onClick={fetchRecords}
            variant="outline"
            className="border-glass-border"
            disabled={loading}
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { icon: Users, label: "Total Records", value: records.length, color: "text-primary" },
            { icon: CalendarDays, label: "Today's Attendance", value: todayCount, color: "text-green-400" },
            { icon: Clock, label: "Unique Students", value: uniqueStudents, color: "text-blue-400" },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-5 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="glass-card overflow-hidden">
          <div className="p-4 md:p-6 border-b border-glass-border flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-4 text-sm text-muted-foreground font-medium">
              attendance-records
            </span>
          </div>

          {loading ? (
            <div className="p-12 text-center text-muted-foreground">Loading records...</div>
          ) : records.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground">
              No attendance records yet. Use the face scanner to mark attendance.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-glass-border">
                    <th className="px-6 py-4 text-sm font-semibold text-muted-foreground">#</th>
                    <th className="px-6 py-4 text-sm font-semibold text-muted-foreground">Student Name</th>
                    <th className="px-6 py-4 text-sm font-semibold text-muted-foreground">Student ID</th>
                    <th className="px-6 py-4 text-sm font-semibold text-muted-foreground">Date</th>
                    <th className="px-6 py-4 text-sm font-semibold text-muted-foreground">Time</th>
                    <th className="px-6 py-4 text-sm font-semibold text-muted-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((r, i) => {
                    const status = getStatus(r.time);
                    return (
                      <tr
                        key={r.id}
                        className="border-b border-glass-border/50 hover:bg-primary/5 transition-colors duration-200"
                      >
                        <td className="px-6 py-4 text-muted-foreground">{i + 1}</td>
                        <td className="px-6 py-4 font-medium text-foreground">{r.student_name}</td>
                        <td className="px-6 py-4 text-muted-foreground">{r.student_id}</td>
                        <td className="px-6 py-4 text-muted-foreground">{r.date}</td>
                        <td className="px-6 py-4 text-muted-foreground">{r.time}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor[status]}`}>
                            {status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
