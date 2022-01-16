const Annenside = (props) => {
    return (
        <div>
            <h1>{props.tekst}</h1>
        </div>
    );
};

Annenside.defaultProps = {
    tekst: "Hei"
}



export default Annenside;
