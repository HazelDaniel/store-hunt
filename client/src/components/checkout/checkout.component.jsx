import { Wrapper } from "../../layout-components/wrapper/wrapper.component";
import { CustomInput } from "../custom-input/custom-input.component";
import { ShopTopPane } from "../shop-top-pane/shop-top-pane.component";
import { CheckoutStyled } from "./checkout.styles";

const checkoutNavData = {
  rootPageText: "shop",
  subPageText: "checkout",
};

export const Checkout = () => {
  return (
    <Wrapper>
      <ShopTopPane navText={checkoutNavData} />
      <CheckoutStyled>
        <section className="checkout-container">
          <div className="checkout-discount-wrapper">
            <p>discount code</p>
            <div className="discount-code-box">
              <form action="">
                <input type="text" name="" id="" maxLength="7" placeholder="Coupon Code" />
                <button type="submit">APPLY</button>
              </form>
            </div>
          </div>
          <div className="checkout-body">
            <p className="CB-title">YOUR ORDER</p>
            <div className="checkout-product-summary">
              <div className="checkout-summary-heading-div">
                <p>PRODUCT</p>
                <p>TOTAL</p>
              </div>
              <div className="checkout-summary-details-div">
                <ol className="checkout-summary-product-div">
                  <li>
                    1. leather bag L <span>$350.55</span>
                  </li>
                  <li>
                    2. T-shirt Deluxe <span>$350.55</span>
                  </li>
                  <li>
                    3. Armari <span>$350.55</span>
                  </li>
                </ol>
              </div>
            </div>
            <div className="checkout-total-price-summary">
              <ul>
                <li>
                  sub total:<span>$1570.00</span>
                </li>
                <li>
                  shipping fee:<span>$1570.00</span>
                </li>
                <li>
                  total:<span>$1570.00</span>
                </li>
              </ul>
            </div>
            <button>PLACE ORDER</button>
          </div>
        </section>
        <section className="checkout-form-container">
          <div className="form-progress-indicators">
            <span className="FPI">
              <span></span>
            </span>
            <span className="FPI-connector"></span>
            <span className="FPI">
              <span></span>
            </span>
            <span className="FPI-connector"></span>
            <span className="FPI FPI-active">
              <span></span>
            </span>
          </div>
          <div className="progress-back-cta">
            <span>
              <svg
                width="8"
                height="15"
                viewBox="0 0 8 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.82194 0.16254L0.162596 6.82188C-0.0541234 7.0386 -0.0541234 7.38997 0.162596 7.60669L6.82194 14.266C7.03866 14.4828 7.39003 14.4828 7.60675 14.266C7.82347 14.0493 7.82347 13.6979 7.60675 13.4812L1.33981 7.21429L7.60675 0.947351C7.82347 0.730631 7.82347 0.379259 7.60675 0.16254C7.39003 -0.0541799 7.03866 -0.0541799 6.82194 0.16254Z"
                  fill="#C5C5C7"
                />
              </svg>
            </span>
            <button>GO BACK</button>
          </div>
          <div className="checkout-form-heading">
            <p className="checkout-form-heading-text">Confirm Purchase</p>
          </div>
          <form>
            <div className="inline-input-div">
              <CustomInput
                type={"text"}
                label={`name`}
                id={`name`}
                placeholder={`john doe`}
                $variant={`S`}
              />
              <CustomInput
                type={"text"}
                label={`last name`}
                id={`last-name`}
                placeholder={`smith`}
                $variant={`S`}
              />
            </div>
            <CustomInput
              type={"email"}
              label={`email`}
              id={`email`}
              placeholder={`example@example.com`}
              $variant={`L`}
            />
            <div className="inline-input-div">
              <CustomInput
                type={"tel"}
                label={`phone`}
                id={`phone`}
                placeholder={`+ XXX-XXX-XXX`}
                $variant={`S`}
              />
            </div>

            <div className="AHA-div">
              <input type="checkbox" name="" id="AHA-check" />
              <label htmlFor="AHA-check">
                <span>Already Have An Account?</span>
              </label>
            </div>
            <CustomInput
              type={"password"}
              label={`password`}
              id={`password`}
              placeholder={`password`}
              $variant={`L`}
            />
            <CustomInput
              type={"password"}
              label={`confirm password`}
              id={`confirm-password`}
              placeholder={`confirm password`}
              $variant={`L`}
            />

            <div className="checkout-form-cta">
              <input type="submit" value="CONTINUE" />
              <span>
                <svg
                  width="10"
                  height="19"
                  viewBox="0 0 10 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.42194 0.204382L9.79556 8.57801C10.0681 8.85052 10.0681 9.29234 9.79556 9.56485L1.42194 17.9385C1.14943 18.211 0.707603 18.211 0.435094 17.9385C0.162586 17.666 0.162586 17.2241 0.435094 16.9516L8.3153 9.07143L0.435094 1.19122C0.162586 0.918714 0.162586 0.47689 0.435094 0.204382C0.707603 -0.0681272 1.14943 -0.0681272 1.42194 0.204382Z"
                    fill="#08090A"
                  />
                </svg>
              </span>
            </div>
          </form>
          <section className="confirmation-section">
            <p className="greeting-text">Hello Daniel!</p>
            <p className="confirmation-text">
              Let's not forget that a broad understanding of the essence will
              require a vast knowledge. The some of the individual elements
              gives less satisfactory results. At the same time, however, a lot
              of effort has been invested into the crucial component. By the
              way, the initial progress in the participant evaluation sample
              partially the competitive development and manufacturing.
            </p>
            <form className="confirmation-form">
              <div className="agreement-check-div">
                <input type="checkbox" name="" id="agreement-checkbox" />
                <label htmlFor="agreement-checkbox">
                  <span>
                    I Agree and accept to be held accountable for deductions on
                    my account using this service
                  </span>
                </label>
              </div>
              <label htmlFor="additional-notes">Additional Notes</label>
              <textarea
                type="text"
                name=""
                id="additional-notes"
                maxLength="200"
                style={{
                  resize: "none",
                }}
                placeholder="type your notes here"
              ></textarea>

              <input type="submit" value="CONFIRM PAYMENT" />
            </form>
          </section>
        </section>
      </CheckoutStyled>
    </Wrapper>
  );
};
export default Checkout;
