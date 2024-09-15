import Link from "next/link";

const links = [
    { label: 'o', url: '#hero' },
    { label: 'Zero', url: '#zero' },
    { label: 'One', url: '#one' },
    { label: 'Two', url: '#two' },
    { label: 'Three', url: '#three' },
    { label: 'Four', url: '#four' },
]

const Navbar: React.FC = () => {
    return(
        <>
        <div className="fixed bottom-5 bg-black border-2 border-gray-400 rounded-xl py-2 px-5">
            <div className="flex gap-8 items-center text-white overflow-x-scroll menu font-josefin">
                {links.map((item, index) => (
                    <>
                        <Link key={index} href={item.url}>{item.label}</Link>
                    </>
                ))}
            </div>
        </div>
        </>
    )
}

export default Navbar;