import React from "react";
import logo from "../images/logos/user/logo.svg";

function Navbar() {
  return (
    <nav class="chr-1b4tlcu ex9z48e1">
      <div class="chr-1jqf4gi ex9z48e2">
        <div class="chr-ww6o6b ex9z48e0">
          <div class="chr-g4w1a7 e154td7m0">
            <a
              aria-current="page"
              class="elj7lvw0 chr-1lzd12e e1ja7avb2"
              href="/"
            >
              <span class="chr-1xdhyk6 e1ja7avb3">
                <img src={logo} alt="Storybook" />
              </span>
            </a>
          </div>
        </div>
        <div class="chr-11swlbp ex9z48e0">
          <div class="chr-1a1l4kv e154td7m0">
            <a href="/" class="e1q6bakl0 chr-h3nff7 e1ja7avb2">
              <span class="chr-1xdhyk6 e1ja7avb3">Showcase</span>
            </a>
          </div>
          <div class="chr-1a1l4kv e154td7m0">
            <a class="e1q6bakl0 chr-h3nff7 e1ja7avb2" href="/">
              <span class="chr-1xdhyk6 e1ja7avb3">Docs</span>
            </a>
          </div>
          <div class="chr-1a1l4kv e154td7m0">
            <a href="/" class="e1q6bakl0 e1ja7avb2 chr-1n0n9qo e1ja7avb1">
              <span class="chr-1xdhyk6 e1ja7avb3">Tutorials</span>
            </a>
          </div>
          <div class="chr-1a1l4kv e154td7m0">
            <a class="e1q6bakl0 chr-h3nff7 e1ja7avb2" href="/">
              <span class="chr-1xdhyk6 e1ja7avb3">Addons</span>
            </a>
          </div>
          <div class="chr-1a1l4kv e154td7m0">
            <span
              role="button"
              trigger="click"
              aria-controls="a606ee05-46f5-4425-a0d1-1ab05f092812"
              tabindex="0"
            >
              <a href="/" class="e1q6bakl0 e1ja7avb2 chr-1n0n9qo e1ja7avb1">
                <span class="chr-1xdhyk6 e1ja7avb3">
                  Community
                  <svg
                    viewBox="0 0 1024 1024"
                    width="20px"
                    height="20px"
                    class="chr-zmb90n e82dnwa0"
                  >
                    <path d="M511.976 768.002c-10.236 0-20.47-3.904-28.282-11.712l-344.154-344.098c-15.624-15.62-15.624-40.946-0.006-56.57 15.622-15.622 40.948-15.624 56.568-0.004l315.876 315.82 315.922-315.868c15.624-15.618 40.952-15.616 56.568 0.004 15.62 15.624 15.618 40.95-0.006 56.57l-344.204 344.144c-7.81 7.81-18.046 11.714-28.282 11.714z"></path>
                  </svg>
                </span>
              </a>
            </span>
          </div>
          <div class="chromatic-ignore enx0fv32 chr-10gvw3t e154td7m0">
            <div class="chr-7dkk8d enx0fv33">
              <span class="github-btn chr-bx220u elj7lvw1">
                <a class="gh-btn" href="/" target="_blank" rel="noreferrer">
                  <span class="gh-ico" aria-hidden="true"></span>
                  <span class="gh-text">Star</span>
                </a>
              </span>
            </div>
          </div>
          <div class="chr-1n0pifq e154td7m0">
            <span
              role="button"
              trigger="click"
              class="chr-q99zvx enx0fv31"
              aria-controls="55cff831-941b-490d-af49-3c1460c6202b"
              tabindex="0"
            >
              <button class="enx0fv30 e1ja7avb2 chr-1pgooyc e1ja7avb0">
                <span class="chr-1xdhyk6 e1ja7avb3">
                  <svg
                    viewBox="0 0 1024 1024"
                    width="20px"
                    height="20px"
                    aria-label="Menu"
                    class="chr-zmb90n e82dnwa0"
                  >
                    <path d="M579 820c0 24-19 44-42 44H85c-24 0-42-20-42-44s18-44 42-44h452c23 0 42 20 42 44m268-202c0 24-19 44-42 44H85c-24 0-42-20-42-44 0-25 18-44 42-44h720c23 0 42 19 42 44m-67-212c0 25-19 44-42 44H85c-24 0-42-19-42-44 0-24 18-44 42-44h653c23 0 42 20 42 44m201-202c0 24-18 44-42 44H85c-24 0-42-20-42-44s18-44 42-44h854c24 0 42 20 42 44"></path>
                  </svg>
                </span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
