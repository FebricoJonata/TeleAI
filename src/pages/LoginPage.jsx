import React, { useState } from "react";
import logo from "../assets/logo.svg";
import BaseTextField from "../components/BaseTextField";
import BaseButton from "../components/BaseButton";
import { useTranslation } from "react-i18next";
import axios from "axios";

export default function LoginPage() {
  const { t } = useTranslation();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({
    fullName: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  //   useEffect(() => {
  const url = "https://code-jeans-backend-v1.vercel.app/api/users/register";
  const registAPI = async (event) => {
    // if (!fullName || !email || !password || !confirmPassword) {
    //   error = true;
    //   return;
    // }
    event.preventDefault();
    let hasError = false;

    if (!fullName) {
      setError((prev) => ({ ...prev, fullName: true }));
      hasError = true;
    } else {
      setError((prev) => ({ ...prev, fullName: false }));
    }

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

    if (!confirmPassword) {
      setError((prev) => ({ ...prev, confirmPassword: true }));
      hasError = true;
    } else {
      setError((prev) => ({ ...prev, confirmPassword: false }));
    }
    // if (password !== confirmPassword) {
    //   alert("Passwords do not match");
    //   return;
    // }
    try {
      const res = axios
        .post(url, {
          name: fullName,
          email: email,
          role: "USER",
          password: password,
        })
        .then((res) => {
          console.log(res);
        });
      if (res.staus === 200) {
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };
  //   });
  //   const handleRegister = () => {
  //     // Lakukan validasi formulir di sini jika diperlukan
  //     // Contoh validasi:
  //     if (!fullName || !email || !password || !confirmPassword) {
  //       alert("Please fill in all fields");
  //       return;
  //     }

  //     // Siapkan data untuk dikirim ke API
  //     const formData = {
  //       fullName: fullName,
  //       email: email,
  //       password: password,
  //       confirmPassword: confirmPassword,
  //     };

  //     // Kirim data ke API
  //     fetch("https://example.com/api/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // Handle respon dari API jika diperlukan
  //         console.log("API response:", data);
  //         // Tambahkan logika lainnya, misalnya navigasi halaman setelah pendaftaran sukses
  //       })
  //       .catch((error) => {
  //         console.error("Error sending data to API:", error);
  //       });
  //   };

  return (
    <div className="flex h-screen w-screen bg-brand-blurry">
      <div className="lg:w-1/2 lg:visible w-0 collapse flex items-center justify-center">
        <img src={logo} alt="logo" className="max-w-[250px]" />
      </div>

      <div className="lg:w-1/2 w-full flex items-center justify-center ">
        <div className="bg-brand-semi-inv w-full max-w-full h-full flex flex-col items-center justify-center lg:gap-[64px] gap-[32px] md:p-[100px] sm:p-[64px] p-[32px]">
          <div className="flex flex-col gap-[24px] align-center items-center">
            <img src={logo} alt="logo" className="max-w-[120px] lg:collapse " />
            <h2 className="lg:text-4xl text-2xl lg:font-bold font-semibold text-white">
              {t("create_account")}
            </h2>
          </div>

          <div className="flex flex-col lg:gap-[32px] gap-[16px] w-full">
            <BaseTextField
              title={t("full_name")}
              placeholder={t("full_name_placeholder")}
              value={fullName}
              isError={error.fullName}
              helperText={
                error.fullName == true ? "Please Input The FIeld" : ""
              }
              onValueChanged={(e) => setFullName(e)}
              isFullWidth={true}
            />

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
              helperText={
                error.password == true ? "Please Input The field" : ""
              }
              onValueChanged={(e) => setPassword(e)}
              isFullWidth={true}
            />

            <BaseTextField
              title={t("confirm_password")}
              placeholder={t("confirm_password_placeholder")}
              type="password"
              value={confirmPassword}
              isError={error.confirmPassword}
              helperText={
                error.confirmPassword == true ? "Please Input The field" : ""
              }
              onValueChanged={(e) => setConfirmPassword(e)}
              isFullWidth={true}
            />
          </div>

          <BaseButton
            title={t("register")}
            action={registAPI}
            isFullWidth={true}
            addClass={"font-bold"}
          />
        </div>
      </div>
    </div>
  );
}
