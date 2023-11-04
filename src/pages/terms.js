import React from "react";
import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
    return (
        <>
            <Head>
                <title>Abundance | Privacy policies</title>
                <meta name="description" content="M2M SOFTWARES" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="bg-white">
                <div className="relative overflow-hidden">
                    {/* navbar section */}
                    <Navbar />

                    {/* main section */}
                    <div className="py-20 px-12">
                        <div className="mx-auto max-w-2xl mb-24">
                            <p className="mt-2 text-3xl text-center font-bold tracking-tight text-gray-800 sm:text-4xl">
                                Terms & Conditions
                            </p>
                            <p className="mx-auto mt-5 text-center max-w-prose text-xl text-gray-500">
                                Your privacy is of utmost importance to us. Our
                                Privacy Policy outlines our commitment to
                                safeguarding your personal information and
                                ensuring your data is secured
                            </p>
                        </div>

                        {/* body section */}
                        <div className="flex flex-col lg:px-24">
                            <p className="text-gray-500">
                                Last updated on October 6th, 2023
                            </p>

                            <h1 className="mt-6 mb-6 text-xl font-bold tracking-tight text-gray-700 sm:text-2xl">
                            Acceptance of Terms & Conditions
                            </h1>

                            <p className="text-gray-500">
                            By accessing and using the payment solution services provided by Abundance Private Limited (&rdquo;we,&rdquo; &rdquo;us,&rdquo; or &rdquo;our&rdquo;), you agree to be bound by these Terms & Conditions and all applicable laws and regulations. If you do not agree to these terms, please do not use our services.
                            </p>

                            <h1 className="mt-6 mb-6 text-xl font-bold tracking-tight text-gray-700 sm:text-2xl">
                            Account Registration and Security
                            </h1>

                            <p className="text-gray-500">
                               <ol>
                                <li>1. To use our Services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information, including your username and password. You agree to notify us immediately of any unauthorized use of your account.</li><br></br>
                               <li>2. You must be at least 18 years old or the age of majority in your jurisdiction to use our Services.</li>
                               </ol>
                            </p>

                            <h1 className="mt-6 mb-6 text-xl font-bold tracking-tight text-gray-700 sm:text-2xl">
                            Payments
                            </h1>

                            <p className="text-gray-500">
                           1. You agree to pay all fees associated with the use of our Services. Fees may be subject to change, and you will be notified of any changes in advance.<br></br>
                           2. Payments made through our platform are subject to transaction and processing fees, which may vary based on the type of transaction.<br></br>
                           3. You are responsible for providing accurate payment information. We are not liable for any payment transactions initiated with incorrect or outdated payment information.<br></br>
                            </p>

                            <h1 className="mt-6 mb-6 text-xl font-bold tracking-tight text-gray-700 sm:text-2xl">
                            Privacy
                            </h1>

                            <p className="text-gray-500">
                            Our Privacy Policy, available at https://abundance2.vercel.app/privacy, governs the collection, use, and disclosure of your personal information. By using our Services, you consent to the terms of our Privacy Policy.
                            </p>

                            <h1 className="mt-6 mb-6 text-xl font-bold tracking-tight text-gray-700 sm:text-2xl">
                            Prohibited Activities
                            </h1>

                            <p className="text-gray-500">
                             1. You agree not to engage in any activities that are illegal, fraudulent, or violate these Terms & Conditions.<br></br>
                             2. You may not use our Services for any activities that could harm our system or disrupt the operation of our platform.
                            </p>

                            <h1 className="mt-6 mb-6 text-xl font-bold tracking-tight text-gray-700 sm:text-2xl">
                            Intellectual Property
                            </h1>

                            <p className="text-gray-500">
                            All content, trademarks, and intellectual property on our website and platform are the property of Abundance Private Limited or our licensors. You may not use, reproduce, or distribute our intellectual property without our prior written consent.
                            </p>

                            <h1 className="mt-6 mb-6 text-xl font-bold tracking-tight text-gray-700 sm:text-2xl">
                            Termination
                            </h1>

                            <p className="text-gray-500">
                            We reserve the right to terminate or suspend your account and access to our Services for any violation of these Terms & Conditions or for any other reason at our discretion. You may also terminate your account at any time.
                            </p>

                            <h1 className="mt-6 mb-6 text-xl font-bold tracking-tight text-gray-700 sm:text-2xl">
                            Disclaimer of Warranties
                            </h1>

                            <p className="text-gray-500">
                            Our Services are provided &rdquo;as is&rdquo; and &rdquo;as available.&rdquo; We do not make any warranties or representations regarding the accuracy, completeness, or reliability of our Services.
                            </p>

                            <h1 className="mt-6 mb-6 text-xl font-bold tracking-tight text-gray-700 sm:text-2xl">
                            Limitation of Liability
                            </h1>

                            <p className="text-gray-500">
                            To the extent permitted by law, we shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from the use of our Services.
                                  </p>
                                  <h1 className="mt-6 mb-6 text-xl font-bold tracking-tight text-gray-700 sm:text-2xl">
                                  Governing Law and Jurisdiction
                            </h1>

                            <p className="text-gray-500">
                            These Terms & Conditions are governed by the laws of Chennai, India. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in Chennai, India.             </p>

                            <h1 className="mt-6 mb-6 text-xl font-bold tracking-tight text-gray-700 sm:text-2xl">
                            Changes to Terms & Conditions
                            </h1>

                            <p className="text-gray-500">
                            We reserve the right to modify, update, or change these Terms & Conditions at any time. Any changes will be effective upon posting the updated Terms & Conditions on our website. </p>
                            <h1 className="mt-6 mb-6 text-xl font-bold tracking-tight text-gray-700 sm:text-2xl">
                            Contact Us
                            </h1>

                            <p className="text-gray-500">
                          If you have any questions, concerns, or requests related to these Terms & Conditions, please contact us </p>
                            
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Terms;
