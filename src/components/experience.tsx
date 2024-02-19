// experience.tsx
import { FaBriefcase, FaSchool } from 'react-icons/fa';

const Experience = () => {
    return (
        <>
            <section className="experience" id='section1'>
                <h2 className="text-4xl mb-5">Mon Expérience</h2>
                <h3>plus de 4 ans experience</h3>
                <div className="experience-item" >
                    <FaBriefcase />
                    <h3 className="text-3xl">Pix'n com</h3>
                    <h4 className="text-2xl">Développeur Fullstack, Web Designer</h4>
                    <p className="text-xl">2022-2024</p>
                    <p>Création de sites vitrine sur WordPress, SEO, Créations Graphique (logo, flyer, ...)</p>
                </div>
                <div className="experience-item" >
                    <FaBriefcase />
                    <h3 className="text-3xl">D Web créations</h3>
                    <h4 className="text-2xl">Développeur Fullstack, Web Designer</h4>
                    <p className="text-xl">2019-2022</p>
                    <p>Auto Entrepreneur dans le secteur du numérique. Création de sites vitrine sur WordPress, de site
                        e-commerce, SEO
                    </p>
                </div>
            </section>
            <section className="experience" id='section2'>

                <h2 className="text-4xl mb-5">Formations</h2>
                <div className="experience-item" >
                    <FaSchool />
                    <h3 className="text-3xl">Développeur web & Web mobil</h3>
                    <h4 className="text-2xl">Simplon</h4>
                    <p className="text-xl">2024</p>
                    <p>preparation au titre rncp </p>
                </div>
                <div className="experience-item" >
                    <FaSchool />
                    <h3 className="text-3xl">Referent numerique </h3>
                    <h4 className="text-2xl">human Booster</h4>
                    <p className="text-xl">2017-2018</p>
                    <p>Formation doublement labellisée Grande école du numérique et Campus Région</p>
                </div>
                <div className="experience-item" >
                    <FaSchool />
                    <h3 className="text-3xl">Développeur Systéme</h3>
                    <h4 className="text-2xl">Educatel</h4>
                    <p className="text-xl">2015-2016</p>
                    <p>Cours par correspondance</p>
                </div>
            </section>
        </>
    )
}

export default Experience