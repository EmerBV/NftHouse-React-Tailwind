import { useTranslation } from "react-i18next";

import { toast } from "react-toastify";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const style = {
  signupWrapper:
    "flex justify-center items-center w-full h-screen bg-[#3b3d42]",
  signupContainer:
    "relative block p-[50px] justify-center items-center w-[900px]",
  container: "block",
  signupText: "text-[34px] text-center text-white font-[600] mb-4",
  formContainer:
    "p-[50px] rounded-lg border-[#151c22] border justify-center items-center",
  inputWrapper: "mb-4",
  inputContainer:
    "flex relative rounded-[10px] bg-[#363840] items-center pl-[12px] h-[48px] border border-[#151b22] w-full text-white outline-none text-[20px]",
  buttonContainer: "flex justify-center items-center p-[0.3rem] my-2",
  submitButton:
    "justify-center items-center border border-[#282b2f] bg-[#2081e2] hover:bg-[#42a0ff] text-[25px] font-semibold rounded-lg text-white w-[250px] h-[60px]",
};

const SignupPage = () => {
  const { t } = useTranslation(["es"]);

  return (
    <>
      <Header />

      <div className={style.signupWrapper}>
        <div className={style.signupContainer}>
          <div className={style.container}>
            <h1 className={style.signupText}>{t("Sign Up")}</h1>
            <form className={style.formContainer}>
              <div className={style.inputWrapper}>
                <input
                  className={style.inputContainer}
                  type="text"
                  name="name"
                  id="name"
                  placeholder={t("Name")}
                  required
                />
              </div>
              <div className={style.inputWrapper}>
                <input
                  className={style.inputContainer}
                  type="email"
                  name="email"
                  id="email"
                  placeholder={t("Email")}
                  required
                />
              </div>
              <div className={style.inputWrapper}>
                <input
                  className={style.inputContainer}
                  type="password"
                  name="password"
                  id="password"
                  placeholder={t("Password")}
                  required
                />
              </div>
              <div className={style.buttonContainer}>
                <button className={style.submitButton} type="submit" disabled>
                  {t("CONFIRM")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SignupPage;
