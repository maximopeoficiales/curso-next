import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing Title",
    description: "Pricing Description",
    keywords: ['Pricing Page', 'Maximo', 'Precio']
};

interface MyProps {
}
const PricingPage = ({ }: MyProps) => {
    return (
        <div>PricingPage</div>
    )
}
export default PricingPage;
