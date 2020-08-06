import React from 'react'
import './Directory.styles.scss';
import MenuItem from '../MenuItems/MenuItems';

interface DirectoryState {
    sections: { title: string, imageUrl: any, id: number, size?: any, linkUrl: string }[];
}

export default class Directory extends React.Component<{}, DirectoryState> {

    public constructor(props: any) {
        super(props);
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://nitrolicious.com/wp-content/uploads/2016/02/Men-Look-10-sm.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        };
    }

    public render(): JSX.Element {
        return (
            <>
                <div className="directory-menu">
                    {this.state.sections.map((section) => (
                        <MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl} size={section.size} />
                    ))}
                </div>
            </>
        )
    }
}
