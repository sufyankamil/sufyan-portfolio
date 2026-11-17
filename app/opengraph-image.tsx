import { ImageResponse } from "next/og"

export const dynamic = "force-static"
export const alt = "Sufyan Kamil — Senior Software Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #06080e 0%, #111a33 60%, #0b3a4a 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#22d3ee", letterSpacing: 4, marginBottom: 24 }}>
          SUFYANKAMIL.COM
        </div>
        <div style={{ fontSize: 88, fontWeight: 800, lineHeight: 1.05 }}>Sufyan Kamil</div>
        <div style={{ fontSize: 40, color: "#c7d2fe", marginTop: 20 }}>
          Senior Software Engineer · Dubai
        </div>
        <div style={{ fontSize: 28, color: "#94a3b8", marginTop: 40 }}>
          React Native · Flutter · Next.js · Node.js
        </div>
      </div>
    ),
    size
  )
}
