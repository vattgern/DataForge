import Link from "next/link";

export default function Header() {
    return (
        <nav className="container sticky top-5 py-5 z-50 px-4 mt-9 bg-transparent backdrop-blur-md rounded-md border-slate-200 border-2 flex flex-row">
            <div className="w-1/4 flex justify-center">
                <Link className="py-2 px-2.5 border-slate-200 border-2 rounded-md font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500" href="/">Data Forge</Link>
            </div>
            <div className="w-3/4 flex justify-end gap-2">
                <Link className="py-2 px-2.5 border-slate-200 border-2 rounded-md font-semibold" href="/#featers">Возможности</Link>
                <Link className="py-2 px-2.5 border-slate-200 border-2 rounded-md font-semibold" href="/vizual">Начать</Link>
            </div>
        </nav>
    );
}