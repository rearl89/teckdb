const Copper01Details = ({copper01}) => {
    return (
        <div className="anode-details">
            <h4>Batch ID: {copper01.batchID} Set #: {copper01.set}</h4>
            <p><strong>Pass Post:</strong> {copper01.postPass} <strong>Sponge Pass:</strong> {copper01.spongePass}</p>
            <p><strong>Rng1b:</strong> {copper01.rng1b} <strong>Rng1m:</strong> {copper01.rng1b} <strong>Rng1t:</strong> {copper01.rng1t} <strong>Rng1 Avg:</strong> {copper01.rng1Average}</p>
            <p><strong>Rng1b:</strong> {copper01.rng1b} <strong>Rng2m:</strong> {copper01.rng2b} <strong>Rng2t:</strong> {copper01.rng2t} <strong>Rng2 Avg:</strong> {copper01.rng2Average}</p>
            <p><strong>Rng1b:</strong> {copper01.rng1b} <strong>Rng3m:</strong> {copper01.rng3b} <strong>Rng3t:</strong> {copper01.rng3t} <strong>Rng3 Avg:</strong> {copper01.rng3Average}</p>
            <p><strong>Rng1b:</strong> {copper01.rng1b} <strong>Rng4m:</strong> {copper01.rng4b} <strong>Rng4t:</strong> {copper01.rng4t} <strong>Rng4 Avg:</strong> {copper01.rng4Average}</p>
            <p><strong>Rng1od1:</strong> {copper01.rng1od1} <strong>Rng1od2:</strong> {copper01.rng1od2} <strong>Rng1od Avg:</strong> {copper01.rng1odAverage}</p>
            <p><strong>Rng2od1:</strong> {copper01.rng2od1} <strong>Rng2od2:</strong> {copper01.rng2od2} <strong>Rng2od Avg:</strong> {copper01.rng2odAverage}</p>
            <p><strong>Rng3od1:</strong> {copper01.rng3od1} <strong>Rng3od2:</strong> {copper01.rng3od2} <strong>Rng3od3:</strong> {copper01.rng3od3} <strong>Rng3od4:</strong> {copper01.rng3od4} <strong>Rng3od Avg:</strong> {copper01.rng3odAverage}</p>
            <p><strong>Rng4od1:</strong> {copper01.rng4od1} <strong>Rng4od2:</strong> {copper01.rng4od2} <strong>Rng4od3:</strong> {copper01.rng4od3} <strong>Rng4od4:</strong> {copper01.rng4od4} <strong>Rng4od Avg:</strong> {copper01.rng4odAverage}</p>
            <p>{copper01.createdAt}</p>
        </div>
    )
}

export default Copper01Details