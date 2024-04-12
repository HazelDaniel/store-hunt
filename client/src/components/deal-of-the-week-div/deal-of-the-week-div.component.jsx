import { DealOfTheWeekStyled } from "./deal-of-the-week-div.styles";
import { decode } from "html-entities";
import { default as Countdown } from "react-countdown";

//ROUTING
import { useNavigate } from "react-router-dom";

// accessory component
const CountdownCompletion = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <CountdownCompletion />;
  } else {
    // Render a countdown
    return (
      <>
        <span>{String(days).padStart(2, 0)}</span>:
        <span>{String(hours).padStart(2, 0)}</span>:
        <span>{String(minutes).padStart(2, 0)}</span>:
        <span>{String(seconds).padStart(2, 0)}</span>
      </>
    );
  }
};
export const DealOfTheWeek = () => {
  const navigate = useNavigate();
  return (
    <DealOfTheWeekStyled>
      <div className="DOW-side-tab">
        <ul className="DOW-tab-lists">
          <li className="DOW-tab-list">
            <span>{decode(`&rdca;`)}</span> Clothings
          </li>
          <li className="DOW-tab-list active-dow-tab-list">
            <span>{decode(`&rdca;`)}</span> Bags
          </li>
          <li className="DOW-tab-list">
            <span>{decode(`&rdca;`)}</span> Shoe Collection
          </li>
        </ul>
      </div>
      <div className="DOW-item-div">
        <img
          src="IMAGES/product-sale-removebg-preview.png"
          alt="deal of the week item"
          className="DOW-item"
        />
        <span className="DOW-item-tag">
          <p>Sale Of</p>
          <p>$150.20</p>
        </span>
        <button className="DOW-cta" onClick={() => navigate("shop")}>
          SHOP NOW
        </button>
      </div>
      <p className="DOW-title">
        deal of the week
        <span>
          <svg
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.5 0.5C6.88071 0.5 8 1.61929 8 3C8 1.61929 9.11929 0.5 10.5 0.5C11.8807 0.5 13 1.61929 13 3L13 3.00557C13 3.07543 13.0001 3.27567 12.9622 3.5H15C15.5523 3.5 16 3.94772 16 4.5V5.5C16 6.05228 15.5523 6.5 15 6.5H1C0.447716 6.5 0 6.05229 0 5.5V4.5C0 3.94772 0.447715 3.5 1 3.5H3.03783C2.99987 3.27567 2.99996 3.07543 3 3.00557L3 3C3 1.61929 4.11929 0.5 5.5 0.5ZM7 3.5V3C7 2.17157 6.32843 1.5 5.5 1.5C4.67157 1.5 4 2.17157 4 3C4 3.08475 4.00195 3.27351 4.04488 3.43094C4.05252 3.45895 4.06044 3.48186 4.06799 3.5H7ZM11.932 3.5C11.9396 3.48186 11.9475 3.45895 11.9551 3.43094C11.9981 3.27351 12 3.08475 12 3C12 2.17157 11.3284 1.5 10.5 1.5C9.67157 1.5 9 2.17157 9 3V3.5H11.932ZM15 15C15 15.8284 14.3284 16.5 13.5 16.5H9V7.5H15V15ZM1 15V7.5H7V16.5H2.5C1.67157 16.5 1 15.8284 1 15Z"
              fill="#BB9D88"
            />
          </svg>
        </span>
      </p>
      <p className="DOW-product-title">Multi-pocket chest bag black</p>

      <div className="DOW-time-div">
        <div className="DOW-time-count-div">
          <Countdown
            renderer={renderer}
            date={new Date(`may 25, ${new Date().getFullYear() + 1}`)}
          />
        </div>
        <div className="DOW-time-count-label-div">
          <span>Days</span>
          <span>Hours</span>
          <span>Minutes</span>
          <span>Seconds</span>
        </div>
      </div>
    </DealOfTheWeekStyled>
  );
};
