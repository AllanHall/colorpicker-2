import React, { Component, useState } from 'react'

export default function HSL() {
  const [hue, setHue] = useState(Math.floor(Math.random() * 360))
  const [saturation, setSaturation] = useState(Math.floor(Math.random() * 100))
  const [lightness, setLightness] = useState(Math.floor(Math.random() * 100))
  const [alpha, setAlpha] = useState(Math.floor(Math.random() * 100) / 100)

  const pickRandomColor = () => {
    setHue(Math.floor(Math.random() * 360))
    setSaturation(Math.floor(Math.random() * 100))
    setLightness(Math.floor(Math.random() * 100))
    setAlpha(Math.floor(Math.random() * 100) / 100)
  }
  // hooks are sweet
  return (
    <>
      <section className="pattern">
        <main
          className="sliders"
          style={{
            backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
          }}
        >
          <header className="title">
            Pick a color, any color but Goldenrod
          </header>
          <div>
            <input
              type="range"
              min="1"
              max="360"
              class="slider"
              step="1"
              value={hue}
              onChange={e => setHue(e.target.value)}
            />
          </div>
          <div>
            <input
              type="range"
              min="1"
              max="100"
              class="slider"
              step="1"
              value={saturation}
              onChange={e => setSaturation(e.target.value)}
            />
          </div>
          <div>
            <input
              type="range"
              min="1"
              max="100"
              class="slider"
              step="1"
              value={lightness}
              onChange={e => setLightness(e.target.value)}
            />
          </div>
          <div>
            <input
              type="range"
              min="0"
              max="1"
              class="slider"
              step="0.01"
              value={alpha}
              onChange={e => setAlpha(e.target.value)}
            />
          </div>
          <div className="display-info">
            <p>Hue {hue}</p>
            <p>Saturation {saturation}</p>
            <p>Lightness {lightness}</p>
            <p>Alpha {alpha}</p>
          </div>
          <button className="button" onClick={() => pickRandomColor()}>
            Can Do
          </button>
        </main>
      </section>
    </>
  )
}
