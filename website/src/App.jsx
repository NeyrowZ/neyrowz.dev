import { useState, useRef, useEffect } from "react";
import NavLink from "./components/NavLink/NavLink";

export default () => {
    const [active, setActive] = useState("about");
    const refs = {
        about: useRef(null),
        work: useRef(null),
        contact: useRef(null)
    };

    useEffect(() => {
        const main = document.querySelector("main");
        const sections = Array.from(main.querySelectorAll("section"));

        const onScroll = () => {
            const scrollTop = main.scrollTop;
            const scrollHeight = main.scrollHeight;
            const clientHeight = main.clientHeight;

            if (scrollTop === 0) {
                setActive(sections[0].id);
            } else if (scrollTop + clientHeight >= scrollHeight) {
                setActive(sections[sections.length - 1].id);
            } else {
                let mostVisible = 0;
                let mostVisibleId = sections[0].id;
                const mainRect = main.getBoundingClientRect();

                sections.forEach((sec) => {
                    const rect = sec.getBoundingClientRect();
                    const visible = Math.min(rect.bottom, mainRect.bottom) - Math.max(rect.top, mainRect.top);
                    if (visible > mostVisible) {
                        mostVisible = visible;
                        mostVisibleId = sec.id;
                    }
                });

                setActive(mostVisibleId);
            }
        };

        main.addEventListener("scroll", onScroll);
        return () => main.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <header>
                <div className="title">
                    <h1>NeyrowZ</h1>
                    <h2 className="job">Java & Web Developer</h2>
                    <h2 className="location">France</h2>
                </div>
                <nav>
                    <NavLink id="about" active={active}>About</NavLink>
                    <NavLink id="work" active={active}>Experience<br/>&nbsp; & Projects</NavLink>
                    <NavLink id="contact" active={active}>Contact</NavLink>
                </nav>
                <div className="socials">
                    <a href="https://github.com/NeyrowZ" target="_blank" rel="noopener" referrerPolicy="no-referrer">
                        <i className="fa-brands fa-github"></i>
                        <span>NeyrowZ</span>
                    </a>
                </div>
            </header>
            <main>
                <section id="about">
                    <h2>About</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veniam cupiditate tenetur libero blanditiis labore magnam in ipsum. Voluptatem magnam quasi fugit totam tempora dolorem doloribus cupiditate possimus? Quod, natus.</p>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </section>
                <section id="work">
                    <h2>Experience & Projects</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deleniti soluta neque deserunt at nemo itaque magnam nobis necessitatibus? Optio eos officia maxime tempore ipsum, repudiandae facilis doloremque repellendus esse.</p>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </section>
                <section id="contact">
                    <h2>Contact</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deleniti soluta neque deserunt at nemo itaque magnam nobis necessitatibus? Optio eos officia maxime tempore ipsum, repudiandae facilis doloremque repellendus esse.</p>
                </section>
            </main>
        </>
    );
};