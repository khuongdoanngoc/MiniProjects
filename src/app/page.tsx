import Layout from "./components/layout";
import Project from "./components/Project";
import TheirSideBanner from "./assets/banner.png";
import CurrencyConverterBanner from "./assets/currencyconverter.png";

export default function Home() {
    const projects = [
        {
            name: "Their Side",
            description:
                "You've ordered your SM7B, boom arm, and a bunch of acoustic foam. With this project, you can finally stop procrastinating and record your first episode.",
            img: TheirSideBanner,
            link: "http://localhost:3000/their-side",
        },
        {
            name: "Currency Converter",
            description:
                "Developed a simple React web application for automatic currency conversion. Users can input the amount and select the currency, and the application dynamically updates the conversion result as the user modifies the input. Utilized an API to fetch reliable currency exchange rates.",
            img: CurrencyConverterBanner,
            link: "https://currency-converter-khuongdngcs-projects.vercel.app",
        },
    ];

    return (
        <Layout>
            {projects.map((project, index) => (
                <Project
                    key={index}
                    name={project.name}
                    description={project.description}
                    img={project.img}
                    link={project.link}
                />
            ))}
        </Layout>
    );
}
