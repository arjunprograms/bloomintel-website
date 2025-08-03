import type React from "react"
import { Search } from "lucide-react"

interface DataInsightsProps {
  className?: string
}

const DataInsights: React.FC<DataInsightsProps> = ({ className = "" }) => {
  const insights = [
    { metric: "Revenue Growth", value: "+34%", trend: "📈", color: "text-green-500" },
    { metric: "Customer Satisfaction", value: "94.2%", trend: "⭐", color: "text-blue-500" },
    { metric: "Cost Reduction", value: "-28%", trend: "💰", color: "text-purple-500" },
    { metric: "Process Efficiency", value: "+67%", trend: "⚡", color: "text-orange-500" },
    { metric: "Market Share", value: "+12%", trend: "🎯", color: "text-red-500" },
    { metric: "Employee Productivity", value: "+45%", trend: "🚀", color: "text-indigo-500" },
  ]

  return (
    <div
      className={`w-full h-full flex items-center justify-center p-4 relative ${className}`}
      role="img"
      aria-label="Data insights dashboard showing key business metrics and trends"
    >
      {/* Main Message Box */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, calc(-50% + 24px))",
          width: "345px",
          height: "277px",
          background: "linear-gradient(180deg, hsl(var(--background)) 0%, transparent 100%)",
          backdropFilter: "blur(16px)",
          borderRadius: "9.628px",
          border: "0.802px solid hsl(var(--border))",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12.837px",
              padding: "8.826px 12.837px",
              borderBottom: "0.802px solid hsl(var(--border))",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: "14.442px",
                height: "14.442px",
                position: "relative",
                flexShrink: 0,
              }}
            >
              <Search className="w-full h-full text-muted-foreground" />
            </div>
            <span
              style={{
                fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: "12.837px",
                lineHeight: "19.256px",
                color: "hsl(var(--muted-foreground))",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              📊 Business Intelligence Dashboard
            </span>
          </div>

          {/* Insights List */}
          {insights.map((insight, index) => (
            <div
              key={insight.metric}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8.826px 12.837px",
                borderBottom: index < insights.length - 1 ? "0.479px solid hsl(var(--border))" : "none",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    fontSize: "16px",
                    flexShrink: 0,
                  }}
                >
                  {insight.trend}
                </div>
                <span
                  style={{
                    fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    fontSize: "11px",
                    lineHeight: "16px",
                    color: "hsl(var(--muted-foreground))",
                    fontWeight: 400,
                    whiteSpace: "nowrap",
                  }}
                >
                  {insight.metric}
                </span>
              </div>
              <div
                style={{
                  background: "hsl(var(--primary) / 0.08)",
                  padding: "2px 6px",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    fontSize: "10px",
                    lineHeight: "14px",
                    color: "hsl(var(--primary))",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                  }}
                >
                  {insight.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DataInsights
