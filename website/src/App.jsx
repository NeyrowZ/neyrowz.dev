import { useState, useRef } from "react";

export default () => {
    const [active, setActive] = useState("about");
    const refs = {
        about: useRef(null),
        work: useRef(null),
        contact: useRef(null)
    };
    
    const handleScroll = (id) => {
        refs[id].current?.scrollIntoView({ behavior: "smooth" });
        setActive(id);
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
                    <a onClick={() => handleScroll('about')} className={active === 'about' && 'active'}>* About</a>
                    <a onClick={() => handleScroll('work')} className={active === 'work' && 'active'}>* Experience<br/>&nbsp; & Projects</a>
                    <a onClick={() => handleScroll('contact')} className={active === 'contact' && 'active'}>* Contact</a>
                </nav>
                <div class="socials">
                    <a href="https://github.com/NeyrowZ" target="_blank" rel="noopener" referrerpolicy="no-referrer">
                        <i class="fa-brands fa-github"></i>
                        <span>NeyrowZ</span>
                    </a>
                </div>
            </header>
            <main>
                <section ref={refs.about}>
                    <h2>About</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deleniti soluta neque deserunt at nemo itaque magnam nobis necessitatibus? Optio eos officia maxime tempore ipsum, repudiandae facilis doloremque repellendus esse.</p>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </section>
                <section ref={refs.work}>
                    <h2>Experience & Projects</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deleniti soluta neque deserunt at nemo itaque magnam nobis necessitatibus? Optio eos officia maxime tempore ipsum, repudiandae facilis doloremque repellendus esse.</p>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </section>
                <section ref={refs.contact}>
                    <h2>Contact</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deleniti soluta neque deserunt at nemo itaque magnam nobis necessitatibus? Optio eos officia maxime tempore ipsum, repudiandae facilis doloremque repellendus esse.</p>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </section>
            </main>
        </>
    );
};