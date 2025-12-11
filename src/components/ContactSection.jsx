import { View, Text, StyleSheet, Pressable, Linking, Animated } from "react-native";
import { useRef, useEffect } from "react";

// fade + slide animation
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

export default function ContactSection() {
    return (
        <View style={styles.section}>

            <FadeIn>
                <Text style={styles.heading}>Contact Me</Text>
                <Text style={styles.subText}>
                    Let’s connect! Whether you have a project, job opportunity, or just want to say hi.
                </Text>
            </FadeIn>

            {/* Contact Cards */}
            <FadeIn delay={150}>
                <View style={styles.container}>

                    {/* Email */}
                    <View style={styles.card}>
                        <Text style={styles.title}>Email</Text>
                        <Text style={styles.value}>info@sufyankamil.com</Text>

                        <Pressable
                            style={styles.button}
                            onPress={() => Linking.openURL("mailto:info@sufyankamil.com")}
                        >
                            <Text style={styles.buttonText}>Send Email</Text>
                        </Pressable>
                    </View>

                    {/* Location */}
                    <View style={styles.card}>
                        <Text style={styles.title}>Location</Text>
                        <Text style={styles.value}>Mumbai, Maharashtra, India</Text>

                        <Pressable
                            style={styles.button}
                            onPress={() =>
                                Linking.openURL("https://www.google.com/maps?q=Mumbai")
                            }
                        >
                            <Text style={styles.buttonText}>View on Map</Text>
                        </Pressable>
                    </View>

                </View>
            </FadeIn>

            {/* Social Links */}
            <FadeIn delay={300}>
                <View style={styles.socialContainer}>

                    <Pressable
                        style={styles.socialButton}
                        onPress={() => Linking.openURL("https://github.com/sufyankamil")}
                    >
                        <Text style={styles.socialText}>GitHub</Text>
                    </Pressable>

                    <Pressable
                        style={styles.socialButton}
                        onPress={() => Linking.openURL("https://linkedin.com/in/sufyankamil")}
                    >
                        <Text style={styles.socialText}>LinkedIn</Text>
                    </Pressable>

                    <Pressable
                        style={styles.socialButton}
                        onPress={() => Linking.openURL("https://sufyankamil.com")}
                    >
                        <Text style={styles.socialText}>Portfolio</Text>
                    </Pressable>

                </View>
            </FadeIn>

        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        padding: 40,
        paddingBottom: 80,
        backgroundColor: "#fafafa",
    },

    heading: {
        fontSize: 32,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 10,
    },

    subText: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
        marginBottom: 30,
        maxWidth: 700,
        alignSelf: "center",
        lineHeight: 22,
    },

    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 20,
    },

    card: {
        width: 280,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 12,
        backgroundColor: "#fff",
        padding: 18,
        alignItems: "center",
    },

    title: {
        fontSize: 18,
        fontWeight: "700",
    },

    value: {
        fontSize: 15,
        color: "#444",
        marginVertical: 8,
        textAlign: "center",
    },

    button: {
        marginTop: 8,
        backgroundColor: "#F83B46",
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
    },

    buttonText: {
        color: "white",
        fontWeight: "700",
    },

    socialContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 40,
        gap: 20,
        flexWrap: "wrap",
    },

    socialButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: "#F83B46",
        borderRadius: 8,
    },

    socialText: {
        color: "#F83B46",
        fontWeight: "600",
    },
});
