import Button from '../../components/Button/Button'
import FeatureCard from '../../components/Features Card - Homepage/FeatureCard'
import Header from '../../components/Header/Header'
import './homepage.css'

export default function Homepage(){
    return(
        <div className='homepage-container'>
            <Header/>
            <div className="homepage-hero-section-container">
                <p className='main-hero-text'>Unlock Filipino Sign Language. Translate and Learn with Kumpas.</p>
                <p className='hero-subtext'>Your AI-powered bridge between spoken language and FSL. Real-time translation and gamified lessons, all in one place.</p>
                <div className="hero-buttons-container">
                    <Button text='Start Translating'/>
                    <Button text='Begin Learning' textColor='white' bgColor='var(--semi-transparent)'/>
                </div>
            </div>
            <div className="homepage-features-container">
                <div className="section-header">
                    <p className='section-title'>Everything You Need to Communicate and Grow</p>
                    <p className='section-subtitle'>Discover the core features that make Kumpas the best tool for FSL translation and learning.</p>
                </div>
                <div className="main-features-container">
                    <FeatureCard logoClass='fa-solid fa-language' title='Real-time Translation' description='Instantly translate English or Tagalog speech and text into FSL.'/>
                    <FeatureCard logoClass='fa-solid fa-gamepad' title='Interactive Lessons' description='Learn FSL with our engaging, Duolingo-like gamified lessons.'/>
                    <FeatureCard logoClass='fa-solid fa-microphone' title='Speech and Text Input' description='Use your voice or keyboard to input text for seamless communication.'/>
                </div>
            </div>
            <div className="homepage-features-container">
                <div className="section-header">
                    <p className='section-title'>How It Works</p>
                    <p className='section-subtitle'>A simple, intuitive process to get you communicating in minutes.</p>
                </div>
                
            </div>
        </div>
    )

}