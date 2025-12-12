export default ({ id, active, children }) => {

    const handleScroll = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <a onClick={() => handleScroll(id)} className={active === id ? "active" : ""}>* { children }</a>
    );
};