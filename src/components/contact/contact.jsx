import "./contact.css";
import { AiOutlineGithub, AiOutlineInstagram} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="#"
          className="contact"
          target={"blank"}
        >
          <FaDiscord className="icon" />
          <h2>
            discord <span>FullGreen.GN#0001</span>
          </h2>
        </a>

        <a
            href="https://github.com/FullGreenGN"
            className="contact"
            target={"blank"}
        >
          <AiOutlineGithub className="icon"/>
          <h2>
            github <span>FullGreenGN</span>
          </h2>
        </a>

        <a href="https://www.instagram.com/fullgreen.nfc/" className="contact instagram">
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>fullgreen.nfc</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
