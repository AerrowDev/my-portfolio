import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__bg">
                    <p className="footer-text text-center  text-white">
                        This website&apos;s layout is inspired by Bedimcode.{" "}
                    </p>
                    <p className="footer-text text-center  text-white">
                        {" "}
                        &#169; { new Date().getFullYear()} AerrowDev. All Right Reserved
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
