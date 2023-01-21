import React from "react";

import { Stack, Text, Input, Img, SelectBox, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const SelectionPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-helveticaneue items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-start justify-start w-[100%]">
          <header className="flex items-center justify-center w-[100%]">
            <Stack className="h-[131px] pb-[5px] relative w-[100%]">
              <div className="absolute bg-white_A700 flex flex-col inset-x-[0] items-center justify-center max-w-[1512px] mx-[auto] sm:px-[20px] px-[36px] py-[12px] top-[0] w-[100%]">
                <div className="flex md:flex-col sm:flex-col flex-row gap-[400px] md:gap-[40px] sm:gap-[40px] h-[57px] sm:h-[auto] items-center justify-center max-w-[1362px] w-[100%]">
                  <Stack className="h-[43px] relative md:w-[100%] sm:w-[100%] w-[8%]">
                    <Text
                      className="font-black font-montserrat leading-[24.00px] md:leading-[normal] sm:leading-[normal] m-[auto] text-bluegray_100 text-center"
                      variant="body6"
                    >
                      outfit
                      <br />
                      store
                    </Text>
                    <Text
                      className="absolute font-condiment font-normal inset-x-[0] mx-[auto] not-italic text-black_900 text-left top-[12%] w-[max-content]"
                      as="h5"
                      variant="h5"
                    >
                      ZARAH
                    </Text>
                  </Stack>
                  <div className="flex md:flex-col flex-row gap-[229px] md:gap-[40px] sm:gap-[40px] items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                    <ul className="flex flex-row gap-[24px] sm:hidden items-start justify-start w-[auto] common-row-list">
                      <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-medium text-[15px] text-gray_900 text-left"
                          rel="noreferrer"
                        >
                          Men
                        </a>
                      </li>
                      <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-medium text-[15px] text-gray_900 text-left"
                          rel="noreferrer"
                        >
                          Women
                        </a>
                      </li>
                      <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-medium text-[15px] text-gray_900 text-left"
                          rel="noreferrer"
                        >
                          Kids
                        </a>
                      </li>
                      <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-medium text-[15px] text-gray_900 text-left"
                          rel="noreferrer"
                        >
                          Customise
                        </a>
                      </li>
                      <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-medium text-[16px] text-gray_900 text-left"
                          rel="noreferrer"
                        >
                          Sale
                        </a>
                      </li>
                    </ul>
                    <div className="flex flex-row gap-[20px] items-center justify-center w-[auto]">
                      <div className="flex flex-col items-center justify-start w-[70%]">
                        <Input
                          value={inputvalue}
                          onChange={(e) => setInputvalue(e?.target?.value)}
                          className="font-medium leading-[normal] p-[0] text-[15px] placeholder:text-bluegray_101 text-bluegray_101 text-left w-[100%]"
                          wrapClassName="flex w-[100%]"
                          name="SearchProducts"
                          placeholder="Search"
                          prefix={
                            <Img
                              src="images/img_search.svg"
                              className="cursor-pointer mr-[14px] my-[auto]"
                              alt="search"
                            />
                          }
                          suffix={
                            inputvalue?.length > 0 ? (
                              <CloseSVG
                                color="#cccccc"
                                className="cursor-pointer ml-[10px] mr-[22px] my-[auto]"
                                onClick={() => setInputvalue("")}
                              />
                            ) : (
                              ""
                            )
                          }
                        ></Input>
                      </div>
                      <div className="flex flex-row gap-[12px] items-start justify-start pb-[21px] pt-[12px] w-[auto]">
                        <Img
                          src="images/img_favorite.svg"
                          className="h-[24px] object-cover w-[24px]"
                          alt="favorite"
                        />
                        <Img
                          src="images/img_cart.svg"
                          className="h-[24px] object-cover w-[24px]"
                          alt="cart"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gray_50 bottom-[0] flex md:flex-col sm:flex-col flex-row font-hiraginokakugothicpro gap-[215px] md:gap-[40px] sm:gap-[40px] inset-x-[0] items-center justify-start mx-[auto] p-[4px] w-[100%]">
                <div className="flex flex-col items-start justify-end mb-[2px] pr-[14px] py-[14px] md:w-[100%] sm:w-[100%] w-[56%]">
                  <div className="flex sm:flex-col flex-row gap-[106px] sm:gap-[40px] items-start justify-start mr-[auto] mt-[2px] md:w-[100%] sm:w-[100%] w-[auto]">
                    <Text
                      className="font-semibold text-gray_901 text-left tracking-ls1 uppercase w-[auto]"
                      variant="body6"
                    >
                      Details
                    </Text>
                    <Text
                      className="font-light text-gray_901 text-left tracking-ls1 uppercase w-[auto]"
                      variant="body11"
                    >
                      Delivery and Payment
                    </Text>
                    <Text
                      className="font-light text-gray_901 text-left tracking-ls1 uppercase w-[auto]"
                      variant="body11"
                    >
                      Refund
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-light text-gray_602 text-left w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Standard delivery in 2-7 days
                </Text>
              </div>
            </Stack>
          </header>
          <div className="flex md:flex-col sm:flex-col flex-row font-hiraginokakugothicpro md:gap-[20px] sm:gap-[20px] items-start justify-start max-w-[1439px] md:ml-[0] sm:ml-[0] ml-[auto] mr-[auto] mt-[27px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]">
            <Img
              src="images/img_hmgoepprod.png"
              className="h-[745px] sm:h-[auto] object-cover md:w-[100%] sm:w-[100%] w-[35%]"
              alt="hmgoepprod"
            />
            <Img
              src="images/img_hmgoepprod_745x496.png"
              className="h-[745px] sm:h-[auto] md:ml-[0] sm:ml-[0] ml-[4px] object-cover md:w-[100%] sm:w-[100%] w-[35%]"
              alt="hmgoepprod One"
            />
            <div className="flex flex-col gap-[18px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[31px] md:mt-[0] sm:mt-[0] mt-[30px] md:w-[100%] sm:w-[100%] w-[auto]">
              <Text
                className="text-gray_901 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Aerodyno DSEA98 Shoe{" "}
              </Text>
              <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[89%]">
                <div className="flex flex-col items-start justify-start pr-[3px] pt-[3px] w-[100%]">
                  <Text
                    className="text-gray_901 text-left w-[auto]"
                    variant="body4"
                  >
                    Rp 2.999.999
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <Text
                  className="font-light text-gray_901 text-left md:tracking-ls1 sm:tracking-ls1 tracking-ls12999999523162842 w-[auto]"
                  variant="body11"
                >
                  White/Light grey
                </Text>
              </div>
              <div className="flex flex-row gap-[5px] items-start justify-start md:w-[100%] sm:w-[100%] w-[43%]">
                <Text
                  className="flex-grow font-light text-gray_901 text-left tracking-ls1 uppercase"
                  variant="body11"
                >
                  Reviews (415)
                </Text>
                <Img
                  src="images/img_eye.svg"
                  className="h-[12px] object-cover w-[auto]"
                  alt="eye"
                />
              </div>
              <div className="bg-gray_50 flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[89%]">
                <div className="flex flex-col gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                  <SelectBox
                    className="font-light text-[11px] text-gray_901 text-left w-[100%]"
                    placeholderClassName="text-gray_901"
                    name="divpickerOne"
                    placeholder="Select size"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown.svg"
                        className="h-[24px] mr-[0] pl-[35px] pr-[8px] sm:pl-[20px] border-bluegray_102 border border-solid w-[24px] py-[12px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <div className="bg-gray_901 border border-gray_901 border-solid flex flex-col items-center justify-start p-[14px] rounded-radius24 w-[100%]">
                    <div className="flex flex-col items-end justify-start px-[127px] sm:px-[20px] md:px-[40px] md:w-[100%] sm:w-[100%] w-[93%]">
                      <Text
                        className="font-light text-left text-white_A700 w-[auto]"
                        variant="body5"
                      >
                        Add
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="font-medium md:ml-[0] sm:ml-[0] ml-[36px] mt-[65px] text-gray_900 text-left w-[auto]"
            as="h5"
            variant="h5"
          >
            Related Products
          </Text>
          <List
            className="flex sm:flex-col sm:flex-none flex-row font-helveticaneue gap-[67.31px] justify-start md:ml-[0] sm:ml-[0] ml-[39px] mt-[22px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] sm:self-stretch sm:w-[100%] w-[auto]"
            orientation="horizontal"
          >
            <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[30%]">
              <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col h-[347px] items-center justify-start w-[347px]">
                    <Img
                      src="images/img_acgdrifitadv.png"
                      className="h-[347px] sm:h-[auto] object-cover w-[347px]"
                      alt="acgdrifitadv"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start pr-[7px] py-[7px] w-[100%]">
                    <div className="flex flex-col gap-[7px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-deep_orange_900 text-left w-[auto]"
                        variant="body9"
                      >
                        Sustainable Materials
                      </Text>
                      <div className="flex flex-col gap-[8px] items-start justify-start pb-[0.93px] pr-[6.33px] md:w-[100%] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body9"
                        >
                          JKILO Shoe Tank
                        </Text>
                        <Text
                          className="text-gray_600 text-left w-[auto]"
                          variant="body8"
                        >
                          Power Shoe{" "}
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-normal mt-[2px] text-gray_600 text-left w-[auto]"
                      variant="body9"
                    >
                      2 Colours
                    </Text>
                    <Text
                      className="font-medium mb-[31px] mt-[21px] text-gray_900 text-left w-[auto]"
                      variant="body9"
                    >
                      Rp 7.000.000
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[30%]">
              <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col h-[347px] items-center justify-start w-[347px]">
                    <Img
                      src="images/img_acgdrifitadv_347x347.png"
                      className="h-[347px] sm:h-[auto] object-cover w-[347px]"
                      alt="acgdrifitadv One"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start pr-[7px] py-[7px] w-[100%]">
                    <div className="flex flex-col gap-[7px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-deep_orange_900 text-left w-[auto]"
                        variant="body9"
                      >
                        Sustainable Materials
                      </Text>
                      <div className="flex flex-col gap-[8px] items-start justify-start pb-[0.93px] pr-[6.33px] md:w-[100%] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body9"
                        >
                          JKILO Shoe Tank
                        </Text>
                        <Text
                          className="text-gray_600 text-left w-[auto]"
                          variant="body8"
                        >
                          Power Shoe{" "}
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-normal mt-[2px] text-gray_600 text-left w-[auto]"
                      variant="body9"
                    >
                      2 Colours
                    </Text>
                    <Text
                      className="font-medium mb-[31px] mt-[21px] text-gray_900 text-left w-[auto]"
                      variant="body9"
                    >
                      Rp 10.000.000
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[30%]">
              <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[347px] items-center justify-start w-[347px]"
                    style={{
                      backgroundImage: "url('images/defaultNoData.png')",
                    }}
                  >
                    <Img
                      src="images/img_acgdrifitadv_1.png"
                      className="h-[347px] sm:h-[auto] object-cover w-[347px]"
                      alt="acgdrifitadv Two"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start pr-[7px] py-[7px] w-[100%]">
                    <div className="flex flex-col gap-[7px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-deep_orange_900 text-left w-[auto]"
                        variant="body9"
                      >
                        Sustainable Materials
                      </Text>
                      <div className="flex flex-col gap-[8px] items-start justify-start pb-[0.93px] pr-[6.33px] md:w-[100%] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body9"
                        >
                          JKILO Shoe Tank
                        </Text>
                        <Text
                          className="text-gray_600 text-left w-[auto]"
                          variant="body8"
                        >
                          Power Shoe{" "}
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-normal mt-[2px] text-gray_600 text-left w-[auto]"
                      variant="body9"
                    >
                      2 Colours
                    </Text>
                    <Text
                      className="font-medium mb-[31px] mt-[21px] text-gray_900 text-left w-[auto]"
                      variant="body9"
                    >
                      Rp 3.200.000
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </List>
          <div className="flex flex-col font-helveticaneue items-start justify-start mt-[70px] sm:px-[20px] px-[316px] md:px-[40px] md:w-[100%] sm:w-[100%] w-[auto]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
                  <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-gray_900 text-left w-[auto]"
                      variant="body6"
                    >
                      Icononic
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[26px] md:w-[100%] sm:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-gray_900 text-left w-[auto]"
                      variant="body6"
                    >
                      Shoes
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[48px] md:w-[100%] sm:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-gray_900 text-left w-[auto]"
                      variant="body6"
                    >
                      Clothing
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[48px] md:w-[100%] sm:w-[100%] w-[auto]">
                    <Text
                      className="text-gray_900 text-left w-[auto]"
                      variant="body10"
                    >
                      Kids
                    </Text>
                  </div>
                </div>
                <List
                  className="flex sm:flex-col sm:flex-none flex-row sm:gap-[17px] md:gap-[33px] gap-[48px] justify-center sm:self-stretch w-[100%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-col gap-[11px] items-start justify-start pb-[12px] md:w-[100%] sm:w-[100%] w-[auto]">
                      <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-gray_600 text-left w-[auto]"
                          variant="body6"
                        >
                          Air Force 1
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-gray_600 text-left w-[auto]"
                          variant="body6"
                        >
                          King crown
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-gray_600 text-left w-[auto]"
                          variant="body6"
                        >
                          Air Max 90
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-gray_600 text-left w-[auto]"
                          variant="body6"
                        >
                          Air Max 95
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-col gap-[11px] items-start justify-start pb-[12px] md:w-[100%] sm:w-[100%] w-[auto]">
                      <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-gray_600 text-left w-[auto]"
                          variant="body6"
                        >
                          All Shoes
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-gray_600 text-left w-[auto]"
                          variant="body6"
                        >
                          Custom Shoes
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-gray_600 text-left w-[auto]"
                          variant="body6"
                        >
                          Nike Shoes
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-gray_600 text-left w-[auto]"
                          variant="body6"
                        >
                          Addidas Shoes
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-col gap-[11px] items-start justify-start pb-[12px] md:w-[100%] sm:w-[100%] w-[auto]">
                      <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-gray_600 text-left w-[auto]"
                          variant="body6"
                        >
                          All Clothing
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-gray_600 text-left w-[auto]"
                          variant="body6"
                        >
                          Modest Wear
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-gray_600 text-left w-[auto]"
                          variant="body6"
                        >
                          Hoodies & Pullovers
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-gray_600 text-left w-[auto]"
                          variant="body6"
                        >
                          Shirts & Tops
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-col gap-[11px] items-start justify-start pb-[12px] md:w-[100%] sm:w-[100%] w-[auto]">
                      <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-gray_600 text-left w-[auto]"
                          variant="body6"
                        >
                          Infant & Toddler Shoes
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-gray_600 text-left w-[auto]"
                          variant="body6"
                        >
                          Kids' Shoes
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-gray_600 text-left w-[auto]"
                          variant="body6"
                        >
                          Kids' Summer Shoes
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-gray_600 text-left w-[auto]"
                          variant="body6"
                        >
                          Kids' Basketball Shoes
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <footer className="bg-gray_900 flex font-helveticaneue mt-[64px] w-[100%]">
            <div className="flex flex-col gap-[16px] items-start justify-end max-w-[1440px] ml-[auto] mr-[auto] mx-[auto] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] pt-[34px] sm:px-[20px] px-[34px] w-[100%]">
              <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start sm:pr-[20px] pr-[257.25px] md:pr-[40px] md:w-[100%] sm:w-[100%] w-[auto]">
                  <div className="flex flex-col items-center justify-start px-[6px] md:w-[100%] sm:w-[100%] w-[34%]">
                    <div className="flex flex-col items-start justify-start pb-[2.66px] md:w-[100%] sm:w-[100%] w-[auto]">
                      <ul className="flex flex-col gap-[2.66px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto] common-column-list">
                        <li className="w-[auto]">
                          <Text
                            className="cursor-pointer text-left text-white_A700 uppercase"
                            variant="body15"
                          >
                            Find A Store
                          </Text>
                        </li>
                        <li className="w-[auto]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal text-[10px] text-left text-white_A700 uppercase"
                            rel="noreferrer"
                          >
                            Become A Member
                          </a>
                        </li>
                        <li className="w-[auto]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal text-[10px] text-left text-white_A700 uppercase"
                            rel="noreferrer"
                          >
                            Sign Up for Email
                          </a>
                        </li>
                        <li className="w-[auto]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal text-[9px] text-left text-white_A700 uppercase"
                            rel="noreferrer"
                          >
                            Send Us Feedback
                          </a>
                        </li>
                        <li className="w-[auto]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal text-[9px] text-left text-white_A700 uppercase"
                            rel="noreferrer"
                          >
                            Student Discounts
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pb-[6px] px-[6px] md:w-[100%] sm:w-[100%] w-[34%]">
                    <div className="flex flex-col items-start justify-start mb-[25px] pb-[3px] md:w-[100%] sm:w-[100%] w-[auto]">
                      <ul className="flex flex-col gap-[3px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto] common-column-list">
                        <li className="w-[auto]">
                          <Text
                            className="cursor-pointer text-left text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 uppercase"
                            variant="body15"
                          >
                            Get Help
                          </Text>
                        </li>
                        <li className="w-[auto]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal text-[11px] text-gray_601 text-left"
                            rel="noreferrer"
                          >
                            Order Status
                          </a>
                        </li>
                        <li className="w-[auto]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal text-[12px] text-gray_601 text-left"
                            rel="noreferrer"
                          >
                            Delivery
                          </a>
                        </li>
                        <li className="w-[auto]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal text-[12px] text-gray_601 text-left"
                            rel="noreferrer"
                          >
                            Returns
                          </a>
                        </li>
                        <li className="w-[auto]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal text-[11px] text-gray_601 text-left"
                            rel="noreferrer"
                          >
                            Payment Options
                          </a>
                        </li>
                        <li className="w-[auto]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal text-[11px] text-gray_601 text-left"
                            rel="noreferrer"
                          >
                            Contact Us On Inquiries
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start px-[6px] md:w-[100%] sm:w-[100%] w-[34%]">
                    <div className="flex flex-col items-start justify-start pb-[3px] md:w-[100%] sm:w-[100%] w-[auto]">
                      <ul className="flex flex-col gap-[3px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto] common-column-list">
                        <li className="w-[auto]">
                          <Text
                            className="cursor-pointer text-left text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 uppercase"
                            variant="body15"
                          >
                            About US
                          </Text>
                        </li>
                        <li className="w-[auto]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal text-[12px] text-gray_601 text-left"
                            rel="noreferrer"
                          >
                            News
                          </a>
                        </li>
                        <li className="w-[auto]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal text-[12px] text-gray_601 text-left"
                            rel="noreferrer"
                          >
                            Careers
                          </a>
                        </li>
                        <li className="w-[auto]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal text-[11px] text-gray_601 text-left"
                            rel="noreferrer"
                          >
                            Investors
                          </a>
                        </li>
                        <li className="w-[auto]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal text-[11px] text-gray_601 text-left"
                            rel="noreferrer"
                          >
                            Sustainability
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between pt-[6px] px-[6px] w-[100%]">
                <div className="flex flex-row gap-[16px] items-end justify-start md:mt-[0] sm:mt-[0] mt-[6px] sm:pr-[20px] md:pr-[40px] pr-[410.97px] pt-[17px] md:w-[100%] sm:w-[100%] w-[auto]">
                  <div className="flex flex-row gap-[8px] items-end justify-start pr-[8.03px] w-[auto]">
                    <Img
                      src="images/img_location.svg"
                      className="h-[15px] object-cover w-[15px]"
                      alt="location"
                    />
                    <Text
                      className="flex-grow font-normal text-left text-white_A700"
                      variant="body11"
                    >
                      jogja
                    </Text>
                  </div>
                  <Text
                    className="text-gray_601 text-left w-[auto]"
                    variant="body13"
                  >
                    surya ganteng
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-end md:mt-[0] sm:mt-[0] mt-[10px] p-[8px] md:w-[100%] sm:w-[100%] w-[50%]">
                  <Text
                    className="font-normal my-[8px] text-gray_601 text-left w-[auto]"
                    variant="body11"
                  >
                    Guides
                  </Text>
                  <Text
                    className="font-normal ml-[28px] my-[8px] text-gray_601 text-left w-[auto]"
                    variant="body11"
                  >
                    Terms of Sale
                  </Text>
                  <Text
                    className="font-normal ml-[27px] my-[8px] text-gray_601 text-left w-[auto]"
                    variant="body11"
                  >
                    Terms of Use
                  </Text>
                  <Text
                    className="ml-[39px] text-gray_601 text-left w-[auto]"
                    variant="body13"
                  >
                    Our Privacy Policy
                  </Text>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default SelectionPage;
