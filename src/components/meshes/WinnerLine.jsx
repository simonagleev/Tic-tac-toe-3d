import React, { useLayoutEffect, useRef } from 'react';
import * as THREE from "three";

const WinnerLine = ({ positions, positionIndices }) => {
    const ref = useRef();

    const startPos = positions[positionIndices[0]];
    const endPos = positions[positionIndices[2]];

    useLayoutEffect(() => {
        ref.current.geometry.setFromPoints([startPos, endPos].map((point) => new THREE.Vector3(...point)))
    }, [startPos, endPos])

    return (
        <line ref={ref} >
            <bufferGeometry />
            <lineBasicMaterial color="red" linewidth={10} />
        </line>
    )
}

export default React.memo(WinnerLine);