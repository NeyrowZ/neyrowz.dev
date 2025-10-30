import { useState, useRef } from "react";

export default () => {
    const [active, setActive] = useState("about");
    const about = useRef(null);
    const work = useRef(null);
    const contact = useRef(null);
    const handleScroll = (ref, section) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
        setActive(section);
    };

    return (
        <>
            <header>
                <div class="title">
                    <h1>NeyrowZ</h1>
                    <h2 class="job">Java & Web Developer</h2>
                    <h2 class="location">France</h2>
                </div>
                <nav>
                    <a onClick={() => handleScroll(about, 'about')} className={active === 'about' && 'active'}>* About</a>
                    <a onClick={() => handleScroll(work, 'work')} className={active === 'work' && 'active'}>* Experience<br/>&nbsp; & Projects</a>
                    <a onClick={() => handleScroll(contact, 'contact')} className={active === 'contact' && 'active'}>* Contact</a>
                </nav>
                <div class="socials">
                    <a href="https://github.com/NeyrowZ" target="_blank">
                        <i class="fa-brands fa-github"></i>
                        <span>NeyrowZ</span>
                    </a>
                </div>
            </header>
            <main>
                <section ref={about}>
                    <h2>About</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deleniti soluta neque deserunt at nemo itaque magnam nobis necessitatibus? Optio eos officia maxime tempore ipsum, repudiandae facilis doloremque repellendus esse.</p>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </section>
                <section ref={work}>
                    <h2>Experience & Projects</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deleniti soluta neque deserunt at nemo itaque magnam nobis necessitatibus? Optio eos officia maxime tempore ipsum, repudiandae facilis doloremque repellendus esse.</p>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </section>
                <section ref={contact}>
                    <h2>Contact</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deleniti soluta neque deserunt at nemo itaque magnam nobis necessitatibus? Optio eos officia maxime tempore ipsum, repudiandae facilis doloremque repellendus esse.</p>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </section>
            </main>
        </>
    );
};