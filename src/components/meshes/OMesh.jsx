import React, { useLayoutEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";

const OMesh = ({ position }) => {
    const ref = useRef()

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.03
        }
    })

    useLayoutEffect(() => {
        gsap.to(ref.current.scale, {duration: .7, x: 0.1, y:0.1, z:0.1})
    }, [])

    return (
        <>
            <mesh position={position} ref={ref} scale={0.001}>
                <torusGeometry args={[6, 2, 16, 67]} />
                <meshStandardMaterial
                    color={'#006a6a'}
                    metalness={0.15}
                    roughness={0.1}
                />
            </mesh>
        </>
    );
}

export default React.memo(OMesh)