import { NewsLetterFormStyled, NewsletterStyled } from "./newsletter.styles";
import { InView } from "react-intersection-observer";
import { useState } from "react";

export const Newsletter = () => {
  const [_, setInview] = useState(false);
  return (
    <NewsletterStyled id="newsletter">
      <div className="NLD-section-title">
        <p>SUBSCRIBE TO OUR NEWSLETTER</p>
      </div>
      <p className="NLD-title">
        By subscribing to our newsletter, you can get up to 30% off
      </p>
      <InView onChange={setInview}>
        {({ inView, ref }) => (
          <NewsLetterFormStyled
            ref={ref}
            className={inView ? "animated wiggle" : ""}
            action=""
          >
            <input type="textbox" name="" id="" placeholder="YOUR NAME" />
            <input type="email" name="" id="" placeholder="YOUR EMAIL" />
            <span className="send-news-letter-cta">
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M34.6797 0.320386C34.3704 0.011003 33.9064 -0.0842348 33.5001 0.0782609L1.67814 12.8071L1.67495 12.8083L0.687438 13.2033C0.30643 13.3557 0.0427848 13.7086 0.00463092 14.1172C-0.033523 14.5257 0.160235 14.9213 0.506438 15.1416L1.40249 15.7118L1.40664 15.7145L12.3327 22.6674L19.2856 33.5935L19.289 33.5987L19.8585 34.4937C20.0788 34.8399 20.4744 35.0336 20.883 34.9955C21.2915 34.9573 21.6444 34.6937 21.7968 34.3127L34.9219 1.5C35.0844 1.09376 34.9891 0.629768 34.6797 0.320386ZM15.0158 21.2735L14.6233 20.6567C14.5517 20.5442 14.4562 20.4487 14.3437 20.3771L13.7268 19.9845L27.3876 6.32372L29.536 5.46437L28.6767 7.61267L15.0158 21.2735Z"
                />
              </svg>
            </span>
          </NewsLetterFormStyled>
        )}
      </InView>
      <NewsletterContact />
    </NewsletterStyled>
  );
};

const NewsletterContact = () => {
  return (
    <div className="newsletter-contact-div">
      <div>
        <p>email: </p>
        <span>info@company.com</span>
      </div>
      <div>
        <p>Location: </p>
        <span>Lagos, Nigeria.</span>
      </div>
      <div>
        <p>social media: </p>
        <span>twitter , facebook , linkedin</span>
      </div>
    </div>
  );
};
