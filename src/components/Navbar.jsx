import {
    View,
    Text,
    Pressable,
    StyleSheet,
    Animated,
    Easing,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import useResponsive from "../hooks/useResponsive";

const navItems = ["Home", "About", "Projects", "Skills", "Experience", "Contact"];

export default function Navbar({ onNavigate }) {
    const { isMobile } = useResponsive();

    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Animation for mobile dropdown menu
    const dropAnim = useRef(new Animated.Value(0)).current;

    const toggleMenu = () => {
        const toValue = isOpen ? 0 : 1;
        setIsOpen(!isOpen);

        Animated.timing(dropAnim, {
            toValue,
            duration: 250,
            easing: Easing.ease,
            useNativeDriver: false,
        }).start();
    };

    // Blur on scroll (desktop + mobile)
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Mobile menu height animation
    const menuHeight = dropAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 240],
    });

    // Global scrollToSection function for other components
    useEffect(() => {
        window.scrollToSection = (id) => {
            const element = document.getElementById(id.toLowerCase());

            if (element) {
                const navbarHeight = document.querySelector("#navbar")?.offsetHeight || 70;

                const y =
                    element.getBoundingClientRect().top +
                    window.pageYOffset -
                    (navbarHeight + 20);

                window.scrollTo({ top: y, behavior: "smooth" });
            }
        };

        return () => delete window.scrollToSection;
    }, []);

    const handlePress = (section) => {
        if (isMobile) toggleMenu();
        onNavigate(section);
    };

    return (
        <>
            {/* NAVBAR */}
            {/* <View
                id="navbar" 
                style={[
                    styles.navbar,
                    scrolled && styles.navbarScrolled,
                ]}
            > */}

            {/* <View accessibilityRole="header"> */}
            <View
                style={[
                    styles.navbar,
                    {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        width: "100%",
                    }
                ]}
            >
                <Text style={styles.logo}>
                    Sufyan<Text style={{ color: "#F83B46" }}>Kamil</Text>
                </Text>

                {/* Desktop Menu */}
                {!isMobile && (
                    <View style={styles.menu}>
                        {navItems.map((item) => (
                            <Pressable key={item} onPress={() => handlePress(item)}>
                                <Text style={styles.menuItem}>{item}</Text>
                            </Pressable>
                        ))}
                    </View>
                )}

                {/* Mobile Hamburger */}
                {isMobile && (
                    <Pressable onPress={toggleMenu}>
                        <Text style={styles.hamburger}>{isOpen ? "✕" : "☰"}</Text>
                    </Pressable>
                )}
            </View>
            {/* </View> */}

            {/* MOBILE DROPDOWN MENU */}
            {isMobile && (
                <Animated.View
                    style={[styles.dropdown, { height: menuHeight }]}
                >
                    <View style={styles.dropdownInner}>
                        {navItems.map((item) => (
                            <Pressable key={item} onPress={() => handlePress(item)}>
                                <Text style={styles.dropdownText}>{item}</Text>
                            </Pressable>
                        ))}
                    </View>
                </Animated.View>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    navbar: {
        position: "sticky",
        top: 0,
        zIndex: 999,
        paddingVertical: 14,
        paddingHorizontal: 18,
        backgroundColor: "rgba(255,255,255,0.3)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottomWidth: 1,
        borderColor: "rgba(255,255,255,0.4)",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "all 0.3s ease",
    },

    navbarScrolled: {
        backgroundColor: "rgba(255,255,255,0.75)",
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 6,
    },

    logo: {
        fontSize: 22,
        fontWeight: "700",
    },

    menu: {
        flexDirection: "row",
        gap: 22,
    },

    menuItem: {
        fontSize: 17,
        color: "#333",
        fontWeight: "500",
    },

    hamburger: {
        fontSize: 30,
        fontWeight: "700",
    },

    // Mobile Menu
    dropdown: {
        overflow: "hidden",
        backgroundColor: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        borderBottomWidth: 1,
        borderColor: "#eee",
    },

    dropdownInner: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    dropdownText: {
        fontSize: 20,
        paddingVertical: 12,
        fontWeight: "600",
        color: "#333",
    },
});
