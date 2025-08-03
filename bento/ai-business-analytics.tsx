import type React from "react"

const AiBusinessAnalytics: React.FC = () => {
  const themeVars = {
    "--analytics-primary-color": "hsl(var(--primary))",
    "--analytics-background-color": "hsl(var(--background))",
    "--analytics-text-color": "hsl(var(--foreground))",
    "--analytics-text-dark": "hsl(var(--primary-foreground))",
    "--analytics-border-color": "hsl(var(--border))",
    "--analytics-border-main": "hsl(var(--foreground) / 0.1)",
    "--analytics-highlight-primary": "hsl(var(--primary) / 0.12)",
    "--analytics-highlight-header": "hsl(var(--accent) / 0.2)",
  }

  return (
    <div
      style={
        {
          width: "100%",
          height: "100%",
          position: "relative",
          background: "transparent",
          ...themeVars,
        } as React.CSSProperties
      }
      role="img"
      aria-label="AI Business Analytics dashboard showing data insights and recommendations"
    >
      {/* Background Analytics Panel (Blurred) */}
      <div
        style={{
          position: "absolute",
          top: "30px",
          left: "50%",
          transform: "translateX(-50%) scale(0.9)",
          width: "340px",
          height: "205.949px",
          background: "linear-gradient(180deg, var(--analytics-background-color) 0%, transparent 100%)",
          opacity: 0.6,
          borderRadius: "8.826px",
          border: "0.791px solid var(--analytics-border-color)",
          overflow: "hidden",
          backdropFilter: "blur(16px)",
        }}
      >
        <div
          className="border rounded-lg bg-card"
          style={{
            padding: "7.355px 8.826px",
            height: "100%",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: "9.562px",
              lineHeight: "14.711px",
              letterSpacing: "-0.2942px",
              color: "hsl(var(--muted-foreground))",
              width: "100%",
              maxWidth: "320px",
              margin: 0,
            }}
          >
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 600 }}>📊 Revenue Analytics</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>Q4 Performance: +34% growth</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>Customer Acquisition: +28%</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>Retention Rate: 94.2%</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}></p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 600 }}>🎯 AI Recommendations</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>• Focus on enterprise segment</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>• Optimize pricing strategy</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>• Expand marketing channels</p>
          </div>
        </div>
      </div>

      {/* Foreground Analytics Panel (Main) */}
      <div
        style={{
          position: "absolute",
          top: "51.336px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "340px",
          height: "221.395px",
          background: "var(--analytics-background-color)",
          backdropFilter: "blur(16px)",
          borderRadius: "9.488px",
          border: "1px solid var(--analytics-border-main)",
          overflow: "hidden",
        }}
      >
        <div
          className="bg-card border border-border"
          style={{
            padding: "9.488px",
            height: "100%",
            boxSizing: "border-box",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              width: "100%",
              top: "47.67px",
              height: "33.118px",
              background: "hsl(var(--foreground) / 0.08)",
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              width: "100%",
              top: "80.791px",
              height: "45.465px",
              background: "var(--analytics-highlight-primary)",
              zIndex: 1,
            }}
          />
          <div
            style={{
              fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: "10.279px",
              lineHeight: "15.814px",
              letterSpacing: "-0.3163px",
              color: "var(--analytics-text-color)",
              width: "100%",
              maxWidth: "320px",
              position: "relative",
              zIndex: 2,
              margin: 0,
            }}
          >
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 600 }}>📊 Revenue Analytics</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>Q4 Performance: +34% growth</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>Customer Acquisition: +28%</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>Retention Rate: 94.2%</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}></p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 600 }}>🎯 AI Recommendations</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>• Focus on enterprise segment</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>• Optimize pricing strategy</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>• Expand marketing channels</p>
          </div>
          <button
            style={{
              position: "absolute",
              top: "calc(50% + 29.745px)",
              right: "20px",
              transform: "translateY(-50%)",
              zIndex: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "3.953px",
              background: "var(--analytics-primary-color)",
              color: "var(--analytics-text-dark)",
              border: "none",
              cursor: "pointer",
              fontWeight: 500,
              whiteSpace: "nowrap",
              transition: "all 0.2s ease",
              padding: "3.163px 6.326px",
              borderRadius: "5.535px",
              fontSize: "10.279px",
              lineHeight: "15.814px",
              letterSpacing: "-0.3163px",
              boxShadow:
                "0px 26.093px 7.116px rgba(0, 0, 0, 0), 0px 16.605px 6.326px rgba(0, 0, 0, 0.01), 0px 9.488px 5.535px rgba(0, 0, 0, 0.05), 0px 3.953px 3.953px rgba(0, 0, 0, 0.09), 0px 0.791px 2.372px rgba(0, 0, 0, 0.1)",
            }}
          >
            <span
              style={{
                fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontWeight: 500,
              }}
            >
              View Full Report
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AiBusinessAnalytics
