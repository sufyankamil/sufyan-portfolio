// Web Audio API ambient sound generator (No external audio files needed!)
class SoundManager {
  private ctx: AudioContext | null = null
  private masterGain: GainNode | null = null
  private droneGain: GainNode | null = null
  private filter: BiquadFilterNode | null = null
  private osc1: OscillatorNode | null = null
  private osc2: OscillatorNode | null = null
  private isMuted: boolean = true
  private hasInitialized: boolean = false
  private hasPlayedGateChime: boolean = false

  public init() {
    if (this.hasInitialized) return
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext
      if (!AudioCtx) return
      this.ctx = new AudioCtx()

      // Master Gain
      this.masterGain = this.ctx.createGain()
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.25, this.ctx.currentTime)
      this.masterGain.connect(this.ctx.destination)

      // Warm Lowpass Filter
      this.filter = this.ctx.createBiquadFilter()
      this.filter.type = "lowpass"
      this.filter.frequency.setValueAtTime(220, this.ctx.currentTime)
      this.filter.Q.setValueAtTime(2, this.ctx.currentTime)
      this.filter.connect(this.masterGain)

      // Ambient Drone Gain
      this.droneGain = this.ctx.createGain()
      this.droneGain.gain.setValueAtTime(0.2, this.ctx.currentTime)
      this.droneGain.connect(this.filter)

      // Deep Sub Oscillator (A1 - 55Hz)
      this.osc1 = this.ctx.createOscillator()
      this.osc1.type = "sine"
      this.osc1.frequency.setValueAtTime(55, this.ctx.currentTime)
      this.osc1.connect(this.droneGain)
      this.osc1.start()

      // Shimmer Oscillator (A2 - 110Hz with slight detune)
      this.osc2 = this.ctx.createOscillator()
      this.osc2.type = "triangle"
      this.osc2.frequency.setValueAtTime(110, this.ctx.currentTime)
      this.osc2.detune.setValueAtTime(8, this.ctx.currentTime)
      this.osc2.connect(this.droneGain)
      this.osc2.start()

      this.hasInitialized = true
    } catch (e) {
      console.warn("AudioContext init error:", e)
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted
    if (!this.hasInitialized && !muted) {
      this.init()
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume()
    }
    if (this.masterGain && this.ctx) {
      const targetGain = muted ? 0.0001 : 0.28
      this.masterGain.gain.exponentialRampToValueAtTime(
        targetGain,
        this.ctx.currentTime + 0.15
      )
    }
  }

  public getIsMuted(): boolean {
    return this.isMuted
  }

  public updateProgress(progress: number) {
    if (!this.hasInitialized || this.isMuted || !this.ctx || !this.filter) return

    const now = this.ctx.currentTime

    // Filter cutoff opens up as character gets closer to gate (200Hz to 1200Hz)
    const targetFreq = 200 + progress * 1000
    this.filter.frequency.setTargetAtTime(targetFreq, now, 0.1)

    // Trigger angelic portal chime when doors open (progress ~0.68)
    if (progress > 0.68 && !this.hasPlayedGateChime) {
      this.hasPlayedGateChime = true
      this.playPortalChime()
    } else if (progress < 0.4) {
      this.hasPlayedGateChime = false
    }
  }

  private playPortalChime() {
    if (!this.ctx || this.isMuted || !this.masterGain) return
    try {
      const now = this.ctx.currentTime
      const chimeOsc = this.ctx.createOscillator()
      const chimeGain = this.ctx.createGain()

      chimeOsc.type = "sine"
      chimeOsc.frequency.setValueAtTime(523.25, now) // C5
      chimeOsc.frequency.exponentialRampToValueAtTime(1046.5, now + 0.8) // C6

      chimeGain.gain.setValueAtTime(0.001, now)
      chimeGain.gain.linearRampToValueAtTime(0.18, now + 0.1)
      chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2)

      chimeOsc.connect(chimeGain)
      chimeGain.connect(this.masterGain)

      chimeOsc.start(now)
      chimeOsc.stop(now + 1.25)
    } catch (e) {
      // ignore
    }
  }

  public dispose() {
    if (this.ctx) {
      this.ctx.close()
      this.ctx = null
    }
    this.hasInitialized = false
  }
}

export const soundManager = new SoundManager()
