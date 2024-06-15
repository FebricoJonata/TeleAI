import React, { useState } from "react";
import logo from "../assets/logo.svg";
import BaseTextField from "../components/BaseTextField";
import BaseButton from "../components/BaseButton";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { userLoginSession } from "../services/localStorage";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState({
    email: false,
    password: false,
  });
  //   useEffect(() => {
  const url = "https://code-jeans-backend-v1.vercel.app/api/users/login";
  const loginAPI = async (event) => {
    // if (!fullName || !email || !password || !confirmPassword) {
    //   error = true;
    //   return;
    // }
    event.preventDefault();
    let hasError = false;

    if (!email) {
      setError((prev) => ({ ...prev, email: true }));
      hasError = true;
    } else {
      setError((prev) => ({ ...prev, email: false }));
    }

    if (!password) {
      setError((prev) => ({ ...prev, password: true }));
      hasError = true;
    } else {
      setError((prev) => ({ ...prev, password: false }));
    }
    try {
      const res = axios
        .post(url, {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res);

          //   localStorage.setItem("token", res.token);
          if (res.status === 200) {
            userLoginSession.setToken(res.data.token);
            localStorage.setItem("user_id", res.data.user.user_id);
            console.log("AMAN BANG");
            navigate("/chat/0", { replace: true });
          } else {
            console.log("Ga aman");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen w-screen bg-brand-blurry">
      <div className="lg:w-1/2 lg:visible w-0 collapse flex items-center justify-center">
        <img src={logo} alt="logo" className="max-w-[250px]" />
      </div>

      <div className="lg:w-1/2 w-full bg-brand-semi-inv max-w-full h-full flex flex-col items-center justify-center gap-[32px] md:p-[100px] sm:p-[64px] p-[32px]">
        <div className="flex flex-col gap-[16px] align-center items-center">
          <img src={logo} alt="logo" className="max-w-[120px] lg:collapse " />
          <h2 className="lg:text-4xl text-2xl lg:font-bold font-semibold text-white">
            {t("create_account")}
          </h2>
        </div>

        <div className="flex flex-col gap-[16px] w-full">
          <BaseTextField
            title={t("email")}
            placeholder={t("email_placeholder")}
            type="email"
            value={email}
            isError={error.email}
            helperText={error.email == true ? "Please Input The field" : ""}
            onValueChanged={(e) => setEmail(e)}
            isFullWidth={true}
          />

          <BaseTextField
            title={t("password")}
            placeholder={t("password_placeholder")}
            type="password"
            value={password}
            isError={error.password}
            helperText={error.password == true ? "Please Input The field" : ""}
            onValueChanged={(e) => setPassword(e)}
            isFullWidth={true}
          />
        </div>

        <div className="w-full flex flex-col gap-[16px] align-center items-center">
          <BaseButton
            title={t("login")}
            action={loginAPI}
            isFullWidth={true}
            addClass={"font-bold"}
          />

          <p className="text-[14px] text-white">
            {t("dont_have_an_account")}&nbsp;
            <a
              href="/register"
              className="text-brand-primary cursor-pointer hover:text-brand-secondary transition-all duration-300"
            >
              {t("register")}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
