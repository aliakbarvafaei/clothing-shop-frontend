import React from 'react';
import classNames from "classnames";
import logo from "../../../assets/images/logo.png";
import styles from "./MainFooter.module.scss";
import { FaGooglePlusG } from "@react-icons/all-files/fa/FaGooglePlusG";
import { FaWifi } from "@react-icons/all-files/fa/FaWifi";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";



function MainFooter(props) {
    return (
        <div className={classNames("row", styles.MainFooter)}>
            <div className='col-lg-4 col-md-6 col-sm-12'>
                <img className={styles.titleImage} src={logo} alt="title" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 </p>
                 <div className={styles.icons}>
                    <span><FaFacebookF fontSize={"20px"} /></span>
                    <span><FaGooglePlusG fontSize={"20px"} /></span>
                    <span><FaTwitter fontSize={"20px"} /></span>
                    <span><FaInstagram fontSize={"20px"} /></span>
                    <span><FaWifi fontSize={"20px"} /></span>
                 </div>
            </div>
            <div className='col-lg-2 col-md-6 col-sm-12'>
                <h4>MY ACOOUNT</h4>
                <ul>
                    <li>Women</li>
                    <li>Clothing</li>
                    <li>Accessories</li>
                    <li>Featured</li>
                </ul>
            </div>
            <div className='col-lg-2 col-md-6 col-sm-12'>
                <h4>WHY WE CHOOSE</h4>
                <ul>
                    <li>Shipping & Return</li>
                    <li>Secure Shopping</li>
                    <li>Gallary</li>
                    <li>Affiliates</li>
                    <li>Contacts</li>
                </ul>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
                <h4>STORE INFORMATION</h4>
                <ul className={styles.information}>
                    <li><i class="fa fa-map-marker" aria-hidden="true"></i> Multikart Demo Store, Demo Store India 345-659</li>
                    <li><i class="fa fa-phone" aria-hidden="true"></i> Call Us: 123-456-7898</li>
                    <li><i class="fa fa-envelope" aria-hidden="true"></i> Email Us: Support@Fiot.Com</li>
                    <li><i class="fa fa-fax" aria-hidden="true"></i> Fax: 123456</li>
                </ul>
            </div>

        </div>
    );
}

export default MainFooter;