import {
    View,
    Text,
    Image,
    StyleSheet,
    Pressable,
    Animated,
    useWindowDimensions,
    ActivityIndicator,
} from "react-native";
import { useState, useRef, useEffect } from "react";

function FadeIn({ delay = 0, children }) {
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

const projectData = [
    {
        id: 1,
        title: "Donor Connect",
        description:
            "A mobile app connecting blood donors with recipients using real-time matching.",
        image:
            "https://via.placeholder.com/600x400.png?text=Donor+Connect",
        tags: ["Flutter", "Firebase", "Maps", "Real-time"],
        github: "https://github.com/sufyankamil/donor-connect",
        category: "mobile",
    },
    {
        id: 2,
        title: "OAuth Web App",
        description:
            "Flutter Web based OAuth authentication system with API integration.",
        image:
            "https://via.placeholder.com/600x400.png?text=OAuth+Web+App",
        tags: ["Flutter Web", "OAuth", "Auth"],
        github: "https://github.com/sufyankamil",
        category: "web",
    },
    {
        id: 3,
        title: "SaaS-ScrapeFlow",
        description:
            "Automated web scraping and workflow-based data extraction system.",
        image:
            "https://via.placeholder.com/600x400.png?text=SaaS+ScrapeFlow",
        tags: ["React", "Node.js", "MongoDB"],
        github: "https://github.com/sufyankamil/SaaS-ScrapeFlow",
        category: "web",
    },
    {
        id: 4,
        title: "TaskMate",
        description:
            "Task manager app with reminders, categories, and cloud sync.",
        image:
            "https://via.placeholder.com/600x400.png?text=TaskMate",
        tags: ["Flutter", "Firebase", "Notifications"],
        github: "https://github.com/sufyankamil/taskMate",
        category: "mobile",
    },
];

export default function ProjectsSection() {
    const { width } = useWindowDimensions();
    const isTablet = width >= 700;
    const isDesktop = width >= 1024;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [filter, setFilter] = useState("all");

    const filtered =
        filter === "all"
            ? projectData
            : projectData.filter((p) => p.category === filter);

    return (
        <View style={[styles.section, isDesktop && styles.sectionDesktop]}>

            <FadeIn>
                <Text style={styles.heading}>My Projects</Text>
                <Text style={styles.subText}>
                    Explore my portfolio of Flutter & Full-Stack applications.
                </Text>
            </FadeIn>

            {/* FILTER TABS */}
            <FadeIn delay={150}>
                <View style={styles.tabs}>
                    {["all", "mobile", "web"].map((t) => (
                        <Pressable
                            key={t}
                            onPress={() => setFilter(t)}
                            style={[
                                styles.tabButton,
                                filter === t && styles.tabButtonActive,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.tabText,
                                    filter === t && styles.tabTextActive,
                                ]}
                            >
                                {t.toUpperCase()}
                            </Text>
                        </Pressable>
                    ))}
                </View>
            </FadeIn>

            {/* PROJECT GRID */}
            <View
                style={[
                    styles.grid,
                    isDesktop ? styles.gridDesktop : isTablet ? styles.gridTablet : {},
                ]}
            >
                {filtered.map((project, i) => (
                    <FadeIn key={project.id} delay={i * 120}>
                        <View style={styles.card}>
                            {/* IMAGE */}
                            {/* <Image source={{ uri: project.image }} style={styles.image} /> */}

                            {/* Loader */}
                            {loading && !error && (
                                <View style={styles.loader}>
                                    <ActivityIndicator size="small"
                                        color="#F83B46" />
                                </View>
                            )}

                            {/* Error placeholder */}
                            {/* {error && (
                                <View style={styles.loader}>
                                    <ActivityIndicator size="small" color="#F83B46" />
                                </View>
                            )} */}

                            {/* Actual Image */}
                            {!error && (
                                <Image
                                    source={{ uri: project.image }}
                                    style={[styles.image, loading && { opacity: 0 }]}
                                    resizeMode="cover"
                                    onLoad={() => setLoading(false)}
                                    onError={() => {
                                        setLoading(false);
                                        setError(true);
                                    }}
                                />
                            )}

                            {/* CONTENT */}
                            <View style={styles.cardContent}>
                                <Text style={styles.title}>{project.title}</Text>
                                <Text style={styles.description}>{project.description}</Text>

                                {/* TAGS */}
                                <View style={styles.tagRow}>
                                    {project.tags.map((tag) => (
                                        <View key={tag} style={styles.tag}>
                                            <Text style={styles.tagText}>{tag}</Text>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        </View>
                    </FadeIn>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    section: { padding: 24 },
    sectionDesktop: { padding: 60, maxWidth: 1200, alignSelf: "center" },

    heading: { fontSize: 32, fontWeight: "700", textAlign: "center" },
    subText: {
        fontSize: 16,
        textAlign: "center",
        color: "#666",
        maxWidth: 700,
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 20,
    },

    loader: {
        position: "absolute",
        zIndex: 2,
    },

    tabs: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 14,
        marginBottom: 30,
    },

    tabButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "#ddd",
    },

    tabButtonActive: {
        backgroundColor: "#F83B46",
        borderColor: "#F83B46",
    },

    tabText: {
        fontSize: 14,
        color: "#444",
        fontWeight: "600",
    },

    tabTextActive: {
        color: "white",
    },

    grid: {
        flexDirection: "column",
        gap: 20,
    },

    gridTablet: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },

    gridDesktop: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 30,
    },


    card: {
        width: "100%",
        maxWidth: 360,
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 12,
        overflow: "hidden",
        backgroundColor: "white",
    },

    image: { width: "100%", height: 180 },

    cardContent: { padding: 16 },

    title: { fontSize: 20, fontWeight: "700", marginBottom: 6 },

    description: { fontSize: 14, color: "#555", marginBottom: 10 },

    tagRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 6,
        marginBottom: 14,
    },

    tag: {
        backgroundColor: "#F5F5F5",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6,
    },

    tagText: { fontSize: 12, color: "#444", fontWeight: "600" },

    githubButton: {
        marginTop: 6,
        paddingVertical: 10,
        backgroundColor: "#F83B46",
        borderRadius: 8,
        alignItems: "center",
    },

    githubButtonText: {
        color: "white",
        fontWeight: "700",
    },
});
