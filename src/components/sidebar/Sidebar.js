import React from "react";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMessage,
  faHeart,
  faGear,
  faTachometer,
  faBank,
  faSliders,
  faMartiniGlass,
  faPercent,
  faLayerGroup,
  faRightFromBracket,
  faAsterisk,
} from "@fortawesome/free-solid-svg-icons";
import { faFaceGrinWide } from "@fortawesome/free-regular-svg-icons";

const Sidebar = () => {
  return (
    <>
      <div className="side-sty">
        <h4>POS Monitoring</h4>
        <div className="links">
          <ul>
            <li>
              <div>
                <FontAwesomeIcon
                  icon={faFaceGrinWide}
                  className="fontIcon pad-right-10"
                />
                <a href="/#">Dashboard</a>
              </div>
            </li>
            <li>
              <div>
                <FontAwesomeIcon icon={faLayerGroup} />
                <a href="/#">Trasactions</a>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </li>
            <li>
              <div>
                <FontAwesomeIcon icon={faHeart} />
                <a href="/#">Terminal Health</a>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </li>
            <li>
              <div>
                <FontAwesomeIcon icon={faAsterisk} />
                <a href="/#">Settlemnt</a>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </li>
            <li>
              <div>
                <FontAwesomeIcon icon={faPercent} />
                <a href="/#">Performance</a>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </li>
            <li>
              <div>
                <FontAwesomeIcon icon={faBank} />
                <a href="/#">Bank Statement</a>
              </div>
            </li>
            <li>
              <div>
                <FontAwesomeIcon icon={faTachometer} />
                <a href="/#">My Terminal</a>
              </div>
            </li>
            <li>
              <div>
                <FontAwesomeIcon icon={faGear} />

                <a href="/#">Setting</a>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </li>
            <li>
              <div>
                <FontAwesomeIcon icon={faMessage} />
                <a href="/#">Message Center</a>
              </div>
            </li>
            <li>
              <div>
                <FontAwesomeIcon icon={faSliders} />

                <a href="/#">Reconcillistion</a>
              </div>
            </li>
            <li>
              <div>
                <FontAwesomeIcon icon={faMartiniGlass} />

                <a href="/#">Dispute Managment</a>
              </div>
            </li>
            <li>
              <div>
                <FontAwesomeIcon icon={faRightFromBracket} />

                <a href="/#">Logout</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
