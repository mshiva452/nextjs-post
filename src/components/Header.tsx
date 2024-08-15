'use client';
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/about",
        label: "About"
    },
    {
        href: "/posts",
        label: "Posts"
    },
    {
        href: "/create-post",
        label: "Create post"
    },
    {
        href: "/contact",
        label: "Contact"
    }
]

const Header = () => {
    const pathname = usePathname()
    return (
        <header className="flex justify-between items-center py-4 px-7 border-b">
            <Link href="/">
                <Image
                    src="https://www.rws.com/media/images/rws-logo_no--whitespace_tcm228-236815.svg"
                    alt="logo"
                    width="100"
                    height="100"
                />
            </Link>
            <nav>
                <ul className="flex gap-x-5 text-[14px]">
                    {
                        navLinks.map(link => (
                            <li key={link.label}>
                                <Link href={link.href} className={`${pathname === link.href ? "text-zinc-950" : "text-zinc-400"}`}>
                                    {link.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header