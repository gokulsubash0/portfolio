import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "Agriculture WebApp using ML",
    image: projectOne,
    description: (
      <>
        <p>
        Build with Python Flask utilizing ML algorithms for crop recommendation, crop yield prediction and plant disease detection. 
        </p>
      </>
    ),
    github: "https://github.com/gokulsubash0/Agriculture-WebApp-using-ML-Python-Flask",
    demo: "https://netlify.com",
  },
  2: {
    title: "NEWS PORTAL using PHP and MySQL ",
    image: projectTwo,
    description: (
      <>
        <p>
        Developed a news portal to display current articles, categorize them by topic, and allow users to search and save articles.
        </p>
      </>
    ),
    github: "https://github.com/gokulsubash0/Newsportal-using-PHP-and-MySQL",
    demo: "https://netlify.com",
  },
  3: {
    title: "NFT MARKETPLACE using Web3 ",
    image: projectThree,
    description: (
      <>
        <p>
        A decentralized platform built on the Ethereum blockchain using smart contracts,
        and powered by the React JS, where users can buy and sell unique digital assets. 
        </p>
      </>
    ),
    github: "https://github.com/gokulsubash0/NFT-Marketplace",
    demo: "https://netlify.com",
  },
};

export default projects;
