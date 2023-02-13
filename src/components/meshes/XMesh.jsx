import React, { useRef, useMemo, useState, useLayoutEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";

const XMesh = ({ position }) => {

    const ref = useRef();
    const oneRef = useRef()
    const twoRef = useRef()

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y -= 0.01;
        }
    });

    useLayoutEffect(() => {
        gsap.to(oneRef.current.scale, {duration: .3, x: 0.15, y:0.15, z:0.15});
        gsap.to(twoRef.current.scale, {duration: .3, delay: 0.3, x: 0.15, y:0.15, z:0.15});

    }, [])

    return (
        <>
            <group position={position} ref={ref}>
                <mesh scale={0.015} rotation={[0, 0, 40]} ref={oneRef}>
                    <capsuleGeometry args={[1, 10, 4, 12]} />
                    <meshStandardMaterial
                        color={"#de2414"}
                        metalness={0.15}
                        roughness={0.1}
                    />
                </mesh>
                <mesh scale={0.015} rotation={[0, 0, -40]} ref={twoRef}>
                    <capsuleGeometry args={[1, 10, 4, 12]} />
                    <meshStandardMaterial
                        color={"#de2414"}
                        metalness={0.15}
                        roughness={0.1}
                    />
                </mesh>
            </group>
        </>
    );
}

export default React.memo(XMesh);