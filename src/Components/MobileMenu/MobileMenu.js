import React from "react";
import T from "../imagesT/T.png";
import C from "../imagesT/C.png";
import D from "../imagesT/D.png";
import dia from "../imagesT/dia.png";
import ruby from "../imagesT/ruby.png";
import eme from "../imagesT/eme.png";
import white from "../imagesT/white.png";
import yellow from "../imagesT/gold.png";
import rose from "../imagesT/rose.png";

const MobileMenu = ({ textInput, number, materialChange1, textChange, mobileMenu, clicked }) => {
    return (

        <div className="flex bottom mb3">
            <div className="flex-row mr3 ml4">
                <div onClick={mobileMenu} className="pointer bb flex items-center justify-center width_adjust">
                    <img className="image_size_D" src={D} alt="text" />
                </div>
                <div
                    style={{
                        opacity: clicked % 2 === 1 ? "0" : "1",
                        transition: "ease-in 0.5s",
                        visibility: clicked % 2 === 1 ? "hidden" : "visible",
                        height: clicked % 2 === 1 ? "0" : " ",
                        margin: clicked % 2 === 0 ? "16px 0 0 0" : "0",
                    }}
                    className="flex-row v-mid font_radio_buttons selection_height bb">
                    <div className="flex justify-center">
                        <input onClick={materialChange1} id="dia" type="radio" value="rock_d" name="rock" defaultChecked />
                        <label className="label2 tc" htmlFor="dia">
                            <img src={dia} alt="diamond" className="image_margin" />
                            <p className="">
                                Diamond
                            </p>
                        </label>
                    </div>
                    <div className="flex justify-center">
                        <input onClick={materialChange1} id="ruby" type="radio" value="rock_r" name="rock" />
                        <label className=" label2 tc" htmlFor="ruby">
                            <img src={ruby} alt="ruby" className="image_margin" />
                            <p className="">
                                Ruby
                            </p>
                        </label>
                    </div>
                    <div className="flex justify-center">
                        <input onClick={materialChange1} id="eme" type="radio" value="text_e" name="rock" />
                        <label className="label2 tc" htmlFor="eme">
                            <img src={eme} alt="emerald" className="image_margin" />
                            <p className="">
                                Emerald
                            </p>
                        </label>
                    </div>
                    <div className="flex justify-center h">
                        <div className="polygon1"></div>
                    </div>
                </div>
                {
                    clicked % 2 === 1 ?
                        <div className="flex justify-center">
                            <div className="polygon2"></div>
                        </div>
                        :
                        <span></span>
                }


            </div>
            <div className="flex-row mr3">
                <div onClick={mobileMenu} className="pointer bb flex items-center justify-center width_adjust">
                    <img className="image_size_C" src={C} alt="text" />
                </div>

                <div
                    style={{
                        opacity: clicked % 2 === 1 ? "0" : "1",
                        transition: "ease-in 0.5s",
                        visibility: clicked % 2 === 1 ? "hidden" : "visible",
                        height: clicked % 2 === 1 ? "0" : " ",
                        margin: clicked % 2 === 0 ? "16px 0 0 0" : "0",
                    }}
                    className="flex-row font_radio_buttons selection_height mt3 bb">
                    <div className="flex justify-center">
                        <input onClick={materialChange1} id="white" type="radio" value="ring_wg" name="ring" defaultChecked />
                        <label className="tc label2" htmlFor="white">
                            <img src={white} alt="emerald" className="image_margin" />
                            <p className="">
                                White gold
                            </p>
                        </label>
                    </div>
                    <div className="flex justify-center">
                        <input onClick={materialChange1} id="yellow" type="radio" value="ring_yg" name="ring" />
                        <label className="tc label2" htmlFor="yellow">
                            <img src={yellow} alt="emerald" className="image_margin" />
                            <p className="">
                                Yellow gold
                            </p>
                        </label>
                    </div>
                    <div className="flex justify-center">
                        <input onClick={materialChange1} id="rose" type="radio" value="rign_rg" name="ring" />
                        <label className="tc label2" htmlFor="rose">
                            <img src={rose} alt="emerald" className="image_margin" />
                            <p className="">
                                Rose gold
                            </p>
                        </label>
                    </div>
                    <div className="flex justify-center">
                        <div className="polygon1"></div>
                    </div>
                </div>

                {
                    clicked % 2 === 1 ?
                        <div className="flex justify-center">
                            <div className="polygon2"></div>
                        </div>
                        :
                        <span></span>
                }

            </div>
            <div className="flex-row items-center">
                <div onClick={mobileMenu} className="pointer link bb flex items-center justify-center width_adjust_2">
                    <img className="image_size_T" src={T} alt="text" />
                </div>

                <div
                    style={{
                        opacity: clicked % 2 === 1 ? "0" : "1",
                        transition: "ease-in 0.5s",
                        visibility: clicked % 2 === 1 ? "hidden" : "visible",
                        height: clicked % 2 === 1 ? "0" : " ",
                        margin: clicked % 2 === 0 ? "16px 0 0 0" : "0",
                    }}
                    className="selection_height bb mt3">
                    <div className="flex-column">
                        <div className="mb2">
                            <input onInput={textInput} id="label1" className="input_text pl2" type="text" placeholder="Ring text" name="text" maxLength="10" />
                        </div>
                        <p className="label_text ml2">
                            There are {number} characters left out of total of 10 characters.
                        </p>
                    </div>
                    <div className="radio-buttons">
                        <div className="form-group">
                            <input onClick={textChange} type="radio" id="text1" name="text" />
                            <label className="label1 font_input1" htmlFor="text1">Select the font type</label>
                        </div>

                        <div className="form-group">
                            <input onClick={textChange} type="radio" id="text2" name="text" />
                            <label className="label1 font_input2" htmlFor="text2">Select the font type</label>
                        </div>

                        <div className="form-group">
                            <input onClick={textChange} type="radio" id="text3" name="text" />
                            <label className="label1 font_input3" htmlFor="text3">Select the font type</label>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="polygon3 arrow-padding"></div>
                    </div>
                </div>

                {
                    clicked % 2 === 1 ?
                        <div className="flex justify-center">
                            <div className="polygon2"></div>
                        </div>
                        :
                        <span></span>
                }

            </div>
        </div>
    );
}

export default MobileMenu;