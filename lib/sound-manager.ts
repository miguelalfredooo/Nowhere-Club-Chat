import * as Tone from "tone"

let isInitialized = false
let isStarted = false

async function initAudio() {
  if (isInitialized) return
  isInitialized = true
}

async function ensureAudioContext() {
  await initAudio()
  if (!isStarted && Tone.Destination.state === "suspended") {
    try {
      await Tone.start()
      isStarted = true
    } catch (e) {
      // Audio context may not be available yet
    }
  }
}

export async function playCardEnter(index: number) {
  await ensureAudioContext()

  const synth = new Tone.PolySynth(Tone.Synth, {
    oscillator: { type: "triangle" },
    envelope: {
      attack: 0.005,
      decay: 0.1,
      sustain: 0,
      release: 0.1,
    },
  }).toDestination()

  const baseFreq = 400
  const freq = baseFreq + index * 80

  synth.triggerAttackRelease(freq, "16n")
}

export async function playCardFlip() {
  await ensureAudioContext()

  const synth = new Tone.PolySynth(Tone.Synth, {
    oscillator: { type: "sine" },
    envelope: {
      attack: 0.001,
      decay: 0.08,
      sustain: 0,
      release: 0.05,
    },
  }).toDestination()

  synth.triggerAttackRelease(520, "32n")
}

export async function playCardExit() {
  await ensureAudioContext()

  const synth = new Tone.PolySynth(Tone.Synth, {
    oscillator: { type: "triangle" },
    envelope: {
      attack: 0.01,
      decay: 0.15,
      sustain: 0,
      release: 0.1,
    },
  }).toDestination()

  synth.triggerAttackRelease(350, "16n")
}
