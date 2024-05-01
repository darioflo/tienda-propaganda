import Link from "next/link";
import Image from "next/image";

export default function UserLayout({ children }) {
    return (
        <div className="user-page">
            <div className="logo-back-to-home">
                <Link href="/client"><Image className="logo-image-to-home" src="/logo.png" alt="" width={230} height={100} /></Link>
            </div>
            {children}
        </div>
    )
}