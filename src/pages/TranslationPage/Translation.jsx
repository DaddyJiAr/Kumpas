import './translation.css'
import Button, { ButtonIcon } from '../../components/Button/Button'
import Header from '../../components/Header - Homepage/Header'
import SignPlaceholder from '../../assets/signing-placeholder.png'
import Footer from '../../components/Footer/Footer'

export default function Translation(){
    return(
        <div className="translation-page-container">
            <Header/>
            <div className="main-translation-section-container">
                <div className="section-header">
                    <p className='section-title'>Real-Time Translation</p>
                    <p className='section-subtitle'>Translate English or Tagalog speech and text into into Filipino Sign Language instantly. Our advanced AI avatar provides clear and accurate signing.</p>
                </div>
                <div className="translation-section-container">
                    <div className="translation-card input-translation">
                        <div className="translation-card-header-container">
                            <p className='translation-card-header'>Translate From</p>
                            <select className='translation-card-selection' name="" id="">
                                <option value="Filipino">Filipino</option>
                                <option value="English">English</option>
                            </select>
                        </div>
                        <div className="textarea-input">
                            <textarea className='translation-textarea-input' name="" id="" placeholder='Type or speak here...'></textarea>
                            <i className="fa-solid fa-microphone speech-input-button"></i>
                        </div>
                        <Button text='Translate' weight='bold' fontSize='1.2rem' padding='15px' borRad='20'/>
                    </div>
                    <div className="translation-card output-translation">
                        <div className="translation-card-header-container">
                            <p className='translation-card-header'>Translate To</p>
                            <select className='translation-card-selection' name="" id="">
                                <option value="Filipino Sign Language">Filipino Sign Language</option>
                                <option value="Tagalog Text">Tagalog Text</option>
                                <option value="English Text">English Text</option>
                            </select>
                        </div>
                        <div className="signing-section">
                            <img className='signing-section-image' src={SignPlaceholder} alt="" />
                            <div className="signing-image-actions-container">
                                <div className="play-pause-cotainer">
                                    <ButtonIcon logoClass='fa-play' bgColor='var(--semi-transparent2)' textColor='var(--subtext)'/>
                                    <ButtonIcon logoClass='fa-pause' bgColor='var(--semi-transparent2)' textColor='var(--subtext)'/>
                                </div>
                                <select className='translation-card-selection' name="" id="">
                                    <option value="0.5x">Speed 0.5x</option>
                                    <option value="1x" selected>Speed 1x</option>
                                    <option value="1.5x">Speed 1.5x</option>
                                    <option value="2x">Speed 2x</option>
                                </select>
                            </div>
                            <Button text='Learn this Sign' weight='bold' fontSize='1.2rem' padding='15px' borRad='20' bgColor='var(--highlight-color)' textColor='var(--highlight-text-color)'/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}