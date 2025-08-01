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

export function getId(index) {
    return "cvis-video-" + index;
}

export function setStyle(index) {
    return "z-index: " + toString(index) + "; position: absolute";
}

export function Video({ index, is_displayed }) {
    return (
        <video
            id={getId(index)}
            autoPlay
            loop
            muted
            style={{ display: is_displayed }}
        >
            <source src={VIDEO_PATHS[index]} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}

export function AllVideos() {
    let array = [];

    array.push(<Video index={0} is_displayed="block" />);

    for (let i = 1; i < VIDEO_PATHS.length; i++) {
        array.push(<Video index={i} is_displayed="none" />);
    }

    return array;
}

export function NextVideo() {
    document.getElementById(getId(VIDEO_INDEX)).style.display = "none";
    VIDEO_INDEX = (VIDEO_INDEX + 1) % VIDEO_PATHS.length;
    document.getElementById(getId(VIDEO_INDEX)).style.display = "block";
}
