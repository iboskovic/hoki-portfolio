const LayoutMid = () => {
    return (
        <div>
            <div className="l__nav">
                <a href="#projects" className="type--color--primary type--uppercase">Projects</a>
                <a href="#about" className="type--color--primary type--uppercase">About</a>
                <a href="#contact" className="type--color--primary type--uppercase">Contact</a>
            </div>
            <div className="m--t-262 title">
                <div className="type--lg type--wgt--extra-bold type--color--primary">Design or <span className="type--color--secondary type--wgt--light-italic">die</span>.</div>
                <div className="type--wgt--regular type--sm type--color--secondary m--l-16 m--t-16">Don't</div>
                <div className="title__image">
                </div>
            </div>

            <div className="m--t-472 m--l-16 about" id="about">
                <div className="w--734">
                    <div className="type--base type--color--secondary type--wgt--regular m--b-40">I’m 27-Year-old creative and enthusiastic designer based in Osijek Croatia and working in small tech agency.</div>

                    <div className="type--base type--color--secondary type--wgt--regular m--b-40">I’m in love with what I do so it never stops. Im always open for some cool ideas and projects. As freelancer, I work with companies, agencies, startups or individuals.</div>

                    <div className="type--base type--color--secondary type--wgt--regular">Skilled in combining user needs and expectations with client requirements in order to deliver high quality products following UI patterns and best practices.</div>
                </div>
                <div className="about__image">
                    {/* <img className='title__image' src={hokiTitle} alt="hoki-title" /> */}
                </div>
            </div>

            <div className="m--t-242" id="projects">
                <div className="project">
                    <div className="type--lg type--color--primary type--wgt--bold">Releese</div>
                    <div>
                        <div className="type--base type--color--secondary type--wgt--bold m--b-8">Lead UX/UI Designer</div>
                        <div className="type--base type--color--secondary type--wgt--regular">Mobile app</div>
                    </div>
                </div>

                <div className="project">
                    <div className="type--lg type--color--primary type--wgt--bold">Jedemi.<span className="type--wgt--light-italic type--color--primary">se</span></div>
                    <div>
                        <div className="type--base type--color--secondary type--wgt--bold m--b-8">Lead UX/UI Designer</div>
                        <div className="type--base type--color--secondary type--wgt--regular">Web app</div>
                    </div>
                </div>

                <div className="project">
                    <div className="type--lg type--color--primary type--wgt--bold">Optika <span className="type--wgt--light-italic type--color--primary">Anda</span></div>
                    <div>
                        <div className="type--base type--color--secondary type--wgt--bold m--b-8">UX/UI Designer</div>
                        <div className="type--base type--color--secondary type--wgt--regular">Website</div>
                    </div>
                </div>

                <div className="project">
                    <div className="type--lg type--color--primary type--wgt--bold">GPŠ</div>
                    <div>
                        <div className="type--base type--color--secondary type--wgt--bold m--b-8">Lead UX/UI Designer</div>
                        <div className="type--base type--color--secondary type--wgt--regular">Website</div>
                    </div>
                </div>

                <div className="project">
                    <div className="type--lg type--color--primary type--wgt--bold">Olive <span className="type--wgt--light-italic type--color--primary">oil</span></div>
                    <div>
                        <div className="type--base type--color--secondary type--wgt--bold m--b-8">Lead UX/UI Designer</div>
                        <div className="type--base type--color--secondary type--wgt--regular">Website</div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default LayoutMid;