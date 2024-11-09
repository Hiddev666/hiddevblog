import Link from "next/link"

const NavBar = () => {
    return (
        <div className="w-full px-10 py-5 border-b flex justify-between items-center">
            <Link href="/">
                <h2 className="text-2xl font-normal text-neutral-800">hiddev<span className="font-bold">blog.</span></h2>
            </Link>
            <Link href="/login">
                <button className="hover:bg-neutral-800 hover:text-white px-5 py-2 rounded  font-bold">Login</button>
            </Link>
        </div>
    )
}

export default NavBar