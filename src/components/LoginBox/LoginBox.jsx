import React, { useEffect, useId, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTheme } from "../../contexts/theme";
import { useToast } from "../../contexts/ToastState";
import { loginAPI } from "../../services/api/index.js";
import { useDispatch } from "react-redux";

function LoginBox(props) {
  const { setToastState } = useToast();
  const dispatch = useDispatch();
  const history = useHistory();

  const { theme } = useTheme();
  const themeClass =
    theme.mode === "DARK" ? "bg-darkModeLightBlack text-lightGray" : "bg-white";
  const themeBorder =
    theme.mode === "DARK" ? "border-lightestBlack" : "border-darkModeGray";

  const emailId = useId();
  const passwordId = useId();
  function addItemOnce(arr, value) {
    arr.push(value);
    return arr;
  }
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  useEffect(() => {
    dispatch({ type: "logout" });
    try {
      localStorage.setItem("token_user", JSON.stringify(""));
    } catch (e) {
      console.error({ e });
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleCreate() {
    history.push("/register");
  }

  function formSubmit() {
    // setToastState(old=>addItemOnce(old.slice(),{
    //     title: "3",
    //     description: "",
    //     key:Math.random()
    //     }))

    const email = document.getElementById(emailId).value;
    const password = document.getElementById(passwordId).value;

    document.getElementById(emailId).value = "";
    document.getElementById(passwordId).value = "";

    loginAPI(email, password)
      .then((response) => {
        if (response.status === 200) {
          setToastState((old) =>
            addItemOnce(old.slice(), {
              title: "1",
              description: `Welcome dear ${response.data.data.fname}`,
              key: Math.random(),
            })
          );
          // toggleAuth(response.data.data.email,response.data.token);
          dispatch({
            type: "login",
            payload: [response.data.data.email, response.data.token],
          });
          try {
            localStorage.setItem(
              "token_user",
              JSON.stringify(response.data.token)
            );
          } catch (e) {
            console.error({ e });
          }
          history.push("/home");
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setToastState((old) =>
            addItemOnce(old.slice(), {
              title: "2",
              description: "Password not correct",
              key: Math.random(),
            })
          );
        } else if (err.response.status === 404) {
          setToastState((old) =>
            addItemOnce(old.slice(), {
              title: "2",
              description: "User not fount please register first...",
              key: Math.random(),
            })
          );
        } else {
          console.error(err);
          setToastState((old) =>
            addItemOnce(old.slice(), {
              title: "2",
              description: "The server is unavailable",
              key: Math.random(),
            })
          );
        }
      });
  }

  const [iconPassword, setIconPassword] = useState("fa-eye-slash");
  const [passType, setPassType] = useState("password");
  function handlePassword() {
    setIconPassword((old) =>
      old === "fa-eye-slash" ? "fa-eye" : "fa-eye-slash"
    );
    setPassType((old) => (old === "password" ? "text" : "password"));
  }

  return (
    <div
      className={`${themeClass} py-[40px] px-total flex flex-row flex-wrap justify-between`}
    >
      <div className="lg:w-[100%] lgmin:w-[48%] pt-[10px]">
        <h3 className="text-[24px] font-bold mb-[20px]">LOGIN</h3>
        <div
          className={`${themeBorder} min-h-[336px] p-[30px] border-[1px] border-solid`}
        >
          <form className="text-left" onSubmit={handleSubmit(formSubmit)}>
            <div className="mb-[30px]">
              <label
                htmlFor="email-input"
                className="block text-[14px] font-bold mb-[8px]"
              >
                Email
              </label>
              <input
                type="email"
                className={`${themeClass} w-[100%] rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[12px] ${
                  errors.email ? "border-red outline-red" : `${themeBorder}`
                }`}
                data-testid="email-input"
                placeholder="Email"
                id={emailId}
                {...register("email", {
                  required: "Email is Required...",
                })}
              />
              {errors.email && (
                <div className="text-red pt-[5px]">
                  <i
                    className="fa fa-exclamation-triangle"
                    aria-hidden="true"
                  ></i>
                  <span className="pl-[5px]">{errors.email.message}</span>
                </div>
              )}
            </div>
            <div className="mb-[30px] relative">
              <label
                htmlFor="password-input"
                className="block text-[14px] font-bold mb-[8px]"
              >
                Password
              </label>
              <input
                type={passType}
                className={`${themeClass} w-[100%] relative rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[12px] ${
                  errors.password ? "border-red outline-red" : `${themeBorder}`
                }`}
                data-testid="password-input"
                placeholder="Password"
                id={passwordId}
                {...register("password", {
                  required: "Password is Required...",
                  minLength: {
                    value: 8,
                    message: "At least 8 characters...",
                  },
                })}
              />
              {!errors.password && (
                <i
                  className={`fa ${iconPassword} absolute right-[2%] bottom-[20px] cursor-pointer`}
                  onClick={handlePassword}
                  aria-hidden="true"
                ></i>
              )}
              {errors.password && (
                <>
                  <i
                    className={`fa ${iconPassword} absolute right-[2%] bottom-[48px] cursor-pointer`}
                    onClick={handlePassword}
                    aria-hidden="true"
                  ></i>
                  <div className="text-red pt-[5px]">
                    <i
                      className="fa fa-exclamation-triangle"
                      aria-hidden="true"
                    ></i>
                    <span className="pl-[5px]">{errors.password.message}</span>
                  </div>
                </>
              )}
            </div>
            <button
              type="submit"
              className="h-[50px] min-w-[150px] rounded-none bg-red text-white font-bold text-[14px] hover:bg-white hover:border-red hover:border-[2px] hover:border-solid hover:text-black"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
      <div className="lg:w-[100%] lgmin:w-[48%] pt-[10px]">
        <h3 className="text-[24px] font-bold mb-[20px]">NEW CUSTOMER</h3>
        <div
          className={`${themeBorder} lgmin:min-h-[336px] p-[30px] border-[1px] border-solid`}
        >
          <h4 className="text-[14px] font-bold mb-[22px]">CREATE AN ACCOUNT</h4>
          <p className="bg-inherit p-0 text-[14px] text-darkGray leading-[26px] mb-[30px]">
            Sign up for a free account at our store. Registration is quick and
            easy. It allows you to be able to order from our shop. To start
            shopping click register.
          </p>
          <button
            type="button"
            onClick={handleCreate}
            className="h-[50px] min-w-fit p-[10px] rounded-none bg-red text-white font-bold text-[14px] hover:bg-white hover:border-red hover:border-[2px] hover:border-solid hover:text-black"
          >
            CREATE AN ACCOUNT
          </button>
        </div>
      </div>
    </div>
  );
}
export default LoginBox;
