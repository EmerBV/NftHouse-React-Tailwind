import { useTranslation } from "react-i18next";

import { HiTag } from "react-icons/hi";
import { IoMdWallet } from "react-icons/io";

const style = {
  buttonsWrapper:
    "flex h-20 items-center rounded-lg border border-[#151c22] bg-[#303339] px-12 gap-6",
  button: "flex items-center py-2 px-10 rounded-lg",
  buttonIcon: "flex text-xl",
  buttonText: "flex ml-2 text-lg font-semibold",
};

const Purchase = () => {
  const { t } = useTranslation(["es"]);

  return (
    <div className={style.buttonsWrapper}>
      <>
        <button className={`${style.button} bg-[#2081e2] hover:bg-[#42a0ff]`}>
          <IoMdWallet className={style.buttonIcon} />
          <div className={style.buttonText}>{t("Buy Now")}</div>
        </button>
        <button
          className={`${style.button} border border-[#151c22]  bg-[#363840] hover:bg-[#4c505c]`}
        >
          <HiTag className={style.buttonIcon} />
          <div className={style.buttonText}>{t("Make Offer")}</div>
        </button>
      </>
    </div>
  );
};

export default Purchase;
