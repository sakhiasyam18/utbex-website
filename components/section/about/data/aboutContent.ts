// src/sections/about/data/aboutContent.ts

import { AboutContentData } from '../types/about';

export const aboutContent: AboutContentData = {
    headline: "Building Opportunities For Those Who Need Them Most.",
    story: [
        {
            id: "p1-problem",
            text: "Millions of young minds in rural areas possess extraordinary potential, yet remain constrained by limited access to mentorship, modern technology, and market opportunities."
        },
        {
            id: "p2-hope",
            text: "The reality is that innovation should not be limited by geography. When communities are equipped with the right tools, knowledge, and support, they can transform local resources into sustainable economic powerhouses."
        },
        {
            id: "p3-utbex",
            text: "That is why UTBEX exists. We quietly bridge the gap between rural potential and global standards through targeted education, creative branding, and collaborative social enterprise."
        }
    ],
    quote: {
        text: "We believe meaningful change begins by empowering people.",
        author: "UTBEX Foundation"
    },
    image: {
        src: "/images/about/community-mentoring.jpg",
        alt: "UTBEX mentoring session with local community entrepreneurs"
    }
};