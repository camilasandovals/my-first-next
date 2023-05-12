import Hero from "./Hero";

export const metadata = {
    title: "Um.. Whatev",
    description: "This is custom metada for this route",
    "og:image": ""
}

export default function Page() {
    return(
        <main className="p-8">
            <Hero />
            <h1 className="font-bold text-2xl">Whatev</h1>
            <p>Routes in Next.js are too easy</p>
        </main>
    )
}