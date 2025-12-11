import { View, Text, StyleSheet } from "react-native";
import useResponsive from "../hooks/useResponsive";

export default function About() {
    const { isDesktop } = useResponsive();

    return (
        <View style={[styles.section, isDesktop && styles.sectionDesktop]}>
            <Text style={[styles.heading, isDesktop && styles.headingDesktop]}>
                About Me
            </Text>

            <Text style={[styles.text, isDesktop && styles.textDesktop]}>
                I am a Flutter Developer with 3.7+ years of experience building scalable
                mobile and web applications. I specialize in clean UI, performance
                optimization, Firebase, and backend integrations.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        padding: 20,
    },
    sectionDesktop: {
        padding: 60,
        maxWidth: 900,
        alignSelf: "center",
    },

    heading: {
        fontSize: 26,
        fontWeight: "700",
        marginBottom: 8,
    },
    headingDesktop: {
        fontSize: 36,
    },

    text: {
        fontSize: 16,
        lineHeight: 22,
        color: "#444",
    },
    textDesktop: {
        fontSize: 20,
        lineHeight: 28,
    },
});
