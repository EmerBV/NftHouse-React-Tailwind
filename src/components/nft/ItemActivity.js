import { useState } from "react";
import { useTranslation } from "react-i18next";

import { CgArrowsExchangeV } from "react-icons/cg";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

import EventItem from "./EventItem";

const style = {
  wrapper:
    "w-full mt-8 border border-[#151b22] rounded-xl bg-[#303339] overflow-hidden",
  title: "bg-[#262b2f] px-6 py-4 flex items-center",
  titleLeft: "flex-1 flex items-center text-xl font-bold",
  titleIcon: "text-3xl mr-2",
  titleRight: "text-xl",
  filter:
    "flex items-center border border-[#151b22] mx-4 my-6 px-3 py-4 rounded-xl bg-[#363840]",
  filterTitle: "flex flex-1",
  tableHeader:
    "flex w-full bg-[#262b2f] border-y border-[#151b22] mt-8 px-4 py-1",
  eventItem: "flex px-4",
  ethLogo: "h-5 mr-2",
  accent: "text-[#2081e2]",
};

const ItemActivity = () => {
  const [toggle, setToggle] = useState(true);

  const { t } = useTranslation(["es"]);

  return (
    <div className={style.wrapper}>
      <div className={style.title} onClick={() => setToggle(!toggle)}>
        <div className={style.titleLeft}>
          <span className={style.titleIcon}>
            <CgArrowsExchangeV />
          </span>
          {t("Item Activity")}
        </div>
        <div className={style.titleRight}>
          {toggle ? <AiOutlineUp /> : <AiOutlineDown />}
        </div>
      </div>
      {toggle && (
        <div className={style.activityTable}>
          <div className={style.filter}>
            <div className={style.filterTitle}>{t("Filter")}</div>
            <div className={style.filterIcon}>
              {" "}
              <AiOutlineDown />{" "}
            </div>
          </div>
          <div className={style.tableHeader}>
            <div className={`${style.tableHeaderElement} flex-[2]`}>
              {t("Event")}
            </div>
            <div className={`${style.tableHeaderElement} flex-[2]`}>
              {t("Price")}
            </div>
            <div className={`${style.tableHeaderElement} flex-[3]`}>
              {t("From")}
            </div>
            <div className={`${style.tableHeaderElement} flex-[3]`}>
              {t("To")}
            </div>
            <div className={`${style.tableHeaderElement} flex-[2]`}>
              {t("Date")}
            </div>
          </div>

          <EventItem />
        </div>
      )}
    </div>
  );
};

export default ItemActivity;
