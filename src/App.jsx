import { useEffect, useMemo, useRef, useState } from 'react'

const icons = {
  crowd: (
    <svg viewBox="0 0 48 48" className="h-10 w-10 text-aurora" aria-hidden="true">
      <path
        d="M12.5 21.5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Zm11.5 9.5c-3.7-2.5-9.8-2.4-13.4.4-2.4 1.9-3.1 4.2-3.1 6.6V40c0 2.2 1.8 4 4 4h12.5c2.2 0 4-1.8 4-4v-1.1c0-3.1-1.6-5.3-4-7.4Zm13-16.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-6.5 24.5c0-2.4-.7-4.2-2.5-6 2.4-1.8 6.7-1.6 9 0 1.9 1.2 2.5 3.1 2.5 5.3V40c0 2.2-1.8 4-4 4H30c1.9-1 3.5-2.9 3.5-5.5Z"
        fill="currentColor"
      />
    </svg>
  ),
  confusion: (
    <svg viewBox="0 0 48 48" className="h-10 w-10 text-aurora" aria-hidden="true">
      <path
        d="M24 6c-9.9 0-18 7.4-18 16.4 0 5.8 3.3 10.9 8.4 13.9l-.9 5.7a2 2 0 0 0 2.9 2l6.8-3.6c.4 0 1 .1 1.4.1 9.9 0 18-7.4 18-16.4C42.6 13.4 34 6 24 6Zm1.2 24.4h-2.6v-2.5h2.6v2.5Zm3.7-12.4c-.4.7-1 1.2-1.8 1.8l-1 .8c-.6.4-.9.8-1 1.2a3 3 0 0 0-.2 1.3h-2.5a5.1 5.1 0 0 1 .3-2 5 5 0 0 1 1.9-2.4l1-.7c.4-.3.7-.6.8-.9a1.5 1.5 0 0 0-.4-1.5 2 2 0 0 0-1.4-.4c-1 0-1.7.4-2.1 1l-2.3-1.4a4.7 4.7 0 0 1 4.4-2c1.2 0 2.3.3 3.2 1 .9.6 1.5 1.5 1.8 2.5.2 1 0 1.9-.7 2.7Z"
        fill="currentColor"
      />
    </svg>
  ),
  language: (
    <svg viewBox="0 0 48 48" className="h-10 w-10 text-aurora" aria-hidden="true">
      <path
        d="M12 8a6 6 0 0 0-6 6v10a6 6 0 0 0 6 6h6.3l7.4 6.7a2 2 0 0 0 3.3-1.5v-5.2H36a6 6 0 0 0 6-6V14a6 6 0 0 0-6-6H12Zm21 7h2.5c.6 0 1 .4 1 1s-.4 1-1 1h-1.8a13 13 0 0 1-3.3 6.3 14 14 0 0 0 3.5 4.3c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3-.3 0-.6-.1-.8-.3a16 16 0 0 1-3.8-4.8 16 16 0 0 1-4.8 5.1 1 1 0 0 1-1.4-.3 1 1 0 0 1 .2-1.4 13.9 13.9 0 0 0 4-4.9A12.8 12.8 0 0 1 22 18h-2.5a1 1 0 0 1 0-2h6.8c-.3-1-.4-2-.5-3H22a1 1 0 1 1 0-2h3v-1a1 1 0 0 1 2 0v1h3.2a1 1 0 0 1 0 2h-3.2c0 1.1.2 2.1.5 3H33Z"
        fill="currentColor"
      />
    </svg>
  ),
  pwa: (
    <svg viewBox="0 0 48 48" className="h-9 w-9 text-aurora" aria-hidden="true">
      <path
        d="M12 8h24a6 6 0 0 1 6 6v20a6 6 0 0 1-6 6H12a6 6 0 0 1-6-6V14a6 6 0 0 1 6-6Zm18.5 13.3-3.8 10.4h3.3l1.1-3.3h4.1l1.1 3.3h3.3l-3.8-10.4h-3.1Zm-14.1 0-3.8 10.4h3.3l1.1-3.3H21l1.1 3.3h3.3l-3.8-10.4h-3.1Zm17.2 4.4 1.1 3.3h-2.2l1.1-3.3Zm-14.4 0 1.1 3.3h-2.2l1.1-3.3ZM12 14a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h7.3l-3.3-9 2.9-7.6H12Z"
        fill="currentColor"
      />
    </svg>
  ),
  voice: (
    <svg viewBox="0 0 48 48" className="h-9 w-9 text-aurora" aria-hidden="true">
      <path
        d="M24 6a6 6 0 0 0-6 6v10a6 6 0 1 0 12 0V12a6 6 0 0 0-6-6Zm0 32c7.7 0 14-6 14-13.5a2 2 0 1 0-4 0c0 5.3-4.5 9.5-10 9.5s-10-4.2-10-9.5a2 2 0 1 0-4 0C10 32 16.3 38 24 38Zm-2 4h4a2 2 0 1 1 0 4h-4a2 2 0 1 1 0-4Z"
        fill="currentColor"
      />
    </svg>
  ),
  gps: (
    <svg viewBox="0 0 48 48" className="h-9 w-9 text-aurora" aria-hidden="true">
      <path
        d="M24 8a16 16 0 1 0 16 16A16 16 0 0 0 24 8Zm0 26a10 10 0 1 1 10-10 10 10 0 0 1-10 10Zm0-16a6 6 0 0 0-6 6h4a2 2 0 1 1 2 2 2 2 0 0 0 0 4 6 6 0 1 0 0-12Z"
        fill="currentColor"
      />
    </svg>
  ),
  secure: (
    <svg viewBox="0 0 48 48" className="h-9 w-9 text-aurora" aria-hidden="true">
      <path
        d="M24 6 8 12v14c0 8.4 6.5 13.8 15.2 16l.8.1c8.7-1.5 16-7.6 16-16.1V12L24 6Zm0 32c-5.9-1.1-10-4.8-10-12V14.5l10-3.5 10 3.5V26c0 7.2-4.1 10.9-10 12Zm0-19a5 5 0 0 0-5 5c0 2.4 1.6 4.3 3.8 4.8V31a1.2 1.2 0 0 1 2.4 0v-2.2A5 5 0 0 0 29 24a5 5 0 0 0-5-5Z"
        fill="currentColor"
      />
    </svg>
  ),
  emergency: (
    <svg viewBox="0 0 48 48" className="h-9 w-9 text-aurora" aria-hidden="true">
      <path
        d="m24 6-4.8 9.6-10.7 1.6 7.7 7.5-1.8 10.5L24 30l9.6 5.2-1.8-10.5 7.7-7.5-10.7-1.6L24 6Zm0 9 2.2 4.4 4.9.7-3.5 3.5.8 5-4.4-2.3-4.4 2.3.8-5-3.5-3.5 4.9-.7L24 15Z"
        fill="currentColor"
      />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 48 48" className="h-9 w-9 text-aurora" aria-hidden="true">
      <path
        d="M14 10a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v2h2a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4h-2v2a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4v-2h-2a4 4 0 0 1-4-4V16a4 4 0 0 1 4-4h2v-2Zm8 20v-2h-4v-2h4v-2h-4v-2h4v-2h-6v12h6Zm6-2h4v-2h-4v-2h4v-2h-4v-2h6v12h-6v-2Z"
        fill="currentColor"
      />
    </svg>
  ),
  integration: (
    <svg viewBox="0 0 48 48" className="h-9 w-9 text-aurora" aria-hidden="true">
      <path
        d="M24 6a6 6 0 0 1 6 6v5.2l3.6 2a6 6 0 1 1-3.2 11.5l-3.6-2a6 6 0 0 1-6 0l-3.6 2a6 6 0 1 1-3.2-11.5l3.6-2V12a6 6 0 0 1 6-6Zm0 4a2 2 0 0 0-2 2v6.9l-6 3.5a2 2 0 0 0 2 3.5l6-3.5 6 3.5a2 2 0 0 0 2-3.5l-6-3.5V12a2 2 0 0 0-2-2Zm-9 22a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm18 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
        fill="currentColor"
      />
    </svg>
  ),
}

