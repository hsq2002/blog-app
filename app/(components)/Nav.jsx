import Link from "next/link";

const Nav = () => {
    return (
        <nav className="flex-justify-betwen bg-slate-400">
            <div className="flex items-center space-x-4">
                <Link href="/">
                    <p>Home</p>
                </Link>
                <Link href="/BlogPage/new" className="bg-slate-200 rounded">
                    <p>Information Form</p>
                </Link>
                <Link href="/CreateUser" className="bg-slate-200 rounded">
                    <p>Create User</p>
                </Link>
                <Link href="/request" className="bg-slate-200 rounded">
                    <p>Find your location</p>
                </Link>

            </div>
            <div>
                <p className="text-default-text">hsq239@gmail.com</p>
            </div>
        </nav>
    )
}

export default Nav;
