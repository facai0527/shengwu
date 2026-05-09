<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const navOpen = ref(false)
const scrolled = ref(false)

const navLinks = [
  { id: 'top', label: '首页' },
  { id: 'about', label: '关于我们' },
  { id: 'business', label: '产品与服务' },
  { id: 'advantage', label: '技术优势' },
  { id: 'news', label: '新闻动态' },
  { id: 'contact', label: '联系我们' },
]

const services = [
  {
    title: '生物试剂研发',
    desc: '面向科研与工业客户的抗体、酶制剂与分子生物学试剂开发与优化。',
    viz: 1,
  },
  {
    title: '技术服务',
    desc: '蛋白表达纯化、基因合成、检测方法开发与验证等一站式技术支撑。',
    viz: 2,
  },
  {
    title: '质量控制',
    desc: '严格遵循质量管理体系，批次可追溯，确保产品稳定性与可重复性。',
    viz: 3,
  },
  {
    title: '合作定制',
    desc: '根据课题与产线需求提供联合开发与 OEM/ODM 协作方案。',
    viz: 4,
  },
]

const advantages = [
  { title: '研发团队', text: '多学科背景研发人员，持续投入前沿技术与工艺改进。' },
  { title: '实验平台', text: '标准化实验室与关键设备，支撑从筛选到放大的全流程。' },
  { title: '合规意识', text: '注重生物安全与数据规范，便于对接高校、院所及企业客户。' },
]

const news = [
  { date: '2026-04-18', title: '公司参加春季生命科学产业交流会', excerpt: '与上下游伙伴就产学研合作与供应链协同展开交流。' },
  { date: '2026-03-06', title: '质量体系内部审核顺利完成', excerpt: '对关键流程与记录进行复核，持续完善质量管理。' },
]

