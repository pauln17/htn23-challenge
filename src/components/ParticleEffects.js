import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleEffects = () => {
    return (
        <Particles
            id="tsparticles"
            options={{
                fullScreen: {
                    enable: true,
                    zIndex: -50,
                },
                background: {
                    color: {
                        value: "#000",
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        repulse: {
                            distance: 150,
                            duration: 0.8,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 95,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        random: false,
                        speed: { min: 2, max: 4 },
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 750,
                        },
                        value: 120,
                    },
                    opacity: {
                        value: { min: 0.3, max: 0.7 },
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticleEffects;