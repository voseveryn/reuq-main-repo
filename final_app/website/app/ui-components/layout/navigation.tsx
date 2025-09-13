"use client"
import Link from "next/link";
import Image from "next/image";
import { NavigationFragmentType } from "@/app/fragments/layout/NavigationFragment";
import { useState } from "react";

type Props = {
    data?: NavigationFragmentType;
    locale?: string
};

export const Navbar = ({ data, locale }: Props) => {
    const logo = data?.logo;

    // Filtrování produktů a řešení podle prefixu
    const products = data?.localesByLocale?.navigationList?.items.filter((item) =>
        item.link?.internalTarget?.url?.startsWith(`/${locale}/products/`)
    ) || [];

    const solutions = data?.localesByLocale?.navigationList?.items.filter((item) =>
        item.link?.internalTarget?.url?.startsWith(`/${locale}/solutions/`)
    ) || [];
    const generic = data?.localesByLocale?.navigationList?.items.filter((item) =>
        !products.includes(item) && !solutions.includes(item)
    ) || [];

    // Stavy pro vybraný produkt a řešení
    const [selectedProduct, setSelectedProduct] = useState("");
    const [selectedSolution, setSelectedSolution] = useState("");

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
                    {/* Dropdown pro produkty */}
                    <li>
                        <select
                            value={selectedProduct}
                            onChange={(e) => setSelectedProduct(e.target.value)}
                            className="text-gray-700 hover:text-blue-600 font-medium transition bg-white border border-gray-300 rounded px-3 py-2"
                        >
                            <option value="">Produkty</option>
                            {products.map((product) => (
                                <option key={product.id} value={product.link?.internalTarget?.url || ""}>
                                    {product.link?.title ?? "Untitled"}
                                </option>
                            ))}
                        </select>
                    </li>

                    {/* Dropdown pro řešení */}
                    <li>
                        <select
                            value={selectedSolution}
                            onChange={(e) => setSelectedSolution(e.target.value)}
                            className="text-gray-700 hover:text-blue-600 font-medium transition bg-white border border-gray-300 rounded px-3 py-2"
                        >
                            <option value="">Vyber řešení</option>
                            {solutions.map((solution) => (
                                <option key={solution.id} value={solution.link?.internalTarget?.url || ""}>
                                    {solution.link?.title ?? "Untitled"}
                                </option>
                            ))}
                        </select>
                    </li>

                    {/* Ostatní navigační položky */}
                    {generic.map((item) => (
                        <li key={item.id}>
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
    );
};