import { Wrapper } from "../../layout-components/wrapper/wrapper.component";
import { AuthStyled } from "./auth.styles";

// ROUTING
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const navigate = useNavigate();
  return (
    <>
      <AuthStyled
        className="auth-overlay"
        onClick={(event) => {
          if (!event.target.classList.contains("auth-overlay")) return;
          navigate(-1);
        }}
      >
        <div className="auth-body">
          <div className="auth-tab">
            <p className="sign-up active">SIGN UP</p>
            <p className="sign-in">SIGN IN</p>
          </div>
          <form>
            <div className="inline-input-div">
              <label htmlFor="name">name</label>
              <input
                type="text"
                name=""
                id="name"
                className="S"
                placeholder="john doe"
              />
              <label htmlFor="last-name">last name</label>
              <input
                type="text"
                name=""
                id="last-name"
                className="S"
                placeholder="smith"
              />
            </div>

            <label htmlFor="email">email</label>
            <input
              type="email"
              name=""
              id="email"
              className="L"
              placeholder="example@example.com"
            />
            <div className="inline-input-div">
              <label htmlFor="phone">phone</label>
              <input
                type="tel"
                name=""
                id="phone"
                className="S"
                placeholder="+ XXX-XXX-XXX"
              />
            </div>

            <label htmlFor="password">password</label>
            <input
              type="password"
              name=""
              id="password"
              placeholder="password"
              className="L"
            />
            <label htmlFor="confirm-password">confirm password</label>
            <input
              type="password"
              name="confirm-password"
              id=""
              placeholder="confirm password"
              className="L confirm"
            />

            <input type="submit" value="SIGN UP" />
          </form>
        </div>
      </AuthStyled>
      <Wrapper />
    </>
  );
};
export default Auth;
