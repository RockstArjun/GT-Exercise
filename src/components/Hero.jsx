import React from "react";
import Reactsvg from "../frameworks/logo-react.svg";
import vuesvg from "../frameworks/logo-vue.svg";
import htmlsvg from "../frameworks/logo-html.svg";
import angularsvg from "../frameworks/logo-angular.svg";
import embersvg from "../frameworks/logo-ember.svg";
import sveltesvg from "../frameworks/logo-svelte.svg";
import webcomponentssvg from "../frameworks/logo-web-components.svg";
import preactsvg from "../frameworks/logo-preact.svg";
import storybookvideo from "../videos/storybook.mp4";

function Hero() {
  return (
    <div>
      <div class="glowTouch-lb5dvd e1rcwf4f4">
        <div class="glowTouch-hjgcan ei2f23u2">
          <div class="glowTouch-1gg1jkh e1kwid7b0">New</div>
          <span class="glowTouch-l7eka7 ei2f23u1">
            Storybook 7.0 design sneak peek
          </span>
          <span class="glowTouch-nicbzb ei2f23u0">
            <a href="/" class="glowTouch-139owaq e1ja7avb2">
              <span class="glowTouch-ycbzfh e1ja7avb3">
                Read more
                <svg
                  viewBox="0 0 1024 1024"
                  width="20px"
                  height="20px"
                  class="glowTouch-zmb90n e82dnwa0"
                >
                  <path d="M768.072 514.022c0 10.236-3.904 20.47-11.712 28.282l-344.098 344.156c-15.62 15.624-40.946 15.624-56.568 0.006-15.622-15.622-15.624-40.948-0.006-56.568l315.82-315.876-315.868-315.922c-15.618-15.624-15.618-40.952 0.004-56.568 15.624-15.62 40.95-15.618 56.57 0.006l344.144 344.204c7.81 7.81 11.714 18.044 11.714 28.28z"></path>
                </svg>
              </span>
            </a>
          </span>
        </div>
      </div>
      <div class="glowTouch-1co3orp e1mjxk3n0">
        <div class="glowTouch-1kzy3vt e1mjxk3n15">
          <h1 class="glowTouch-1tzbnf1 e1mjxk3n18">
            Build component driven UIs faster
          </h1>
          <div class="glowTouch-helfoz e1mjxk3n17">
            Storybook is an open source tool for building UI components and
            pages in isolation. It streamlines UI development, testing, and
            documentation.
          </div>
          <div class="glowTouch-nw1k42 e1mjxk3n16">
            <a href="/" class="eotfes61 glowTouch-1hydx41 eotfes60">
              <span class="glowTouch-x9illq eotfes63">Go to the docs</span>
            </a>
            <button class="glowTouch-1htdcmx eotfes61">
              <span class="glowTouch-x9illq eotfes63">
                <svg
                  viewBox="0 0 1024 1024"
                  width="20px"
                  height="20px"
                  aria-hidden="true"
                  class="glowTouch-zmb90n e82dnwa0"
                >
                  <path d="M914 474L316 94c-10-6-19-9-27-9-19 0-33 18-33 47v760c0 29 14 47 33 47 8 0 17-3 27-9l598-380c33-21 33-55 0-76"></path>
                </svg>
                Watch video
              </span>
            </button>
          </div>
        </div>
        <section class="glowTouch-1dm04qq e1mjxk3n1">
          <div class="glowTouch-0 e1mjxk3n3">
            <div class="glowTouch-14nqbuo e1mjxk3n14">
              <div class="e1mjxk3n22 glowTouch-i1dq3v e1t9uq0a0">
                <video width="100%" autoPlay muted>
                  <source src={storybookvideo} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div class="glowTouch-1bdovy e1mjxk3n2">
            <span class="e1mjxk3n4 glowTouch-1ur53lt e1auc5zz0">Made for</span>
            <div class="glowTouch-16da9u0 e1mjxk3n8">
              <div class="glowTouch-11ktzbd e1mjxk3n9">
                <a class="primary e1mjxk3n10 glowTouch-wro6zw e1ja7avb2" href="/">
                  <span class="glowTouch-ycbzfh e1ja7avb3">
                    <img src={Reactsvg} alt="react" />
                    <span>React</span>
                    <svg
                      viewBox="0 0 1024 1024"
                      width="20px"
                      height="20px"
                      class="glowTouch-zmb90n e82dnwa0"
                    >
                      <path d="M768.072 514.022c0 10.236-3.904 20.47-11.712 28.282l-344.098 344.156c-15.62 15.624-40.946 15.624-56.568 0.006-15.622-15.622-15.624-40.948-0.006-56.568l315.82-315.876-315.868-315.922c-15.618-15.624-15.618-40.952 0.004-56.568 15.624-15.62 40.95-15.618 56.57 0.006l344.144 344.204c7.81 7.81 11.714 18.044 11.714 28.28z"></path>
                    </svg>
                  </span>
                </a>
              </div>
              <div class="glowTouch-11ktzbd e1mjxk3n9">
                <a class="primary e1mjxk3n10 glowTouch-wro6zw e1ja7avb2" href="/">
                  <span class="glowTouch-ycbzfh e1ja7avb3">
                    <img src={vuesvg} alt="vue" />
                    <span>Vue</span>
                    <svg
                      viewBox="0 0 1024 1024"
                      width="20px"
                      height="20px"
                      class="glowTouch-zmb90n e82dnwa0"
                    >
                      <path d="M768.072 514.022c0 10.236-3.904 20.47-11.712 28.282l-344.098 344.156c-15.62 15.624-40.946 15.624-56.568 0.006-15.622-15.622-15.624-40.948-0.006-56.568l315.82-315.876-315.868-315.922c-15.618-15.624-15.618-40.952 0.004-56.568 15.624-15.62 40.95-15.618 56.57 0.006l344.144 344.204c7.81 7.81 11.714 18.044 11.714 28.28z"></path>
                    </svg>
                  </span>
                </a>
              </div>
              <div class="glowTouch-11ktzbd e1mjxk3n9">
                <a class="primary e1mjxk3n10 glowTouch-wro6zw e1ja7avb2" href="/">
                  <span class="glowTouch-ycbzfh e1ja7avb3">
                    <img src={angularsvg} alt="angular" />
                    <span>Angular</span>
                    <svg
                      viewBox="0 0 1024 1024"
                      width="20px"
                      height="20px"
                      class="glowTouch-zmb90n e82dnwa0"
                    >
                      <path d="M768.072 514.022c0 10.236-3.904 20.47-11.712 28.282l-344.098 344.156c-15.62 15.624-40.946 15.624-56.568 0.006-15.622-15.622-15.624-40.948-0.006-56.568l315.82-315.876-315.868-315.922c-15.618-15.624-15.618-40.952 0.004-56.568 15.624-15.62 40.95-15.618 56.57 0.006l344.144 344.204c7.81 7.81 11.714 18.044 11.714 28.28z"></path>
                    </svg>
                  </span>
                </a>
              </div>
              <div class="glowTouch-11ktzbd e1mjxk3n9">
                <a class="primary e1mjxk3n10 glowTouch-wro6zw e1ja7avb2" href="/">
                  <span class="glowTouch-ycbzfh e1ja7avb3">
                    <img src={webcomponentssvg} alt="web-components" />
                    <span>Web Components</span>
                    <svg
                      viewBox="0 0 1024 1024"
                      width="20px"
                      height="20px"
                      class="glowTouch-zmb90n e82dnwa0"
                    >
                      <path d="M768.072 514.022c0 10.236-3.904 20.47-11.712 28.282l-344.098 344.156c-15.62 15.624-40.946 15.624-56.568 0.006-15.622-15.622-15.624-40.948-0.006-56.568l315.82-315.876-315.868-315.922c-15.618-15.624-15.618-40.952 0.004-56.568 15.624-15.62 40.95-15.618 56.57 0.006l344.144 344.204c7.81 7.81 11.714 18.044 11.714 28.28z"></path>
                    </svg>
                  </span>
                </a>
              </div>
              <div class="glowTouch-11ktzbd e1mjxk3n9">
                <a class="primary e1mjxk3n10 glowTouch-wro6zw e1ja7avb2" href="/">
                  <span class="glowTouch-ycbzfh e1ja7avb3">
                    <img src={embersvg} alt="ember" />
                    <span>Ember</span>
                    <svg
                      viewBox="0 0 1024 1024"
                      width="20px"
                      height="20px"
                      class="glowTouch-zmb90n e82dnwa0"
                    >
                      <path d="M768.072 514.022c0 10.236-3.904 20.47-11.712 28.282l-344.098 344.156c-15.62 15.624-40.946 15.624-56.568 0.006-15.622-15.622-15.624-40.948-0.006-56.568l315.82-315.876-315.868-315.922c-15.618-15.624-15.618-40.952 0.004-56.568 15.624-15.62 40.95-15.618 56.57 0.006l344.144 344.204c7.81 7.81 11.714 18.044 11.714 28.28z"></path>
                    </svg>
                  </span>
                </a>
              </div>
              <div class="glowTouch-11ktzbd e1mjxk3n9">
                <a class="primary e1mjxk3n10 glowTouch-wro6zw e1ja7avb2" href="/">
                  <span class="glowTouch-ycbzfh e1ja7avb3">
                    <img src={htmlsvg} alt="html" />
                    <span>HTML</span>
                    <svg
                      viewBox="0 0 1024 1024"
                      width="20px"
                      height="20px"
                      class="glowTouch-zmb90n e82dnwa0"
                    >
                      <path d="M768.072 514.022c0 10.236-3.904 20.47-11.712 28.282l-344.098 344.156c-15.62 15.624-40.946 15.624-56.568 0.006-15.622-15.622-15.624-40.948-0.006-56.568l315.82-315.876-315.868-315.922c-15.618-15.624-15.618-40.952 0.004-56.568 15.624-15.62 40.95-15.618 56.57 0.006l344.144 344.204c7.81 7.81 11.714 18.044 11.714 28.28z"></path>
                    </svg>
                  </span>
                </a>
              </div>
              <div class="glowTouch-11ktzbd e1mjxk3n9">
                <a class="primary e1mjxk3n10 glowTouch-wro6zw e1ja7avb2" href="/">
                  <span class="glowTouch-ycbzfh e1ja7avb3">
                    <img src={sveltesvg} alt="svelte" />
                    <span>Svelte</span>
                    <svg
                      viewBox="0 0 1024 1024"
                      width="20px"
                      height="20px"
                      class="glowTouch-zmb90n e82dnwa0"
                    >
                      <path d="M768.072 514.022c0 10.236-3.904 20.47-11.712 28.282l-344.098 344.156c-15.62 15.624-40.946 15.624-56.568 0.006-15.622-15.622-15.624-40.948-0.006-56.568l315.82-315.876-315.868-315.922c-15.618-15.624-15.618-40.952 0.004-56.568 15.624-15.62 40.95-15.618 56.57 0.006l344.144 344.204c7.81 7.81 11.714 18.044 11.714 28.28z"></path>
                    </svg>
                  </span>
                </a>
              </div>
              <div class="glowTouch-11ktzbd e1mjxk3n9">
                <a class="primary e1mjxk3n10 glowTouch-wro6zw e1ja7avb2" href="/">
                  <span class="glowTouch-ycbzfh e1ja7avb3">
                    <img src={preactsvg} alt="preact" />
                    <span>Preact</span>
                    <svg
                      viewBox="0 0 1024 1024"
                      width="20px"
                      height="20px"
                      class="glowTouch-zmb90n e82dnwa0"
                    >
                      <path d="M768.072 514.022c0 10.236-3.904 20.47-11.712 28.282l-344.098 344.156c-15.62 15.624-40.946 15.624-56.568 0.006-15.622-15.622-15.624-40.948-0.006-56.568l315.82-315.876-315.868-315.922c-15.618-15.624-15.618-40.952 0.004-56.568 15.624-15.62 40.95-15.618 56.57 0.006l344.144 344.204c7.81 7.81 11.714 18.044 11.714 28.28z"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <span class="e1mjxk3n4 glowTouch-1ur53lt e1auc5zz0">GitHub</span>
            <div class="glowTouch-1ctk4ej e1mjxk3n5">
              <a href="/" class="e1mjxk3n7 e1ja7avb2 glowTouch-13ixc73 e1ja7avb1">
                <span class="glowTouch-1xdhyk6 e1ja7avb3">
                  <div class="e1mjxk3n7 glowTouch-1mf8s40 ek50fmu0">
                    <div class="glowTouch-109gw3g ek50fmu2">
                      <span>v6.5</span>
                    </div>
                    <div class="glowTouch-fkcdmb ek50fmu1">
                      <span>Latest version</span>
                    </div>
                  </div>
                </span>
              </a>
              <a
                href="/"
                class="glowTouchomatic-ignore e1mjxk3n6 e1ja7avb2 glowTouch-13ixc73 e1ja7avb1"
              >
                <span class="glowTouch-1xdhyk6 e1ja7avb3">
                  14.17m
                  <div class="glowTouch-fkcdmb ek50fmu1">
                    <span>Installs per month</span>
                  </div>
                </span>{" "}
              </a>
              <a href="/" class="e1mjxk3n7 e1ja7avb2 glowTouch-13ixc73 e1ja7avb1">
                <span class="glowTouch-1xdhyk6 e1ja7avb3">
                  <div class="e1mjxk3n7 glowTouch-1mf8s40 ek50fmu0">
                    <div class="glowTouch-hvvanr ek50fmu2">
                      <span>1440+</span>
                    </div>
                    <div class="glowTouch-fkcdmb ek50fmu1">
                      <span>Contributors</span>
                    </div>
                  </div>
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
