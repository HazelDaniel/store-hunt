import { useNavigate } from "react-router-dom";

import { Logo } from "../logo/logo.component";
import {
  FooterStyled,
  FooterTopStyled,
  TopLeftStyled,
  TopMiddleStyled,
  TopRIghtStyled,
} from "./footer.styles";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <FooterStyled>
      <FooterTopStyled>
        <TopLeftStyled>
          <Logo $variant={"footer"} />
          <p className="footer-moto">
            ATTENDING TO ALL CUSTOMER NEEDS IS OUR TOP AND ONLY PRIORITY
          </p>
          <div className="footer-payment-client-div">
            <p>PAYMENTS</p>
            <img
              src={`IMAGES/payment.png`}
              className="footer-payment-client-div-image"
            />
          </div>
        </TopLeftStyled>
        <TopMiddleStyled>
          <p className="footer-section-title">DIRECTIONS</p>
          <ul className="footer-section-lists">
            <li onClick={() => navigate("/shop")}>SHOP</li>
            <li onClick={() => navigate("/#newsletter")}>SUBSCRIBE</li>
            <li onClick={() => navigate("/blog")}>BLOG</li>
            <li onClick={() => navigate("/contact")}>CONTACT US</li>
          </ul>
        </TopMiddleStyled>
        <TopRIghtStyled>
          <div className="footer-contact-title footer-section-title">
            CONTACT US
          </div>
          <p className="footer-contact-address">
            Abaranje - ikotun Lagos,
            <br /> Nigeria
          </p>
          <p className="footer-contact-number">(234) 239-0166 xxx</p>
          <div className="footer-contact-icons">
            <div className="FCI">
              <svg viewBox="0 0 21 22" fill="none">
                <path d="M21 11.511c0 3.21-1.148 5.924-3.144 7.761h.004c-1.748 1.613-4.148 2.547-6.993 2.547a10.551 10.551 0 01-9.428-5.811 10.559 10.559 0 010-9.474A10.548 10.548 0 0110.867.719a10.14 10.14 0 017.059 2.744l-3.012 3.012a5.733 5.733 0 00-4.047-1.581c-2.753 0-5.09 1.857-5.924 4.357a6.32 6.32 0 000 4.04h.004c.837 2.496 3.171 4.353 5.923 4.353 1.423 0 2.644-.364 3.59-1.008h-.004a4.883 4.883 0 002.11-3.206h-5.7V9.367h9.952c.124.706.182 1.427.182 2.144z" />
              </svg>
            </div>
            <div className="FCI">
              <svg
                viewBox="0 0 27 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.9713 6.22838C23.9713 5.99355 23.9713 5.75872 23.9606 5.52389C25.0289 4.75534 25.9582 3.78399 26.6953 2.68455C25.7125 3.12219 24.655 3.41039 23.544 3.54916C24.6763 2.87668 25.5416 1.79859 25.9582 0.51768C24.9007 1.14746 23.7256 1.59578 22.4758 1.84128C21.4716 0.773861 20.0509 0.112061 18.4805 0.112061C15.4574 0.112061 13.0005 2.56713 13.0005 5.58793C13.0005 6.0149 13.0539 6.43119 13.1393 6.83681C8.58861 6.61265 4.55065 4.42444 1.848 1.11544C1.37797 1.92668 1.11091 2.86601 1.11091 3.86938C1.11091 5.76939 2.08301 7.44524 3.54651 8.42727C2.64918 8.39525 1.80527 8.14974 1.06818 7.74412C1.06818 7.76547 1.06818 7.78682 1.06818 7.81884C1.06818 10.466 2.95897 12.6863 5.45866 13.188C4.99931 13.3161 4.51861 13.3801 4.01653 13.3801C3.66401 13.3801 3.32217 13.3481 2.99102 13.284C3.68538 15.4616 5.71504 17.0414 8.1079 17.0841C6.22779 18.5571 3.86698 19.4324 1.3032 19.4324C0.865216 19.4324 0.427236 19.411 -6.10352e-05 19.3577C2.41417 20.8948 5.29842 21.8021 8.38565 21.8021C18.4592 21.8021 23.9713 13.4548 23.9713 6.22838Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="FCI">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.0889 0.799561H21.711C22.6438 0.799561 23.4 1.53745 23.4 2.44714V22.152C23.4 23.062 22.6438 23.7996 21.711 23.7996L2.0889 23.7996C1.15611 23.7996 0.399963 23.062 0.399963 22.152V2.44713C0.399963 1.53745 1.15611 0.799561 2.0889 0.799561ZM7.50607 9.66715H4.05403V20.0529H7.50607V9.66715ZM7.7331 6.45498C7.71066 5.43588 6.98383 4.6605 5.80287 4.6605C4.62203 4.6605 3.84996 5.43588 3.84996 6.45498C3.84996 7.45164 4.59907 8.24915 5.75753 8.24915H5.78003C6.98383 8.24915 7.7331 7.45164 7.7331 6.45498ZM12.8363 14.2531C12.8363 13.9427 12.8588 13.6326 12.9499 13.4107C13.1995 12.7905 13.7675 12.1482 14.7211 12.1482C15.9703 12.1482 16.4699 13.1006 16.4699 14.4968V20.0529H19.9217V14.0979C19.9217 10.9078 18.2186 9.42344 15.9474 9.42344C14.1163 9.42344 13.2952 10.4299 12.8364 11.1376V11.1734H12.8134C12.821 11.1615 12.8287 11.1496 12.8364 11.1376V9.66715H9.38443C9.42973 10.6417 9.38443 20.0529 9.38443 20.0529H12.8363V14.2531Z"
                />
              </svg>
            </div>
            <div className="FCI">
              <svg
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.261658 13.1375C0.261658 18.5658 3.77319 23.1507 8.64947 24.7762C9.26284 24.8835 9.49286 24.5155 9.49286 24.1935C9.49286 23.9021 9.47752 22.9361 9.47752 21.9087C6.39535 22.476 5.59797 21.1573 5.35262 20.4672C5.21461 20.1146 4.61658 19.0258 4.09521 18.7345C3.66585 18.5045 3.05248 17.9371 4.07988 17.9218C5.04593 17.9064 5.73597 18.8111 5.96599 19.1792C7.07005 21.0346 8.83348 20.5132 9.53886 20.1912C9.6462 19.3938 9.96822 18.8571 10.3209 18.5505C7.59141 18.2438 4.73925 17.1857 4.73925 12.4935C4.73925 11.1594 5.21461 10.0553 5.99665 9.19659C5.87398 8.88991 5.44462 7.63251 6.11933 5.94574C6.11933 5.94574 7.14672 5.62372 9.49286 7.20315C10.4742 6.92713 11.517 6.78912 12.5597 6.78912C13.6024 6.78912 14.6452 6.92713 15.6265 7.20315C17.9727 5.60839 19.0001 5.94574 19.0001 5.94574C19.6748 7.63251 19.2454 8.88991 19.1227 9.19659C19.9048 10.0553 20.3801 11.144 20.3801 12.4935C20.3801 17.2011 17.5127 18.2438 14.7832 18.5505C15.2279 18.9338 15.6112 19.6699 15.6112 20.8199C15.6112 22.4607 15.5959 23.7794 15.5959 24.1935C15.5959 24.5155 15.8259 24.8988 16.4393 24.7762C18.8746 23.954 20.9907 22.3889 22.4899 20.3011C23.9891 18.2132 24.7957 15.7078 24.7964 13.1375C24.7964 6.35977 19.3068 0.870117 12.529 0.870117C5.75131 0.870117 0.261658 6.35977 0.261658 13.1375Z" />
              </svg>
            </div>
          </div>
        </TopRIghtStyled>
      </FooterTopStyled>
      <hr className="style-two" />

      <div className="footer-bottom">
        <p className="copyright">
          Copyright © 2022 SPLENDID DEPOT Co., Ltd. All Rights Reserved.
        </p>
        <div className="footer-credit-div">
          <p>
            DESIGN BY:{" "}
            <span>
              <a target="_blank" href="https://www.github.com/HazelDaniel">
                Hazel Daniel
              </a>
            </span>
          </p>
          <p>
            POWERED BY:{" "}
            <span>
              <a target="_blank" href="https://www.stripe.com">
                Stripe
              </a>
            </span>
            <span>
              <a target="_blank" href="https://www.google.com">
                Google
              </a>
            </span>
            <span>
              <a target="_blank" href="https://www.firebase.com">
                Firebase
              </a>
            </span>
          </p>
        </div>
      </div>
    </FooterStyled>
  );
};
