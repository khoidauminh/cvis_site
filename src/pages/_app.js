import "@/styles/globals.css";
import "@/styles/navbar.css";
import "@/styles/two-columns.css";
import "@/styles/response.css";
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