const FadeInSection = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

const decorativeGradients = [
  'bg-gradient-to-br from-[rgba(120,74,232,0.45)] via-[rgba(45,20,95,0.3)] to-transparent',
  'bg-gradient-to-tr from-[rgba(80,50,160,0.35)] via-transparent to-transparent',
]

function App() {
  const problemItems = useMemo(
    () => [
      {
        id: 'crowd',
        title: 'الزحام والتشابه',
        description:
          'أجواء المشاعر المقدسة المزدحمة وتشابه الخيام والممرات تجعل إيجاد الطريق تحديًا يوميًا للحجاج.',
      },
      {
        id: 'confusion',
        title: 'ضياع الاتجاهات',
        description:
          'ضعف اللوحات الإرشادية أو صعوبة الوصول إليها يؤدي إلى القلق وفقدان الرفقة والوقت الثمين.',
      },
      {
        id: 'language',
        title: 'حاجز اللغة',
        description:
          'اختلاف اللغات يصعّب طلب المساعدة العاجلة أو فهم الإرشادات الميدانية طوال رحلة الحج.',
      },
    ],
    [],
  )

  const featureItems = useMemo(
    () => [
      {
        id: 'pwa',
        title: 'يعمل بدون تثبيت',
        description: 'حل PWA متكامل؛ يكفي مسح رمز QR للبدء فورًا بدون متاجر تطبيقات.',
      },
      {
        id: 'voice',
        title: 'تعرّف صوتي متعدد اللغات',
        description: 'يتفاعل مع الحاج صوتيًا بأي لغة أو لهجة مدعومة مع فهم دقيق للنوايا.',
      },
      {
        id: 'gps',
        title: 'توجيه ذكي بالمواقع',
        description: 'يرسم أفضل مسار لحظيًا بالاستفادة من GPS وتحليل الازدحام بالذكاء الاصطناعي.',
      },
      {
        id: 'secure',
        title: 'رموز آمنة للخصوصية',
        description: 'جلسات آمنة برموز مؤقتة تضمن خصوصية البيانات الشخصية للحجاج.',
      },
      {
        id: 'integration',
        title: 'تكامل مع الجهات الميدانية',
        description: 'متصل بمراكز الطوارئ والخدمات الأرضية لتسهيل الاستجابة والدعم.',
      },
      {
        id: 'ai',
        title: 'تحليلات تنبؤية مستمرة',
        description: 'ذكاء اصطناعي يتعلم باستمرار لتقديم تنبيهات مبكرة ومسارات أكثر أمانًا.',
      },
    ],
    [],
  )

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#080415] via-[#0f0726] to-[#160b36]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-48 -top-32 h-96 w-96 rounded-full blur-3xl" aria-hidden="true">
          <div className="h-full w-full animate-slow-pan bg-[radial-gradient(circle_at_top,rgba(138,92,246,0.45),transparent_65%)]" />
        </div>
        <div className="absolute -bottom-24 -left-24 h-[28rem] w-[28rem] rounded-full opacity-70 blur-3xl" aria-hidden="true">
          <div className="h-full w-full animate-slow-pan bg-[radial-gradient(circle_at_bottom,rgba(71,52,143,0.5),transparent_70%)]" />
        </div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-10" aria-hidden="true" />
      </div>

      <header className="relative z-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary-deep shadow-glow">
              <span className="text-xl font-semibold">د</span>
            </div>
            <div>
              <p className="text-base font-semibold text-white/80">درب الحاج</p>
              <p className="text-sm text-white/60">مرافقة ذكية لكل حاج ومعتمر</p>
            </div>
          </div>
          <a
            href="#qr"
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            شروع سريع عبر رمز QR
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <section id="hero" className="relative overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
            <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent opacity-40" />
          </div>
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-12 md:flex-row md:items-center md:justify-between md:pt-16 lg:pt-20">
            <FadeInSection className="max-w-xl space-y-6">
              <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-white/80 backdrop-blur">
                منصة الملاحة الصوتية للحجاج
              </span>
              <h1 className="text-4xl font-semibold leading-snug text-white md:text-5xl lg:text-6xl">
                رحلة مطمئنة… بخطوة ذكية واحدة
              </h1>
              <p className="text-lg leading-relaxed text-white/80 md:text-xl">
                منصة ذكية صوتية وخرائطية ترشد الحاج بلغته، دون الحاجة لتحميل تطبيق، عبر مسح رمز QR واحد. تقوده بأمان إلى الحرم، الجمرات، المخيمات، والخدمات الحيوية.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#qr"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-primary-deep shadow-glow transition hover:shadow-glow-strong"
                >
                  جرّب الآن
                </a>
                <p className="text-sm text-white/70">
                  لا حاجة للتنزيل · يعمل على أي هاتف · دعم صوتي فوري
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={150} className="relative mx-auto w-full max-w-sm">
              <div className="relative rounded-[2.5rem] border border-white/10 bg-white/10 p-6 shadow-glow backdrop-blur">
                <div className="absolute -right-6 top-12 h-24 w-24 rounded-full bg-gradient-to-br from-primary/40 to-transparent blur-2xl" aria-hidden="true" />
                <div className="absolute -left-12 bottom-6 h-20 w-20 rounded-full bg-gradient-to-tr from-[#5f4db0]/40 to-transparent blur-2xl" aria-hidden="true" />
                <div className="relative h-[28rem] rounded-3xl bg-[#0b0a1d]/70 p-6">
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span>درب الحاج</span>
                    <span>مرحبًا بك</span>
                  </div>
                  <div className="mt-8 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-2xl">📍</div>
                        <div>
                          <p className="text-sm text-white/70">وجهتك الحالية</p>
                          <p className="text-lg font-semibold text-white">بوابة الملك فهد - المسجد الحرام</p>
                        </div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4">
                        <p className="text-sm text-white/60">الدليل الذكي</p>
                        <p className="mt-3 text-base leading-relaxed text-white">
                          «اتجه يمينًا بعد ٢٠ مترًا، ثم استمر باتجاه مخيمك. سيتم إعلامك عند الوصول.»
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="rounded-2xl border border-primary/30 bg-primary/10 p-4">
                        <p className="text-sm text-white/70">لغة التوجيه</p>
                        <p className="mt-2 text-base font-semibold text-white">العربية · English · اردو · Bahasa</p>
                      </div>
                      <button className="flex w-full items-center justify-between rounded-full bg-white/90 px-5 py-3 text-sm font-semibold text-primary-deep shadow-lg">
                        أرسل موقعك الآن
                        <span className="text-base">⟳</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-8 top-12 hidden h-36 w-36 animate-float rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-3xl md:block" aria-hidden="true" />
            </FadeInSection>
          </div>
        </section>

        <section className="relative border-t border-white/5 bg-[#0d0622]/80 py-24">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden="true" />
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-start">
            <FadeInSection className="max-w-xl space-y-4">
              <h2 className="text-3xl font-semibold text-white md:text-4xl">التحدي الميداني للحجاج</h2>
              <p className="text-lg leading-relaxed text-white/75">
                يواجه الحجاج صعوبة في معرفة الاتجاهات أثناء الزحام، وتشابه الخيام، وضعف اللوحات أو اللغة. في لحظات محدودة يكون الهدوء فيها ضرورة، يصبح إيجاد الطريق تحديًا حقيقيًا.
              </p>
            </FadeInSection>
            <div className="grid flex-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {problemItems.map((item, index) => (
                <FadeInSection key={item.id} delay={index * 80} className="h-full">
                  <div className="flex h-full flex-col gap-4 rounded-3xl border border-white/5 bg-white/[0.04] p-6 backdrop-blur">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                      {icons[item.id]}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-white/70">{item.description}</p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 opacity-70" aria-hidden="true">
            {decorativeGradients.map((gradient, index) => (
              <div key={gradient} className={`absolute h-[26rem] w-[26rem] ${gradient} blur-3xl`} style={{
                top: index === 0 ? '-5rem' : 'auto',
                bottom: index === 1 ? '-6rem' : 'auto',
                right: index === 0 ? '-8rem' : 'auto',
                left: index === 1 ? '-6rem' : 'auto',
              }} />
            ))}
          </div>
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center">
            <FadeInSection className="space-y-4">
              <h2 className="text-3xl font-semibold text-white md:text-4xl">حل ذكي بخطوة واحدة</h2>
              <p className="text-lg leading-relaxed text-white/75 md:text-xl">
                درب الحاج يقدم توجيهًا صوتيًا وخرائطيًا فوريًا بلغات متعددة، بخطوة واحدة عبر رمز QR. المساعد الذكي يفهم سؤالك، يحدد موقعك، ويقودك مباشرة للوجهة بدقة عالية.
              </p>
            </FadeInSection>
            <FadeInSection delay={120} className="w-full max-w-3xl">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-white/5 p-8 backdrop-blur">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" aria-hidden="true" />
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex flex-col gap-4 rounded-3xl bg-[#11082e]/70 p-6 shadow-glow">
                    <span className="text-sm text-white/60">الاستماع للحاج</span>
                    <p className="text-lg leading-relaxed text-white">
                      «أرشدني إلى أقرب نقطة تجمع لحملة النور»
                    </p>
                    <div className="flex items-center gap-3 text-sm text-white/60">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/20 text-xl">🎙️</span>
                      <p>تعرّف صوتي بلغة المستخدم مع فهم نية الرحلة.</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-right">
                    <span className="text-sm text-white/60">توجيه فوري</span>
                    <p className="text-lg leading-relaxed text-white">
                      «تم تحديد موقعك. يستغرق الوصول ٧ دقائق. سر على المسار المضيء باللون البنفسجي.»
                    </p>
                    <div className="flex items-center justify-between text-sm text-white/60">
                      <span>مزامنة مع لوحات الحملة</span>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs">تحديث كل ٣٠ ثانية</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="relative border-t border-white/5 bg-[#0f0828]/80 py-24" id="features">
          <div className="mx-auto max-w-6xl px-6">
            <FadeInSection className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold text-white md:text-4xl">قدرات مصممة لرحلة آمنة</h2>
              <p className="mt-4 text-lg text-white/70">
                كل ميزة في درب الحاج صُممت لدعم الحاج ميدانيًا، وتنسيق الخدمات مع الجهات الرسمية لحظيًا.
              </p>
            </FadeInSection>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {featureItems.map((feature, index) => (
                <FadeInSection key={feature.id} delay={index * 90} className="h-full">
                  <div className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_-30px_rgba(138,92,246,0.5)]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15">
                      {icons[feature.id]}
                    </div>
                    <div className="space-y-2 text-right">
                      <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                      <p className="text-sm leading-relaxed text-white/70">{feature.description}</p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        <section id="qr" className="relative overflow-hidden py-24">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-grid-glow opacity-40" />
            <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/25 via-transparent to-transparent blur-3xl" />
          </div>
          <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-12 px-6 lg:flex-row lg:items-center lg:justify-between">
            <FadeInSection className="max-w-xl space-y-4 text-center lg:text-right">
              <h2 className="text-3xl font-semibold text-white md:text-4xl">التجربة تبدأ بمسح واحد</h2>
              <p className="text-lg leading-relaxed text-white/75">
                امسح الباركود لتجربة المنصة فورًا. افتح الكاميرا، تابع التعليمات الصوتية، وشاهد المسار المضيء يقودك خطوة بخطوة داخل المشاعر المقدسة.
              </p>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/70 backdrop-blur">
                <span className="text-lg">✨</span>
                <span>تعمل في وضع عدم الاتصال الجزئي للحالات الطارئة</span>
              </div>
            </FadeInSection>
            <FadeInSection delay={120} className="relative">
              <div className="relative rounded-[2.5rem] border border-primary/30 bg-white/10 p-6 shadow-glow backdrop-blur">
                <div className="absolute inset-0 rounded-[2.5rem] border border-white/10" aria-hidden="true" />
                <div className="relative flex h-64 w-64 items-center justify-center rounded-[2rem] bg-[#12092c]/70">
                  <div className="absolute inset-0 rounded-[2rem] border border-white/10" aria-hidden="true" />
                  <div className="absolute inset-4 animate-pulse-glow rounded-[1.5rem] border border-primary/40" aria-hidden="true" />
                  <img
                    src="/qr-placeholder.svg"
                    alt="رمز QR لتجربة درب الحاج"
                    className="relative z-10 h-40 w-40 object-contain"
                  />
                </div>
                <p className="mt-6 text-center text-sm text-white/70">امسح الباركود لتجربة المنصة</p>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="relative border-t border-white/5 bg-gradient-to-br from-[#0c041f] via-[#140a34] to-[#1e1248] py-24">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080415] via-transparent to-transparent opacity-70" aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <FadeInSection className="space-y-6">
              <h2 className="text-3xl font-semibold text-white md:text-4xl">رؤيتنا</h2>
              <p className="text-lg leading-relaxed text-white/80 md:text-xl">
                من خلال الدمج بين الذكاء الاصطناعي، الصوت، والخرائط، نحول رحلة الحج إلى تجربة ذكية، مطمئنة، وإنسانية. هدفنا أن يشعر كل حاج بالسكينة، وأن يجد وجهته بثقة وطمأنينة في كل لحظة من نسكه.
              </p>
              <div className="mx-auto h-px w-20 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              <p className="text-base text-white/60">
                نستمع للحاج، نفهم سياق رحلته، ونسند رحلته ببيانات دقيقة وتكامل كامل مع الجهات المسؤولة.
              </p>
            </FadeInSection>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/10 bg-[#0a041b]/95 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-right">
          <div className="flex items-center gap-3 text-white/80">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-deep text-lg font-semibold">
              د
            </div>
            <span className="text-base">درب الحاج</span>
          </div>
          <p className="text-sm text-white/60">© 2025 درب الحاج - جميع الحقوق محفوظة</p>
        </div>
      </footer>
    </div>
  )
}

export default App
