import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "No Way Labs — Research. Prototype. Ship.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#000000",
          gap: "24px",
        }}
      >
        <span
          style={{
            fontFamily: "serif",
            fontStyle: "italic",
            fontSize: "48px",
            color: "#FFFFFF",
          }}
        >
          no way labs
        </span>
        <span
          style={{
            fontFamily: "sans-serif",
            fontWeight: 700,
            fontSize: "48px",
            color: "#FFFFFF",
            letterSpacing: "-0.04em",
          }}
        >
          Research. Prototype. Ship.
        </span>
        <span
          style={{
            fontFamily: "sans-serif",
            fontSize: "18px",
            color: "#555555",
          }}
        >
          An R&D studio at the intersection of agentic AI and web3.
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
