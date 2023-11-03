import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
    {
        question: "What exactly is Trypay?",
        answer: "Trypay is a platform that supercharges your business banking needs. It allows businesses to do everything from open a current account, track invoices, schedule payments, pay tax, apply for loans, and view financial reports, all from one dashboard. This helps businesses manage their finances seamlessly and have complete visibility and control over the company's finances.",
    },
    {
        question: "How to create an account on Trypay?",
        answer: "Visit the Trypay Payments website or platform Look for a Sign Up or Create an Account option. Provide the required information to create your account. This may include your business name, email address, contact information, and other relevant details.Follow the account creation process, which might involve verifying your email address. Update your business profile and upload scanned copies of business documents.",
    },
   
    {
        question: "What much time does it takes to activate my merchant account?",
        answer: "Once you have submitted your documents for review, your account should be activated within 24 working hours. This means that it may take up to one business day (excluding weekends and holidays) for your account to become fully operational.",
    },
    {
        question: "How Trypay Payout Works?",
        answer: "Payouts by Trypay Payments is a payment disbursal platform designed for businesses to facilitate bulk payouts. Here's how it works:<br /><br />Creation of a Payouts Account: When you create a Payouts account with Trypay Payments, the platform establishes a virtual wallet for your business.<br /><br /> Adding Funds: You have the ability to transfer funds from your bank accounts into this virtual wallet. These funds can then be used for making payouts to individuals or entities.<br /><br /> Payouts Dashboard: Payouts offers a dashboard where you can initiate and manage payouts. You can use this dashboard for both single or bulk payouts.<br /><br /> Bulk Payouts via Excel Upload: Businesses can use the Payouts dashboard to initiate bulk payouts by uploading data from an Excel file. This can be a convenient way to process payments to multiple recipients in one go. <br /><br />API Integration: Payouts also provides APIs (Application Programming Interfaces) that can be integrated with your product or ERP (Enterprise Resource Planning) systems. This integration allows for automation of bulk payouts, making the process more efficient and scalable. <br /><br /> In summary, Payouts by Trypay Payments is a solution for businesses that need to disburse payments to multiple recipients, whether they are employees, vendors, affiliates, or any other payees. It simplifies the process by creating a virtual wallet, allowing funds to be added, and providing tools for manual or automated bulk payouts. This can be particularly useful for businesses that need to manage a high volume of payments efficiently.",
    },
    
    {
        question: "Is Trypay facilitate tailored pricing?",
        answer: "Yes, it's common for payment service providers like Trypay Payments to offer tailored pricing for businesses. The pricing for payment processing services can vary based on several factors, including the nature of your business, the volume of transactions, and specific requirements. Here's how you can typically go about getting tailored pricing: <br /><br /> Contact the Provider: Reach out to the Trypay Payments team through their provided contact information. This could be via email, phone, or a contact form on website.<br /><br />Discuss Your Needs: When you contact them, discuss your business requirements, including the types of payment services you need, the expected transaction volume, and any specific features or services you may require. <br /><br /> Receive a Custom Quote: Based on your discussion and the information you provide, the Trypay Payments team can then provide you with a custom pricing quote that aligns with your business's unique needs. <br /><br /> Review the Offer: Evaluate the tailored pricing offer provided to ensure it meets your budget and requirements. <br /><br /> Negotiate if Necessary: If the initial offer doesn't align with your expectations, you can negotiate with the provider to reach a mutually agreeable pricing structure. <br /><br /> Finalize the Agreement: Once you are satisfied with the pricing and terms, you can finalize the agreement and start using their services.<br /><br /> Remember that the specific process for obtaining tailored pricing may vary from one payment service provider to another, so it's a good practice to reach out to them directly or visit their pricing page for more information on how to get a custom pricing plan for your business. This approach ensures that you receive a payment solution that is a good fit for your unique needs.        ",
    },

    // More questions...
];

const FAQS = () => {
    return (
        <div className="bg-gray-900">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-24 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-4xl divide-y divide-white/10">
                    <p className="mt-2 text-3xl text-center font-bold tracking-tight text-white sm:text-4xl">
                        Trypay - Frequently asked questions
                    </p>
                    <dl className="mt-20 space-y-6 divide-y divide-white/10">
                        {faqs.map((faq) => (
                            <Disclosure
                                as="div"
                                key={faq.question}
                                className="pt-6"
                            >
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                                                <span className="text-base font-semibold leading-7">
                                                    {faq.question}
                                                </span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    {open ? (
                                                        <MinusSmallIcon
                                                            className="h-6 w-6"
                                                            aria-hidden="true"
                                                        />
                                                    ) : (
                                                        <PlusSmallIcon
                                                            className="h-6 w-6"
                                                            aria-hidden="true"
                                                        />
                                                    )}
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel
                                            as="dd"
                                            className="mt-2 pr-12"
                                        >
                                            <p className="text-base leading-7 text-gray-300">
                                            {faq.answer.split('<br /><br />').map((paragraph, subIndex) => (
              <p key={subIndex} dangerouslySetInnerHTML={{ __html: paragraph }} />
                                            ))}
                                            </p>
                                        
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default FAQS;
