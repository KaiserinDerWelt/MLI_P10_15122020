import React from 'react';

class Footer extends React.Component {

  render() {

    return (

        <footer className="container footerBranding">
          <div className="logoFooter">
          <img src="assets/img/logoFooter.png" alt="logo-kasa-footer"/>
          </div>
            <p className="impressum">&copy; {(new Date().getFullYear())} Kasa. All rights reserved. &middot;</p>
        </footer>

    )
    
  }

}

export default Footer;