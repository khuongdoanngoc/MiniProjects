import Navbar from "./Navbar";

export default function Layout({ children }: any) {
    return (
        <div className="w-full box-border px-16 min-h-80 bg-slate-100">
            <Navbar />
            <main>{children}</main>
        </div>
    );
}
