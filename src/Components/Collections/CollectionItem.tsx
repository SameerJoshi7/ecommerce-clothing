import React from 'react'
import './CollectionItem.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }: any): JSX.Element => {
    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="collection-footer" key={id}>
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    )
}
export default CollectionItem;