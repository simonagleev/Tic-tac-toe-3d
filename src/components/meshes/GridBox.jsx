import React from 'react';
import { DoubleSide } from "three";
import OMesh from './OMesh';
import XMesh from './XMesh';

const GridBox = ({ shape, position, handleClick }) => {
    return (
        <>
            {
                shape === "O" ?
                    <OMesh position={position} />
                : shape === "X" ?
                    <XMesh position={position} />
                : null
            }

            <mesh position={position} onPointerDown={e => handleClick(e)}>
                <planeGeometry args={[2.5, 2.5]} />
                <meshLambertMaterial
                    transparent
                    opacity={0}
                    depthWrite={false}
                    side={DoubleSide}
                />
            </mesh>
        </>
    );
}

export default React.memo(GridBox);