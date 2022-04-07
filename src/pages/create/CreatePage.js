import Header from "../../components/header/Header";

import { IoMdWallet } from "react-icons/io";
import { IoMdImage } from "react-icons/io";

const style = {
  createWrapper: "block w-full h-full",
  createContainer: "flex flex-col justify-center items-center pt-[24px]",
  formWrapper: "block p-[24px] my-0 mx-auto text-[25px]",
  createTextContainer: "flex flex-col text-[25px]",
  createText: "flex text-[#e5e8eb] font-semibold text-[50px] mb-[15px]",
  formContainer: "block mb-[32px] mt-0 w-full",
  detailTopContent: "flex font-medium text-[15px] text-[#8A939B]",
  asterisk: "font-medium text-[15px] text-[#EB5757] mx-1",
  generalWrapper: "flex flex-col mb-[24px] w-full",
  imageWrapper: "flex flex-col text-[25px] text-white my-4",
  imageTextContainer: "flex flex-col mb-[8px]",
  imageTittle: "flex font-semibold text-[20px] mb-[4px]",
  imageText: "flex font-medium text-[13px] text-[#8A939B]",
  imageInputContainer:
    "relative p-[4px] border-dashed border-[3px] rounded-[10px] justify-center items-center flex flex-col h-[257px] w-[350px] cursor-pointer",
  imageInput: "hidden m-0 appearance-none cursor-default z-[-1]",
  imageIcon: "text-[84px] cursor-pointer",
  detailsWrapper: "flex flex-col mb-[24px]",
  detailsContainer: "flex flex-col text-[20px]",
  generalInfoContainer: "flex flex-col mb-[8px] text-[20px]",
  inputsLabel: "flex font-semibold text-[20px] text-white",
  inputsContainer: "block text-[20px] pb-2",
  placeholderContainer:
    "flex relative rounded-[10px] bg-[#363840] items-center pl-[12px] h-[48px] border border-[#151b22] w-full text-white outline-none text-[20px]",
  selectContainer:
    "flex relative rounded-[10px] bg-[#363840] items-center pl-[12px] h-[48px] border border-[#151b22] w-full outline-none text-[#8A939B] text-[20px]",
  optionContainer: "px-3 py-2 hover:bg-[#8a939b] rounded-lg",
  buttonWrapper: "flex pt-5",
  button:
    "border border-[#282b2f] bg-[#2081e2] flex justify-center items-center font-semibold rounded-lg text-white w-[200px] h-[50px]",
  wallet: "flex items-center text-[30px]",
  create: "ml-2 text-[20px] font-semibold flex justify-center items-center",
};

const CreatePage = () => {
  return (
    <>
      <Header />

      <div className={style.createWrapper}>
        <div className={style.createContainer}>
          <div className={style.formWrapper}>
            <div className={style.createTextContainer}>
              <h1 className={style.createText}>Create New Item</h1>
            </div>
            <form className={style.formContainer}>
              <p className={style.detailTopContent}>
                <span className={style.asterisk}>*</span>
                Required fields
              </p>
              <div className={style.generalWrapper}>
                <div className={style.imageWrapper}>
                  <div className={style.imageTextContainer}>
                    <label className={style.imageTittle}>
                      Image, Video, Audio, or 3D Model
                      <span className={style.asterisk}>*</span>
                    </label>
                    <span className={style.imageText}>
                      File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3,
                      WAV, OGG, GLB, GLTF. Max size: 100 MB
                    </span>
                  </div>
                  <div className={style.imageInputContainer}>
                    <input
                      className={style.imageInput}
                      accept="image/*, video/*, audio/*"
                      type="file"
                      autocomplete="off"
                      overflow="hidden"
                      required
                    />
                    <i className={style.imageIcon}>
                      <IoMdImage />
                    </i>
                    <div className="block absolute ring-[4px] z-[70] opacity-0 h-0 rounded-[10px]"></div>
                  </div>
                </div>

                <div className={style.detailsWrapper}>
                  <div className={style.detailsContainer}>
                    <div className={style.generalInfoContainer}>
                      <label className={style.inputsLabel}>
                        Name
                        <span className={style.asterisk}>*</span>
                      </label>
                      <div className={style.inputsContainer}>
                        <input
                          className={style.placeholderContainer}
                          type="text"
                          placeholder="Item name"
                          required
                        />
                      </div>

                      <label className={style.inputsLabel}>
                        Price
                        <span className={style.asterisk}>*</span>
                      </label>
                      <div className={style.inputsContainer}>
                        <input
                          className={style.placeholderContainer}
                          placeholder="Item price"
                          required
                        />
                      </div>

                      <label className={style.inputsLabel}>
                        Category
                        <span className={style.asterisk}>*</span>
                      </label>
                      <div className={style.inputsContainer}>
                        <select className={style.selectContainer}>
                          <option className={style.optionContainer}>
                            Select category
                          </option>
                          <option className={style.optionContainer}></option>
                        </select>
                      </div>

                      <label className={style.inputsLabel}>
                        Event
                        <span className={style.asterisk}>*</span>
                      </label>
                      <div className={style.inputsContainer}>
                        <select className={style.selectContainer}>
                          <option className={style.optionContainer}>
                            Select an event
                          </option>
                          <option
                            className={style.optionContainer}
                            value="false"
                          >
                            Buy
                          </option>
                          <option
                            className={style.optionContainer}
                            value="true"
                          >
                            Sale
                          </option>
                        </select>
                      </div>

                      <div className={style.buttonWrapper}>
                        <button className={style.button} type="submit" disabled>
                          <i className={style.wallet}>
                            <IoMdWallet />
                          </i>
                          <p className={style.create}>Create</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePage;
