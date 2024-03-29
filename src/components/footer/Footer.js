import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

const style = {
  footerWrapper:
    "bg-[#04111d] py-[0.2rem] items-center justify-center bottom-0 w-full inline-block relative",
  joinText: "flex justify-center text-xl font-extrabold text-white pt-2",
  social: "flex items-center px-[1.2rem] pt-[0.4rem] justify-center",
  iconWrapper: "flex bg-[#8a939b] hover:bg-[#42a0ff] rounded-lg m-2.5",
  socialItem: "text-white text-[32px] cursor-pointer px-[1.2rem] py-[1rem]",
  list: "flex py-[0.4rem] text-center justify-center",
  listItem: "flex text-white hover:text-[#42a0ff] cursor-pointer px-[1.2rem]",
  copyrightContainer: "flex justify-center pb-4",
  copyright: "text-[#8a939b] text-center block",
};

const Footer = () => {
  const { t } = useTranslation(["es"]);

  return (
    <footer className={style.footerWrapper}>
      <div className={style.joinText}>{t("Join the community")}</div>
      <div className={style.social}>
        <div className={style.iconWrapper}>
          <Link to="/" className={style.socialItem}>
            <AiOutlineTwitter />
          </Link>
        </div>
        <div className={style.iconWrapper}>
          <Link to="/" className={style.socialItem}>
            <AiFillInstagram />
          </Link>
        </div>
        <div className={style.iconWrapper}>
          <Link to="/" className={style.socialItem}>
            <FaDiscord />
          </Link>
        </div>
        <div className={style.iconWrapper}>
          <Link to="/" className={style.socialItem}>
            <AiFillYoutube />
          </Link>
        </div>
      </div>

      <ul className={style.list}>
        <li>
          <Link to="/404" className={style.listItem}>
            {t("Privacy Policy")}
          </Link>
        </li>
        <li>
          <Link to="/" className={style.listItem}>
            {t("About")}
          </Link>
        </li>
        <li>
          <Link to="/" className={style.listItem}>
            {t("Terms of Service")}
          </Link>
        </li>
        <li>
          <Link to="/" className={style.listItem}>
            {t("Contact Us")}
          </Link>
        </li>
      </ul>

      <div className={style.copyrightContainer}>
        <p className={style.copyright}>
          NftHouse <span>&copy;</span> 2022.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
