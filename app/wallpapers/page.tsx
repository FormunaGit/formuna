"use client";

// Imports here
import { useEffect } from "react";
import WallpapersItem from "./item";


export default function Wallpapers() {
    useEffect(() => {
        document.title = 'Formuna\'s Wallpapers';
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center bg-zinc-900 text-zinc-300 p-10">
            <h1 className="text-5xl font-bold">Welcome to...</h1>
            <h3 className="text-3xl font-bold">Formuna&apos;s Wallpapers!</h3>
            <WallpapersItem image="https://raw.githubusercontent.com/FormunaGit/FormunaGit.github.io/main/app/wallpapers/raw/Shuriken-Arch.png" />
        </main>
    );
}