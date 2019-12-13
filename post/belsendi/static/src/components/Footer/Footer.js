import React, { Component } from 'react'
import '../../styles/footer.css'

export class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-container">

                </div>
                <div className="footer-footer">
                    <div className="copyright">
                        &copy; Copyright - Develdt 2019
                    </div>
                    <nav>
                        <ul className="footer-navigation">
                            <li><a href="/terms">Terms</a></li>
                            <li><a href="/cookies">Cookies</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/information">Advertising Information</a></li>
                        </ul>
                    </nav>
                </div>
            </footer>
        )
    }
}

export default Footer
