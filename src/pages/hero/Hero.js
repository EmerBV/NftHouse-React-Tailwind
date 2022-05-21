import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CardImg from "../../images/card_Img.jpg";

import { AiOutlineInfoCircle } from "react-icons/ai";

const style = {
  wrapper: "w-full min-h-full flex flex-col",
  bgContainer:
    "before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://pbs.twimg.com/media/FHo7-W8VcAEnsNh?format=jpg&name=medium')] before:bg-cover before:bg-center before:opacity-30 before:blur",
  contentWrapper: "flex h-screen justify-center items-center px-3 gap-3",
  copyContainer: "w-1/2",
  title:
    "relative text-white md:text-[40px] text-[30px] md:font-bold font-semibold flex pb-4 text-left",
  heroDescription:
    "relative text-[#8a939b] md:text-[24px] text-[20px] flex pb-4 text-left",
  ctaContainer: "flex w-full items-center gap-4",
  accentedButton:
    "relative text-lg font-bold md:py-4 py-3 bg-[#2081E2] rounded-[10px] text-white hover:bg-[#15B2E5] cursor-pointer border-[1px] border-[#151B22] text-center md:w-[200px] w-[110px]",
  button:
    "relative text-lg font-bold md:py-4 py-3 bg-[#353840] rounded-[10px] text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer border-[1px] border-[#151B22] text-center md:w-[200px] w-[110px]",
  cardContainer:
    "justify-center items-center hover:shadow-lg transform transition hover:-translate-y-2",
  cardImg: "rounded-t-2xl h-full",
  infoContainer:
    "h-20 bg-[#313338] p-4 rounded-b-2xl flex items-center text-white",
  infoImg: "h-[2.25rem] rounded-full",
  authorContainer: "flex flex-col justify-center ml-4",
  nameContainer: "flex",
  nameText: "text-[#1868b7]",
  infoIcon:
    "flex justify-end items-center flex-1 text-[#8a939b] hover:text-white text-2xl font-bold cursor-pointer",
};

const Hero = () => {
  const { t } = useTranslation(["es"]);

  return (
    <>
      <div className={style.wrapper}>
        <Header />
        <div className={style.bgContainer}>
          <div className={style.contentWrapper}>
            <div className={style.copyContainer}>
              <h1 className={style.title}>
                {t("Discover, collect and sell extraordinary NFTs")}
              </h1>
              <span className={style.heroDescription}>
                {t(
                  "NftHouse is the world's first and largest NFT marketplace."
                )}
              </span>
              <div className={style.ctaContainer}>
                <button className={style.accentedButton}>
                  <Link to="/assets">{t("Explore")}</Link>
                </button>

                <button className={style.button}>
                  <Link to="/asset/create">{t("Create")}</Link>
                </button>
              </div>
            </div>
            <div className={style.cardContainer}>
              <img className={style.cardImg} src={CardImg} alt="" />
              <div className={style.infoContainer}>
                <img
                  className={style.infoImg}
                  src="https://pbs.twimg.com/media/FI231MlaIAADj_q?format=jpg&name=small"
                  alt=""
                />
                <div className={style.authorContainer}>
                  <div className={style.nameContainer}>AzukiZen</div>
                  <p className={style.nameText}>Team Azuki</p>
                </div>
                <div className={style.infoIcon}>
                  <AiOutlineInfoCircle />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Hero;
