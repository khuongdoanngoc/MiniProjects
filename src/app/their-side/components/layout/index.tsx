import Header from "./Header";

export default function TheirSideLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex w-full  items-center h-screen">
            <Header />
            {children}
        </section>
    );
}
