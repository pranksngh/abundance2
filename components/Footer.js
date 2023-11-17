import React from "react";
import Image from "next/image";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import {
    BuildingOffice2Icon,
    EnvelopeIcon,
    PhoneIcon,
} from "@heroicons/react/24/outline";

import logo from "../public/images/logo.png";
import { LinkedIn } from "@mui/icons-material";

const footerNavigation = {
    solutions: [
        { name: "TryPay", href: "/products/trypay" },
        { name: "Features", href: "/#features" },
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/contact" },
    ],
    legal: [
        { name: "Privacy", href: "/privacy" },
        { name: "Terms", href: "/terms" },
    ],
};

const Footer = () => {
    return (
        <footer className="bg-gray-50" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>

            <div className="flex flex-col justify-between w-full p-10 flex-wrap sm:flex-row">
                <div className="flex flex-col max-w-[350px] mb-10">
                    <Image
                        className="mb-4"
                        src={logo}
                        alt="Abundance"
                        width={150}
                        height={150}
                    />

                    <p className="text-base text-gray-500 mb-6">
                        Making the world a better place through seamless and
                        secure payments. Abundance aims to revolutionize money
                        management for online businesses by providing clean,
                        developer-friendly APIs and hassle-free integration.
                    </p>
                    <div className="flex space-x-6">
                        <a href="https://www.facebook.com/profile.php?id=61552225648932">
                            <FacebookIcon className="text-gray-400 hover:text-gray-500 cursor-pointer" />
                        </a>
                        <a href="https://www.instagram.com/trypayofficial?igshid=NGVhN2U2NjQ0Yg%3D%3D">
                            <InstagramIcon className="text-gray-400 hover:text-gray-500 cursor-pointer" />
                        </a>
                        <a href="https://twitter.com/Trypayoffical">
                            <TwitterIcon className="text-gray-400 hover:text-gray-500 cursor-pointer" />
                        </a>
                        <a href="https://www.linkedin.com/posts/try-pay-15205b295_finance-fintechstartup-paytm-activity-7122971182785605632-UoX2/?utm_source=share&utm_medium=member_ios">
                            <LinkedIn className="text-gray-400 hover:text-gray-500 cursor-pointer" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col mb-10 sm:mb-0">
                    <h3 className="text-base font-medium text-gray-900">
                        Quick Links
                    </h3>
                    <ul role="list" className="mt-4 space-y-4">
                        {footerNavigation.solutions.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="text-base text-gray-500 hover:text-gray-900"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col mb-10 sm:mb-0">
                    <h3 className="text-base font-medium text-gray-900">
                        Legal
                    </h3>
                    <ul role="list" className="mt-4 space-y-4">
                        {footerNavigation.legal.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="text-base text-gray-500 hover:text-gray-900"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col mb-10 sm:mb-0">
                    <h3 className="text-base font-medium text-gray-900">
                        Contact Info
                    </h3>
                    <dl className="mt-4 space-y-4 text-base leading-7 text-gray-500 break-words">
                        <div className="flex gap-x-4">
                            <dt className="flex-none">
                                <span className="sr-only">Address</span>
                                <BuildingOffice2Icon
                                    className="h-7 w-6 text-gray-400"
                                    aria-hidden="true"
                                />
                            </dt>
                            <dd>
                                150, SUNSHINE, GARDEN APART ROYAPET,
                                <br />
                                ROYAPETTAH, CHENNAI-600014, TAMIL NADU
                            </dd>
                        </div>
                        <div className="flex gap-x-3">
                            <dt className="flex-none">
                                <span className="sr-only">Email</span>
                                <PhoneIcon
                                    className="h-7 w-63"
                                    aria-hidden="true"
                                />
                            </dt>
                            <dd>+91 931-049-0276</dd>
                        </div>
                        <div className="flex gap-x-3">
                            <dt className="flex-none">
                                <span className="sr-only">Email</span>
                                <EnvelopeIcon
                                    className="h-7 w-63"
                                    aria-hidden="true"
                                />
                            </dt>
                            <dd className="w-[80%] sm:w-[unset]">
                                <a
                                    className="hover:text-black"
                                    href="mailto: contact@abundancepaymentsolution.com"
                                >
                                    contact@abundancepaymentsolution.com
                                </a>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div className="border-t border-gray-200 p-8">
                <p className="text-base text-gray-400 xl:text-center">
                    &copy; 2023 Abundance, Inc. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
