const CompetencePro = () => {
    return (
        <section id='section3'>
            <h2>Compétence en Développement</h2>
            <div className="competence">
                <h3>Frontend</h3>
                <p>HTML <progress value="100" max="100"></progress></p>
                <p>CSS <progress value="100" max="100"></progress></p>
                <p>JavaScript <progress value="100" max="100"></progress></p>
                <p>React <progress value="60" max="100"></progress></p>
                <p>Angular <progress value="40" max="100"></progress></p>

                <p>Blitz <progress value="40" max="100"></progress></p>
                <p>Next.js <progress value="40" max="100"></progress></p>
                <p>svelte <progress value="10" max="100"></progress></p>
                <h3>Backend</h3>
                <p>PHP <progress value="70" max="100"></progress></p>
                <p>blitz <progress value="40" max="100"></progress></p>
                <p>Laravel <progress value="30" max="100"></progress></p>
                <p>Node.js <progress value="10" max="100"></progress></p>
                <h3>Base de données</h3>
                <p>MySQL <progress value="75" max="100"></progress></p>
                <p>firestore <progress value="40" max="100"></progress></p>
                <p>MongoDB <progress value="20" max="100"></progress></p>

            </div>
            <h2>Compétence en Design</h2>
            <div className="competence">
                <h3>UI/UX</h3>
                <p>Figma <progress value="80" max="100"></progress></p>
                <p>Adobe XD <progress value="80" max="100"></progress></p>
                <h3>Graphisme</h3>
                <p>Photoshop <progress value="80" max="100"></progress></p>
                <p>Illustrator <progress value="80" max="100"></progress></p>
            </div>
        </section>
    )
}

export default CompetencePro