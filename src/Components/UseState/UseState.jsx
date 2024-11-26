import { useState } from 'react';
import "../UseState/useState.css"

export const UseState = () => {
  const [isActive, setIsActive] = useState(false);

  const backgroundClassName = isActive
    ? 'background background--inactive'
    : 'background background--active';

  const pictureClassName = isActive
    ? 'picture picture--active'
    : 'picture';

  return (
    <div
      className={backgroundClassName}
      onClick={() => setIsActive(false)}
    >
      <img
        onClick={(e) => {
          e.stopPropagation();
          setIsActive(true);
        }}
        className={pictureClassName}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}
