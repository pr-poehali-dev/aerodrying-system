import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const headlines = [
    'Ваши вещи достойны бережной сушки',
    'Забудьте о растянутой одежде и запахе сырости',
    'Как сушить белье в квартире и не ненавидеть этот процесс'
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentHeadline((prev) => (prev + 1) % headlines.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const painPoints = [
    {
      title: 'Дорогие вещи теряют форму после первой же стирки',
      description: 'Шерстяной свитер стал на размер меньше, шелковое платье покрылось катышками'
    },
    {
      title: 'Белье сохнет три дня и пахнет сыростью',
      description: 'Особенно осенью и зимой, когда включают отопление, но влажность остается высокой'
    },
    {
      title: 'Сушильная машина "съедает" половину бюджета на электричество',
      description: 'А еще шумит, вибрирует и требует отдельного места в квартире'
    }
  ];

  const benefits = [
    {
      icon: 'ShieldCheck',
      title: 'Бережет ваш гардероб',
      description: 'Никакой усадки, растягивания или повреждения тканей. Даже самые капризные вещи остаются как новые'
    },
    {
      icon: 'Zap',
      title: 'Сушка в 3 раза быстрее',
      description: 'Не нужно ждать сутки, пока белье высохнет на балконе. Утром постирали — к обеду уже сухо'
    },
    {
      icon: 'Home',
      title: 'Незаметен в интерьере',
      description: 'Встраивается в вашу гардеробную или нишу. Не занимает полезное пространство и не шумит'
    },
    {
      icon: 'TrendingDown',
      title: 'Экономит 80% электричества',
      description: 'По сравнению с обычной сушильной машиной. За год накопим на пару новых свитеров'
    },
    {
      icon: 'Smartphone',
      title: 'Управление со смартфона',
      description: 'Больше не нужно настраивать каждый раз. Система запоминает ваши предпочтения'
    }
  ];

  const faqs = [
    {
      question: 'Это же просто шкаф с обогревателем? Чем вы лучше обычной сушильной машины?',
      answer: 'Нет, это интеллектуальная климатическая система. Мы не "жарим" белье, а создаем идеальный поток воздуха, который испаряет влагу, не повреждая волокна ткани. В отличие от сушильной машины, мы не крутим и не мнем вещи — они сохраняют форму.'
    },
    {
      question: 'У меня маленькая квартира. Куда это встраивать?',
      answer: 'Система монтируется в стандартную гардеробную нишу 60×200 см. Мы бесплатно приезжаем на замеры и предлагаем 3 варианта установки. Часто находим решения даже для самых компактных пространств.'
    },
    {
      question: 'А если я уже делал ремонт? Нужно ломать стены?',
      answer: 'Нет! Большинство установок мы выполняем без капитальных работ. Нужен только доступ к электрической розетке. Монтаж занимает 2-3 часа, после него не остается строительного мусора.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),transparent)] animate-gradient" />
        
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

        <nav className="relative z-10 container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <Icon name="Wind" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-white">AeroDrying</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#problem" className="text-gray-300 hover:text-white transition-colors">Проблема</a>
            <a href="#solution" className="text-gray-300 hover:text-white transition-colors">Решение</a>
            <a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Преимущества</a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors">Вопросы</a>
            <Button 
              variant="outline" 
              className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
              onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Рассчитать
            </Button>
          </div>
        </nav>

        <main className="relative z-10 container mx-auto px-6 pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-sm text-cyan-400 font-medium">Интеллектуальная система сушки</span>
              </div>

              <h1 
                className={`text-5xl lg:text-6xl font-bold text-white leading-tight transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                {headlines[currentHeadline]}
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                <span className="font-semibold text-white">AeroDrying Smart</span> — интеллектуальная сушильная система для гардеробной, которая сохраняет ваши вещи как новые
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold text-lg px-8 py-6 rounded-xl shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105"
                  onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Рассчитать стоимость
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-gray-600 text-white hover:bg-white/5 font-medium text-lg px-8 py-6 rounded-xl"
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть демо
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-8 border-t border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <Icon name="Zap" size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">2-4 часа</div>
                    <div className="text-sm text-gray-400">Время сушки</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center">
                    <Icon name="TrendingDown" size={24} className="text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">80%</div>
                    <div className="text-sm text-gray-400">Экономия энергии</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-slate-950 flex items-center justify-center text-white text-xs font-bold">
                      {i === 1 && 'АН'}
                      {i === 2 && 'МВ'}
                      {i === 3 && 'ДК'}
                      {i === 4 && '+'}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">Более 500 довольных клиентов</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-2 border border-gray-700 shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/d1237c3a-5394-43bb-979e-097b6b3120c6/files/a74794eb-d168-46ab-b284-e88e88c23eb1.jpg" 
                  alt="AeroDrying Smart System"
                  className="rounded-2xl w-full h-auto object-cover"
                />
                <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <div>
                      <div className="text-xs text-gray-500 font-medium">Активный режим</div>
                      <div className="text-sm font-bold text-gray-900">Деликатные ткани</div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 bg-slate-900/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl border border-blue-500/30">
                  <div className="flex items-center gap-4">
                    <Icon name="Thermometer" size={24} className="text-blue-400" />
                    <div>
                      <div className="text-xs text-gray-400 font-medium">Температура</div>
                      <div className="text-lg font-bold text-white">38°C</div>
                    </div>
                    <div className="w-px h-10 bg-gray-700" />
                    <Icon name="Droplets" size={24} className="text-cyan-400" />
                    <div>
                      <div className="text-xs text-gray-400 font-medium">Влажность</div>
                      <div className="text-lg font-bold text-white">45%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </div>

      <section id="problem" className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/d1237c3a-5394-43bb-979e-097b6b3120c6/files/5791b4bc-a80d-417b-839b-5a3941a669b7.jpg" 
                alt="Проблема с сушкой белья"
                className="rounded-3xl w-full h-auto object-cover shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent rounded-3xl" />
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">Знакомые ситуации?</h2>
              
              <div className="space-y-6">
                {painPoints.map((point, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                        <Icon name="X" size={18} className="text-red-400" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-white">{point.title}</h3>
                      <p className="text-gray-400">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solution" className="py-24 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Наконец-то появился способ сушить белье без компромиссов
            </h2>
            <p className="text-xl text-gray-400">Четыре простых шага до идеально сухого белья</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { step: '1', title: 'Загружаете', description: 'Белье после стирки — так же, как в обычный шкаф', icon: 'Upload' },
              { step: '2', title: 'Выбираете', description: 'Режим в приложении: "Деликатные ткани", "Детские вещи", "Повседневная одежда"', icon: 'Smartphone' },
              { step: '3', title: 'Система работает', description: 'Создает идеальный поток очищенного подогретого воздуха', icon: 'Wind' },
              { step: '4', title: 'Готово', description: 'Через 2-4 часа забираете полностью сухое, свежее белье', icon: 'CheckCircle2' }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} size={24} className="text-white" />
                  </div>
                  <div className="text-sm text-cyan-400 font-bold mb-2">ШАГ {item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-blue-500 to-transparent" />
                )}
              </div>
            ))}
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/d1237c3a-5394-43bb-979e-097b6b3120c6/files/36feed73-ad90-422f-82cc-315eea89cc54.jpg" 
                alt="AeroDrying система в интерьере"
                className="rounded-3xl w-full h-auto object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Преимущества AeroDrying Smart</h2>
            <p className="text-xl text-gray-400">Технология, которая меняет ваш подход к уходу за одеждой</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all group hover:scale-105">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-all">
                  <Icon name={benefit.icon as any} size={32} className="text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-12 border border-slate-700">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
                  <Icon name="Award" size={18} className="text-green-400" />
                  <span className="text-sm text-green-400 font-medium">Проверено временем</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-8">Цифры говорят сами за себя</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">94%</div>
                    <p className="text-gray-400 mt-2">вещей сохраняют первоначальный вид после 50 циклов сушки</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">2-4</div>
                    <p className="text-gray-400 mt-2">часа — среднее время сушки при влажности 80%</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">5</div>
                    <p className="text-gray-400 mt-2">лет гарантии на систему</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                <div className="flex items-start gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6 italic">
                  "После рождения второго ребенка я буквально жила в стирке. Белье висело по всей квартире, сохраняло запах сырости, а детские комбинезоны после сушки на батарее становились жесткими. AeroDrying Smart вернул мне ощущение чистоты в доме. Теперь я просто загружаю белье после стирки, выбираю "Детский режим" и через пару часов всё абсолютно сухое и мягкое. И да, на электричестве экономим заметно"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold">
                    А
                  </div>
                  <div>
                    <div className="font-semibold text-white">Анастасия</div>
                    <div className="text-sm text-gray-400">Мама двоих детей, Москва</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Часто задаваемые вопросы</h2>
            <p className="text-xl text-gray-400">Ответы на самые популярные вопросы о системе</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-800/80 transition-all"
                >
                  <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                  <Icon 
                    name={openFaq === index ? "ChevronUp" : "ChevronDown"} 
                    size={24} 
                    className="text-blue-400 flex-shrink-0"
                  />
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Рассчитайте точную стоимость для вашей квартиры
              </h2>
              <p className="text-xl text-slate-600 mb-4">
                Первые 10 заявок этого месяца получат бесплатную установку сэндвич-панелей (стоимостью 15 000 ₽)
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-green-700 font-medium">Осталось 3 места</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-900">Ваше имя</Label>
                  <Input 
                    id="name" 
                    placeholder="Анастасия" 
                    className="h-12 text-lg border-slate-300 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-900">Телефон</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+7 (999) 123-45-67" 
                    className="h-12 text-lg border-slate-300 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="housing" className="text-slate-900">Тип жилья</Label>
                  <Select>
                    <SelectTrigger className="h-12 text-lg border-slate-300 focus:border-blue-500">
                      <SelectValue placeholder="Выберите тип жилья" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Квартира</SelectItem>
                      <SelectItem value="townhouse">Таунхаус</SelectItem>
                      <SelectItem value="house">Загородный дом</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <Checkbox id="visit" className="mt-1" />
                  <label htmlFor="visit" className="text-sm text-slate-700 leading-relaxed cursor-pointer">
                    Бесплатный выезд замерщика в течение 24 часов
                  </label>
                </div>

                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold text-lg px-8 py-6 rounded-xl shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105"
                >
                  Получить расчет сметы + бонус
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>

                <p className="text-sm text-center text-slate-500">
                  <Icon name="Lock" size={14} className="inline mr-1" />
                  Ваши данные защищены. Никакого спама. Только расчет и консультация.
                </p>
              </form>
            </div>

            <div className="mt-12 text-center">
              <div className="flex items-center justify-center gap-8 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={18} className="text-blue-500" />
                  <span>Гарантия 5 лет</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Wrench" size={18} className="text-blue-500" />
                  <span>Монтаж за 2-3 часа</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} className="text-blue-500" />
                  <span>Поддержка 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Icon name="Wind" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold text-white">AeroDrying</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 AeroDrying Smart. Все права защищены.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
