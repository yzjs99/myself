import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { SECTION_IDS } from '../data/sections'

const SectionContext = createContext(null)

const RATIO = 0.35 // 阈值线：距视口顶部 35%
const JUMP_LOCK_MS = 900 // 导航跳转后的锁定时间（避免平滑滚动途中被 spy 干扰）
const STEP_LOCK_MS = 500 // 触底前进后的锁定时间（防止连续触发）
const ANCHOR_DELAY_MS = 600 // 区块切换后锚定滚动的延迟（等展开/收起动画结束）

/**
 * 管理右侧五个区块的「当前展开」状态（同一时间最多展开一个）：
 * - 阈值线：区块顶部越过视口 35% 阈值线 → 展开该区块、收起其余
 * - 触底前进：单开手风琴下页面较短，靠后区块的顶部到不了阈值线，
 *   因此滚到页面底部且当前不是最后一个区块时，前进到下一个区块
 * - 导航点击：jumpTo → 平滑滚动 + 短暂锁定，避免中途状态抖动
 * - 滚动锚定：区块切换后把当前区块顶部固定在阈值线，
 *   补偿展开/收起带来的页面高度变化，避免视口跳动
 */
export function SectionProvider({ children }) {
  const [activeId, setActiveId] = useState(SECTION_IDS[0])
  const lockedUntil = useRef(0)
  const activeRef = useRef(activeId)
  activeRef.current = activeId

  // 滚动监听：阈值线 + 触底前进
  useEffect(() => {
    let ticking = false

    const update = () => {
      ticking = false
      if (Date.now() < lockedUntil.current) return
      const threshold = window.innerHeight * RATIO
      const active = activeRef.current

      // 1) 阈值线：顶部已越过线的最后一个区块
      let byThreshold = SECTION_IDS[0]
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= threshold) byThreshold = id
      }

      // 2) 触底处理：单开手风琴下当前页展开后很长，后续页标题到不了阈值线，
      //    因此滚到页面底部时前进到「下一页」；已是最后一页则保持（不降级）
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      if (atBottom) {
        const idx = SECTION_IDS.indexOf(active)
        if (idx < SECTION_IDS.length - 1) {
          const nextId = SECTION_IDS[idx + 1]
          const nextEl = document.getElementById(nextId)
          if (nextEl && nextEl.getBoundingClientRect().top < window.innerHeight) {
            lockedUntil.current = Date.now() + STEP_LOCK_MS
            setActiveId(nextId)
            return
          }
        } else {
          byThreshold = SECTION_IDS[SECTION_IDS.length - 1]
        }
      }

      if (byThreshold !== active) setActiveId(byThreshold)
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // 滚动锚定：区块切换后等动画结束，把当前区块顶部固定在阈值线
  useEffect(() => {
    const t = setTimeout(() => {
      if (Date.now() < lockedUntil.current) return // 导航跳转中，scrollIntoView 已定位
      const el = document.getElementById(activeId)
      if (!el) return
      const threshold = window.innerHeight * RATIO
      const delta = el.getBoundingClientRect().top - threshold
      if (Math.abs(delta) > 2) window.scrollBy({ top: delta, behavior: 'auto' })
    }, ANCHOR_DELAY_MS)
    return () => clearTimeout(t)
  }, [activeId])

  const jumpTo = useCallback((id) => {
    lockedUntil.current = Date.now() + JUMP_LOCK_MS
    setActiveId(id)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  const value = useMemo(() => ({ activeId, jumpTo }), [activeId, jumpTo])

  return <SectionContext.Provider value={value}>{children}</SectionContext.Provider>
}

export function useSection() {
  const ctx = useContext(SectionContext)
  if (!ctx) throw new Error('useSection must be used within <SectionProvider>')
  return ctx
}
