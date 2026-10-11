"use client"

import * as THREE from "three"
import React, { useEffect, useRef } from "react"
import { useGraph, useFrame } from "@react-three/fiber"
import { useGLTF, useAnimations } from "@react-three/drei"
import { SkeletonUtils } from "three-stdlib"

interface SceneModelProps {
  progress: number // 0 to 1
}

export function SceneModel({ progress }: SceneModelProps) {
  const group = useRef<THREE.Group>(null)
  const characterGroup = useRef<THREE.Group>(null)
  const leftDoorRef = useRef<THREE.Group>(null)
  const rightDoorRef = useRef<THREE.Group>(null)

  const { scene, animations } = useGLTF("/scene.glb") as any
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone) as any
  const { actions } = useAnimations(animations, group)

  // Initialize and play walk animation
  useEffect(() => {
    const walkAction = actions["mixamo.com"]
    if (walkAction) {
      walkAction.reset().play()
      // Pause it by default, we'll advance time based on movement
      walkAction.paused = false
    }
    return () => {
      walkAction?.stop()
    }
  }, [actions])

  useFrame((_, delta) => {
    // 1. Move character along Z axis based on progress
    // Starting at z = 0, moving towards the gate at z = 9.5
    // Walk forward between progress 0 and 0.85
    const targetZ = progress * 11.5 // walks slightly past the gate (z=9.56)
    
    if (characterGroup.current) {
      // Smooth lerp to target position
      characterGroup.current.position.z = THREE.MathUtils.lerp(
        characterGroup.current.position.z,
        targetZ,
        0.1
      )
    }

    // 2. Control walk animation speed based on movement
    const walkAction = actions["mixamo.com"]
    if (walkAction) {
      // If moving forward, walk at normal speed; if stationary, slow or stop
      const isMoving = progress > 0.01 && progress < 0.95
      walkAction.timeScale = isMoving ? 1.2 : 0.2
    }

    // 3. Open doors as character approaches (progress between 0.65 and 0.90)
    // Map progress 0.65 - 0.88 to 0 - 1
    const doorOpenProgress = THREE.MathUtils.clamp(
      (progress - 0.65) / 0.22,
      0,
      1
    )
    
    // Smooth door swing (approx 85 degrees)
    const targetAngle = doorOpenProgress * (Math.PI * 0.45)
    
    if (leftDoorRef.current) {
      // Swing left door inward/open
      leftDoorRef.current.rotation.z = THREE.MathUtils.lerp(
        leftDoorRef.current.rotation.z,
        targetAngle,
        0.1
      )
    }
    if (rightDoorRef.current) {
      // Swing right door inward/open in opposite direction
      rightDoorRef.current.rotation.z = THREE.MathUtils.lerp(
        rightDoorRef.current.rotation.z,
        -targetAngle,
        0.1
      )
    }
  })

  return (
    <group ref={group} dispose={null}>
      {/* Ground plane for shadows and atmosphere */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 6]} receiveShadow>
        <planeGeometry args={[20, 30]} />
        <meshStandardMaterial
          color="#0d1117"
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>

      {/* Pathway guide lines / subtle runway glow */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.001, 6]}>
        <planeGeometry args={[2.5, 24]} />
        <meshStandardMaterial
          color="#161b22"
          roughness={0.6}
        />
      </mesh>

      {/* Character Armature */}
      <group ref={characterGroup} position={[0, 0, 0]}>
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Body" geometry={nodes.Body.geometry} material={materials.Bodymat} skeleton={nodes.Body.skeleton} castShadow />
          <skinnedMesh name="Bottoms" geometry={nodes.Bottoms.geometry} material={materials.Bottommat} skeleton={nodes.Bottoms.skeleton} castShadow />
          <skinnedMesh name="Eyelashes" geometry={nodes.Eyelashes.geometry} material={materials.Eyelashmat} skeleton={nodes.Eyelashes.skeleton} />
          <skinnedMesh name="Eyes" geometry={nodes.Eyes.geometry} material={materials.Bodymat} skeleton={nodes.Eyes.skeleton} />
          <skinnedMesh name="Hair" geometry={nodes.Hair.geometry} material={materials.Hairmat} skeleton={nodes.Hair.skeleton} castShadow />
          <skinnedMesh name="Shoes" geometry={nodes.Shoes.geometry} material={materials.Shoesmat} skeleton={nodes.Shoes.skeleton} castShadow />
          <skinnedMesh name="Tops" geometry={nodes.Tops.geometry} material={materials.Topmat} skeleton={nodes.Tops.skeleton} castShadow />
        </group>
      </group>

      {/* Gate / Doors */}
      <group name="RootNode" position={[0.056, 0.164, 9.559]}>
        <group
          ref={leftDoorRef}
          name="Door_DoubleLeft"
          position={[-1.837, 0.034, 0.03]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh name="Door_DoubleLeft_1" geometry={nodes.Door_DoubleLeft_1.geometry} material={materials.Wood} castShadow />
          <mesh name="Door_DoubleLeft_2" geometry={nodes.Door_DoubleLeft_2.geometry} material={materials.Gold} />
        </group>

        <group
          ref={rightDoorRef}
          name="Door_DoubleRight"
          position={[1.64, 0.031, -0.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh name="Door_DoubleRight_1" geometry={nodes.Door_DoubleRight_1.geometry} material={materials.Wood} castShadow />
          <mesh name="Door_DoubleRight_2" geometry={nodes.Door_DoubleRight_2.geometry} material={materials.Gold} />
        </group>

        {/* Portal Light radiating through the door */}
        <pointLight position={[0, 2, 1.5]} intensity={8} color="#6366f1" distance={8} />
        <pointLight position={[0, 2, -0.5]} intensity={4} color="#a855f7" distance={6} />
      </group>
    </group>
  )
}

useGLTF.preload("/scene.glb")
