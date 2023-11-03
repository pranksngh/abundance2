import { GridPattern } from "./GridPattern";
import Image from "next/image";

import Team from "./Team";
import about1 from "../public/images/about1.avif";
import about2 from "../public/images/about2.avif";
import about3 from "../public/images/about3.avif";
import about4 from "../public/images/about4.avif";
import about5 from "../public/images/about5.avif";

const stats = [
    { label: "Transactions every 24 hours", value: "44 million" },
    { label: "Assets under holding", value: "$119 trillion" },
    { label: "New users annually", value: "46,000" },
];
const values = [
    {
        name: "Enhance User Experience",
        description:
    "We aims to provide an exceptional user experience by offering user-friendly interfaces, responsive customer support, and efficient troubleshooting to ensure that technology serves as an enabler rather than a hindrance.",
  },
    {
        name: "Ensure Information Security",
        description:
     "IT departments play a crucial role in safeguarding sensitive and confidential data. Their mission is to establish and maintain robust security measures, protect against cyber threats, and ensure data privacy and compliance with relevant regulations.",
       },
    {
        name: "Seamless Integration",
        description:
         "IT should aim for seamless integration of various systems and applications. Customers appreciate technology that works together cohesively, making their tasks easier and more efficient.",
            },
    {
        name: "Quality Service Delivery",
        description:
            "The primary mission from a customer's viewpoint is to receive quality service. Customers expect IT to provide them with reliable and efficient technology solutions that enable them to carry out their tasks without disruptions.",
    },
    {
        name: "User-Focused Solutions",
        description:
          "Focusing on delivering technology solutions that meet the specific needs and preferences of the end-users. This includes intuitive interfaces and easy-to-use tools."
        
        },
    {
        name: "Accessible Help Desk",
        description:
          "Customers value a responsive help desk. IT's mission should be to offer accessible and responsive support channels, ensuring that customers can easily get assistance when needed."
    },
];

const About = () => {
    return (
        <>
            <main className="isolate">
                <div className="relative isolate bg-gray-900 -z-10">
                    <div className="absolute inset-x-0 top-0 h-[884px] overflow-hidden bg-gradient-to-b from-gray-900 z-0">
                        <GridPattern
                            className="absolute inset-0 h-full w-full fill-gray-800 stroke-[#2f624f] [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
                            yOffset={-270}
                        />
                    </div>
                    <div
                        className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-primary to-secondary opacity-30"
                            style={{
                                clipPath:
                                    "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
                            }}
                        />
                    </div>
                    <div className="overflow-hidden">
                        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
                            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                                <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl z-10">
                                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                                        We are changing the way people Pay.
                                    </h1>
                                    <p className="relative mt-6 text-lg leading-8 text-gray-300 sm:max-w-md lg:max-w-none">
                                        Abundance aims to revolutionize money
                                        management for online businesses by
                                        providing clean, developer-friendly APIs
                                        and hassle-free integration. We offer a
                                        fast, affordable and secure way for
                                        merchants, schools, ecommerce and other
                                        companies to accept and disburse
                                        payments online, own a fully-functional
                                        current account and avail working
                                        capital loans.
                                    </p>
                                </div>
                                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                    <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                        <div className="relative">
                                            <Image
                                                src={about1}
                                                alt=""
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                    </div>
                                    <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                        <div className="relative">
                                            <Image
                                                src={about2}
                                                alt=""
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                        <div className="relative">
                                            <Image
                                                src={about3}
                                                alt=""
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                    </div>
                                    <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                        <div className="relative">
                                            <Image
                                                src={about4}
                                                alt=""
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                        <div className="relative">
                                            <Image
                                                src={about5}
                                                alt=""
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content section */}
                <div className="mt-24 mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="mx-auto max-w-2xl mb-24">
                            <p className="mt-2 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Why Choose Us ?
                            </p>
                           
                        </div>
                        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                                <p className="text-xl leading-8 text-gray-600">
                                Abundance is a company in India that makes handling payments easy for businesses. They have a bunch of tools that help businesses accept money, process it, and send it to the right places. So, if you're a business, Abundance has got you covered when it comes to payments.<br></br>

What's cool about Abundance is that they offer all sorts of ways for customers to pay you. Whether it's using credit cards, debit cards, online banking, or popular digital wallets like JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money, and PayZapp, Abundance supports it all. This means that your customers have lots of choices when it comes to paying you, which is super convenient.<br></br>

                                </p>
                               
                            </div>
                            <div className="lg:flex lg:flex-auto lg:justify-center">
                                <dl className="w-64 space-y-8 xl:w-80">
                                    {stats.map((stat) => (
                                        <div
                                            key={stat.label}
                                            className="flex flex-col-reverse gap-y-4"
                                        >
                                            <dt className="text-base leading-7 text-gray-600">
                                                {stat.label}
                                            </dt>
                                            <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                                                {stat.value}
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values section */}
                <div className="mx-auto mt-32 px-12  sm:mt-40 lg:px-14 py-28 bg-gray-900">
                    <div className="mx-auto lg:mx-0">
                        <div className="mx-auto max-w-2xl mb-24">
                            <p className="mt-2 text-3xl text-center font-bold tracking-tight text-white sm:text-4xl">
                                Our Mission
                            </p>
                            <p className="mx-auto mt-5 text-center max-w-prose text-xl text-gray-300">
                                At our core, we are dedicated to revolutionizing
                                payment solutions. We strive to make payments
                                safer, faster, and more accessible for everyone
                            </p>
                        </div>
                    </div>
                    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {values.map((value) => (
                            <div key={value.name}>
                                <dt className="font-semibold text-white">
                                    {value.name}
                                </dt>
                                <dd className="mt-1 text-gray-400">
                                    {value.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* Team section */}
                <Team />
            </main>
        </>
    );
};

export default About;
