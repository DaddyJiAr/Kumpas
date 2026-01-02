import { useNavigate } from 'react-router'
import Button from '../../components/Button/Button'
import FeatureCard from '../../components/Features Card - Homepage/FeatureCard'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header - Homepage/Header'
import Step from '../../components/Steps - Homepage/Step'
import UserReview from '../../components/User Review - Homepage/UserReview'
import './homepage.css'

export default function Homepage(){
    const navigate = useNavigate();
    return(
        <div className='homepage-container'>
            <Header/>
            <div className="homepage-hero-section-container">
                <p className='main-hero-text'>Unlock Filipino Sign Language. Translate and Learn with Kumpas.</p>
                <p className='hero-subtext'>Your AI-powered bridge between spoken language and FSL. Real-time translation and gamified lessons, all in one place.</p>
                <div className="hero-buttons-container">
                    <Button text='Start Translating' onClick={() => {navigate('/translate')}}/>
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
                <div className="how-it-works-container">
                    <Step hasNext={true} logoClass='fa-solid fa-keyboard' title='Step 1: Input Your Text or Speech' description='Type or speak the words you want to translate.'/>
                    <Step hasNext={true} logoClass='fa-solid fa-robot' title='Step 2: AI Generates FSL' description='Our AI instanlty generates an animated FSL translation. '/>
                    <Step logoClass='fa-solid fa-graduation-cap' title='Step 3: Learn and Practice' description='Follow along with the animation and practice in our learning modules.'/>
                </div>
            </div>
            <div className="user-reviews-section-contianer">
                <div className="section-header">
                    <p className='section-title'>Loved by Users</p>
                    <p className='section-subtitle'>See what our community is saying about Kumpas.</p>
                </div>
                <div className="reviews-container">
                    <UserReview name='Winter' date='January 2026' rating={5} reviewMessage='Kumpas has been a game-changer for connecting with my deaf friends. The translation is surprisingly accurate, and the learning modules are fun!'/>
                    <UserReview name='Winter' date='January 2026' rating={5} reviewMessage="As a beginner, the Duolingo-style lessons are perfect. I'm picking up FSL much faster than I thought I would. Highly recommended!"/>
                    <UserReview name='Winter' date='January 2026' rating={5} reviewMessage="The speech recognition for translation is fantastic. Makes communicating on the go so much easier. A truly essential tool."/>
                </div>
            </div>
            <div className="sign-up-invite-container">
                <p className='section-title'>Ready to start signing? Join Kumpas today.</p>
                <p className='section-subtitle'>Sign up for free and gain instant access to our poweful translation and learning tools. No credit card required.</p>
                <Button text='Sign Up for Free' fontSize='1.2rem' padding='15px 25px' borRad='20'/>
            </div>
            <Footer/>
        </div>
    )

}