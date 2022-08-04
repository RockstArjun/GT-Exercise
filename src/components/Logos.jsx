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
      <div class="chr-1yftb2h e1iuof8n0">
        <div class="chr-r8xoim e1iuof8n2">
          <div title="github" class="chr-1czhg1r e1iuof8n3">
            <img src={logogithub} alt="github" class="chr-11alk9k e1iuof8n4" />
          </div>
          <div title="dropbox" class="chr-1czhg1r e1iuof8n3">
            <img
              src={logodropbox}
              alt="dropbox"
              class="chr-11alk9k e1iuof8n4"
            />
          </div>
          <div title="airbnb" class="chr-1czhg1r e1iuof8n3">
            <img src={logoairbnb} alt="airbnb" class="chr-11alk9k e1iuof8n4" />
          </div>
          <div title="lyft" class="chr-1czhg1r e1iuof8n3">
            <img src={logolyft} alt="lyft" class="chr-11alk9k e1iuof8n4" />
          </div>
          <div title="mozilla" class="chr-1czhg1r e1iuof8n3">
            <img
              src={logomozilla}
              alt="mozilla"
              class="chr-11alk9k e1iuof8n4"
            />
          </div>
          <div title="jetbrains" class="chr-1czhg1r e1iuof8n3">
            <img
              src={logojetbrains}
              alt="jetbrains"
              class="chr-11alk9k e1iuof8n4"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Logos;
