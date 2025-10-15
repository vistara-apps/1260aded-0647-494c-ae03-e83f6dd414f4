'use client';

import { Shield, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface SafetyScoreProps {
  tokenAddress: string;
}

export default function SafetyScore({ tokenAddress }: SafetyScoreProps) {
  const safetyData = {
    score: 85,
    status: 'safe',
    checks: [
      { name: 'Contract Verified', status: 'pass', icon: CheckCircle },
      { name: 'No Honeypot', status: 'pass', icon: CheckCircle },
      { name: 'Liquidity Locked', status: 'pass', icon: CheckCircle },
      { name: 'Ownership Renounced', status: 'warning', icon: AlertTriangle },
      { name: 'Audit Available', status: 'pass', icon: CheckCircle },
    ],
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-success';
    if (score >= 60) return 'text-warning';
    return 'text-danger';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass':
        return <CheckCircle className="w-5 h-5 text-success" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-warning" />;
      case 'fail':
        return <XCircle className="w-5 h-5 text-danger" />;
      default:
        return null;
    }
  };

  return (
    <div className="glass-card p-6 rounded-lg">
      <div className="flex items-center gap-3 mb-6">
        <Shield className="w-6 h-6 text-primary" />
        <h3 className="text-xl font-bold">Safety Analysis</h3>
      </div>

      <div className="text-center mb-6">
        <div className={`text-6xl font-bold ${getScoreColor(safetyData.score)} mb-2`}>
          {safetyData.score}
        </div>
        <div className="text-sm text-gray-400">Safety Score</div>
      </div>

      <div className="space-y-3">
        {safetyData.checks.map((check, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg bg-surface bg-opacity-50"
          >
            <span className="text-sm">{check.name}</span>
            {getStatusIcon(check.status)}
          </div>
        ))}
      </div>

      <button className="btn-primary w-full mt-6">
        View Full Audit Report
      </button>
    </div>
  );
}
