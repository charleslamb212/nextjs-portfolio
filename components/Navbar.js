// import Link from next
import Link from 'next/Link'

export default function Navbar() {
    return (
        <nav>
            <Link href="/">
                {/* links take any child components */}
                Home
            </Link>

            <Link href="/about">
                <a>About ME</a>
            </Link>

            <a href="https://thrashermagazine.com/
            "  target="_blank">
                Thrasher</a>
        </nav>
    )
}