import React from "react";
import Link from "next/link";
import "./BaseFooter.scss";

const BaseFooter = () => {
  return (
    <footer className="footer" id="contact">
      <div className="base-container">
        <div className="footer--top">
          {/* HEADER TEXT */}
          <div className="header-text">Contact Us</div>

          {/* BRAND CONTACT DETAILS */}
          <div className="flex justify-between items-start gap-x-3">
            <div className="footer--top--left">
              <div className="brand-contact">
                <div className="brand-contact-address">
                  OpenGov DC, 1100 13th St NW Suite 800, Washington, DC 20005
                </div>

                <div className="brand-contact-phone">+1 (773) 491-3055</div>

                <div className="brand-contact-email">usoffice@budgit.org</div>
              </div>
            </div>

            <div className="footer--top--right">
              <div className="title-text">Support Our Mission!</div>

              <div className="description-text">
                Help us make budgeting tools accessible to everyone. Your
                donation promotes financial literacy and empowers underserved
                communities. Together, we can create lasting change!
              </div>

              <Link
                href="https://flutterwave.com/pay/budgit"
                target="_blank"
                className="btn btn-md btn-secondary"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>

        <div className="footer--bottom">
          <div className="footer--bottom--links">
            <Link href="" className="link-item">
              Privacy Policy
            </Link>

            <Link href="" className="link-item">
              Terms of Service
            </Link>
          </div>

          <div className="copy-text">
            &copy; BudgIT USA, 2025. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BaseFooter;
