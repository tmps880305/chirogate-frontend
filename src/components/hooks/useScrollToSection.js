import {useLocation, useNavigate} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";

const useScrollToSection = (options={}) => {
    const {
        defaultBehavior = 'smooth',
        defaultBlock = 'center',
    } = options;

    const location = useLocation();
    const navigate = useNavigate();
    const [sectionRefs, setSectionRefs] = useState({});
    const [readySections, setReadySections] = useState({});

    // Function to create ref dynamically
    const createRef = useCallback((sectionId) => {
        return (element) => {
            if (element && !sectionRefs[sectionId]) {
                setSectionRefs((prevRefs) => ({
                    ...prevRefs,
                    [sectionId]: element // Directly store the DOM element
                }));
                setReadySections((prev) => ({...prev, [sectionId]: true})); // Mark as ready
            }
        };
    }, [sectionRefs]);

    useEffect(() => {
        const scrollToSection = (sectionId) => {
            const ref = sectionRefs[sectionId];
            if (ref) {
                ref.scrollIntoView({behavior: defaultBehavior, block: defaultBlock,});
            }
        };


        if (location.state?.scrollTo && readySections[location.state.scrollTo]) {
            scrollToSection(location.state.scrollTo);

            // clear location state
            navigate(location.pathname, {replace: true, state: {}});
        }
    }, [location, navigate, sectionRefs, readySections, defaultBehavior, defaultBlock]);

    return {createRef};
}

export default useScrollToSection;
