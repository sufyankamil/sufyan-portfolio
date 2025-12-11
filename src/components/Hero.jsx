import {
    View,
    Text,
    Image,
    StyleSheet,
    Pressable,
    Animated,
    Linking,
    useWindowDimensions,
} from "react-native";
import { useRef, useEffect } from "react";

export default function Hero({ onNavigate }) {
    const fade = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(0.9)).current;

    const { width } = useWindowDimensions();
    const isMobile = width < 768;

    // Fade + scale animation
    useEffect(() => {
        Animated.parallel([
            Animated.timing(fade, {
                toValue: 1,
                duration: 600,
                useNativeDriver: true,
            }),
            Animated.timing(scale, {
                toValue: 1,
                duration: 600,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    const scrollTo = (section) => {
        if (onNavigate) onNavigate(section);
    };

    return (
        <View accessibilityRole="banner">
            <View style={[styles.section, { paddingTop: isMobile ? 90 : 130 }]}>
                {/* CENTERED FULL-WIDTH WRAPPER */}
                <View style={styles.wrapper}>
                    <View
                        style={[
                            styles.container,
                            isMobile && styles.mobileContainer,
                        ]}
                    >
                        {/* LEFT CONTENT */}
                        <Animated.View
                            style={[
                                styles.left,
                                {
                                    opacity: fade,
                                    transform: [
                                        {
                                            translateY: fade.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [20, 0],
                                            }),
                                        },
                                    ],
                                },
                            ]}
                        >
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>Flutter Developer</Text>
                            </View>

                            <Text style={styles.heading}>
                                Building{" "}
                                <Text style={{ color: "#F83B46" }}>
                                    innovative solutions
                                </Text>{" "}
                                with Flutter
                            </Text>

                            <Text style={styles.subtext}>
                                I'm a Flutter developer with a degree in Computer Engineering.
                                I create clean, efficient and scalable applications with modern UI.
                            </Text>

                            {/* BUTTONS */}
                            <View
                                style={[
                                    styles.buttons,
                                    isMobile && { justifyContent: "center" },
                                ]}
                            >
                                <Pressable
                                    onPress={() => scrollTo("Projects")}
                                    style={styles.buttonPrimary}
                                >
                                    <Text style={styles.buttonPrimaryText}>
                                        View My Work →
                                    </Text>
                                </Pressable>

                                <Pressable
                                    onPress={() => scrollTo("Contact")}
                                    style={styles.buttonOutline}
                                >
                                    <Text style={styles.buttonOutlineText}>
                                        Contact Me
                                    </Text>
                                </Pressable>
                            </View>

                            {/* SOCIAL ICONS */}
                            <View
                                style={[
                                    styles.socialRow,
                                    isMobile && { justifyContent: "center" },
                                ]}
                            >
                                <Pressable
                                    onPress={() =>
                                        Linking.openURL("https://github.com/sufyankamil")
                                    }
                                >
                                    <Text style={styles.socialIcon}>🐙</Text>
                                </Pressable>

                                <Pressable
                                    onPress={() =>
                                        Linking.openURL("https://linkedin.com/in/sufyankamil")
                                    }
                                >
                                    <Text style={styles.socialIcon}>💼</Text>
                                </Pressable>

                                <Pressable
                                    onPress={() => Linking.openURL("mailto:info@sufyankamil.com")}
                                >
                                    <Text style={styles.socialIcon}>✉️</Text>
                                </Pressable>
                            </View>
                        </Animated.View>

                        {/* RIGHT IMAGE */}
                        <Animated.View
                            style={[
                                styles.right,
                                isMobile && { alignItems: "center" },
                                { opacity: fade, transform: [{ scale }] },
                            ]}
                        >
                            <View style={styles.imageWrapper}>
                                <Image
                                    source={{ uri: "/images/profile.webp" }}
                                    style={styles.image}
                                    resizeMode="cover"
                                />
                            </View>
                        </Animated.View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        paddingBottom: 60,
        backgroundColor: "#fff",
    },

    /* OUTER CENTER WRAPPER */
    wrapper: {
        width: "100%",
        alignItems: "center",
    },

    /* INNER CONTAINER LIKE "container mx-auto" */
    container: {
        width: "100%",
        maxWidth: 1200, // keeps hero centered on wide screens
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        gap: 30,
    },

    mobileContainer: {
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
    },

    left: {
        flex: 1,
        maxWidth: 600,
    },

    badge: {
        alignSelf: "flex-start",
        backgroundColor: "rgba(248,59,70,0.12)",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        marginBottom: 12,
    },

    badgeText: {
        color: "#F83B46",
        fontWeight: "600",
    },

    heading: {
        fontSize: 36,
        fontWeight: "700",
        lineHeight: 44,
        marginBottom: 14,
    },

    subtext: {
        fontSize: 16,
        color: "#1A1A1A",
        marginBottom: 22,
    },

    buttons: {
        flexDirection: "row",
        gap: 12,
        flexWrap: "wrap",
        marginBottom: 18,
    },

    buttonPrimary: {
        backgroundColor: "#F83B46",
        paddingVertical: 12,
        paddingHorizontal: 22,
        borderRadius: 30,
    },

    buttonPrimaryText: {
        color: "white",
        fontWeight: "700",
    },

    buttonOutline: {
        borderWidth: 2,
        borderColor: "#F83B46",
        paddingVertical: 12,
        paddingHorizontal: 22,
        borderRadius: 30,
    },

    buttonOutlineText: {
        color: "#F83B46",
        fontWeight: "700",
    },

    socialRow: {
        flexDirection: "row",
        gap: 18,
        marginTop: 8,
    },

    socialIcon: {
        fontSize: 30,
    },

    right: {
        flex: 1,
        alignItems: "flex-end",
    },

    imageWrapper: {
        width: 240,
        height: 240,
        borderRadius: 200,
        overflow: "hidden",
        borderWidth: 6,
        borderColor: "rgba(248,59,70,0.2)",
    },

    image: {
        width: "100%",
        height: "100%",
    },
});
