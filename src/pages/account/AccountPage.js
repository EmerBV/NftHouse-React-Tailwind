import { useTranslation } from "react-i18next";

import Header from "../../components//header/Header";
import NFTCard from "../../components/nft/NFTCard";
import BannerImg from "../../images/banner.jpg";
import ProfileImg from "../../images/azuki_logo_2.jpg";
import EthLogo from "../../images/eth.svg";

import { CgWebsite } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";

const style = {
  collectionWrapper: "overflow-hidden w-full py-0 block",
  bannerImageContainer:
    "h-[20vh] w-screen overflow-hidden flex justify-center items-center",
  bannerImage: "w-full object-cover",
  collectionInfoContainer: "w-full px-4",
  midRow: "w-full flex items-center justify-center text-white",
  profileImg:
    "w-40 h-40 object-cover rounded-full border-2 border-[#202225] mt-[-4rem]",
  endRow: "w-full flex justify-end text-white",
  socialIconsContainer: "flex text-3xl mb-[-2rem]",
  socialIconsWrapper: "flex w-full justify-center",
  socialIconsContent:
    "flex container justify-center text-[1.4rem] border-2 rounded-lg",
  icons: "my-2 md:mx-2 mx-1 cursor-pointer",
  divider: "border-r-2",
  collectionTitle: "text-5xl font-bold mb-4",
  createdBy: "text-lg mb-4",
  createdName: "text-lg text-[#2081e2] ml-1",
  statsContainer:
    "w-full flex justify-center py-8 px-3 mx-3 border border-[#151b22] rounded-xl items-center text-center",
  collectionStat: "w-1/4 justify-center items-center text-center",
  statValue:
    "md:text-3xl md:font-bold font-medium w-full flex items-center justify-center text-center",
  statName:
    "md:text-lg text-md w-full flex items-center justify-center text-center",
  ethLogo: "h-6 mr-2",
  collectionHeader:
    "text-[#8a939b] text-xl w-max-1/4 flex-wrap mt-4 text-center mx-3",
  nftCardWrapper:
    "grid 2xl:grid-cols-9 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mx-0 items-center justify-center py-8 overflow-hidden min-w-[600px] px-[28px] block",
};

const AccountPage = () => {
  const { t } = useTranslation(["es"]);

  return (
    <>
      <Header />

      <div className={style.collectionWrapper}>
        <div className={style.bannerImageContainer}>
          <img className={style.bannerImage} src={BannerImg} alt="" />
        </div>

        <div className={style.collectionInfoContainer}>
          <div className={style.midRow}>
            <img className={style.profileImg} src={ProfileImg} alt="" />
          </div>

          <div className={style.endRow}>
            <div className={style.socialIconsContainer}>
              <div className={style.socialIconsWrapper}>
                <div className={style.socialIconsContent}>
                  <div className={style.icons}>
                    <CgWebsite />
                  </div>
                  <div className={style.divider}></div>
                  <div className={style.icons}>
                    <FaDiscord />
                  </div>
                  <div className={style.divider}></div>
                  <div className={style.icons}>
                    <AiOutlineTwitter />
                  </div>
                  <div className={style.divider}></div>
                  <div className={style.icons}>
                    <HiDotsVertical />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.midRow}>
          <div className={style.collectionTitle}>Azuki</div>
        </div>

        <div className={style.midRow}>
          <div className={style.createdBy}>
            {t("Created by")}
            <span className={style.createdName}>emer88</span>
          </div>
        </div>

        <div className={style.midRow}>
          <div className={style.statsContainer}>
            <div className={style.collectionStat}>
              <div className={style.statValue}>20</div>
              <div className={style.statName}>{t("items")}</div>
            </div>
            <div className={style.collectionStat}>
              <div className={style.statValue}>1</div>
              <div className={style.statName}>{t("owners")}</div>
            </div>
            <div className={style.collectionStat}>
              <div className={style.statValue}>
                <img className={style.ethLogo} src={EthLogo} alt="" />
                0.1
              </div>
              <div className={style.statName}>{t("floor price")}</div>
            </div>
            <div className={style.collectionStat}>
              <div className={style.statValue}>
                <img className={style.ethLogo} src={EthLogo} alt="" />
                .5K
              </div>
              <div className={style.statName}>{t("volume traded")}</div>
            </div>
          </div>
        </div>

        <div className={style.midRow}>
          <div className={style.collectionHeader}>
            {t("A brand for the metaverse")}. {t("Built by the community")}.{" "}
            {t("We rise together")}. {t("We build together")}.{" "}
            {t("We grow together")}. {t("Ready to take the red bean?")}
          </div>
        </div>

        <div className={style.nftCardWrapper}>{<NFTCard />}</div>
      </div>
    </>
  );
};

export default AccountPage;
