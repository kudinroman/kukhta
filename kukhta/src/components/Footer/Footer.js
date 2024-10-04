import React, { Component } from "react";
import logoSavarez from "../../assets/images/logoSavarez.jpg";
import vk from "../../assets/images/vk-24.png";
import fb from "../../assets/images/fb-24.png";
import instagram from "../../assets/images/instagram-24.png";
import youtube from "../../assets/images/youtube-24.png";

class Footer extends Component {
  render() {
    const social = {
      vk: "https://vk.com/id106764816",
      fb: "https://www.facebook.com/pavel.kukhta.9",
      youtube: "https://www.youtube.com/@pavelkukhta",
      instagram:
        "https://www.instagram.com/pashak6?utm_source=qr&igsh=MWtmeW8ybzNvdnRt",
    };

    const icons = {
      vk: vk,
      fb: fb,
      youtube: youtube,
      instagram: instagram,
    };

    return (
      <footer className="bg-gray-200">
        <div className="text-center w-11/12 md:w-3/5 mx-auto py-5">
          <div className="flex justify-between">
            <div>
              <img
                class="logo_savarez"
                src={logoSavarez}
                alt="Savarez"
                width="80"
              />
            </div>
            <div className="text-right">
              <p className="text-xs md:text-sm mb-2.5">
                <a
                  href="mailto:pavelkukhta@gmail.com"
                  className="hover:underline"
                >
                  pavelkukhta@gmail.com
                </a>
              </p>
              <div className="flex gap-2 justify-end">
                {Object.entries(social).map(([key, value]) => (
                  <a href={value} target="_blank" rel="noreferrer">
                    <img
                      src={icons[key]}
                      alt={key}
                      className="opacity-50 hover:opacity-100 transition"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </footer>
    );
  }
}

export default Footer;
