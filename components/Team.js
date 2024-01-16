// Team.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

import { Card, CardContainer, Name, Bio, Designation } from './SliderStyles'; // Import your styled components or use the styles directly here
import member1 from "../public/images/team3.jpg";
import member2 from "../public/images/team2.png";
import member3 from "../public/images/team4.jpg";
import member4 from "../public/images/team5.jpg";
const people = [
  {
    name: 'Shashi Singh',
    role: 'Vice President, India Operations',
    imageUrl: member3,
    twitterUrl: '',
    linkedinUrl: '',
    bio:"Shashi Singh is the Vice President – India Operations and drives the company’s strategy and execution. He has over 11 years of experience in the payments industry & is a proven high growth leader with extensive experience in Fintech, Payment gateway, Strategic Alliances, Banking & Lending."
  },
  {
    name: 'Sivakumar R',
    role: 'Head HR',
    imageUrl: member4,
    twitterUrl: '',
    linkedinUrl: '',
  },
  {
    name: 'Yam Bahadur P',
    role: 'Director',
    imageUrl: member1,
    twitterUrl: 'https://twitter.com/YamBahadurpuran',
    linkedinUrl: 'https://www.linkedin.com/in/yam-bahadur-puran-413b872a0?trk=contact-info',
  },
  {
    name: 'A Lokesh',
    role: 'Director',
    imageUrl: member2,
    twitterUrl: 'https://twitter.com/Lokeshannamalai',
    linkedinUrl: 'https://www.linkedin.com/in/lokesh-annamalai-800b852a0?trk=contact-infol',
  },
  // More people...
];

const Team = ({ title }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative bg-white py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50 z-0">
        {/* Your GridPattern component */}
      </div>
      <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8 z-10">
        <div className="mx-auto max-w-2xl">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </p>
        </div><br></br>
        <Slider {...settings}>
          {people.map((person, index) => (
            <div key={index} className="mx-auto">
              <Card>
                <Image
                  className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                  src={person.imageUrl}
                  alt=""
                />
                <Name className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-800">
                  {person.name}
                </Name>
              
                <Designation className="text-sm leading-6 text-gray-400">{person.role}</Designation>
                <ul role="list" className="mt-6 flex justify-center gap-x-6">
                  <li>
                    <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                      {/* Twitter icon */}
                    </a>
                  </li>
                  <li>
                    <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                      {/* LinkedIn icon */}
                    </a>
                  </li>
                </ul>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Team;
