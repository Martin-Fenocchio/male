import { Metadata } from "next";
import Global from "./components/global";

export const metadata: Metadata = {
  title: "Para Male",
  description: "...",
};

export default function Home() {
  return <Global />;
}
