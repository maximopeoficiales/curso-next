import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Title",
    description: "Contact Description",
    keywords: ['Contact Page', 'Maximo', 'Contacto']
};

interface MyProps {
}
const ContactPage = ({ }: MyProps) => {
    return (
        <div>ContactPage</div>
    )
}
export default ContactPage;
