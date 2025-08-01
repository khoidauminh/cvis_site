import "@/styles/globals.css";
import "@/styles/navbar.css";
import "@/styles/two-columns.css";
import Layout from "./layout";

export default function App({ Component, pageProps }) {
    return (
        <>
            <div>
                <Layout />
            </div>
            <div>
                <Component {...pageProps} />
            </div>
        </>
    );
}

const VIDEO_PATHS = [
    "/cvis-1.mp4",
    "/cvis-2.mp4",
    "/cvis-3.mp4",
    "/cvis-4.mp4",
    "/cvis-5.mp4",
    "/cvis-6.mp4",
    "/cvis-7.mp4",
    "/cvis-8.mp4",
    "/cvis-9.mp4",
    "/cvis-10.mp4",
    "/cvis-11.mp4",
    "/cvis-12.mp4",
];

let VIDEO_INDEX = 0;

export function HomeVideo() {
    let index = VIDEO_INDEX;
    VIDEO_INDEX = (VIDEO_INDEX + 1) % VIDEO_PATHS.length;
    return (
        <video autoPlay loop muted>
            <source id="cvis-video" src={VIDEO_PATHS[index]} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}
