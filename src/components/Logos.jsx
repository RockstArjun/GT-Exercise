import React from "react";
import logodropbox from "../images/logos/user/logo-dropbox.svg";
import logoairbnb from "../images/logos/user/logo-airbnb.svg";
import logolyft from "../images/logos/user/logo-lyft.svg";
import logomozilla from "../images/logos/user/logo-mozilla.svg";
import logojetbrains from "../images/logos/user/logo-jetbrains.svg";
import logogithub from "../images/logos/user/logo-github.svg";

function Logos() {
  return (
    <>
      <div class="glowTouch-1yftb2h e1iuof8n0">
        <div class="glowTouch-r8xoim e1iuof8n2">
          <div title="github" class="glowTouch-1czhg1r e1iuof8n3">
            <img src={logogithub} alt="github" class="glowTouch-11alk9k e1iuof8n4" />
          </div>
          <div title="dropbox" class="glowTouch-1czhg1r e1iuof8n3">
            <img
              src={logodropbox}
              alt="dropbox"
              class="glowTouch-11alk9k e1iuof8n4"
            />
          </div>
          <div title="airbnb" class="glowTouch-1czhg1r e1iuof8n3">
            <img src={logoairbnb} alt="airbnb" class="glowTouch-11alk9k e1iuof8n4" />
          </div>
          <div title="lyft" class="glowTouch-1czhg1r e1iuof8n3">
            <img src={logolyft} alt="lyft" class="glowTouch-11alk9k e1iuof8n4" />
          </div>
          <div title="mozilla" class="glowTouch-1czhg1r e1iuof8n3">
            <img
              src={logomozilla}
              alt="mozilla"
              class="glowTouch-11alk9k e1iuof8n4"
            />
          </div>
          <div title="jetbrains" class="glowTouch-1czhg1r e1iuof8n3">
            <img
              src={logojetbrains}
              alt="jetbrains"
              class="glowTouch-11alk9k e1iuof8n4"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Logos;
