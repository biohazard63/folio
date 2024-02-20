import rick from '../../public/Capture d’écran (14).png'
import flappy from '../../public/flapy.png'
import backS from '../../public/Capture d’écran (13).png'
import pixel from '../../public/pixel.png'
import escape from '../../public/escape.png'
import echec from '../../public/echeque.png'
import poker from '../../public/poker.png'
import deuxmille from '../../public/2048.png'
const projet = () => {
    return (
        <>
            <div>
                <h2>Projet</h2>
                <h3>projet personnel en cour </h3>
            </div>
            <section className="experience" id='section4'>
                <a href="http://poker.quentincv.fr/">
                    <div className="experience-item" style={{display: 'flex'}}>
                        <img src={poker} alt="background" style={{width: '50%'}}/>
                        <div style={{width: '50%'}}>
                            <h3>jeux de poker</h3>
                            <p>Jeux de poker avec le framework React et Vite

                            </p>
                            <p>React</p>
                        </div>
                    </div>
                </a>
                <a href="http://chess.quentincv.fr/">

                    <div className="experience-item" style={{display: 'flex'}}>
                        <img src={echec} alt="background" style={{width: '50%'}}/>
                        <div style={{width: '50%'}}><h3>jeux d'echeque </h3>
                            <p>Jeux d'échec avec le framework React et Vite</p>
                            <p>React</p>
                        </div>
                    </div>
                </a>

<a href="#">
                        <div className="experience-item" style={{display: 'flex'}}>
                            <img src={backS} alt="background" style={{width: '50%'}}/>
                            <div style={{width: '50%'}}><h3>back safe</h3>
                                <p>Back Safe et une application react qui ce veut une
                                    application qui mette les utilisateur en relation pour
                                    les retour de soirees en toute securiter</p>
                                <p>React,Firestore</p>
                            </div>
                        </div>
</a>
                        <a href="https://pixel.quentincv.fr/">

                            <div className="experience-item" style={{display: 'flex'}}>
                                <img src={pixel} alt="background" style={{width: '50%'}}/>
                                <div style={{width: '50%'}}><h3>pixel art</h3>
                                    <p>generation et creation de pixel arts

                                    </p>
                                    <p>React</p>
                                </div>
                            </div>
                        </a>
            </section>
            <div>
                <h3>projet personnel fini</h3>
            </div>
            <section className="experience"id='section5'>
<a href="http://hell.quentincv.fr/">
                <div className="experience-item" style={{display: 'flex'}}>
                    <img src={escape} alt="background" style={{width: '50%'}}/>
                    <div style={{width: '50%'}}>                    <h3>wellecome to the hell</h3>
                    <p>Un est un jeux de type escape game pour
                        les personnes qui découvrent ou apprennent les bases du web</p>
                    <p>React, Firestore</p>
                </div>
                </div>
</a>
                <a href="http://2048.quentincv.fr/">
                <div className="experience-item" style={{display: 'flex'}}>
                    <img src={deuxmille} alt="background" style={{width: '50%'}}/>
                    <div style={{width: '50%'}}>                    <h3>jeux 2048</h3>
                    <p>Jeux 2048 en TypeScript avec le framework React</p>
                    <p>React</p>
                </div>
                </div>
                </a>
                <a href="https://flapy.quentincv.fr/">
                <div className="experience-item" style={{display: 'flex'}}>
                    <img src={flappy} alt="background" style={{width: '50%'}}/>
                    <div style={{width: '50%'}}>                    <h3>flappy birds</h3>
                    <p>Jeux flapy bird en javascript</p>
                    <p>html,js</p>
                </div>
                </div>
                </a>
                <a href="https://ricky.quentincv.fr/">
                <div className="experience-item" style={{display: 'flex'}}>
                    <img src={rick} alt="background" style={{width: '50%'}}/>
                    <div style={{width: '50%'}}>                    <h3>tapes Rick</h3>
                    <p>Jeux tape taupe sur le thème rick est morty en javascript</p>
                    <p>html,js</p>
                </div>
                </div>
                </a>
            </section>
        </>
    )
}

export default projet