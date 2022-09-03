import React from "react";

function Footer(props) {
  return (
    <footer>
      <div className="coincap col-sm-3">
        <div className="head">COINCAP.IO</div>
        <div className="body">
          <p>Methedology<br/>
          support<br/>
          Our API<br/>
          Rate Comparison<br/>
          Careers</p>
        </div>
      </div>
      <div className="legal col-sm-3">
        <div className="head">Legals</div>
        <div className="body">
          <p>Terms of service<br/>
          Privacy Policy</p>
        </div>
        <div className="head">DISCLAIMER</div>
        <div className="body">
        <p>
          Neither ShapeShift AG nor CoinCap are in any way associated with
          CoinMarketCap, LLC or any of its goods and services.
        </p>
        </div>
      </div>
      <div className="follow col-sm-3">
        <div className="head">Follow us</div>
        <div className="body">
        <i className="fa-brands fa-twitter"></i> <i className="fa-brands fa-facebook"></i>
        </div>
      </div>
      <div className="available col-sm-3">
      <div className="head">COINCAP APP AVAILABLE ON
</div>
        <div className="body">
        <div role="listitem" className="item">
           
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Ro739XbObP73gjGTg0mrCwHaCM%26pid%3DApi&f=1" alt="Play store"/>
            </div>
        <div role="listitem" className="item">
           
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fincipia.co%2Fwp-content%2Fuploads%2F2017%2F10%2Fapp-store.png%3Ffit%3D519%252C160%26ssl%3D1&f=1&nofb=1" alt="Play store"/>
            </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
