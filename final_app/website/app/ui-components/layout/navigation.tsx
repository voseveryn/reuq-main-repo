import Link from "next/link";
import Image from "next/image";
import { NavigationFragmentType } from "@/app/fragments/layout/NavigationFragment"

type Props = {
    data?: NavigationFragmentType
}

export const Navbar = ({ data }: Props) => {
    const logo = data?.logo;

    return (
        <header className="bg-black shadow">
            <nav className="container mx-auto flex items-center justify-between py-4 px-6">
                <div className="flex items-center">
                    {logo?.url && (
                        <Image
                            src={logo.url || ""}
                            alt={"Logo"}
                            width={logo.width ?? 40}
                            height={logo.height ?? 40}
                            className="h-10 w-auto"
                        />
                    )}
                </div>
                <ul className="flex space-x-6">
                    {data?.localesByLocale?.navigationList?.items.map((item, idx) => (
                        <li key={idx}>
                            <Link
                                href={item.link?.internalTarget?.url ?? "#"}
                                className="text-gray-700 hover:text-blue-600 font-medium transition"
                            >
                                {item.link?.title ?? "Untitled"}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}