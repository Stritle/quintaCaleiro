import React, { Component } from 'react'
import logoIntro from '../../images/logoIntro.png'

export default class ImageIntro extends Component {
    render() {
        return (
            <div className="imageIntro">

                <div>
                    <img src={logoIntro} alt="Logotipo"></img>
                </div>

            </div>
        )
    }
}
