import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
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
        <div className="flex items-center gap-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Возможности</a>
          <a href="#tech" className="text-gray-300 hover:text-white transition-colors">Технология</a>
          <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
            Связаться
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
  );
};

export default Index;
