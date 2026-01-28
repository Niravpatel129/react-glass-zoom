import { FC, ReactElement } from 'react';

export interface MagnifierWrapperProps {
  /**
   * The image element to apply magnification to.
   * Should be an img element with a src prop.
   */
  children: ReactElement;
  
  /**
   * Height of the magnifier glass in pixels.
   * @default 200
   */
  magnifierHeight?: number;
  
  /**
   * Width of the magnifier glass in pixels.
   * @default 200
   */
  magnifierWidth?: number;
  
  /**
   * Zoom level for magnification.
   * @default 3
   */
  zoomLevel?: number;
}

/**
 * React Glass Zoom Component
 * 
 * A React component that provides a magnification effect on images,
 * similar to a magnifying glass.
 */
declare const MagnifierWrapper: FC<MagnifierWrapperProps>;

export default MagnifierWrapper;
