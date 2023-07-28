import format from "date-fns/format";

const ListSnNexxDetails = ({sn_nexx}) => {
    return (
        <div className="listSnNexx">
            <p>&nbsp;<strong>{sn_nexx.batchID}</strong></p>
            <p>&nbsp;<strong>{sn_nexx.anode}</strong></p>
            <p>&nbsp;<strong>{format(new Date(sn_nexx.createdAt), 'MM-dd-yyyy')}</strong></p>
            <p>&nbsp;<strong>{sn_nexx.weight}</strong></p>
            <p>&nbsp;<strong>{sn_nexx.thickness}</strong></p>
            <p>&nbsp;<strong>{sn_nexx.visualPass}</strong></p>
            <p>&nbsp;<strong>{sn_nexx.comment}</strong></p>
        </div>
    )
}

export default ListSnNexxDetails