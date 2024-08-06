import { BackgroundBeams } from "../components/ui/background-beams";
import { HoverEffect } from "../components/ui/card-hover-effect";


export default function Main() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-950 text-gray-400 p-10">
      <h1 className="text-5xl font-bold">Welcome to...</h1>
      <h3 className="text-3xl font-bold">Formuna&apos;s Website!</h3>
      <HoverEffect items={projects} className="flex flex-col items-center justify-center" />
      <BackgroundBeams /> 
    </main>
  );
}

const projects = [
  {
    title: "NFetch",
    description:
      "Neofetch alternative that uses NerdFont icons",
    link: "https://github.com/FormunaGit/NFetch",
  },
  {
    title: "Linux Wallpapers",
    description:
      "Wallpapers that I made for use with a variety of Linux distributions, Also the home of the Shuriken Wallpapers suite.",
    link: "./wallpapers",
  },
];