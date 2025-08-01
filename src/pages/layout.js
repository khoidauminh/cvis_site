import Link from "next/link";
import Image from "next/image";

export default function Layout() {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <Link href="/">Home</Link>
                <Link href="https://github.com/khoidauminh/coffeevis_rs">
                    Github
                </Link>
                <Link href="https://github.com/khoidauminh/">
                    <Image
                        src="/caspascal.jpeg"
                        alt="Cas Pascal"
                        width={32}
                        height={32}
                        className="circular-image"
                    />
                </Link>
            </div>
        </nav>
    );
}
