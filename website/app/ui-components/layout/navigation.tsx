"use client"
import Link from "next/link";
import Image from "next/image";
import { NavigationFragmentType } from "@/app/fragments/layout/NavigationFragment";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type Props = {
    data?: NavigationFragmentType;
    locale?: string
};

export const Navbar = ({ data, locale }: Props) => {
    const router = useRouter();
    const logo = data?.logo;

    const allItems = data?.localesByLocale?.navigationList?.items ?? [];
    const loc = locale ?? "";

    const getUrl = (it: (typeof allItems)[number]) => it.link?.internalTarget?.url ?? "";
    const startsWithAny = (url: string, prefixes: string[]) => prefixes.some(p => url.startsWith(p));

    // Products (např. /cs/products/…)
    const products = allItems.filter(item =>
        startsWithAny(getUrl(item), [`/${loc}/products/`])
    );

    // Apps (např. /cs/app/…), budou na konci v dropdownu Products
    const apps = allItems.filter(item =>
        startsWithAny(getUrl(item), [`/${loc}/app/`])
    );

    // Solutions (opraveno na `/${locale}/solution/` + tolerantně i `/${locale}/solutions/`)
    const solutions = allItems.filter(item =>
        startsWithAny(getUrl(item), [`/${loc}/solution/`, `/${loc}/solutions/`])
    );

    // Ostatní generické položky (vyřadíme vše, co už je v předchozích skupinách)
    const generic = allItems.filter(item =>
        !products.includes(item) && !solutions.includes(item) && !apps.includes(item)
    );

    const [selectedProduct, setSelectedProduct] = useState("");
    const [selectedSolution, setSelectedSolution] = useState("");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavigation = (url: string) => {
        if (url) router.push(url);
    };

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
                scrolled
                    ? "bg-black text-white border-b border-gray-800"
                    : "bg-white/95 text-gray-800 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-gray-100"
            }`}
        >
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-3">
                        {logo?.url && (
                            <Image
                                src={logo.url || ""}
                                alt={"Logo"}
                                width={logo.width ?? 40}
                                height={logo.height ?? 40}
                                className="h-8 w-auto"
                            />
                        )}
                    </div>

                    <ul className="hidden md:flex items-center gap-8">
                        {/* Dropdown: Products (+ Apps na konci) */}
                        <li className="relative">
                            <div className="group relative">
                                <select
                                    value={selectedProduct}
                                    onChange={(e) => {
                                        setSelectedProduct(e.target.value);
                                        handleNavigation(e.target.value);
                                    }}
                                    className={`appearance-none bg-transparent ${
                                        scrolled ? "text-white hover:text-emerald-300" : "text-gray-700 hover:text-emerald-600"
                                    } transition-colors duration-300 ease-in-out font-medium pr-7 focus:outline-none`}
                                >
                                    <option value="">Products</option>

                                    {products.map((item) => (
                                        <option key={item.id} value={getUrl(item)}>
                                            {item.link?.title ?? "Untitled"}
                                        </option>
                                    ))}

                                    {apps.length > 0 && (
                                        <optgroup label="Apps">
                                            {apps.map((item) => (
                                                <option key={item.id} value={getUrl(item)}>
                                                    {item.link?.title ?? "Untitled"}
                                                </option>
                                            ))}
                                        </optgroup>
                                    )}
                                </select>

                                <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2">
                                    <svg
                                        className={`h-4 w-4 ${
                                            scrolled
                                                ? "text-gray-300 group-hover:text-emerald-300"
                                                : "text-gray-400 group-hover:text-emerald-500"
                                        } transition-colors duration-300`}
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </li>

                        {/* Dropdown: Solutions (opravený prefix) */}
                        <li className="relative">
                            <div className="group relative">
                                <select
                                    value={selectedSolution}
                                    onChange={(e) => {
                                        setSelectedSolution(e.target.value);
                                        handleNavigation(e.target.value);
                                    }}
                                    className={`appearance-none bg-transparent ${
                                        scrolled ? "text-white hover:text-emerald-300" : "text-gray-700 hover:text-emerald-600"
                                    } transition-colors duration-300 ease-in-out font-medium pr-7 focus:outline-none`}
                                >
                                    <option value="">Solution</option>
                                    {solutions.map((solution) => (
                                        <option key={solution.id} value={getUrl(solution)}>
                                            {solution.link?.title ?? "Untitled"}
                                        </option>
                                    ))}
                                </select>

                                <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2">
                                    <svg
                                        className={`h-4 w-4 ${
                                            scrolled
                                                ? "text-gray-300 group-hover:text-emerald-300"
                                                : "text-gray-400 group-hover:text-emerald-500"
                                        } transition-colors duration-300`}
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </li>

                        {/* Ostatní položky */}
                        {generic.map((item) => (
                            <li key={item.id} className="group">
                                <Link
                                    href={getUrl(item) || "#"}
                                    className={`font-medium transition-colors duration-300 ease-in-out ${
                                        scrolled
                                            ? "text-white hover:text-emerald-300"
                                            : "text-gray-700 hover:text-emerald-600"
                                    }`}
                                >
                                    {item.link?.title ?? "Untitled"}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            className={`inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 ${
                                scrolled
                                    ? "border-gray-600 text-white hover:text-emerald-300 hover:border-emerald-400 hover:bg-emerald-900 focus:ring-emerald-600"
                                    : "border-gray-300 text-gray-800 hover:text-emerald-700 hover:border-emerald-300 hover:bg-emerald-50 focus:ring-emerald-300"
                            }`}
                        >
                            Kontakt
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};
