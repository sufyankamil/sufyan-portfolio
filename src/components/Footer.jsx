import { View, Text, Pressable, StyleSheet, Animated } from "react-native";
import { useRef, useEffect } from "react";

function FadeIn({ delay = 0, children }) {
    const fade = useRef(new Animated.Value(0)).current;
    const shift = useRef(new Animated.Value(20)).current;

    useEffect(() => {
        Animated.timing(fade, {
            toValue: 1,
            delay,
            duration: 500,
            useNativeDriver: true,
        }).start();

        Animated.timing(shift, {
            toValue: 0,
            delay,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <Animated.View style={{ opacity: fade, transform: [{ translateY: shift }] }}>
            {children}
        </Animated.View>
    );
}

export default function Footer({ onNavigate }) {
    return (
        <View accessibilityRole="contentinfo">
            <View style={styles.footer}>
                <FadeIn>

                    {/* Brand */}
                    <Text style={styles.brand}>© {new Date().getFullYear()} — Sufyan Kamil</Text>
                    <Text style={styles.subBrand}>Flutter Developer • React Native Developer</Text>

                    {/* Navigation Links */}
                    <View style={styles.links}>
                        {["Home", "About", "Skills", "Experience", "Projects", "Contact"].map(
                            (item, index) => (
                                <Pressable
                                    key={index}
                                    onPress={() => onNavigate && onNavigate(item)}
                                >
                                    <Text style={styles.linkText}>{item}</Text>
                                </Pressable>
                            )
                        )}
                    </View>

                    {/* Social Icons */}
                    <View style={styles.socialRow}>
                        <Pressable
                            onPress={() => window.open("https://github.com/sufyankamil", "_blank")}
                        >
                            <Text style={styles.socialText}>GitHub</Text>
                        </Pressable>

                        <Pressable
                            onPress={() =>
                                window.open("https://linkedin.com/in/sufyankamil", "_blank")
                            }
                        >
                            <Text style={styles.socialText}>LinkedIn</Text>
                        </Pressable>

                        <Pressable
                            onPress={() => window.open("https://sufyankamil.com", "_blank")}
                        >
                            <Text style={styles.socialText}>Portfolio</Text>
                        </Pressable>
                    </View>

                </FadeIn>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor: "#111",
        marginTop: 40,
        alignItems: "center",
    },

    brand: {
        fontSize: 18,
        fontWeight: "700",
        color: "#fff",
    },

    subBrand: {
        fontSize: 14,
        color: "#ccc",
        marginTop: 4,
        marginBottom: 20,
    },

    links: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 15,
        marginBottom: 20,
    },

    linkText: {
        color: "#F83B46",
        fontWeight: "600",
        fontSize: 14,
    },

    socialRow: {
        flexDirection: "row",
        gap: 20,
        marginTop: 10,
    },

    socialText: {
        color: "white",
        fontSize: 14,
        opacity: 0.9,
    },
});
