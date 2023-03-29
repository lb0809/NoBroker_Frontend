import './directory-item.styles.scss';

const DirectoryItem = ({ property }) => {
    const { imageUrl, title } = property;
    return (
        <div className='directory-item-container'>
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className='Directory_item_body'>
                <h2>{title}</h2>
                <p>Explore Now</p>
            </div>
        </div>
    );
};

export default DirectoryItem;
