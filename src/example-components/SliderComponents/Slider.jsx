import React, { useState, useEffect, useRef } from "react"
import "./Slider.css"

const realSlides = [
  {
    title: "🚗 Набор в группу выходного дня!",
    subtitle: "Категории A и B. Старт — 12 апреля, с 11:00 до 14:00.",
    button: "Подробнее",
    image: "/car.png",
    bgColor: "#29B6F6",
  },
  {
    title: "🎓 Теория онлайн — учись, где удобно!",
    subtitle: "Доступ к материалам 24/7 + поддержка преподавателей.",
    button: "Перейти к курсу",
    image: "/laptop.png",
    bgColor: "#66BB6A",
  },
  {
    title: "💰 Скидка 10% до конца месяца!",
    subtitle: "Запишись сейчас и получи скидку на обучение.",
    button: "Получить скидку",
    image: "/discount.png",
    bgColor: "#FF7043",
  },
  {
    title: "📅 Следующая группа стартует 5 мая!",
    subtitle: "Успей записаться — количество мест ограничено.",
    button: "Записаться",
    image: "/calendar.png",
    bgColor: "#AB47BC",
  },
  {
    title: "🏍️ Новый курс по категории «А»!",
    subtitle: "Обучение на мотоцикле. Инструкторы с опытом.",
    button: "Подробнее",
    image: "/motorcycle.png",
    bgColor: "#42A5F5",
  },
]

export default function Slider1() {
  const [currentIndex, setCurrentIndex] = useState(1) // начинаем с первого "реального"
  const [isTransitioning, setIsTransitioning] = useState(true)
  const sliderRef = useRef()
  const [visibleDot, setVisibleDot] = useState(null)

  const slides = [
    realSlides[realSlides.length - 1], // клонированный последний
    ...realSlides,
    realSlides[0], // клонированный первый
  ]

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsTransitioning(true)
  }

  const nextSlide = () => {
    if (currentIndex >= slides.length - 1) return
    goToSlide(currentIndex + 1)
  }

  const prevSlide = () => {
    if (currentIndex <= 0) return
    goToSlide(currentIndex - 1)
  }

  // автоскролл
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 13800)

    // плавное появление центральной точки
    setVisibleDot(null) // сброс
    requestAnimationFrame(() => {
      setVisibleDot(currentIndex)
    })

    return () => clearInterval(interval)
  }, [currentIndex])

  // если достигли клона, быстро прыгаем на нужный
  const handleTransitionEnd = () => {
    if (currentIndex === slides.length - 1) {
      setIsTransitioning(false)
      setCurrentIndex(1) // реальный первый
    } else if (currentIndex === 0) {
      setIsTransitioning(false)
      setCurrentIndex(slides.length - 2) // реальный последний
    }
  }

  return (
    <div className="slider-wrapper">
      <div
        className="slider-track"
        ref={sliderRef}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 0.6s ease-in-out" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((slide, idx) => (
          <div
            className="slider"
            style={{ backgroundColor: slide.bgColor }}
            key={idx}
          >
            <div className="slider-content">
              <div className="text-content">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <button>{slide.button}</button>
              </div>
              <img src={slide.image} alt="slide" className="slider-image" />
            </div>
          </div>
        ))}
      </div>

      {/* Стрелки */}
      <span className="arrow arrow-left" onClick={prevSlide}>
        &#10094;
      </span>
      <span className="arrow arrow-right" onClick={nextSlide}>
        &#10095;
      </span>

      {/* Точки */}
      <div className="dots">
        {realSlides.map((_, idx) => (
          <span
            key={idx}
            className={`dot-wrapper ${
              currentIndex === idx + 1 ? "active" : ""
            }`}
            onClick={() => goToSlide(idx + 1)}
          >
            <svg className="progress-ring" viewBox="0 0 36 36">
              <circle className="bg" cx="18" cy="18" r="13" />
              <circle
                className={`progress ${
                  currentIndex === idx + 1 ? "animating" : ""
                }`}
                cx="18"
                cy="18"
                r="13"
              />
              <circle
                className={`center-fill ${
                  visibleDot === idx + 1 ? "visible" : ""
                }`}
                cx="18"
                cy="18"
                r="7"
              />
            </svg>
          </span>
        ))}
      </div>
    </div>
  )
}
