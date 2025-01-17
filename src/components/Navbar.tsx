'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { motion } from "framer-motion";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className="fixed top-10 inset-x-0 max-w-2xl mx-auto z-50">
            <motion.div
                initial={{ opacity: 0.5 }}
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="absolute inset-0 rounded-full z-0 blur-sm pointer-events-none bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
            />
            <div className="relative z-10 bg-white dark:bg-zinc-900 rounded-full">
                <Menu setActive={setActive}>
                    <Link href="/">
                        <MenuItem setActive={setActive} active={active} item="Home">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/courses">All Courses</HoveredLink>
                                <HoveredLink href="/courses">Songwriting</HoveredLink>
                                <HoveredLink href="/courses">Music Production</HoveredLink>
                            </div>
                        </MenuItem>
                    </Link>
                    <MenuItem setActive={setActive} active={active} item="Our Courses">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/courses">All Courses</HoveredLink>
                            <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
                            <HoveredLink href="/courses">Advanced Composition</HoveredLink>
                            <HoveredLink href="/courses">Songwriting</HoveredLink>
                            <HoveredLink href="/courses">Music Production</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Products">
                        <div className="text-sm grid grid-cols-2 gap-10 p-4">
                            <ProductItem
                                title="Algochurn"
                                href="https://algochurn.com"
                                src="https://assets.aceternity.com/demos/algochurn.webp"
                                description="Prepare for tech interviews like never before."
                            />
                            <ProductItem
                                title="Tailwind Master Kit"
                                href="https://tailwindmasterkit.com"
                                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                                description="Production ready Tailwind css components for your next project"
                            />
                            <ProductItem
                                title="Moonbeam"
                                href="https://gomoonbeam.com"
                                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                                description="Never write from scratch again. Go from idea to blog in minutes."
                            />
                            <ProductItem
                                title="Rogue"
                                href="https://userogue.com"
                                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                            />
                        </div>
                    </MenuItem>
                    <Link href="/contact">
                        <MenuItem setActive={setActive} active={active} item="Contact Us">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/hobby">Hobby</HoveredLink>
                                <HoveredLink href="/individual">Individual</HoveredLink>
                                <HoveredLink href="/team">Team</HoveredLink>
                                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                            </div>
                        </MenuItem>
                    </Link>
                </Menu>
            </div>
        </div>
    );
}

export default Navbar;