function scrollToId(id) {
  navOpen.value = false
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function onScroll() {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <div class="page">
    <header class="header" :class="{ 'header--scrolled': scrolled }">
      <div class="header__inner">
        <a href="#" class="logo" @click.prevent="scrollToId('top')">
          <span class="logo__mark" aria-hidden="true" />
          <div class="logo__text">
            <strong>发财生物有限公司</strong>
            <span>Facai Biotechnology</span>
          </div>
        </a>

        <button
          type="button"
          class="nav-toggle"
          :aria-expanded="navOpen"
          aria-controls="site-nav"
          @click="navOpen = !navOpen"
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="site-nav" class="nav" :class="{ 'nav--open': navOpen }">
          <button
            v-for="l in navLinks"
            :key="l.id"
            type="button"
            class="nav__link"
            @click="scrollToId(l.id)"
          >
            {{ l.label }}
          </button>
        </nav>
      </div>
    </header>

    <section class="hero">
      <div class="hero__bg" aria-hidden="true">
        <div class="hero__mesh" />
        <div class="hero__orb hero__orb--a" />
        <div class="hero__orb hero__orb--b" />
        <div class="hero__orb hero__orb--c" />
        <svg class="hero__fabric" viewBox="0 0 1200 640" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="fc-fab-g" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="rgba(16,185,129,0.15)" />
              <stop offset="50%" stop-color="rgba(234,179,8,0.12)" />
              <stop offset="100%" stop-color="rgba(56,189,248,0.12)" />
            </linearGradient>
            <pattern id="fc-dots" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.2" fill="rgba(255,255,255,0.07)" />
            </pattern>
          </defs>
          <rect width="120%" height="120%" x="-10%" y="-10%" fill="url(#fc-fab-g)" class="hero__fabric-fill" />
          <rect width="100%" height="100%" fill="url(#fc-dots)" />
          <path
            class="hero__path hero__path--1"
            d="M60 480 C180 280 320 520 480 360 S780 200 980 340 S1120 120 1180 200"
            fill="none"
            stroke="rgba(52,211,153,0.32)"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            class="hero__path hero__path--2"
            d="M20 200 C200 420 400 160 620 300 S900 440 1160 260"
            fill="none"
            stroke="rgba(250,204,21,0.22)"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div class="hero__shell">
        <div class="hero__grid2">
          <div class="hero__content">
            <p class="hero__eyebrow">专注生命科学 · 科研与产业并进</p>
            <h1 class="hero__title">
              以生物技术为驱动<br >
              为客户创造可靠价值
            </h1>
            <p class="hero__lead">
              发财生物有限公司致力于生物试剂与相关技术服务，以严谨工艺与持续创新，助力科研探索与产业升级。
            </p>
            <div class="hero__actions">
              <button type="button" class="btn btn--primary" @click="scrollToId('business')">
                了解业务
              </button>
              <button type="button" class="btn btn--ghost" @click="scrollToId('contact')">
                联系洽谈
              </button>
            </div>
          </div>
          <div class="hero__figure" aria-hidden="true">
            <div class="hero__rings">
              <span />
              <span />
              <span />
            </div>
            <svg class="hero__dna" viewBox="0 0 320 328" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="fc-dna-a" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#34d399" />
                  <stop offset="100%" stop-color="#fbbf24" />
                </linearGradient>
                <linearGradient id="fc-dna-b" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#22d3ee" />
                  <stop offset="100%" stop-color="#a3e635" />
                </linearGradient>
              </defs>
              <g class="hero__dna-strands">
                <path
                  class="hero__dna-path hero__dna-path--a"
                  d="M96 32 Q188 104 96 176 Q188 248 96 300"
                  fill="none"
                  stroke="url(#fc-dna-a)"
                  stroke-width="3.2"
                  stroke-linecap="round"
                />
                <path
                  class="hero__dna-path hero__dna-path--b"
                  d="M224 32 Q132 104 224 176 Q132 248 224 300"
                  fill="none"
                  stroke="url(#fc-dna-b)"
                  stroke-width="3.2"
                  stroke-linecap="round"
                />
              </g>
              <g class="hero__dna-rungs" opacity="0.55">
                <line x1="96" y1="88" x2="224" y2="88" stroke="rgba(255,255,255,0.35)" stroke-width="1.5" />
                <line x1="96" y1="140" x2="224" y2="140" stroke="rgba(255,255,255,0.28)" stroke-width="1.5" />
                <line x1="96" y1="192" x2="224" y2="192" stroke="rgba(255,255,255,0.35)" stroke-width="1.5" />
                <line x1="96" y1="244" x2="224" y2="244" stroke="rgba(255,255,255,0.28)" stroke-width="1.5" />
                <line x1="96" y1="296" x2="224" y2="296" stroke="rgba(255,255,255,0.35)" stroke-width="1.5" />
              </g>
            </svg>
            <div class="hero__sparkles">
              <span v-for="s in 8" :key="'s' + s" class="hero__spark" :class="'hero__spark--' + s" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="section section--white">
      <div class="container narrow">
        <h2 class="section__title">关于我们</h2>
        <p class="section__subtitle">About Facai</p>
        <div class="about">
          <p>
            公司聚焦生命科学领域，围绕生物试剂研发、技术服务和质量保障建立核心能力。我们重视与高校、科研院所及生物医药企业的长期合作，以客户需求为导向，不断优化产品性能与交付体验。
          </p>
          <p>
            面向未来，发财生物将继续加强研发投入与平台建设，在合规、安全、可持续的前提下，为合作伙伴提供更稳定、更可扩展的解决方案。
          </p>
        </div>
        <ul class="stats">
          <li><strong>多</strong><span>条产品线布局</span></li>
          <li><strong>全</strong><span>流程质量追溯</span></li>
          <li><strong>快</strong><span>响应技术支持</span></li>
        </ul>
      </div>
    </section>

    <section id="business" class="section section--muted">
      <div class="container">
        <h2 class="section__title">产品与服务</h2>
        <p class="section__subtitle">Products & Services</p>
        <div class="cards">
          <article v-for="(s, i) in services" :key="i" class="card">
            <div class="card__viz" :class="`card__viz--${s.viz}`" aria-hidden="true">
              <span class="card__viz-core" />
              <span class="card__viz-ring" />
              <span v-if="s.viz === 1" class="card__viz-dna" />
              <span v-if="s.viz === 2" class="card__viz-wave" />
              <span v-if="s.viz === 3" class="card__viz-check" />
              <span v-if="s.viz === 4" class="card__viz-link" />
            </div>
            <h3>{{ s.title }}</h3>
            <p>{{ s.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="advantage" class="section section--white">
      <div class="container">
        <h2 class="section__title">技术优势</h2>
        <p class="section__subtitle">Why Facai</p>
        <ol class="timeline">
          <li v-for="(a, i) in advantages" :key="i">
            <span class="timeline__idx">{{ String(i + 1).padStart(2, '0') }}</span>
            <div>
              <h3>{{ a.title }}</h3>
              <p>{{ a.text }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section id="news" class="section section--muted">
      <div class="container">
        <h2 class="section__title">新闻动态</h2>
        <p class="section__subtitle">News</p>
        <div class="news">
          <article v-for="(n, i) in news" :key="i" class="news__item">
            <time :datetime="n.date">{{ n.date }}</time>
            <h3>{{ n.title }}</h3>
            <p>{{ n.excerpt }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="contact" class="section section--cta">
      <div class="container cta">
        <div>
          <h2 class="section__title section__title--light">联系我们</h2>
          <p class="section__subtitle section__subtitle--light">Contact</p>
          <p class="cta__text">
            欢迎就产品合作、技术咨询或定制需求与我们联系，我们将尽快安排专人回复。
          </p>
        </div>
        <address class="cta__addr">
          <p><span>地址</span>北京市（示例地址，请按实际修改）</p>
          <p><span>邮箱</span><a href="mailto:contact@example.com">contact@example.com</a></p>
          <p><span>电话</span><a href="tel:01000000000">010-0000-0000</a></p>
        </address>
      </div>
    </section>

    <footer class="footer">
      <div class="container footer__inner">
        <p>© {{ new Date().getFullYear() }} 发财生物有限公司 · 保留所有权利</p>
        <p class="footer__note">网站展示内容为演示排版，正式文案与备案信息请以贵司实际资料为准。</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(246, 248, 250, 0.82);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid transparent;
  transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
}

.header--scrolled {
  background: rgba(255, 255, 255, 0.95);
  border-bottom-color: #e2e8f0;
  box-shadow: 0 4px 24px rgba(15, 23, 42, 0.06);
}

.header__inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: inherit;
  min-width: 0;
}

.logo__mark {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, #047857 0%, #0d9488 45%, #ca8a04 100%);
  box-shadow:
    0 4px 16px rgba(4, 120, 87, 0.45),
    0 0 0 1px rgba(250, 250, 250, 0.15) inset;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}

.logo__mark::after {
  content: '';
  position: absolute;
  inset: -40%;
  background: linear-gradient(
    120deg,
    transparent 30%,
    rgba(255, 255, 255, 0.35) 50%,
    transparent 70%
  );
  animation: fc-shine 4s ease-in-out infinite;
}

.hero {
  position: relative;
  color: #ecfeff;
  min-height: 460px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: linear-gradient(145deg, #022c22 0%, #0f172a 42%, #134e4a 100%);
}

.hero__mesh {
  position: absolute;
  inset: -20%;
  background:
    radial-gradient(ellipse 80% 50% at 20% 40%, rgba(16, 185, 129, 0.35), transparent 55%),
    radial-gradient(ellipse 60% 45% at 85% 20%, rgba(234, 179, 8, 0.22), transparent 50%),
    radial-gradient(ellipse 50% 40% at 70% 85%, rgba(56, 189, 248, 0.2), transparent 45%);
  animation: fc-mesh 14s ease-in-out infinite alternate;
}

.hero__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(48px);
  opacity: 0.55;
  animation: fc-float 10s ease-in-out infinite;
}

.hero__orb--a {
  width: 280px;
  height: 280px;
  background: #10b981;
  top: -8%;
  right: 8%;
  animation-delay: 0s;
}

.hero__orb--b {
  width: 220px;
  height: 220px;
  background: #eab308;
  bottom: 5%;
  left: -5%;
  animation-delay: -3s;
}

.hero__orb--c {
  width: 180px;
  height: 180px;
  background: #22d3ee;
  bottom: 25%;
  right: 28%;
  animation-delay: -6s;
}

.hero__fabric {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.hero__fabric-fill {
  animation: fc-breathe 10s ease-in-out infinite;
}

.hero__path {
  stroke-dasharray: 12 28;
  animation: fc-dash 5s linear infinite;
}

.hero__path--2 {
  animation-duration: 7s;
  animation-direction: reverse;
}

.hero__shell {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 48px 20px 56px;
}

.hero__grid2 {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(220px, 0.9fr);
  gap: 32px;
  align-items: center;
}

.hero__content {
  position: relative;
  z-index: 1;
  min-width: 0;
}

.hero__figure {
  position: relative;
  min-height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero__rings {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.hero__rings span {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 50%;
  animation: fc-ring 5s ease-out infinite;
  transform-origin: center center;
}

.hero__rings span:nth-child(1) {
  width: 200px;
  height: 200px;
  animation-delay: 0s;
}

.hero__rings span:nth-child(2) {
  width: 260px;
  height: 260px;
  animation-delay: 0.6s;
}

.hero__rings span:nth-child(3) {
  width: 320px;
  height: 320px;
  animation-delay: 1.2s;
}

.hero__dna {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 300px;
  height: auto;
  filter: drop-shadow(0 12px 32px rgba(0, 0, 0, 0.35));
}

.hero__dna-strands {
  animation: fc-dna-sway 8s ease-in-out infinite;
  transform-origin: 160px 166px;
}

.hero__dna-path {
  stroke-dasharray: 24 42;
  animation: fc-dna-dash 3.5s linear infinite;
}

.hero__dna-path--b {
  animation-delay: -1.2s;
}

.hero__dna-rungs {
  animation: fc-rung-pulse 3s ease-in-out infinite;
}

.hero__sparkles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero__spark {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(254, 249, 195, 0.85);
  box-shadow: 0 0 12px rgba(250, 204, 21, 0.8);
  animation: fc-spark 2.8s ease-in-out infinite;
}

.hero__spark--1 {
  top: 12%;
  left: 18%;
  animation-delay: 0s;
}
.hero__spark--2 {
  top: 28%;
  right: 12%;
  animation-delay: 0.4s;
}
.hero__spark--3 {
  bottom: 22%;
  left: 8%;
  animation-delay: 0.8s;
}
.hero__spark--4 {
  bottom: 35%;
  right: 20%;
  animation-delay: 1.1s;
}
.hero__spark--5 {
  top: 48%;
  left: 4%;
  animation-delay: 1.5s;
}
.hero__spark--6 {
  top: 62%;
  right: 6%;
  animation-delay: 1.9s;
}
.hero__spark--7 {
  top: 8%;
  right: 38%;
  animation-delay: 2.2s;
}
.hero__spark--8 {
  bottom: 8%;
  left: 42%;
  animation-delay: 2.5s;
}

.hero__eyebrow {
  margin: 0 0 12px;
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(253, 224, 71, 0.88);
}

.hero__title {
  margin: 0 0 16px;
  font-size: clamp(28px, 4.5vw, 40px);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.02em;
}

.hero__lead {
  margin: 0 0 28px;
  max-width: 560px;
  font-size: 16px;
  line-height: 1.75;
  color: rgba(226, 232, 240, 0.95);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.btn {
  font: inherit;
  font-size: 14px;
  font-weight: 500;
  padding: 12px 22px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  transition: transform 0.15s, box-shadow 0.15s, background 0.15s;
}

.btn:active {
  transform: scale(0.98);
}

.btn--primary {
  background: linear-gradient(135deg, #34d399, #14b8a6 55%, #ca8a04);
  color: #042f2e;
  box-shadow: 0 8px 28px rgba(45, 212, 191, 0.4);
}

.btn--primary:hover {
  box-shadow: 0 10px 36px rgba(250, 204, 21, 0.35);
}

.btn--ghost {
  background: rgba(255, 255, 255, 0.08);
  color: #f0fdfa;
  border: 1px solid rgba(255, 255, 255, 0.28);
}

.btn--ghost:hover {
  background: rgba(255, 255, 255, 0.14);
  border-color: rgba(253, 224, 71, 0.45);
}

.logo__text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.logo__text strong {
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 1.25;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.logo__text span {
  font-size: 11px;
  color: #64748b;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 10px;
  background: #fff;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08);
}

.nav-toggle span {
  display: block;
  height: 2px;
  width: 20px;
  margin: 0 auto;
  background: #0f172a;
  border-radius: 1px;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
}

.nav__link {
  border: none;
  background: transparent;
  font: inherit;
  font-size: 14px;
  color: #334155;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: color 0.15s, background 0.15s;
}

.nav__link:hover {
  color: #047857;
  background: linear-gradient(90deg, rgba(4, 120, 87, 0.1), rgba(202, 138, 4, 0.08));
}

.section {
  padding: 64px 20px;
}

.section--white {
  background: #fff;
}

.section--muted {
  background: #eef2f6;
}

.section--cta {
  background: linear-gradient(125deg, #065f46 0%, #0d9488 45%, #a16207 100%);
  color: #ecfdf5;
}

.container {
  max-width: 1120px;
  margin: 0 auto;
}

.container.narrow {
  max-width: 800px;
}

.section__title {
  margin: 0 0 6px;
  font-size: 26px;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: 0.04em;
}

.section__title--light {
  color: #fff;
}

.section__subtitle {
  margin: 0 0 28px;
  font-size: 13px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #94a3b8;
}

.section__subtitle--light {
  color: rgba(167, 243, 208, 0.85);
}

.about p {
  margin: 0 0 16px;
  font-size: 16px;
  line-height: 1.85;
  color: #475569;
}

.stats {
  list-style: none;
  margin: 36px 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.stats li {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px 16px;
  text-align: center;
}

.stats strong {
  display: block;
  font-size: 28px;
  font-weight: 700;
  color: #047857;
  margin-bottom: 6px;
}

.stats span {
  font-size: 13px;
  color: #64748b;
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.card {
  background: #fff;
  border-radius: 14px;
  padding: 22px 20px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);
  transition: box-shadow 0.2s, border-color 0.2s;
}

.card:hover {
  border-color: rgba(4, 120, 87, 0.4);
  box-shadow: 0 12px 36px rgba(4, 120, 87, 0.12);
}

.card__viz {
  position: relative;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  margin-bottom: 14px;
  background: linear-gradient(145deg, rgba(4, 120, 87, 0.12), rgba(202, 138, 4, 0.1));
  border: 1px solid rgba(4, 120, 87, 0.15);
  overflow: hidden;
}

.card__viz-core {
  position: absolute;
  inset: 18%;
  border-radius: 50%;
  background: linear-gradient(135deg, #34d399, #eab308);
  animation: fc-card-core 2.8s ease-in-out infinite;
  transform-origin: center center;
}

.card__viz-ring {
  position: absolute;
  inset: 6%;
  border-radius: 50%;
  border: 2px solid rgba(45, 212, 191, 0.35);
  animation: fc-card-ring 2.2s ease-out infinite;
  transform-origin: center center;
}

.card__viz-dna,
.card__viz-wave,
.card__viz-check,
.card__viz-link {
  position: absolute;
  pointer-events: none;
}

.card__viz--1 .card__viz-dna {
  left: 50%;
  top: 50%;
  width: 28px;
  height: 36px;
  margin: -18px 0 0 -14px;
  border-inline: 2px solid rgba(14, 165, 233, 0.55);
  border-radius: 40%;
  animation: fc-card-dna 2s ease-in-out infinite;
}

.card__viz--2 .card__viz-wave {
  left: 12%;
  right: 12%;
  top: 50%;
  height: 3px;
  margin-top: -2px;
  background: linear-gradient(90deg, transparent, #22d3ee, transparent);
  animation: fc-card-wave 1.6s ease-in-out infinite;
}

.card__viz--3 .card__viz-check {
  left: 50%;
  top: 50%;
  width: 14px;
  height: 8px;
  margin: -6px 0 0 -9px;
  border-left: 2.5px solid #10b981;
  border-bottom: 2.5px solid #10b981;
  transform: rotate(-45deg);
  animation: fc-card-check 2.4s ease-in-out infinite;
}

.card__viz--4 .card__viz-link {
  left: 50%;
  top: 50%;
  width: 22px;
  height: 22px;
  margin: -11px 0 0 -11px;
  border: 2px dashed rgba(234, 179, 8, 0.75);
  border-radius: 50%;
  animation: fc-card-link 4s linear infinite;
  transform-origin: center center;
}

.card h3 {
  margin: 0 0 10px;
  font-size: 17px;
  color: #0f172a;
}

.card p {
  margin: 0;
  font-size: 14px;
  line-height: 1.65;
  color: #64748b;
}

.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.timeline li {
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 20px;
  padding: 24px 0;
  border-bottom: 1px solid #e2e8f0;
}

.timeline li:last-child {
  border-bottom: none;
}

.timeline__idx {
  font-size: 22px;
  font-weight: 700;
  color: #cbd5e1;
  line-height: 1.2;
}

.timeline h3 {
  margin: 0 0 8px;
  font-size: 18px;
  color: #0f172a;
}

.timeline p {
  margin: 0;
  font-size: 15px;
  line-height: 1.7;
  color: #64748b;
}

.news {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.news__item {
  background: #fff;
  border-radius: 14px;
  padding: 22px 22px 24px;
  border: 1px solid #e2e8f0;
}

.news__item time {
  font-size: 13px;
  color: #047857;
  font-weight: 600;
}

.news__item h3 {
  margin: 10px 0 8px;
  font-size: 17px;
  color: #0f172a;
  line-height: 1.35;
}

.news__item p {
  margin: 0;
  font-size: 14px;
  line-height: 1.65;
  color: #64748b;
}

.cta {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;
  align-items: start;
}

.cta__text {
  margin: 0;
  max-width: 480px;
  font-size: 15px;
  line-height: 1.75;
  color: rgba(236, 253, 245, 0.92);
}

.cta__addr {
  font-style: normal;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 14px;
  padding: 22px 24px;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.cta__addr p {
  margin: 0 0 14px;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(240, 253, 250, 0.95);
}

.cta__addr p:last-child {
  margin-bottom: 0;
}

.cta__addr span {
  display: inline-block;
  min-width: 3em;
  color: rgba(153, 246, 228, 0.85);
  margin-right: 8px;
}

.cta__addr a {
  color: #5eead4;
  text-decoration: none;
}

.cta__addr a:hover {
  text-decoration: underline;
}

.footer {
  background: #0f172a;
  color: #94a3b8;
  padding: 28px 20px 36px;
  font-size: 13px;
}

.footer__inner {
  text-align: center;
}

.footer__inner p {
  margin: 0 0 8px;
}

.footer__note {
  color: #64748b;
  font-size: 12px;
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.6;
}

@keyframes fc-shine {
  0% {
    transform: translateX(-100%) rotate(12deg);
  }
  100% {
    transform: translateX(100%) rotate(12deg);
  }
}

@keyframes fc-mesh {
  0% {
    transform: translate(0, 0) scale(1);
  }
  100% {
    transform: translate(-2%, 1.5%) scale(1.04);
  }
}

@keyframes fc-float {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(18px, -14px);
  }
}

@keyframes fc-breathe {
  0%,
  100% {
    opacity: 0.95;
  }
  50% {
    opacity: 0.65;
  }
}

@keyframes fc-dash {
  to {
    stroke-dashoffset: -120;
  }
}

@keyframes fc-ring {
  0% {
    transform: scale(0.88);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.12);
    opacity: 0;
  }
}

@keyframes fc-dna-sway {
  0%,
  100% {
    transform: rotate(-2.5deg);
  }
  50% {
    transform: rotate(3deg);
  }
}

@keyframes fc-dna-dash {
  to {
    stroke-dashoffset: -300;
  }
}

@keyframes fc-rung-pulse {
  0%,
  100% {
    opacity: 0.42;
  }
  50% {
    opacity: 0.78;
  }
}

@keyframes fc-spark {
  0%,
  100% {
    transform: scale(0.5);
    opacity: 0.25;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fc-card-core {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@keyframes fc-card-ring {
  0% {
    transform: scale(0.9);
    opacity: 0.85;
  }
  100% {
    transform: scale(1.25);
    opacity: 0;
  }
}

@keyframes fc-card-dna {
  0%,
  100% {
    transform: rotate(-4deg) scaleY(1);
  }
  50% {
    transform: rotate(5deg) scaleY(1.08);
  }
}

@keyframes fc-card-wave {
  0%,
  100% {
    opacity: 0.45;
    transform: scaleX(0.88);
  }
  50% {
    opacity: 1;
    transform: scaleX(1);
  }
}

@keyframes fc-card-check {
  0%,
  100% {
    transform: rotate(-45deg) scale(1);
  }
  50% {
    transform: rotate(-45deg) scale(1.12);
  }
}

@keyframes fc-card-link {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 960px) {
  .hero__grid2 {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero__content {
    order: 2;
  }

  .hero__figure {
    order: 1;
    min-height: 200px;
  }

  .hero__actions {
    justify-content: center;
  }

  .hero__lead {
    margin-left: auto;
    margin-right: auto;
  }

  .cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .cta {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .logo__text strong {
    white-space: normal;
    font-size: 14px;
  }

  .nav-toggle {
    display: flex;
  }

  .nav {
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    flex-direction: column;
    align-items: stretch;
    padding: 10px 16px 16px;
    background: #fff;
    border-bottom: 1px solid #e2e8f0;
    box-shadow: 0 12px 32px rgba(15, 23, 42, 0.08);
    display: none;
  }

  .nav--open {
    display: flex;
  }

  .header__inner {
    position: relative;
    flex-wrap: wrap;
  }

  .nav__link {
    width: 100%;
    text-align: left;
    padding: 12px 14px;
  }

  .stats {
    grid-template-columns: 1fr;
  }

  .cards {
    grid-template-columns: 1fr;
  }

  .news {
    grid-template-columns: 1fr;
  }

  .timeline li {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .hero__content {
    padding-top: 40px;
    padding-bottom: 48px;
  }
}
</style>
