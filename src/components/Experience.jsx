import { View, Text, StyleSheet, Animated, useWindowDimensions } from "react-native";
import { useRef, useEffect } from "react";

// ------------------------------
// FADE + SLIDE UP ANIMATION WRAPPER
// ------------------------------
function FadeInView({ delay = 0, children }) {
    const fade = useRef(new Animated.Value(0)).current;
    const translate = useRef(new Animated.Value(20)).current;

    useEffect(() => {
        Animated.timing(fade, {
            toValue: 1,
            duration: 500,
            delay,
            useNativeDriver: true,
        }).start();

        Animated.timing(translate, {
            toValue: 0,
            duration: 500,
            delay,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <Animated.View
            style={{
                opacity: fade,
                transform: [{ translateY: translate }],
            }}
        >
            {children}
        </Animated.View>
    );
}

// ------------------------------
// EXPERIENCE SECTION COMPONENT
// ------------------------------
export default function ExperienceFull() {
    const { width } = useWindowDimensions();
    const isDesktop = width >= 1024;

    const experiences = [
        {
            title: "Flutter Developer",
            company: "Lauren Information Technologies Pvt. Ltd.",
            period: "July 2023 - Present",
            description:
                "Developing cross-platform mobile applications using Flutter and Dart with a focus on performance and user experience.",
            achievements: [
                "Developed cross-platform mobile apps using Flutter & Dart, ensuring high performance",
                "Designed responsive UI/UX and integrated Firebase for real-time updates",
                "Implemented secure authentication & role-based access control",
                "Optimized app security and API integrations using Node.js",
                "Streamlined development with Flutterflow and Agile practices",
            ],
        },
        {
            title: "Full Stack Developer",
            company: "Headstrait Software LLP",
            period: "Jan 2022 - Apr 2023",
            description:
                "Built and maintained full-stack web and mobile applications using modern technologies.",
            achievements: [
                "Built full-stack web & mobile applications using Flutter, React, and Node.js",
                "Developed RESTful APIs, reducing integration time by 30%",
                "Improved app performance & security, reducing crash rates by 15%",
                "Led testing & CI/CD efforts, cutting defects by 50%",
            ],
        },
    ];

    const certifications = [
        {
            title: "Flutter Certified Application Developer",
            issuer: "Android ATC",
            date: "2022",
            description:
                "Professional certification for Flutter development skills and best practices.",
        },
        {
            title: "National Level Project Competition",
            issuer: "ISTE",
            date: "2021",
            description:
                "Recognition for outstanding project work at the national level.",
        },
        {
            title: "Cisco NetAcad",
            issuer: "ISTE National Level Codathon",
            date: "2021",
            description: "Certification for participation in national-level contest.",
        },
        {
            title: "Research Publication",
            issuer: "IRJET Journal",
            date: "Dec 2020",
            description:
                "Published research on Palm Vein Technology for biometric authentication.",
        },
    ];

    return (
        <View style={[styles.section, isDesktop && styles.sectionDesktop]}>

            {/* HEADER */}
            <FadeInView>
                <Text style={[styles.heading, isDesktop && styles.headingDesktop]}>
                    Experience & Education
                </Text>
                <Text style={[styles.subText, isDesktop && styles.subTextDesktop]}>
                    My professional journey, education, and certifications.
                </Text>
            </FadeInView>

            {/* GRID LAYOUT */}
            <View style={[styles.grid, isDesktop && styles.gridDesktop]}>

                {/* ------------------------------
            LEFT SIDE: Experience + Education
        ------------------------------ */}
                <View style={styles.leftSide}>

                    <Text style={styles.blockTitle}>Work Experience</Text>

                    {experiences.map((exp, index) => (
                        <FadeInView key={index} delay={index * 150}>
                            <View style={styles.card}>
                                <View style={styles.cardLine} />

                                <Text style={styles.title}>{exp.title}</Text>
                                <Text style={styles.company}>{exp.company}</Text>
                                <Text style={styles.period}>{exp.period}</Text>

                                <Text style={styles.description}>{exp.description}</Text>

                                <Text style={styles.achTitle}>
                                    Key Responsibilities & Achievements:
                                </Text>

                                {exp.achievements.map((item, i) => (
                                    <Text key={i} style={styles.achievement}>
                                        • {item}
                                    </Text>
                                ))}
                            </View>
                        </FadeInView>
                    ))}

                    {/* EDUCATION */}
                    <Text style={styles.blockTitle}>Education</Text>

                    <FadeInView>
                        <View style={styles.card}>
                            <View style={styles.cardLine} />
                            <Text style={styles.title}>B.E. in Computer Engineering</Text>
                            <Text style={styles.company}>
                                Saraswati College of Engineering, Navi Mumbai
                            </Text>
                            <Text style={styles.period}>2019 – 2022</Text>
                            <Text style={styles.description}>CGPA: 8.3</Text>
                        </View>
                    </FadeInView>
                </View>

                {/* ------------------------------
            RIGHT SIDE: Certifications + Achievements
        ------------------------------ */}
                <View style={styles.rightSide}>

                    <Text style={styles.blockTitle}>Certifications</Text>

                    {certifications.map((cert, index) => (
                        <FadeInView key={index} delay={index * 150}>
                            <View style={styles.cardSmall}>
                                <Text style={styles.cardSmallTitle}>{cert.title}</Text>
                                <Text style={styles.certIssuer}>{cert.issuer}</Text>
                                <Text style={styles.certDate}>{cert.date}</Text>
                                <Text style={styles.certDesc}>{cert.description}</Text>
                            </View>
                        </FadeInView>
                    ))}

                    {/* ACHIEVEMENT CARD */}
                    <Text style={styles.blockTitle}>Achievements</Text>

                    <FadeInView>
                        <View style={styles.cardSmall}>
                            <Text style={styles.cardSmallTitle}>
                                Top Performer Recognition
                            </Text>
                            <Text style={styles.certIssuer}>Internship Studio</Text>
                            <Text style={styles.certDesc}>
                                Recognized as a Top Performer for outstanding contributions in web
                                development and improving engagement by 15%.
                            </Text>
                        </View>
                    </FadeInView>

                </View>
            </View>
        </View>
    );
}

/* ------------------------------
      STYLES
------------------------------ */
const styles = StyleSheet.create({
    section: { padding: 24 },
    sectionDesktop: { padding: 60, maxWidth: 1200, alignSelf: "center" },

    heading: { fontSize: 28, fontWeight: "bold", marginBottom: 10 },
    headingDesktop: { fontSize: 40 },

    subText: { fontSize: 15, color: "#666", marginBottom: 28 },
    subTextDesktop: { fontSize: 18 },

    grid: { flexDirection: "column" },
    gridDesktop: { flexDirection: "row", gap: 40 },

    leftSide: { flex: 2 },
    rightSide: { flex: 1 },

    blockTitle: {
        fontSize: 22,
        fontWeight: "700",
        marginVertical: 16,
    },

    card: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 12,
        padding: 18,
        marginBottom: 20,
        position: "relative",
    },

    cardLine: {
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: 4,
        backgroundColor: "#F83B46",
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
    },

    title: { fontSize: 20, fontWeight: "700" },
    company: { fontSize: 16, fontWeight: "600", color: "#F83B46", marginTop: 4 },
    period: { fontSize: 14, color: "#777", marginBottom: 10 },

    description: { fontSize: 15, color: "#444", marginBottom: 10, lineHeight: 22 },

    achTitle: { fontSize: 16, fontWeight: "600", marginTop: 10 },
    achievement: { fontSize: 14, color: "#555", marginVertical: 2 },

    cardSmall: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
    },

    cardSmallTitle: { fontSize: 17, fontWeight: "700" },
    certIssuer: { fontSize: 14, color: "#F83B46", marginTop: 4 },
    certDate: { fontSize: 13, color: "#777", marginBottom: 6 },
    certDesc: { fontSize: 14, color: "#444", lineHeight: 20 },
});
