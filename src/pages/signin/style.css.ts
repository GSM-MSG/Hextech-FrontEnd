import { Background, SignInFrame } from "@/assets";
import { style, fontFace } from "@vanilla-extract/css";

const lightSans = fontFace({
  src: 'local("Heir of Light Regular")',
});

export const SignInPageWrapper = style({
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(${Background})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});

export const BackgroundCover = style({
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(1, 24, 42, 0.25)",
  backdropFilter: "blur(1rem)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const SignInBox = style({
  width: "27rem",
  height: "38.25rem",
  paddingTop: "5rem",
  boxSizing: "border-box",
  backgroundImage: `url(${SignInFrame})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

export const GAuthButton = style({
  marginTop: "6rem",
  width: "17.5rem",
  height: "3rem",
  backgroundColor: "#1E252A",
  color: "#fff",
  borderRadius: "0.125rem",
  borderImage: "linear-gradient(to bottom, #09C2B5 0%, #005A82 100%)",
  borderImageSlice: "1",
  cursor: "pointer",
  fontSize: "1rem",
  fontFamily: lightSans,
});
