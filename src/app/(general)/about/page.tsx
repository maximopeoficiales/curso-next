import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Title",
    description: "About Description",
    keywords: ['About Page', 'Maximo', 'Acerca de']
};

interface MyProps {
}
const AboutPage = ({ }: MyProps) => {
    return (
        <div>AboutPage</div>
    )
}
export default AboutPage;
