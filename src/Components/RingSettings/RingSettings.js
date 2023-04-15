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

const RingSettings = ({ textInput, number, materialChange1, textChange }) => {
    return (
        <div className="flex justify-center h-100">
            <div className="mr0 mr0 mr6-l">
                <div className="flex mb5 mt5">
                    <div className="flex items-center justify-center width_adjust mr3">
                        <img className="image_size_T" src={T} alt="text" />
                    </div>
                    <div className="bl selection_height">
                        <div className="flex-column ml3">
                            <div className="mb2">
                                <input onInput={textInput} id="label1" className="input_text pl2" type="text" placeholder="Ring text" name="text" maxLength="10" />
                            </div>
                            <p className="label_text ml2">
                                There are {number} characters left out of total of 10 characters.
                            </p>
                        </div>

                        <div className="radio-buttons">
                            <div className="form-group ">
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
                    </div>
                </div>
                <div className="flex mb5">
                    <div className="flex items-center justify-center width_adjust mr3">
                        <img className="image_size_D" src={D} alt="text" />
                    </div>
                    <div className="flex-column v-mid bl font_radio_buttons selection_height">
                        <div className="mb3 ml3 mt3">
                            <input onClick={materialChange1} id="dia" type="radio" value="rock_d" name="rock" defaultChecked />
                            <label className="flex items-center label2" htmlFor="dia">
                                <img src={dia} alt="diamond" className="image_margin" />
                                <p className="ml3">
                                    Diamond
                                </p>
                            </label>
                        </div>
                        <div className="mb3 ml3">
                            <input onClick={materialChange1} id="ruby" type="radio" value="rock_r" name="rock" />
                            <label className="flex items-center label2" htmlFor="ruby">
                                <img src={ruby} alt="ruby" className="image_margin" />
                                <p className="ml3">
                                    Ruby
                                </p>
                            </label>
                        </div>
                        <div className="mb3 ml3">
                            <input onClick={materialChange1} id="eme" type="radio" value="text_e" name="rock" />
                            <label className="flex items-center label2" htmlFor="eme">
                                <img src={eme} alt="emerald" className="image_margin" />
                                <p className="ml3">
                                    Emerald
                                </p>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex items-center mb5">
                    <div className="flex items-center justify-center width_adjust mr3">
                        <img className="image_size_C" src={C} alt="text" />
                    </div>
                    <div className="flex-column bl font_radio_buttons selection_height">
                        <div className="mb3 ml3 mt3">
                            <input onClick={materialChange1} id="white" type="radio" value="ring_wg" name="ring" defaultChecked />
                            <label className="flex items-center label2" htmlFor="white">
                                <img src={white} alt="emerald" className="image_margin" />
                                <p className="ml3">
                                    White gold
                                </p>
                            </label>
                        </div>
                        <div className="mb3 ml3">
                            <input onClick={materialChange1} id="yellow" type="radio" value="ring_yg" name="ring" />
                            <label className="flex items-center label2" htmlFor="yellow">
                                <img src={yellow} alt="emerald" className="image_margin" />
                                <p className="ml3">
                                    Yellow gold
                                </p>
                            </label>
                        </div>
                        <div className="mb3 ml3">
                            <input onClick={materialChange1} id="rose" type="radio" value="rign_rg" name="ring" />
                            <label className="flex items-center label2" htmlFor="rose">
                                <img src={rose} alt="emerald" className="image_margin" />
                                <p className="ml3">
                                    Rose gold
                                </p>
                            </label>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default RingSettings;