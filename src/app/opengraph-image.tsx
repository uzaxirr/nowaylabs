import { ImageResponse } from "next/og";

export const alt = "No Way Labs — Research. Prototype. Ship.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const caveatRes = await fetch(
    "https://fonts.gstatic.com/s/caveat/v23/WnznHAc5bAfYB2QRah7pcpNvOx-pjRV6SII.ttf"
  );
  const caveat = await caveatRes.arrayBuffer();

  const spaceGroteskRes = await fetch(
    "https://fonts.gstatic.com/s/spacegrotesk/v22/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj4PVksj.ttf"
  );
  const spaceGrotesk = await spaceGroteskRes.arrayBuffer();

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
            fontFamily: "Caveat",
            fontWeight: 700,
            fontSize: "56px",
            color: "#FFFFFF",
          }}
        >
          no way labs
        </span>
        <span
          style={{
            fontFamily: "Space Grotesk",
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
            fontFamily: "Space Grotesk",
            fontWeight: 700,
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
      fonts: [
        {
          name: "Caveat",
          data: caveat,
          weight: 700 as const,
          style: "normal" as const,
        },
        {
          name: "Space Grotesk",
          data: spaceGrotesk,
          weight: 700 as const,
          style: "normal" as const,
        },
      ],
    }
  );
}
