function Feladat(props)
{
    function katt() {
        props.nagyKepCsere(props.adat.id);
    }
    return (
        <div>
            <div>
                <select>{}</select>
            </div>
            <button onClick={katt}>Következő</button>
        </div>
    );
}

export default Feladat;