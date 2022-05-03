import { useTranslation } from "react-i18next";

const style = {
  optionsContainer:
    "grow block order-1 w-full text-white font-normal text-[18px]",
  selectOptionsContainer:
    "flex bg-[#353840] hover:bg-[#4c505c] md:mr-[8px] h-[50px] rounded-[10px] border border-[#151B22] min-w-[200px] p-[12px] cursor-pointer w-full",
  selectOptions:
    "cursor-pointer min-w-[200px] w-full border-0 outline-0 ring-0 m-0 inline-block px-[2px] bg-transparent text-white font-normal text-[18px]",
};

const CategoryButton = () => {
  const { t } = useTranslation(["es"]);

  return (
    <div className={style.optionsContainer}>
      <select className={style.selectOptionsContainer}>
        <option className={style.selectOptions}>{t("Select category")}</option>
        <option className={style.selectOptions}>{t("Art")}</option>
        <option className={style.selectOptions}>{t("Collectibles")}</option>
      </select>
    </div>
  );
};

export default CategoryButton;
