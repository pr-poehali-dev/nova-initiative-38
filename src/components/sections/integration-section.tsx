import { useReveal } from "@/hooks/use-reveal"

export function IntegrationSection() {
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section
      ref={ref}
      className="relative flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16 overflow-hidden"
      style={{
        backgroundImage: "url(https://cdn.poehali.dev/projects/932a567d-7f53-4cc1-baff-cf27137be611/bucket/808cf416-5b95-421c-a31b-d3fa524c0aac.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* тёмный оверлей */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div
          className={`mb-10 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Интеграции
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ 1С и ГЛОНАСС в одной экосистеме</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          {/* 1С блок */}
          <div
            className={`group relative overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 backdrop-blur-sm transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20">
                  <span className="font-sans text-lg font-bold text-red-400">1С</span>
                </div>
                <div>
                  <h3 className="font-sans text-xl font-light text-foreground">1С: Управление автотранспортом</h3>
                  <p className="font-mono text-xs text-foreground/50">Учёт ГСМ, путевые листы, расходы</p>
                </div>
              </div>

              <div className="mb-4 overflow-hidden rounded-xl border border-foreground/10">
                <img
                  src="https://cdn.poehali.dev/projects/932a567d-7f53-4cc1-baff-cf27137be611/bucket/f3885f85-5e49-4eed-b51b-2404482a6f0f.jpg"
                  alt="1С Управление автотранспортом — учёт ГСМ"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <ul className="space-y-2">
                {[
                  "Ведомость движения ГСМ",
                  "Учёт прихода и расхода топлива",
                  "Отчёты по заправкам по каждому ТС",
                  "Интеграция с 1С:Бухгалтерия",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 font-mono text-xs text-foreground/70">
                    <div className="h-1 w-4 shrink-0 rounded-full bg-red-400/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ГЛОНАСС блок */}
          <div
            className={`group relative overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 backdrop-blur-sm transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
            }`}
            style={{ transitionDelay: "250ms" }}
          >
            <div className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20">
                  <span className="font-sans text-sm font-bold text-blue-400">GPS</span>
                </div>
                <div>
                  <h3 className="font-sans text-xl font-light text-foreground">GLONASSSoft — мониторинг</h3>
                  <p className="font-mono text-xs text-foreground/50">Онлайн-трекинг, маршруты, топливо</p>
                </div>
              </div>

              <div className="mb-4 overflow-hidden rounded-xl border border-foreground/10">
                <img
                  src="https://cdn.poehali.dev/projects/932a567d-7f53-4cc1-baff-cf27137be611/bucket/5cf603df-4b14-498f-b326-8db32ad8422c.jpg"
                  alt="GLONASSSoft — спутниковый мониторинг транспорта"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <ul className="space-y-2">
                {[
                  "Подробные данные об объекте мониторинга",
                  "Гибкая настройка отображения данных",
                  "Календарь активности транспорта",
                  "Графики расхода топлива и скорости",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 font-mono text-xs text-foreground/70">
                    <div className="h-1 w-4 shrink-0 rounded-full bg-blue-400/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Подпись снизу */}
        <div
          className={`mt-8 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <p className="font-mono text-xs text-foreground/40">
            Настраиваем и сопровождаем обе системы под ключ
          </p>
        </div>
      </div>
    </section>
  )
}