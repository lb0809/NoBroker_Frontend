import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';

const Directory = ({ properties }) => {
  return (
    <div className='directory-container'>
      {properties.map((property) => (
        <DirectoryItem key={property.id} property={property} />
      ))}
    </div>
  );
};

export default Directory;
