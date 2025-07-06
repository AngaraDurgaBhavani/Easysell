
import Link from "next/link";


export default function Header() {
    return (
        
         <header className="py-2 bg-[#222]">
            <div className="max-w-[100rem] px-12 mx-auto  flex justify-between">
                <Link href="/">
                    <h1 className="uppercase text-yellow-500 text-center py-2">Quick Sell</h1>
                </Link>
                <Link href="/products/upload"
                    className="uppercase text-[#899d82] text-xl py-2 hover:text-yellow-700">
                    upload {">"}
                </Link>
            </div>
        </header>
    )
}