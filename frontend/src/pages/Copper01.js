import { useEffect, useState } from "react"

import Copper01Details from '../components/Copper01Details'


const Copper01 = () => {
    const [copper01s, setCopper01s] = useState(null)

    useEffect(() => {
        const fetchCopper01 = async () => {
            const response = await fetch('/copper01')
            const json = await response.json()

            if (response.ok) {
                setCopper01s(json)
            }
        }
        
        fetchCopper01()
    }, [])

    return (
        <div className="anodes">
            <h2>3-300 CuP (01)</h2>
            <div className="copper01s">
                {copper01s && copper01s.map((copper01) => (
                    <Copper01Details key={copper01._id} copper01={copper01} />
                ))}
            </div>
        </div>
    )
}

export default Copper01