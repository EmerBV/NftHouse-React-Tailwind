import { useTranslation } from "react-i18next";
import { IoMdWallet } from "react-icons/io";

const style = {
  loginButton:
    "text-[#8a939b] text-[38px] font-extrabold hover:text-white duration-500 cursor-pointer md:my-0 my-7 px-0 md:px-3 flex md:flex items-center justify-between",
  loginText: "flex font-extrabold text-[20px] pl-3 text-center",
};

function LoginButton() {
  const { t } = useTranslation(["es"]);

  return (
    <button className={style.loginButton} title={t("Login")}>
      <IoMdWallet />
      <span className={style.loginText}>{t("Login")}</span>
    </button>
  );
}

export default LoginButton;
