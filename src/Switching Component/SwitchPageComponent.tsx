import React from 'react';
import PropTypes from 'prop-types';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import FacilitiesPage from './FacilitiesPage';
import ContactPage from './ContactPage';
import HelpPage from './HelpPage';

type PageProps = {
    [key: string]: any; // Adjust according to the props you expect
};

const PAGES: { [key: string]: React.FC<PageProps> } = {
    home: HomePage,
    about: AboutPage,
    facilities: FacilitiesPage,
    contact: ContactPage,
    help: HelpPage,
};

interface SwitchPageComponentProps {
    page: keyof typeof PAGES;
}

const SwitchPageComponent: React.FC<SwitchPageComponentProps> = (props) => {
    const Handler = PAGES[props.page] || HelpPage; // Fallback to HelpPage if the page is not found
    return <Handler {...props} />;
};

// Prop types for SwitchPageComponent
SwitchPageComponent.propTypes = {
    page: PropTypes.oneOf(Object.keys(PAGES)).isRequired,
};

export default SwitchPageComponent;
