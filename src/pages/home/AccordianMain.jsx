import React, { useState } from 'react';
import Accordion from '../../components/accordian/Accordian';


function AccordianMain() {
    const [openItem, setOpenItem] = useState(null);

    const handleAccordionToggle = (index) => {
        if (openItem === index) {
            setOpenItem(null);
        } else {
            setOpenItem(index);
        }
    };

    return (
        <>
            <div className=' max-w-[1240px] mb-32 text-white mx-auto'>
                <div className=' mx-auto grid lg:grid-cols-3 '>
                    <div className='lg:col-span-2 my-4 py-8'>
                        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-4'>
                            <span className='text-[#f15e31]'>/ {' '}</span> Frequently Asked Questions
                        </h1>
                        <p className='text-gray-500'>Learning Experience</p>
                    </div>
                </div>
            {/* </div> */}
            {/* <div className="max-w-[1240px] mx-auto p-4"  > */}
                <Accordion
                    title="How much does a website cost?  How much for a website?"
                    content="Well, it depends. We follow a transparent pricing model, with rates being decided as per your requirements. We don't offer one-for-all services but business-specific solutions, so the prices can vary. If all you need is a small business functional website, the cost can range anywhere between $500 and $5,000, and more depending upon your requirements. So, get in touch with us to get a price quote now."
                    isOpen={openItem === 0}
                    onToggle={() => handleAccordionToggle(0)}
                />
                <Accordion
                    title="Do you do graphic design, and Can you make me a logo?"
                    content="Of course. We are the best web design company in India with a team of expert graphic designers that provide your brand with a unique identity with a custom-made logo. We understand the personality of your brand and the preferences of your audience to craft a logo that helps you put out your message clearly. Besides, we offer unlimited revisions to ensure you walk away satisfied."
                    isOpen={openItem === 1}
                    onToggle={() => handleAccordionToggle(1)}
                />
                <Accordion
                    title="Can you help me with Digital Marketing?"
                    content="TYes, of course. Our android app development company in India also offers a full suite of digital solutions to help you generate more revenue online. We provide various services, including website development, SEO, content marketing, eCommerce, social media marketing, paid advertisement, and mobile development. Whatever your digital requirements are, we'll take care of them all."
                    isOpen={openItem === 2}
                    onToggle={() => handleAccordionToggle(2)}
                />
                <Accordion
                    title="Do you make custom applications?"
                    content="Yes. If your business requires custom applications, we create innovative, intuitive, and user-friendly mobile & web applications using cutting-edge technologies. As a trustworthy custom application development company, we understand the relevance of mobile presence, and we make sure your business leverages the best of mobile platforms with customized mobile app development India. In addition, we create desktop solutions as well, such as web apps and enterprise solutions.                "
                    isOpen={openItem === 3}
                    onToggle={() => handleAccordionToggle(3)}
                />
                <Accordion
                    title="What is blockchain? What's the main use of it in web Applications?"
                    content="Blockchain is a decentralized, distributed ledger that records the origin of digital assets. Blockchain as a service can be used in web application development to support the growth of a technology stack. We can use an open blockchain for your application to create a private network with the help of blockchain software."
                    isOpen={openItem === 4}
                    onToggle={() => handleAccordionToggle(4)}
                />
                <Accordion
                    title="Why do businesses need an online Presence?"
                    content="As an experienced Shopify web development company, we believe that an online presence allows you to gain credibility and build your brand, which is essential to attract and retain customers. It makes your business readily accessible and provides your customers with an easy way to interact with your company and find what you have to offer."
                    isOpen={openItem === 5}
                    onToggle={() => handleAccordionToggle(5)}
                />
                <Accordion
                    title="How can you help with eCommerce?"
                    content="We love helping eCommerce businesses. From developing a robust, scalable eCommerce website using industry-leading platforms like Shopify and Magento to facilitating powerful branding, marketing, and sales, we do it all. We build your brand across multiple channels, acquire new customers, and provide them with a personalized experience to convert them into loyal, recurring consumers."
                    isOpen={openItem === 6}
                    onToggle={() => handleAccordionToggle(6)}
                />
            </div>
        </>
    );
}

export default AccordianMain;
