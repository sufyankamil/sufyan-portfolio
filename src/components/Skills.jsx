import { View, Text, StyleSheet } from "react-native";
import useResponsive from "../hooks/useResponsive";

export default function Skills() {
    const { isDesktop } = useResponsive();

    const skills = [
        "Flutter Development",
        "React Native Development",
        "REST API Integration",
        "Authentication & OAuth",
        "Firebase (Firestore, Auth, Storage)",
        "Clean Architecture",
        "State Management (Provider, Riverpod)"
    ];

    const technologies = [
        "Flutter",
        "Dart",
        "React",
        "React Native",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Git & GitHub",
        "Supabase",
        "MySQL",
        "HTML/CSS",
    ];

    return (
        <View style={[styles.section, isDesktop && styles.sectionDesktop]}>
            <Text style={[styles.heading, isDesktop && styles.headingDesktop]}>
                Skills & Expertise
            </Text>

            {/* Skills */}
            <Text style={styles.subHeading}>Core Skills</Text>
            <View style={[styles.grid, isDesktop && styles.gridDesktop]}>
                {skills.map((skill, index) => (
                    <View key={index} style={styles.skillBox}>
                        <Text style={styles.skillText}>{skill}</Text>
                    </View>
                ))}
            </View>

            {/* Technologies */}
            <Text style={styles.subHeading}>Technologies I Work With</Text>
            <View style={[styles.grid, isDesktop && styles.gridDesktop]}>
                {technologies.map((tech, index) => (
                    <View key={index} style={styles.techBox}>
                        <Text style={styles.techText}>{tech}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        padding: 24,
    },
    sectionDesktop: {
        padding: 60,
        maxWidth: 1100,
        alignSelf: "center",
    },
    heading: {
        fontSize: 28,
        fontWeight: "700",
        marginBottom: 10,
    },
    headingDesktop: {
        fontSize: 36,
    },
    subHeading: {
        fontSize: 20,
        fontWeight: "600",
        marginVertical: 12,
        color: "#222",
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
    },
    gridDesktop: {
        gap: 15,
    },

    skillBox: {
        backgroundColor: "#F83B4620",
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 8,
    },
    skillText: {
        fontSize: 15,
        fontWeight: "600",
        color: "#F83B46",
    },

    techBox: {
        backgroundColor: "#EEE",
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 8,
    },
    techText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#333",
    },
});
