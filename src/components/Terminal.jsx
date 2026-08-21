import { useEffect, useState } from 'react'

/**
 * 终端风格的打字机效果
 */
export default function Terminal({ lines, className = '' }) {
  const [displayed, setDisplayed] = useState([])
  const [cursorOn, setCursorOn] = useState(true)

  useEffect(() => {
    let lineIdx = 0
    let charIdx = 0
    let timer

    const type = () => {
      if (lineIdx >= lines.length) return
      const line = lines[lineIdx]
      charIdx++
      setDisplayed(
        lines.map((l, i) => {
          if (i < lineIdx) return l
          if (i === lineIdx) return l.slice(0, charIdx)
          return ''
        }),
      )
      if (charIdx >= line.length) {
        lineIdx++
        charIdx = 0
        timer = setTimeout(type, 260)
      } else {
        timer = setTimeout(type, 24)
      }
    }

    timer = setTimeout(type, 500)
    const blink = setInterval(() => setCursorOn((c) => !c), 530)
    return () => {
      clearTimeout(timer)
      clearInterval(blink)
    }
  }, [lines])

  return (
    <div className={`terminal ${className}`}>
      <div className="terminal-bar">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="terminal-title">zhaoyunqi@hk: ~</span>
      </div>
      <div className="terminal-body">
        {displayed.map((line, i) => (
          <p key={i} className="terminal-line">
            {line.startsWith('$') || line.startsWith('#') ? (
              <>
                <span className="prompt">{line.slice(0, 1)} </span>
                <span className="cmd">{line.slice(2)}</span>
              </>
            ) : (
              <span className="output">{line}</span>
            )}
          </p>
        ))}
        <p className="terminal-line">
          <span className="prompt">$ </span>
          <span className={`cursor${cursorOn ? '' : ' off'}`}>▊</span>
        </p>
      </div>
    </div>
  )
}
