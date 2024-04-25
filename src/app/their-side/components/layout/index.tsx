import Header from "./Header";

export default function TheirSideLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex flex-col md:flex-row  w-full items-center h-screen">
            <Header />
            {children}
        </section>
    );
}
