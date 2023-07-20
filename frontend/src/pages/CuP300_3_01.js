const CUP300_3_01 = () => {



    return (
        <div className="page">
            <h2>3-300 CuP (01)</h2>
            <div className="anodes">
                {cup_300_3_01Anodes && cup_300_3_01Anodes.map((cup_300_3_01) => (
                    <p key={cup_300_3_01._id}>{cup_300_3_01.batchID}</p>
                ))}
            </div>
        </div>
    )
}

export default CUP300_3_01