import './footer.css'
import React from 'react'
import { Footer } from 'react-materialize'

export default props =>
    <div className="footer-materialize">
        <Footer
            copyrights="Desenvolvido e Hospedado por CRW"
            moreLinks={<a />}
            links={<ul />}
            className="">
        </Footer>
    </div>