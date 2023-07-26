import format from 'date-fns/format'

const ListCopper01Details = ({copper01}) => {
    return (
        <div className="listContainer">       
                    <p>&nbsp;<strong>{copper01.batchID}</strong></p>
                    <p><strong>{copper01.set}</strong></p>
                    <p>{format(new Date(copper01.createdAt), 'MM-dd-yyyy')}</p>
                    <p>{copper01.postPass}</p>
                    <p>{copper01.spongePass}</p>
                    <p>{copper01.rng1b}</p>
                    <p>{copper01.rng1m}</p>
                    <p>{copper01.rng1t}</p>
                    <p><strong>{copper01.rng1Average}</strong></p>
                    <p>{copper01.rng2b}</p>
                    <p>{copper01.rng2m}</p>
                    <p>{copper01.rng2t}</p>
                    <p><strong>{copper01.rng2Average}</strong></p>
                    <p>{copper01.rng3b}</p>
                    <p>{copper01.rng3m}</p>
                    <p>{copper01.rng3t}</p>
                    <p><strong>{copper01.rng3Average}</strong></p>
                    <p>{copper01.rng4b}</p>
                    <p>{copper01.rng4m}</p>
                    <p>{copper01.rng4t}</p>
                    <p><strong>{copper01.rng4Average}</strong></p>
                    <p>{copper01.rng1od1}</p>
                    <p>{copper01.rng1od2}</p>
                    <p><strong>{copper01.rng1odAverage}</strong></p>
                    <p>{copper01.rng2od1}</p>
                    <p>{copper01.rng2od2}</p>
                    <p><strong>{copper01.rng2odAverage}</strong></p>
                    <p>{copper01.rng3od1}</p>
                    <p>{copper01.rng3od2} </p>
                    <p>{copper01.rng3od3}</p>
                    <p>{copper01.rng3od4} </p>
                    <p><strong>{copper01.rng3odAverage}</strong></p>
                    <p>{copper01.rng4od1}</p>
                    <p>{copper01.rng4od2}</p>
                    <p>{copper01.rng4od3}</p>
                    <p>{copper01.rng4od4}</p>
                    <p><strong>{copper01.rng4odAverage}</strong></p>    
        </div>
    )
}

export default ListCopper01Details