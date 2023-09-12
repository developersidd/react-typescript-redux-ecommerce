import { Helmet } from 'react-helmet-async';

const SetPageTitle = ({ title }: { title: string }) => {
    return (
        <Helmet>
            <title> {title} - AB Siddik E-commerce </title>
        </Helmet>

    )
}

export default SetPageTitle