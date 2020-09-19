import React from 'react';
import './PreviewCollection.styles.scss';
import { title } from 'process';
import CollectionItem from '../Collections/CollectionItem';

const PreviewCollection = ({ title, items }: any): JSX.Element => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.map(({ id, ...otherItemProps }: any) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))}
            </div>
        </div>
    )
}
export default PreviewCollection;