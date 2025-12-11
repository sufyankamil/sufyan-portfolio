import { ScrollView, View, StyleSheet } from "react-native";
import React, { Suspense, useRef } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
// import Skills from "./components/Skills";
// import ExperienceFull from "./components/Experience";
// import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const ExperienceFull = React.lazy(() => import("./components/Experience"));
const ProjectsSection = React.lazy(() => import("./components/ProjectsSection"));
const Skills = React.lazy(() => import("./components/Skills"));

export default function App() {
    const scrollRef = useRef(null);
    const positions = useRef({});  // store y positions

    const handleLayout = (event, key) => {
        positions.current[key] = event.nativeEvent.layout.y;
    };

    const handleNavigate = (section) => {
        const y = positions.current[section];
        if (scrollRef.current && y !== undefined) {
            scrollRef.current.scrollTo({ y, animated: true });
        }
    };

    return (
        <View accessibilityRole="main">
            <View style={{ flex: 1, backgroundColor: "#fff", overflowX: "hidden" }}>
                <Navbar onNavigate={handleNavigate} />

                <ScrollView ref={scrollRef}>

                    <View onLayout={(e) => handleLayout(e, "Home")}>
                        <Hero />
                    </View>

                    <View onLayout={(e) => handleLayout(e, "About")}>
                        <About />
                    </View>

                    {/* <View onLayout={(e) => handleLayout(e, "Skills")}>
                    <Skills />
                </View> */}

                    <Suspense fallback={<View style={{ padding: 40 }} />}>
                        <ExperienceFull />
                    </Suspense>


                    {/* 
                <View onLayout={(e) => handleLayout(e, "Experience")}>
                    <ExperienceFull />
                </View> */}

                    <Suspense fallback={<View style={{ padding: 40 }} />}>
                        <ExperienceFull />
                    </Suspense>


                    <Suspense fallback={<View style={{ padding: 40 }} />}>
                        <ProjectsSection />
                    </Suspense>

                    {/* <View onLayout={(e) => handleLayout(e, "Projects")}>
                    <ProjectsSection />
                </View> */}

                    <View onLayout={(e) => handleLayout(e, "Contact")}>
                        <ContactSection />
                    </View>

                    <Footer onNavigate={handleNavigate} />

                </ScrollView>
            </View>
        </View>
    );
}
