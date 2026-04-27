import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "No Way Labs — Research. Prototype. Ship.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const caveat = await fetch(
    new URL(
      "https://fonts.gstatic.com/s/caveat/v18/WnznHAc5bAfYB2QRah7pcpNvOx-pjfJ9SIKjYBxPigs.woff"
    )
  ).then((res) => res.arrayBuffer());

  const spaceGrotesk = await fetch(
    new URL(
      "https://fonts.gstatic.com/s/spacegrotesk/v16/V8mDoQDjQSkFtoMM3T6r8E7mPbF4Cw.woff"
    )
  ).then((res) => res.arrayBuffer());

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
          weight: 700,
          style: "normal",
        },
        {
          name: "Space Grotesk",
          data: spaceGrotesk,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
