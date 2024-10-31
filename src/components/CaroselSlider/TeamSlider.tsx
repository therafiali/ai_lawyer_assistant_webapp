"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { StaticImageData } from "next/image";
import TeamCard from "../whoweare/TeamCard";

interface SocialMedia {
    platform: string;
    link: string;
}

interface TeamCardProps {
    imageSrc: string | StaticImageData;
    name: string;
    role?: string ;
    socialMedia?: SocialMedia[]; 
}

interface TeamSliderProps {
    slides: TeamCardProps[];
}

const TeamSlider: React.FC<TeamSliderProps> = ({ slides }) => {

    // Check if the number of slides is less than 4
    if (slides.length < 4) {
        return (
            <div className="flex flex-wrap justify-center gap-6">
                {slides.map((member) => (
                    <TeamCard
                        key={member.name}
                        imageSrc={member.imageSrc}
                        name={member.name}
                        role={member.role}
                        socialMedia={member.socialMedia}
                    />
                ))}
            </div>
        );
    }

    const settings = {
        dots: true,
        infinite: false,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {slides.map((member) => (
                    <TeamCard
                        key={member.name}
                        imageSrc={member.imageSrc}
                        name={member.name}
                        role={member.role}
                        socialMedia={member.socialMedia}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default TeamSlider;
