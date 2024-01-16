import React, { useEffect, useMemo, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from "clsx";

const Container = ({ children }) => {
  return <div>{children}</div>; // Replace this with your Container component
};

const reviews = [
  // Your reviews data here
  {
    title: "It really works.",
    body: "Abundance Payment Products has made our transactions so smooth. Don't even need to think twice before using it. Highly recommended!.",
    author: "Rahul Kumar",
    rating: 5,
},
{
    title: "I love it!",
    body: "The speed at which Abundance Payment Products processes payments is unmatched. It has made a significant impact on our customer.",
    author: "Kapil Singh",
    rating: 5,
},
{
    title: "Too good to be true.",
    body: "We trust Abundance Payment Products for all our online transactions. The security measures are top-notch.",
    author: "Mark",
    rating: 5,
},
{
    title: "Amazing Experience",
    body: "Using Abundance Payment Products has been a breeze. We've seen a significant increase in our online sales since integrating it.",
    author: "Douglas",
    rating: 5,
},

{
    title: "No more debt!",
    body: "With Abundance Payment Products, we no longer worry about payment-related challenges. It's a stress-free solution.",
    author: "Naveen",
    rating: 5,
},

{
    title: "It’s like a superpower.",
    body: "We've seen a decrease in payment errors and disputes since using Abundance Payment Products. It's a win for both us and our customers.",
    author: "Clark",
    rating: 5,
},
];

function StarIcon(props) {
  // Your StarIcon component
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);
}

function StarRating({ rating }) {
  // Your StarRating component
  return (
    <div className="flex">
        {[...Array(5).keys()].map((index) => (
            <StarIcon
                key={index}
                className={clsx(
                    "h-5 w-5",
                    rating > index ? "fill-primary" : "fill-gray-300"
                )}
            />
        ))}
    </div>
);
}

function Review({ title, body, author, rating, className, ...props }) {
  // Your Review component
  return (
    <figure
        className={clsx(
            "animate-fade-in rounded-2xl bg-gray-200 p-10 opacity-0 shadow-md shadow-gray-900/5",
            className
        )}
        style={{ margin: "0 10px !important" }}
      
        {...props}
    >
        <blockquote className="text-gray-900">
            <StarRating rating={rating} />
            <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
                {title}
            </p>
            <p className="mt-3 text-base leading-7">{body}</p>
        </blockquote>
        <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
            {author}
        </figcaption>
    </figure>
);
}

// Your splitArray, ReviewColumn, and ReviewGrid components

const Testimonial = () => {
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
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="bg-gray-900 pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <Container>
        <span className="mt-2 text-3xl font-bold tracking-tight text-center sm:text-4xl block bg-gradient-to-r from-primary to-secondary bg-clip-text pb-3 text-transparent sm:pb-5">
          What Abundance Clients Say
        </span>

        <p className="mx-auto mt-5 max-w-prose text-xl text-center text-gray-300">
          Thousands of people have doubled their net-worth in the last 30 days.
        </p>
        <br></br><br></br>

        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} style={{ margin: "0 3px" }}>
            <Review key={index} {...review} />
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Testimonial;
