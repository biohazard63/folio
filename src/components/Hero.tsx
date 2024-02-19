const Hero = () => {
    return (
        <section className="hero bg-cover bg-center flex items-center justify-center text-white h-screen">
            <div className="text-center">
                <h1 className="text-5xl mb-5">Salut, moi c'est Quentin</h1>
                <p className="text-2xl mb-10">Web designer et développeur. Passionné par le web et les nouvelles
                    technologies.</p>
                <p>Développeur Web & Web Designer</p>
                <p>Clermont-Ferrand 6300, France</p>
                <p>quetindevaulx63@gmail.com</p>
                <p className="text-xl mb-5">Je travaille principalement avec React, TypeScript et Node.js.</p>
                <p className="text-xl mb-5">Je suis également disponible pour des missions freelance.</p>
                <a href="/cv.pdf" className="text-blue-500 underline mb-10">Voir mon CV</a>
                <button className="px-8 py-3 bg-blue-500 text-white rounded-full">Voir mes travaux</button>
            </div>
        </section>
    )
}

export default Hero