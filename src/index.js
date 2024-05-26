import React, { useRef, useState } from 'react';

const MagnifierWrapper = ({
  children,
  width,
  height,
  magnifierHeight = 200,
  magnifieWidth = 200,
  zoomLevel = 3,
}) => {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const imageRef = useRef(null);

  return (
    <div
      style={{
        position: 'relative',
        height: height,
        width: width,
      }}
    >
      <img
        src={children.props.src}
        style={{ height: height, width: width }}
        ref={imageRef}
        onMouseEnter={(e) => {
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
          setShowMagnifier(true);
        }}
        onMouseMove={(e) => {
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();

          const x = e.pageX - left - window.pageXOffset;
          const y = e.pageY - top - window.pageYOffset;
          setXY([x, y]);
        }}
        onMouseLeave={() => {
          setShowMagnifier(false);
        }}
        alt={'img'}
      />

      <div
        style={{
          display: showMagnifier ? '' : 'none',
          position: 'absolute',

          pointerEvents: 'none',
          height: `${magnifierHeight}px`,
          width: `${magnifieWidth}px`,
          top: `${y - magnifierHeight / 2}px`,
          left: `${x - magnifieWidth / 2}px`,
          opacity: '1',
          border: '1px solid lightgray',
          backgroundColor: 'white',
          backgroundImage: `url('${children.props.src}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
          backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
        }}
      ></div>
    </div>
  );
};

export default MagnifierWrapper;
