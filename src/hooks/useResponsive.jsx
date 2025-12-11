import { useWindowDimensions } from "react-native";

export default function useResponsive() {
    const { width } = useWindowDimensions();

    return {
        isMobile: width < 600,
        isTablet: width >= 600 && width < 1024,
        isDesktop: width >= 770,
        width
    };
}
