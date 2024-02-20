// experience.tsx
import { FaBriefcase, FaSchool } from 'react-icons/fa';
import image1 from '../../public/1.png';
import image2 from '../../public/2.png';
import image3 from '../../public/3.png';
import image4 from '../../public/images.png';
import logo from '../../public/logo_degrade_jaune-Baseline-300ppi-300x78-1.jpg';

const Experience = () => {
    return (
        <>
            <section className="experience" id='section1'>
                <h2 className="text-4xl mb-5">Mon Expérience</h2>
                <h3>plus de 4 ans experience</h3>
                <div className="experience-item" style={{display: 'flex'}}>
                    <img src={image1} alt="background" style={{width: '50%'}}/>
                    <div style={{width: '50%'}}>
                        <FaBriefcase/>
                        <h3 className="text-3xl">Pix'n com</h3>
                        <h4 className="text-2xl">Développeur Fullstack, Web Designer</h4>
                        <p className="text-xl">2022-2024</p>
                        <p>Création de sites vitrine sur WordPress, SEO, Créations Graphique (logo, flyer, ...)</p>
                    </div>
                </div>
                <div className="experience-item" style={{display: 'flex'}}>
                    <img src={image2} alt="background" style={{width: '50%'}}/>
                    <div style={{width: '50%'}}>
                        <FaBriefcase/>
                        <h3 className="text-3xl">D Web créations</h3>
                        <h4 className="text-2xl">Développeur Fullstack, Web Designer</h4>
                        <p className="text-xl">2019-2022</p>
                        <p>Auto Entrepreneur dans le secteur du numérique. Création de sites vitrine sur WordPress, de
                            site
                            e-commerce, SEO
                        </p>
                    </div>
                </div>
            </section>
            <section className="experience" id='section2'>

                <h2 className="text-4xl mb-5">Formations</h2>
                <div className="experience-item" style={{display: 'flex'}}>
                    <img src={image4} alt="background" style={{width: '50%'}}/>
                    <div style={{width: '50%'}}>
                        <FaSchool/>
                        <h3 className="text-3xl">Développeur web & Web mobil</h3>
                        <h4 className="text-2xl">Simplon</h4>
                        <p className="text-xl">2024</p>
                        <p>preparation au titre rncp </p>
                    </div>
                </div>
                <div className="experience-item" style={{display: 'flex'}}>
                    <img src={logo} alt="background" style={{width: '50%'}}/>
                    <div style={{width: '50%'}}><FaSchool/>
                        <h3 className="text-3xl">Referent numerique </h3>
                        <h4 className="text-2xl">human Booster</h4>
                        <p className="text-xl">2017-2018</p>
                        <p>Formation doublement labellisée Grande école du numérique et Campus Région</p>
                    </div>
                </div>
                    <div className="experience-item" style={{display: 'flex'}}>
                        <img src={image3} alt="background" style={{width: '50%'}}/>
                        <div style={{width: '50%'}}>
                            <FaSchool/>
                            <h3 className="text-3xl">Développeur Systéme</h3>
                            <h4 className="text-2xl">Educatel</h4>
                            <p className="text-xl">2015-2016</p>
                            <p>Cours par correspondance</p>
                        </div>
                    </div>

            </section>
        </>
)
}

export default Experience