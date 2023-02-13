import React from 'react';

const GridLine = ({position, rotation}) => {
    return (
        <mesh position={position} rotation={rotation}>
            <boxGeometry args={[0.05, 7, 0.15]} />
            <meshStandardMaterial
                metalness={0.9}
                roughness={1}
                color={'#FFFDD0'}
            />
        </mesh>
    )
}

export default React.memo(GridLine);