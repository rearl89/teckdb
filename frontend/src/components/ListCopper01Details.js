import format from 'date-fns/format'

const ListCopper01Details = ({copper01}) => {
    return (
        <div className="listContainer">       
                    <p>&nbsp;{copper01.batchID}</p>
                    <p>{copper01.set}</p>
                    <p>{format(new Date(copper01.createdAt), 'MM-dd-yyyy')}</p>
                    <p>{copper01.postPass}</p>
                    <p>{copper01.spongePass}</p>
                    <p>{copper01.rng1b}</p>
                    <p>{copper01.rng1m}</p>
                    <p>{copper01.rng1t}</p>
                    <p>{copper01.rng1Average}</p>
                    <p>{copper01.rng2b}</p>
                    <p>{copper01.rng2m}</p>
                    <p>{copper01.rng2t}</p>
                    <p>{copper01.rng2Average}</p>
                    <p>{copper01.rng3b}</p>
                    <p>{copper01.rng3m}</p>
                    <p>{copper01.rng3t}</p>
                    <p>{copper01.rng3Average}</p>
                    <p>{copper01.rng4b}</p>
                    <p>{copper01.rng4m}</p>
                    <p>{copper01.rng4t}</p>
                    <p>{copper01.rng4Average}</p>
                    <p>{copper01.rng1od1}</p>
                    <p>{copper01.rng1od2}</p>
                    <p>{copper01.rng1odAverage}</p>
                    <p>{copper01.rng2od1}</p>
                    <p>{copper01.rng2od2}</p>
                    <p>{copper01.rng2odAverage}</p>
                    <p>{copper01.rng3od1}</p>
                    <p>{copper01.rng3od2} </p>
                    <p>{copper01.rng3od3}</p>
                    <p>{copper01.rng3od4} </p>
                    <p>{copper01.rng3odAverage}</p>
                    <p>{copper01.rng4od1}</p>
                    <p>{copper01.rng4od2}</p>
                    <p>{copper01.rng4od3}</p>
                    <p>{copper01.rng4od4}</p>
                    <p>{copper01.rng4odAverage}</p>
                    
        </div>
    )
}

export default ListCopper01Details