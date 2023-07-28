import React from "react";
import "./_about.scss";
import aboutHangar from "../../assets/images/aboutHangar.jpg"
import { PageTitle } from "../../layouts/pageTitle/PageTitle";

export const About = () => {
  return (
    <>
      <div className="about">
        <PageTitle>ABOUT</PageTitle>
        <div className="aboutInfo container d-flex flex-column flex-md-row gap-2 p-3">
            <img src={aboutHangar} alt="" />
            <div className="aboutText d-flex flex-column align-items-start">
              <h1>Our Store</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum molestias nisi totam minima laborum provident reiciendis! Hic totam, eos facere expedita repudiandae, rerum a, nisi vitae similique deserunt reprehenderit. Laborum.
              Quam culpa ducimus voluptatibus iure architecto aut quasi recusandae sequi, repellat vitae perspiciatis reiciendis ad nisi et dignissimos ipsam consequatur dolorum sint accusantium quae inventore provident. Eligendi temporibus xpedita repudiandae, rerum a, nisi vitae similique deserunt reprehenderit. Laborum.
              Quam culpa ducimus voluptatibus iure architecto aut quasi recusandae sequi, repellat vitae perspiciatis reiciendis ad nisi et dignissimos ipsam consequatur dolorum sint accusantium quae inventore provident. Eligendi temporibus xpedita repudiandae, rerum a, nisi vitae similique deserunt reprehenderit. Laborum.
              Quam culpa ducimus voluptatibus iure architecto aut quasi recusandae sequi, repellat vitae perspiciatis reiciendis ad nisi et dignissimos ipsam consequatur dolorum sint accusantium quae inventore provident. Eligendi temporibus xpedita repudiandae, rerum a, nisi vitae similique deserunt reprehenderit. Laborum.</p>

              <p className="quote">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iure explicabo quo quas facilis reprehenderit rem fuga, incidunt maiores odio, qui sequi ducimus suscipit numquam minima corrupti iamet consectetur adipisicing elit. Quia iure explicabo quo quas facilis reprehenderit rem fuga, incidunt maiores odio, qui sequi ducimus suscipit numquam minima corrupti itaque soluta distinctio.
              </p>
            </div>
        </div>
      </div>
    </>
  );
};
