"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Shield, AlertTriangle, Activity, Server, Users, Lock,
  Eye, Zap, Wifi, Database, Fingerprint, Skull, Bell,
  CheckCircle, XCircle, Clock, RefreshCw, Terminal
} from "lucide-react";

const threatLevels = [
  { level: "Critical", count: 3, color: "bg-red-500", icon: Skull },
  { level: "High", count: 12, color: "bg-orange-500", icon: AlertTriangle },
  { level: "Medium", count: 28, color: "bg-yellow-500", icon: Eye },
  { level: "Low", count: 156, color: "bg-green-500", icon: CheckCircle },
];

const recentAlerts = [
  { id: 1, type: "Malware Detected", source: "192.168.1.45", time: "2 min ago", severity: "critical", status: "investigating" },
  { id: 2, type: "Brute Force Attack", source: "203.45.67.89", time: "5 min ago", severity: "high", status: "blocked" },
  { id: 3, type: "SQL Injection Attempt", source: "45.67.89.12", time: "12 min ago", severity: "high", status: "blocked" },
  { id: 4, type: "Unauthorized Access", source: "10.0.0.23", time: "18 min ago", severity: "medium", status: "investigating" },
  { id: 5, type: "DDoS Attack", source: "88.23.45.67", time: "25 min ago", severity: "critical", status: "mitigated" },
];

const networkNodes = [
  { name: "Firewall", status: "active", ip: "10.0.0.1", threats: 0 },
  { name: "Web Server", status: "active", ip: "10.0.0.10", threats: 2 },
  { name: "Database", status: "active", ip: "10.0.0.20", threats: 0 },
  { name: "Mail Server", status: "warning", ip: "10.0.0.30", threats: 1 },
  { name: "File Server", status: "active", ip: "10.0.0.40", threats: 0 },
  { name: "API Gateway", status: "active", ip: "10.0.0.50", threats: 3 },
];

const compliance = [
  { name: "GDPR", status: "compliant", score: 98 },
  { name: "SOC 2", status: "compliant", score: 95 },
  { name: "ISO 27001", status: "review", score: 87 },
  { name: "HIPAA", status: "compliant", score: 92 },
];

const attackTypes = [
  { name: "Malware", count: 145, percent: 32 },
  { name: "Phishing", count: 98, percent: 22 },
  { name: "DDoS", count: 76, percent: 17 },
  { name: "SQL Injection", count: 54, percent: 12 },
  { name: "Brute Force", count: 45, percent: 10 },
  { name: "Other", count: 34, percent: 7 },
];

export default function SOCDashboard() {
  const [time, setTime] = useState(new Date());
  const [activeThreats, setActiveThreats] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <nav className="glass sticky top-0 z-50 border-b border-red-500/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center animate-pulse-red">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold flex items-center gap-2">
                  CyberShield <span className="text-red-400">SOC</span>
                </h1>
                <p className="text-xs text-slate-400">Security Operations Center</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-xs text-slate-400">System Time (UTC)</p>
                <p className="font-mono text-red-400">{time.toISOString().slice(11, 19)}</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 text-red-400">
                <Bell className="w-4 h-4 animate-pulse" />
                {activeThreats} Active Threats
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {threatLevels.map((threat, i) => (
            <motion.div
              key={threat.level}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 border-l-4"
              style={{ borderColor: threat.color.replace('bg-', '') }}
            >
              <div className="flex items-center justify-between mb-2">
                <threat.icon className={`w-6 h-6 ${threat.color.replace('bg-', 'text-')}`} />
                <span className={`text-3xl font-bold ${threat.color.replace('bg-', 'text-')}`}>{threat.count}</span>
              </div>
              <p className="text-slate-400">{threat.level} Threats</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 glass rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Activity className="w-5 h-5 text-red-400" />
                Real-Time Threat Map
              </h3>
              <span className="text-xs text-slate-400">Live Monitoring</span>
            </div>
            
            <div className="relative h-64 bg-slate-900/50 rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full relative">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-red-500"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [1, 2, 1],
                      }}
                      transition={{
                        duration: 1 + Math.random(),
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl font-bold text-red-400">1,247</p>
                  <p className="text-slate-400">Attacks Blocked Today</p>
                </div>
              </div>
              <div className="scan-line absolute inset-0 bg-gradient-to-b from-transparent via-red-500/10 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Fingerprint className="w-5 h-5 text-cyan-400" />
              Network Status
            </h3>
            <div className="space-y-3">
              {networkNodes.map((node) => (
                <div key={node.name} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Server className="w-4 h-4 text-slate-400" />
                    <div>
                      <p className="text-sm font-medium">{node.name}</p>
                      <p className="text-xs text-slate-500">{node.ip}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {node.threats > 0 && (
                      <span className="text-xs text-red-400">{node.threats} threats</span>
                    )}
                    <span className={`w-2 h-2 rounded-full ${node.status === 'active' ? 'bg-green-400' : 'bg-yellow-400'}`} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Bell className="w-5 h-5 text-yellow-400" />
              Recent Security Alerts
            </h3>
            <div className="space-y-3">
              {recentAlerts.map((alert) => (
                <div key={alert.id} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border-l-4 border-red-500">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className={`w-5 h-5 ${
                      alert.severity === 'critical' ? 'text-red-400' : 
                      alert.severity === 'high' ? 'text-orange-400' : 'text-yellow-400'
                    }`} />
                    <div>
                      <p className="font-medium">{alert.type}</p>
                      <p className="text-xs text-slate-400">{alert.source}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400">{alert.time}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      alert.status === 'blocked' ? 'bg-green-500/20 text-green-400' :
                      alert.status === 'mitigated' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {alert.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-purple-400" />
              Attack Vector Analysis
            </h3>
            <div className="space-y-4">
              {attackTypes.map((attack) => (
                <div key={attack.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{attack.name}</span>
                    <span className="text-slate-400">{attack.count} ({attack.percent}%)</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${attack.percent}%` }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            Compliance Status
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {compliance.map((comp) => (
              <div key={comp.name} className="text-center p-4 bg-slate-800/50 rounded-xl">
                <p className="text-3xl font-bold text-cyan-400 mb-1">{comp.score}%</p>
                <p className="font-medium">{comp.name}</p>
                <span className={`text-xs ${comp.status === 'compliant' ? 'text-green-400' : 'text-yellow-400'}`}>
                  {comp.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
