import React from 'react';
import ShopPageData from './ShopePageData';
import PreviewCollection from '../../PreviewCollection/PreviewCollection';

class ShopPage extends React.Component {

    public constructor(props: any) {
        super(props);
        this.state = {
            collections: ShopPageData
        }
    }

    public render(): JSX.Element {
        const { collections }: any = this.state;
        return (
            <div className="Shop-page">
                {
                    collections.map(({ id, ...otherCollectionProps }: any) => (
                        <PreviewCollection key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}
export default ShopPage;
