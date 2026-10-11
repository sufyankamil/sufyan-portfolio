"use client"

import React, { useEffect, useRef } from "react"
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"

interface WalkCanvasProps {
  progress: number
}

export function WalkCanvas({ progress }: WalkCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const progressRef = useRef(progress)
  progressRef.current = progress

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    let animationFrameId: number
    const width = container.clientWidth
    const height = container.clientHeight

    // 1. Scene & Atmosphere
    const scene = new THREE.Scene()
    scene.background = new THREE.Color("#05070d")
    scene.fog = new THREE.Fog("#05070d", 6, 32)

    // 2. Camera (Full-body third person view)
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 60)
    camera.position.set(0, 2.5, -6.5)

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: "high-performance",
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85)
    scene.add(ambientLight)

    // Back key light on character
    const backLight = new THREE.DirectionalLight(0xffffff, 1.4)
    backLight.position.set(0, 7, -6)
    scene.add(backLight)

    const dirLight = new THREE.DirectionalLight(0x93c5fd, 1.5)
    dirLight.position.set(6, 10, 5)
    dirLight.castShadow = true
    dirLight.shadow.mapSize.width = 1024
    dirLight.shadow.mapSize.height = 1024
    scene.add(dirLight)

    // Volumetric God Ray through the open gate
    const godRayLight = new THREE.SpotLight(0x60a5fa, 0, 22, Math.PI / 4.5, 0.5, 1.2)
    godRayLight.position.set(0, 2.4, 10.6)
    const godRayTarget = new THREE.Object3D()
    godRayTarget.position.set(0, 1.2, 4)
    scene.add(godRayTarget)
    godRayLight.target = godRayTarget
    scene.add(godRayLight)

    // 5. High-Tech Floor & Runway
    // Main Dark Reflective Floor
    const floorGeo = new THREE.PlaneGeometry(40, 50)
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x050811,
      roughness: 0.4,
      metalness: 0.6,
    })
    const floor = new THREE.Mesh(floorGeo, floorMat)
    floor.rotation.x = -Math.PI / 2
    floor.position.set(0, -0.01, 8)
    floor.receiveShadow = true
    scene.add(floor)

    // Subtle Ground Grid
    const grid = new THREE.GridHelper(30, 30, 0x1e293b, 0x0f172a)
    grid.position.set(0, 0, 8)
    scene.add(grid)

    // Elevated Glowing Runway Platform
    const runwayGeo = new THREE.BoxGeometry(3.2, 0.04, 28)
    const runwayMat = new THREE.MeshStandardMaterial({
      color: 0x0b1120,
      roughness: 0.3,
      metalness: 0.7,
    })
    const runway = new THREE.Mesh(runwayGeo, runwayMat)
    runway.position.set(0, 0.02, 6)
    runway.receiveShadow = true
    scene.add(runway)

    // Neon Edge Light Tubes (Left = Cyan, Right = Indigo)
    const edgeTubeGeo = new THREE.BoxGeometry(0.06, 0.06, 28)
    const leftNeonMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff })
    const rightNeonMat = new THREE.MeshBasicMaterial({ color: 0x818cf8 })

    const leftEdgeTube = new THREE.Mesh(edgeTubeGeo, leftNeonMat)
    leftEdgeTube.position.set(-1.6, 0.05, 6)
    scene.add(leftEdgeTube)

    const rightEdgeTube = new THREE.Mesh(edgeTubeGeo, rightNeonMat)
    rightEdgeTube.position.set(1.6, 0.05, 6)
    scene.add(rightEdgeTube)

    // Point lights casting neon glow on the path
    const leftNeonLight = new THREE.PointLight(0x00f0ff, 2, 8)
    leftNeonLight.position.set(-1.7, 0.4, 4)
    scene.add(leftNeonLight)

    const rightNeonLight = new THREE.PointLight(0x818cf8, 2, 8)
    rightNeonLight.position.set(1.7, 0.4, 7)
    scene.add(rightNeonLight)

    // Glowing Runway Dashes
    const dashGeo = new THREE.PlaneGeometry(0.12, 0.8)
    const dashMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.6 })
    for (let z = -3; z <= 8; z += 2.2) {
      const dash = new THREE.Mesh(dashGeo, dashMat)
      dash.rotation.x = -Math.PI / 2
      dash.position.set(0, 0.045, z)
      scene.add(dash)
    }

    // 6. Futuristic Holographic Warp Arches along the path (Expanded & Non-clipping)
    const arch1Mat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.85 })
    const arch2Mat = new THREE.MeshBasicMaterial({ color: 0x818cf8, transparent: true, opacity: 0.85 })

    const createArch = (zPos: number, material: THREE.MeshBasicMaterial) => {
      const archGroup = new THREE.Group()

      // Tall Left column (height 4.8m, placed at x = -2.4)
      const colGeo = new THREE.BoxGeometry(0.08, 4.8, 0.08)
      const leftCol = new THREE.Mesh(colGeo, material)
      leftCol.position.set(-2.4, 2.4, 0)
      archGroup.add(leftCol)

      // Tall Right column (height 4.8m, placed at x = 2.4)
      const rightCol = new THREE.Mesh(colGeo, material)
      rightCol.position.set(2.4, 2.4, 0)
      archGroup.add(rightCol)

      // High Top crossbeam (at y = 4.8m, well above head & camera)
      const beamGeo = new THREE.BoxGeometry(4.88, 0.08, 0.08)
      const topBeam = new THREE.Mesh(beamGeo, material)
      topBeam.position.set(0, 4.8, 0)
      archGroup.add(topBeam)

      archGroup.position.set(0, 0, zPos)
      return archGroup
    }

    const arch1 = createArch(2.0, arch1Mat) // Arch 1
    const arch2 = createArch(6.0, arch2Mat) // Arch 2
    scene.add(arch1)
    scene.add(arch2)

    // 7. Portal Energy Vortex (Behind the Gate at z = 9.75)
    const portalGroup = new THREE.Group()
    portalGroup.position.set(0, 2.2, 9.75)

    // Outer spinning neon ring
    const outerRingGeo = new THREE.TorusGeometry(2.3, 0.04, 16, 64)
    const outerRingMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff })
    const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat)
    portalGroup.add(outerRing)

    // Inner counter-spinning neon ring
    const innerRingGeo = new THREE.TorusGeometry(1.65, 0.03, 16, 64)
    const innerRingMat = new THREE.MeshBasicMaterial({ color: 0xa855f7 })
    const innerRing = new THREE.Mesh(innerRingGeo, innerRingMat)
    portalGroup.add(innerRing)

    // Center glowing energy disc
    const coreDiscGeo = new THREE.CircleGeometry(1.4, 32)
    const coreDiscMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
    })
    const coreDisc = new THREE.Mesh(coreDiscGeo, coreDiscMat)
    portalGroup.add(coreDisc)

    // Pulsing central light source
    const portalCoreLight = new THREE.PointLight(0xa855f7, 0, 10)
    portalCoreLight.position.set(0, 0, 0.2)
    portalGroup.add(portalCoreLight)

    scene.add(portalGroup)

    // 8. Ambient Sparkles / Stardust
    const particleCount = 180
    const particleGeo = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14
      positions[i * 3 + 1] = Math.random() * 6 + 0.2
      positions[i * 3 + 2] = Math.random() * 26 - 4
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.045,
      transparent: true,
      opacity: 0.75,
    })
    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    // 9. Load GLTF Model (Character + Gate)
    let mixer: THREE.AnimationMixer | null = null
    let walkAction: THREE.AnimationAction | null = null
    let characterArmature: THREE.Object3D | null = null
    let leftDoor: THREE.Object3D | null = null
    let rightDoor: THREE.Object3D | null = null

    const loader = new GLTFLoader()
    loader.load(
      "/scene.glb",
      (gltf) => {
        const root = gltf.scene
        scene.add(root)

        root.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true
            child.receiveShadow = true
          }
          if (child.name === "Armature") {
            characterArmature = child
          }
          if (child.name === "Door_DoubleLeft") {
            leftDoor = child
          }
          if (child.name === "Door_DoubleRight") {
            rightDoor = child
          }
        })

        if (gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(characterArmature || root)
          walkAction = mixer.clipAction(gltf.animations[0])
          walkAction.play()
        }
      },
      undefined,
      (error) => {
        console.error("Error loading /scene.glb:", error)
      }
    )

    // Mouse parallax
    const mouse = { x: 0, y: 0 }
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 0.4
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 0.2
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Handle Resize
    const handleResize = () => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener("resize", handleResize)

    // 10. Animation Loop
    const clock = new THREE.Clock()
    let currentZ = 0
    let currentDoorAngle = 0

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      const delta = clock.getDelta()
      const p = progressRef.current

      // Target character Z
      const targetZ = p * 11.5
      currentZ = THREE.MathUtils.lerp(currentZ, targetZ, 0.08)

      if (characterArmature) {
        characterArmature.position.z = currentZ
      }

      // Update walk animation
      if (mixer && walkAction) {
        const isWalking = p > 0.01 && p < 0.95
        walkAction.timeScale = isWalking ? 1.25 : 0.2
        mixer.update(delta)
      }

      // Open Gate Doors (progress 0.50 to 0.80)
      const doorOpenProgress = THREE.MathUtils.clamp((p - 0.5) / 0.3, 0, 1)
      const targetAngle = doorOpenProgress * (Math.PI * 0.48)
      currentDoorAngle = THREE.MathUtils.lerp(currentDoorAngle, targetAngle, 0.08)

      if (leftDoor) {
        leftDoor.rotation.z = currentDoorAngle
      }
      if (rightDoor) {
        rightDoor.rotation.z = -currentDoorAngle
      }

      // Animate Portal Vortex
      outerRing.rotation.z += delta * 0.6
      innerRing.rotation.z -= delta * 0.9
      const portalScale = 0.6 + doorOpenProgress * 0.4
      portalGroup.scale.set(portalScale, portalScale, portalScale)

      // Portal energy glow & God ray intensity tied to door open progress
      coreDiscMat.opacity = doorOpenProgress * 0.85
      portalCoreLight.intensity = doorOpenProgress * 12
      godRayLight.intensity = doorOpenProgress * 15

      // Floating particles gentle drift
      particles.rotation.y += delta * 0.03

      // Dissolve arches as camera approaches so they never clip
      const camZ = camera.position.z
      arch1Mat.opacity = THREE.MathUtils.clamp((Math.abs(camZ - 2.0) - 0.6) / 1.8, 0, 0.85)
      arch2Mat.opacity = THREE.MathUtils.clamp((Math.abs(camZ - 6.0) - 0.6) / 1.8, 0, 0.85)

      // Cinematic Dynamic Camera Curves based on scroll progress (p)
      let dynamicDist = 6.8
      let dynamicHeight = 2.6
      let dynamicLookY = 1.4

      if (p < 0.25) {
        // Wide opening establishing shot
        dynamicDist = THREE.MathUtils.lerp(7.2, 6.2, p / 0.25)
        dynamicHeight = THREE.MathUtils.lerp(2.8, 2.4, p / 0.25)
      } else if (p < 0.65) {
        // Balanced cruising follow
        dynamicDist = 6.2
        dynamicHeight = 2.4
      } else if (p < 0.88) {
        // Dramatic swoop closer and lower as gate opens
        const factor = (p - 0.65) / 0.23
        dynamicDist = THREE.MathUtils.lerp(6.2, 4.4, factor)
        dynamicHeight = THREE.MathUtils.lerp(2.4, 1.85, factor)
        dynamicLookY = THREE.MathUtils.lerp(1.4, 1.85, factor) // tilt up toward portal
      } else {
        // Pass through gate threshold
        dynamicDist = 4.2
        dynamicHeight = 1.85
        dynamicLookY = 1.9
      }

      const targetCamX = mouse.x * 0.9
      const targetCamY = dynamicHeight - mouse.y * 0.5
      const targetCamZ = currentZ - dynamicDist

      camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetCamX, 0.08)
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetCamY, 0.08)
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetCamZ, 0.08)

      camera.up.set(0, 1, 0)
      camera.lookAt(mouse.x * 0.35, dynamicLookY, currentZ + 2.2)

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      renderer.dispose()
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  )
}
