import React, { useState } from "react";
import styles from './Contact.module.css';

function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
  };

  return (
    <>
      <div className={styles.contact_us_2}>
        <div className={styles["responsive-container-block"] + " " + styles["big-container"]}>
          <div className={styles.blueBG}></div>
          <div className={styles["responsive-container-block"] + " " + styles.container}>
            <form
              className={styles["form-box"]}
              action="https://formsubmit.co/sunilgupta@aanyasolutions.net"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className={styles["container-block"] + " " + styles["form-wrapper"]} id="contact">
                <p className={styles["text-blk"] + " " + styles["contactus-head"]}>Contact Us</p>

                <div className={styles["responsive-container-block"]}>
                  <div className={`${styles["responsive-cell-block"]} ${styles["wk-ipadp-6"]} ${styles["wk-tab-12"]} ${styles["wk-mobile-12"]} ${styles["wk-desk-6"]}`}>
                    <p className={styles["text-blk"] + " " + styles["input-title"]}>NAME</p>
                    <input
                      className={styles.input}
                      type="text"
                      name="name"
                      placeholder="Please enter first name..."
                      required
                    />
                  </div>

                  <div className={`${styles["responsive-cell-block"]} ${styles["wk-desk-6"]} ${styles["wk-ipadp-6"]} ${styles["wk-tab-12"]} ${styles["wk-mobile-12"]}`}>
                    <p className={styles["text-blk"] + " " + styles["input-title"]}>EMAIL</p>
                    <input
                      className={styles.input}
                      type="email"
                      name="email"
                      placeholder="Please enter email..."
                      required
                    />
                  </div>
                  <div className={`${styles["responsive-cell-block"]} ${styles["wk-desk-6"]} ${styles["wk-ipadp-6"]} ${styles["wk-tab-12"]} ${styles["wk-mobile-12"]}`}>
  <p className={styles["text-blk"] + " " + styles["input-title"]}>COUNTRY CODE</p>
  <select
    id="countryCode"
    name="countryCode"
    className={styles.input}
    required
  >
    <option value="" disabled selected hidden style={{ color: "#a19d9d" }} >
      Select Country
    </option>
    <option value="93">Afghanistan</option>
    <option value="358">Åland Islands</option>
    <option value="355">Albania</option>
    <option value="213">Algeria</option>
    <option value="1">American Samoa</option>
    <option value="376">Andorra</option>
    <option value="244">Angola</option>
    <option value="1">Anguilla</option>
    <option value="672">Antarctica</option>
    <option value="1">Antigua and Barbuda</option>
    <option value="54">Argentina</option>
    <option value="374">Armenia</option>
    <option value="297">Aruba</option>
    <option value="61">Australia</option>
    <option value="43">Austria</option>
    <option value="994">Azerbaijan</option>
    <option value="1">Bahamas</option>
    <option value="973">Bahrain</option>
    <option value="880">Bangladesh</option>
    <option value="1">Barbados</option>
    <option value="375">Belarus</option>
    <option value="32">Belgium</option>
    <option value="501">Belize</option>
    <option value="229">Benin</option>
    <option value="1">Bermuda</option>
    <option value="975">Bhutan</option>
    <option value="591">Bolivia (Plurinational State of)</option>
    <option value="387">Bosnia and Herzegovina</option>
    <option value="267">Botswana</option>
    <option value="55">Bouvet Island</option>
    <option value="55">Brazil</option>
    <option value="246">British Indian Ocean Territory</option>
    <option value="673">Brunei Darussalam</option>
    <option value="359">Bulgaria</option>
    <option value="226">Burkina Faso</option>
    <option value="257">Burundi</option>
    <option value="238">Cabo Verde</option>
    <option value="855">Cambodia</option>
    <option value="237">Cameroon</option>
    <option value="1">Canada</option>
    <option value="599">Caribbean Netherlands</option>
    <option value="1">Cayman Islands</option>
    <option value="236">Central African Republic</option>
    <option value="235">Chad</option>
    <option value="56">Chile</option>
    <option value="86">China</option>
    <option value="61">Christmas Island</option>
    <option value="61">Cocos (Keeling) Islands</option>
    <option value="57">Colombia</option>
    <option value="269">Comoros</option>
    <option value="242">Congo</option>
    <option value="243">Congo, Democratic Republic of the</option>
    <option value="682">Cook Islands</option>
    <option value="506">Costa Rica</option>
    <option value="385">Croatia</option>
    <option value="53">Cuba</option>
    <option value="599">Curaçao</option>
    <option value="357">Cyprus</option>
    <option value="420">Czech Republic</option>
    <option value="225">Côte d'Ivoire</option>
    <option value="45">Denmark</option>
    <option value="253">Djibouti</option>
    <option value="1">Dominica</option>
    <option value="1">Dominican Republic</option>
    <option value="593">Ecuador</option>
    <option value="20">Egypt</option>
    <option value="503">El Salvador</option>
    <option value="240">Equatorial Guinea</option>
    <option value="291">Eritrea</option>
    <option value="372">Estonia</option>
    <option value="268">Eswatini (Swaziland)</option>
    <option value="251">Ethiopia</option>
    <option value="500">Falkland Islands (Malvinas)</option>
    <option value="298">Faroe Islands</option>
    <option value="679">Fiji</option>
    <option value="358">Finland</option>
    <option value="33">France</option>
    <option value="594">French Guiana</option>
    <option value="689">French Polynesia</option>
    <option value="262">French Southern Territories</option>
    <option value="241">Gabon</option>
    <option value="220">Gambia</option>
    <option value="995">Georgia</option>
    <option value="49">Germany</option>
    <option value="233">Ghana</option>
    <option value="350">Gibraltar</option>
    <option value="30">Greece</option>
    <option value="299">Greenland</option>
    <option value="1">Grenada</option>
    <option value="590">Guadeloupe</option>
    <option value="1">Guam</option>
    <option value="502">Guatemala</option>
    <option value="44">Guernsey</option>
    <option value="224">Guinea</option>
    <option value="245">Guinea-Bissau</option>
    <option value="592">Guyana</option>
    <option value="509">Haiti</option>
    <option value="61">Heard Island and Mcdonald Islands</option>
    <option value="504">Honduras</option>
    <option value="852">Hong Kong</option>
    <option value="36">Hungary</option>
    <option value="354">Iceland</option>
    <option value="91">India</option>
    <option value="62">Indonesia</option>
    <option value="98">Iran</option>
    <option value="964">Iraq</option>
    <option value="353">Ireland</option>
    <option value="44">Isle of Man</option>
    <option value="972">Israel</option>
    <option value="39">Italy</option>
    <option value="1">Jamaica</option>
    <option value="81">Japan</option>
    <option value="44">Jersey</option>
    <option value="962">Jordan</option>
    <option value="7">Kazakhstan</option>
    <option value="254">Kenya</option>
    <option value="686">Kiribati</option>
    <option value="850">Korea, North</option>
    <option value="82">Korea, South</option>
    <option value="383">Kosovo</option>
    <option value="965">Kuwait</option>
    <option value="996">Kyrgyzstan</option>
    <option value="856">Lao People's Democratic Republic</option>
    <option value="371">Latvia</option>
    <option value="961">Lebanon</option>
    <option value="266">Lesotho</option>
    <option value="231">Liberia</option>
    <option value="218">Libya</option>
    <option value="423">Liechtenstein</option>
    <option value="370">Lithuania</option>
    <option value="352">Luxembourg</option>
    <option value="853">Macao</option>
    <option value="389">Macedonia North</option>
    <option value="261">Madagascar</option>
    <option value="265">Malawi</option>
    <option value="60">Malaysia</option>
    <option value="960">Maldives</option>
    <option value="223">Mali</option>
    <option value="356">Malta</option>
    <option value="692">Marshall Islands</option>
    <option value="596">Martinique</option>
    <option value="222">Mauritania</option>
    <option value="230">Mauritius</option>
    <option value="262">Mayotte</option>
    <option value="52">Mexico</option>
    <option value="691">Micronesia</option>
    <option value="373">Moldova</option>
    <option value="377">Monaco</option>
    <option value="976">Mongolia</option>
    <option value="382">Montenegro</option>
    <option value="1">Montserrat</option>
    <option value="212">Morocco</option>
    <option value="258">Mozambique</option>
    <option value="95">Myanmar (Burma)</option>
    <option value="264">Namibia</option>
    <option value="674">Nauru</option>
    <option value="977">Nepal</option>
    <option value="31">Netherlands</option>
    <option value="599">Netherlands Antilles</option>
    <option value="687">New Caledonia</option>
    <option value="64">New Zealand</option>
    <option value="505">Nicaragua</option>
    <option value="227">Niger</option>
    <option value="234">Nigeria</option>
    <option value="683">Niue</option>
    <option value="672">Norfolk Island</option>
    <option value="1">Northern Mariana Islands</option>
    <option value="47">Norway</option>
    <option value="968">Oman</option>
    <option value="92">Pakistan</option>
    <option value="680">Palau</option>
    <option value="970">Palestine</option>
    <option value="507">Panama</option>
    <option value="675">Papua New Guinea</option>
    <option value="595">Paraguay</option>
    <option value="51">Peru</option>
    <option value="63">Philippines</option>
    <option value="64">Pitcairn Islands</option>
    <option value="48">Poland</option>
    <option value="351">Portugal</option>
    <option value="1">Puerto Rico</option>
    <option value="974">Qatar</option>
    <option value="262">Reunion</option>
    <option value="40">Romania</option>
    <option value="7">Russian Federation</option>
    <option value="250">Rwanda</option>
    <option value="590">Saint Barthelemy</option>
    <option value="290">Saint Helena</option>
    <option value="1">Saint Kitts and Nevis</option>
    <option value="1">Saint Lucia</option>
    <option value="590">Saint Martin</option>
    <option value="508">Saint Pierre and Miquelon</option>
    <option value="1">Saint Vincent and the Grenadines</option>
    <option value="685">Samoa</option>
    <option value="378">San Marino</option>
    <option value="239">Sao Tome and Principe</option>
    <option value="966">Saudi Arabia</option>
    <option value="221">Senegal</option>
    <option value="381">Serbia</option>
    <option value="381">Serbia and Montenegro</option>
    <option value="248">Seychelles</option>
    <option value="232">Sierra Leone</option>
    <option value="65">Singapore</option>
    <option value="1">Sint Maarten</option>
    <option value="421">Slovakia</option>
    <option value="386">Slovenia</option>
    <option value="677">Solomon Islands</option>
    <option value="252">Somalia</option>
    <option value="27">South Africa</option>
    <option value="500">South Georgia and the South Sandwich Islands</option>
    <option value="211">South Sudan</option>
    <option value="34">Spain</option>
    <option value="94">Sri Lanka</option>
    <option value="249">Sudan</option>
    <option value="597">Suriname</option>
    <option value="47">Svalbard and Jan Mayen</option>
    <option value="46">Sweden</option>
    <option value="41">Switzerland</option>
    <option value="963">Syria</option>
    <option value="886">Taiwan</option>
    <option value="992">Tajikistan</option>
    <option value="255">Tanzania</option>
    <option value="66">Thailand</option>
    <option value="670">Timor-Leste</option>
    <option value="228">Togo</option>
    <option value="690">Tokelau</option>
    <option value="676">Tonga</option>
    <option value="1">Trinidad and Tobago</option>
    <option value="216">Tunisia</option>
    <option value="90">Turkey (Türkiye)</option>
    <option value="993">Turkmenistan</option>
    <option value="1">Turks and Caicos Islands</option>
    <option value="688">Tuvalu</option>
    <option value="1">U.S. Outlying Islands</option>
    <option value="256">Uganda</option>
    <option value="380">Ukraine</option>
    <option value="971">United Arab Emirates</option>
    <option value="44">United Kingdom</option>
    <option value="1">United States</option>
    <option value="598">Uruguay</option>
    <option value="998">Uzbekistan</option>
    <option value="678">Vanuatu</option>
    <option value="39">Vatican City Holy See</option>
    <option value="58">Venezuela</option>
    <option value="84">Vietnam</option>
    <option value="1">Virgin Islands, British</option>
    <option value="1">Virgin Islands, U.S</option>
    <option value="681">Wallis and Futuna</option>
    <option value="212">Western Sahara</option>
    <option value="967">Yemen</option>
    <option value="260">Zambia</option>
    <option value="263">Zimbabwe</option>
  </select>
</div>



                  <div className={`${styles["responsive-cell-block"]} ${styles["wk-desk-6"]} ${styles["wk-ipadp-6"]} ${styles["wk-tab-12"]} ${styles["wk-mobile-12"]}`}>
                  
                    <p className={styles["text-blk"] + " " + styles["input-title"]}>PHONE NUMBER</p>
                    <input
                      className={styles.input}
                      type="tel"
                      name="phone"
                      placeholder="Please enter phone number..."
                      required
                    />
                  </div>

                  <div className={`${styles["responsive-cell-block"]} ${styles["wk-tab-12"]} ${styles["wk-mobile-12"]} ${styles["wk-desk-12"]} ${styles["wk-ipadp-12"]}`}>
                    <p className={styles["text-blk"] + " " + styles["input-title"]}> REQUIREMENT</p>
                    <textarea
                      className={styles.textinput}
                      name="requirement"
                      placeholder="Please enter your requirement...(Optional)"
                    ></textarea>
                  </div>
                </div>

                {loading ? (
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  <button type="submit" className={styles["submit-btn"]}>Submit</button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
