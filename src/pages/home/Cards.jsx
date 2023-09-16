import React from 'react';
import Double from '../../assets/double.png';
import single from '../../assets/single.png';
import triple from '../../assets/triple.png';
import {Card} from '../../components/card/Card';



const Cards = () => {
    return (

        <div className='w-full px-4 bg-black'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <Card  
                img= {Double}
                title= "Software Solutions"
                description= "We are the best android app development CreativeWebo prides its expertise in creating custom software solutions for various sectors. We can build everything from custom-to-service sales software to a company's unique ERP system."/>
                <Card
                img= {Double}
                title= "Mobile Apps" 
                description= "Android or iOS, sometimes both! CreativeWebo understands your target audience and helps you develop the best mobile applications for your customers. So take your product a mile ahead with a mobile app development service by CreativeWebo. We can take care of android app development and iOS app development for you."/>
                <Card
                img= {single}
                title= "Website Development" 
                description= "Websites are like stores now! No matter how you deliver, websites play a role in authenticating businesses to their audience. At CreativeWebo, we provide complete web development solutions to our clients. We have a team of experts in custom websites, CMS-based websites, WordPress websites and Shopify Ecommerce website development."/>
                <Card
                img= {single}
                title= "E-commerce Solutions" 
                description= "Are you planning to launch a product in the market? Have you considered digital presence? At CreativeWebo, our E-commerce solutions include e-commerce app development, e-commerce website design and development and complete integration with Delivery and payment apps for your E-commerce Website."/>
                <Card
                img= {triple}
                title= "Managed IT Services" 
                description= "At CreativeWebo, our IT experts chart your company's best hosting, domain, server and email solutions. We help you plan for future traffic on your website, apps and ERPs. In addition, CreativeWebo provides supportive IT services for your digital transformation."/>
                
                <Card
                img= {triple}
                title= "Digital Branding and Marketing" 
                description= "Start Now! If you haven't yet. Branding and Marketing are the drivers of business growth worldwide. We take care of your front, back and driver end together. CreativeWebo offers our clients complete Digital Branding and Digital Marketing solutions, including Logo Designing, Corporate Stationery, SEO, Web Content Creation, Social Media and Paid Campaigns."/>
            </div>
            <div className="flex items-center justify-between my-10">
                <button className="bg-[#f15e31] text-white font-bold py-2 px-10 mx-auto  focus:outline-none focus:shadow-outline" type="submit">
                    Explore
                </button>
            </div>
        </div>
    );
};

export default Cards;
