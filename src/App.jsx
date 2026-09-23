import React, { useState, useEffect } from 'react';
import { 
  Pill, 
  Trash2, 
  AlertTriangle, 
  MapPin, 
  BookOpen, 
  Stethoscope, 
  Leaf, 
  ChevronRight, 
  Search, 
  ShieldCheck, 
  Award, 
  Syringe, 
  Recycle,
  HeartPulse,
  ExternalLink,
  Loader2,
  Calendar,
  Activity,
  Globe
} from 'lucide-react';

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Onde você deve descartar agulhas e seringas usadas (insumos hospitalares)?",
    options: [
      "No lixo reciclável (plástico)",
      "No lixo comum do banheiro",
      "Em recipientes rígidos (como garrafas PET com tampa ou Descarpack) e levar a um posto de saúde",
      "No vaso sanitário"
    ],
    correctAnswer: 2,
    explanation: "Objetos perfurocortantes nunca devem ir para o lixo comum ou reciclável, pois podem ferir coletores. Devem ser guardados em recipientes rígidos e entregues em unidades de saúde."
  },
  {
    id: 2,
    question: "O que fazer com os comprimidos vencidos que sobraram na cartela?",
    options: [
      "Jogar no lixo comum",
      "Jogar na pia ou vaso sanitário",
      "Queimar no quintal",
      "Levar a uma farmácia que possua ponto de coleta específico"
    ],
    correctAnswer: 3,
    explanation: "Medicamentos no lixo comum ou na rede de esgoto contaminam o solo e a água. Devem ser levados aos pontos de coleta em farmácias ou postos de saúde."
  },
  {
    id: 3,
    question: "A caixa de papelão do medicamento e a bula devem ser descartadas onde?",
    options: [
      "No ponto de coleta de medicamentos da farmácia",
      "No lixo reciclável de papel",
      "No lixo orgânico",
      "Junto com as agulhas"
    ],
    correctAnswer: 1,
    explanation: "Se não estiverem contaminadas com o medicamento, a caixa de papelão e a bula podem e devem ser descartadas no lixo reciclável comum."
  },
  {
    id: 4,
    question: "Por que o descarte de remédios no vaso sanitário é perigoso para o meio ambiente?",
    options: [
      "Porque pode entupir o encanamento da casa",
      "Porque os princípios ativos contaminam corpos hídricos e lençóis freáticos",
      "Porque atrai insetos para o banheiro",
      "Não é perigoso, é a forma mais rápida e segura de descartar"
    ],
    correctAnswer: 1,
    explanation: "Os medicamentos contêm compostos químicos que, ao chegarem em rios e lençóis freáticos, afetam os ecossistemas, causando mutações em animais marinhos e até impactando a saúde humana a longo prazo."
  }
];

const Navbar = ({ activeTab, setActiveTab }) => (
  <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-lg border-b border-teal-100 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => setActiveTab('home')}>
          <div className="bg-gradient-to-br from-teal-500 to-emerald-600 p-2 rounded-xl text-white group-hover:scale-105 transition-transform">
            <HeartPulse size={24} />
          </div>
          <span className="font-bold text-xl text-slate-800 tracking-tight">Eco<span className="text-teal-600">Med</span></span>
        </div>
        
        {/* Mobile Menu Button - Simplificado para este MVP */}
        <div className="md:hidden flex items-center">
           <span className="text-sm font-medium text-teal-600">Menu Interativo</span>
        </div>

        <div className="hidden md:flex space-x-2">
          {[
            { id: 'home', label: 'Início', icon: Leaf },
            { id: 'learn', label: 'Uso & Descarte', icon: BookOpen },
            { id: 'map', label: 'Pontos de Coleta', icon: MapPin },
            { id: 'quiz', label: 'Quiz Interativo', icon: Award },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-teal-50 text-teal-700 shadow-sm border border-teal-100'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-teal-600 border border-transparent'
              }`}
            >
              <tab.icon size={16} className={activeTab === tab.id ? 'animate-pulse' : ''} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  </nav>
);

const HomeView = ({ setActiveTab }) => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pt-16">
    {/* Hero Section */}
    <div className="relative isolate px-6 pt-16 lg:px-8 overflow-hidden bg-teal-900 text-white">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2dd4bf] to-[#047857] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      
      <div className="mx-auto max-w-3xl py-12 sm:py-16 lg:py-20 text-center relative z-10">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-teal-100 ring-1 ring-teal-500/50 hover:ring-teal-400 bg-white/10 backdrop-blur-sm transition-all duration-300">
            <span className="font-semibold flex items-center justify-center">
               <Globe size={16} className="mr-2 inline" />
               Apoiando o ODS 3 da ONU: Saúde e Bem-Estar
            </span>
          </div>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6">
          Proteja sua saúde e o <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-emerald-300">meio ambiente.</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-teal-50 max-w-2xl mx-auto">
          O descarte inadequado de medicamentos vencidos em lixo comum ou na rede de esgoto contamina corpos hídricos e causa graves impactos ambientais e à saúde pública. Aprenda o destino correto e torne-se um agente de mudança.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => setActiveTab('learn')}
            className="w-full sm:w-auto rounded-full bg-teal-500 px-8 py-4 text-sm font-bold text-white shadow-lg hover:bg-teal-400 hover:scale-105 transition-all duration-300 flex items-center justify-center"
          >
            Aprender Práticas Seguras
          </button>
          <button 
            onClick={() => setActiveTab('map')}
            className="w-full sm:w-auto rounded-full bg-transparent px-8 py-4 text-sm font-bold text-teal-100 shadow-sm border border-teal-500 hover:bg-white/10 transition-all duration-300 flex items-center justify-center group"
          >
            <MapPin size={18} className="mr-2 text-teal-300 group-hover:text-teal-200" />
            Encontrar Pontos de Coleta
          </button>
        </div>
      </div>
    </div>

    {/* Impact Statistics Section */}
    <div className="bg-teal-950 py-12 relative overflow-hidden border-t border-teal-800/50">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')]"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-teal-800/50">
          <div className="p-4">
            <h3 className="text-4xl font-extrabold text-teal-400 mb-2">+448 Toneladas</h3>
            <p className="text-teal-100/80 font-medium">De medicamentos coletados anualmente no Brasil, mas ainda é pouco frente ao descartado incorretamente.</p>
          </div>
          <div className="p-4 pt-8 md:pt-4">
            <h3 className="text-4xl font-extrabold text-emerald-400 mb-2">Riscos Ocultos</h3>
            <p className="text-teal-100/80 font-medium">Antibióticos no solo geram superbactérias e afetam o tratamento de doenças futuras.</p>
          </div>
          <div className="p-4 pt-8 md:pt-4">
            <h3 className="text-4xl font-extrabold text-teal-400 mb-2">Meta 2030</h3>
            <p className="text-teal-100/80 font-medium">Reduzir as doenças e mortes por contaminação do solo e da água através da conscientização.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Feature Cards Section */}
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-800">Como você pode fazer a diferença hoje?</h2>
        <p className="text-slate-600 mt-4">Pequenas atitudes na sua casa evitam grandes desastres ambientais.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Uso Consciente", desc: "Evite a automedicação e siga a prescrição médica. Isso previne interações perigosas e sobras desnecessárias em casa.", icon: ShieldCheck, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
          { title: "Descarte Seguro", desc: "Remédios vencidos devem ser levados a estações de coleta em farmácias, nunca jogados no lixo ou vaso sanitário.", icon: Recycle, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
          { title: "Insumos Hospitalares", desc: "Agulhas e seringas requerem caixas específicas (descarpack) para evitar contaminação biológica e acidentes com garis.", icon: Syringe, color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-100" }
        ].map((item, idx) => (
          <div key={idx} className={`bg-white p-8 rounded-3xl shadow-sm border ${item.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
            <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-6`}>
              <item.icon size={32} className={item.color} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const NewsWidget = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Busca na API do IBGE por palestras / eventos
    fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?busca=palestra&qtd=2')
      .then(res => res.json())
      .then(data => {
        setNews(data.items || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro ao buscar palestras:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-8 rounded-3xl text-white shadow-xl flex flex-col md:flex-row gap-8 items-center w-full">
      <div className="md:w-1/3 w-full text-center md:text-left">
        <h4 className="text-2xl font-bold flex items-center justify-center md:justify-start mb-4">
          <Calendar size={28} className="mr-3 text-blue-200" />
          Eventos & Palestras
        </h4>
        <span className="text-sm font-semibold bg-blue-400/30 text-blue-100 px-4 py-2 rounded-full inline-flex items-center">
           <Activity size={16} className="mr-2 animate-pulse" /> Radar Saúde (IBGE)
        </span>
        <p className="text-blue-200/60 mt-6 text-sm hidden md:block">Fonte de dados: Portal de Dados Abertos - IBGE</p>
      </div>
      
      <div className="md:w-2/3 w-full flex-1">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-8">
            <Loader2 className="animate-spin text-blue-200 mb-2" size={32} />
            <span className="text-sm text-blue-200">Buscando dados no IBGE...</span>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {news.length > 0 ? (
              news.map((item) => (
                <a 
                  key={item.id} 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-white/10 hover:bg-white/20 p-5 rounded-2xl transition-all border border-white/10 hover:border-white/30 group h-full flex flex-col"
                >
                  <h5 className="font-semibold text-sm md:text-base leading-snug mb-4 group-hover:text-blue-100 flex-grow">{item.titulo}</h5>
                  <div className="flex items-center justify-between text-xs text-blue-200 font-medium mt-auto">
                    <span>{item.data_publicacao}</span>
                    <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))
            ) : (
              <div className="bg-white/5 p-4 rounded-xl text-center border border-white/10 col-span-2">
                <p className="text-sm text-blue-200">
                  Nenhuma palestra ou evento recente encontrado no momento.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const LearnView = () => {
  return (
    <div className="pt-24 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-500">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Guia de Práticas Seguras</h2>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Informações essenciais para promover a saúde e prevenir danos através do manejo correto de medicamentos.</p>
      </div>

      <div className="space-y-12">
        {/* Seção 1: Uso Correto */}
        <section>
          <div className="flex items-center space-x-3 mb-6 justify-center md:justify-start">
            <div className="bg-blue-100 p-2.5 rounded-xl text-blue-700 shadow-sm border border-blue-200">
              <Stethoscope size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">Diretrizes de Uso</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
             <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col">
              <div className="flex items-center mb-4">
                 <div className="bg-amber-100 p-3 rounded-xl mr-4">
                   <AlertTriangle size={24} className="text-amber-600"/>
                 </div>
                 <h4 className="text-xl font-bold text-slate-800 leading-tight">Perigos da Automedicação</h4>
              </div>
              <p className="text-slate-600 flex-grow leading-relaxed">
                O uso de medicamentos sem prescrição pode mascarar sintomas graves, causar intoxicações, reações alérgicas severas e interações medicamentosas que podem ser fatais, além de aumentar as sobras que viram lixo tóxico.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col">
              <div className="flex items-center mb-4">
                 <div className="bg-blue-100 p-3 rounded-xl mr-4">
                   <BookOpen size={24} className="text-blue-600"/>
                 </div>
                 <h4 className="text-xl font-bold text-slate-800 leading-tight">Adesão ao Tratamento</h4>
              </div>
              <p className="text-slate-600 flex-grow leading-relaxed">
                Não interrompa antibióticos apenas por se sentir melhor. A interrupção inadequada é a principal causa da criação de "superbactérias" resistentes. Siga o ciclo completo e horários prescritos.
              </p>
            </div>
          </div>
        </section>

        {/* Seção 2: Descarte Consciente */}
        <section>
          <div className="flex items-center space-x-3 mb-6 justify-center md:justify-start">
            <div className="bg-emerald-100 p-2.5 rounded-xl text-emerald-700 shadow-sm border border-emerald-200">
              <Trash2 size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">Triagem e Descarte</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-emerald-300 transition-colors group flex flex-col">
               <div className="bg-emerald-50 p-4 rounded-2xl w-fit mb-6 group-hover:bg-emerald-100 transition-colors">
                 <Pill size={32} className="text-emerald-600" />
               </div>
               <h4 className="text-xl font-bold text-slate-800 mb-3">Medicamentos</h4>
               <p className="text-slate-600 leading-relaxed flex-grow">
                 Mantenha na embalagem primária (cartela/blister). Entregue em <strong>Estações Coletoras em Farmácias</strong>.
               </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-rose-300 transition-colors group flex flex-col">
               <div className="bg-rose-50 p-4 rounded-2xl w-fit mb-6 group-hover:bg-rose-100 transition-colors">
                 <Syringe size={32} className="text-rose-600" />
               </div>
               <h4 className="text-xl font-bold text-slate-800 mb-3">Perfurocortantes</h4>
               <p className="text-slate-600 leading-relaxed flex-grow">
                 Agulhas e seringas requerem caixas rígidas (Descarpack). Leve ao <strong>Posto de Saúde (UBS)</strong>.
               </p>
            </div>
            
            <div className="bg-teal-50 p-8 rounded-3xl border border-teal-200 shadow-sm flex flex-col">
               <div className="bg-white p-4 rounded-2xl w-fit mb-6 shadow-sm border border-teal-100">
                 <Recycle size={32} className="text-teal-600" />
               </div>
               <h4 className="text-xl font-bold text-teal-900 mb-3">Caixas e Bulas</h4>
               <p className="text-teal-800 leading-relaxed flex-grow">
                 Se não estiverem sujas, vão para o <strong>Lixo Reciclável (Papel)</strong>. Rasgue seus dados pessoais.
               </p>
            </div>
          </div>
        </section>

        {/* Seção 3: News Widget Horizontal */}
        <section>
           <NewsWidget />
        </section>
      </div>
    </div>
  );
};

const MapSimulatorView = () => {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const buscarCep = async () => {
    const cleanCep = cep.replace(/\D/g, '');
    if (cleanCep.length !== 8) {
      setError('Por favor, digite um CEP válido com 8 dígitos.');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
      const data = await response.json();
      
      if (data.erro) {
        setError('CEP não encontrado. Tente novamente.');
        setAddress(null);
      } else {
        setAddress(data);
      }
    } catch (err) {
      setError('Erro de conexão ao buscar o CEP.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') buscarCep();
  };
  
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto animate-in fade-in duration-500">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
        <div className="grid md:grid-cols-2 min-h-[600px]">
          {/* Lado da Busca Real */}
          <div className="p-8 flex flex-col bg-slate-50 border-r border-slate-200">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-800 flex items-center"><MapPin className="mr-2 text-teal-600"/> Buscar Pontos (Integração Real)</h2>
              <p className="text-slate-500 mt-2 text-sm">Digite seu CEP. Nossa plataforma usará a API ViaCEP para mapear sua região e localizar farmácias e postos de saúde (UBS).</p>
            </div>
            
            <div className="flex space-x-2 mb-2">
              <div className="relative flex-1">
                <input 
                  type="text" 
                  placeholder="Ex: 01001-000" 
                  maxLength={9}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-white"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <Search className="absolute left-3 top-3.5 text-slate-400" size={20} />
              </div>
              <button 
                onClick={buscarCep}
                disabled={loading}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center min-w-[120px]"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : 'Buscar'}
              </button>
            </div>
            
            {error && <p className="text-rose-500 text-sm mb-4 animate-in fade-in">{error}</p>}

            <div className="flex-1 mt-6">
              {address ? (
                <div className="animate-in fade-in slide-in-from-bottom-2">
                  <div className="bg-teal-50 border border-teal-100 p-4 rounded-xl mb-6">
                    <h3 className="font-semibold text-teal-900">Localização Encontrada:</h3>
                    <p className="text-teal-700 text-sm">{address.logradouro}, {address.bairro}</p>
                    <p className="text-teal-700 text-sm">{address.localidade} - {address.uf}</p>
                  </div>
                  
                  <h4 className="font-semibold text-slate-700 mb-4">Gerando rotas reais no Google Maps:</h4>
                  <div className="space-y-3">
                    <a 
                      href={`https://www.google.com/maps/search/farmácias+perto+de+${address.bairro},+${address.localidade}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-teal-400 hover:shadow-md transition-all group"
                    >
                      <div>
                        <h3 className="font-bold text-slate-800 group-hover:text-teal-700 flex items-center">
                          <Pill size={18} className="mr-2 text-emerald-500" />
                          Farmácias Locais
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">Geralmente aceitam medicamentos vencidos.</p>
                      </div>
                      <ExternalLink size={20} className="text-slate-400 group-hover:text-teal-500" />
                    </a>

                    <a 
                      href={`https://www.google.com/maps/search/Posto+de+Saúde+UBS+perto+de+${address.bairro},+${address.localidade}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-teal-400 hover:shadow-md transition-all group"
                    >
                      <div>
                        <h3 className="font-bold text-slate-800 group-hover:text-teal-700 flex items-center">
                          <Stethoscope size={18} className="mr-2 text-blue-500" />
                          Postos de Saúde (UBS)
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">Ideais para descartar agulhas e insumos.</p>
                      </div>
                      <ExternalLink size={20} className="text-slate-400 group-hover:text-teal-500" />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 opacity-50 pb-12">
                  <MapPin size={48} className="mb-4" />
                  <p className="text-center text-sm">Digite um CEP válido para ativar<br/>a busca na sua região.</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Lado do Mapa Visual (Versão Clara) */}
          <div className="bg-slate-200 relative hidden md:block overflow-hidden">
            <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')]"></div>
            
            {address ? (
              <div className="absolute inset-0 flex items-center justify-center bg-teal-900/10">
                <div className="text-center animate-in zoom-in duration-500">
                  <div className="relative">
                    <div className="w-32 h-32 bg-teal-500/20 rounded-full animate-ping absolute top-0 left-0"></div>
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl relative z-10 border-4 border-teal-500">
                      <MapPin size={56} className="text-teal-600" />
                    </div>
                  </div>
                  <div className="mt-6 bg-white/90 backdrop-blur px-6 py-3 rounded-2xl shadow-lg">
                    <p className="font-bold text-slate-800 text-lg">{address.localidade}</p>
                    <p className="text-slate-600 text-sm">{address.uf}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center p-12 text-center flex-col">
                 <div className="w-24 h-24 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center mb-4 shadow-lg border border-white/40">
                   <MapPin size={40} className="text-slate-400" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-700">Aguardando Localização</h3>
                 <p className="text-slate-500 text-sm mt-2">A integração com o ViaCEP será exibida aqui.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const QuizView = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (index) => {
    if (isAnswered) return;
    
    setSelectedAnswer(index);
    setIsAnswered(true);
    
    if (index === QUIZ_QUESTIONS[currentQ].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQ < QUIZ_QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto animate-in fade-in duration-500">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 p-8 md:p-10">
        
        {!showResult ? (
          <>
            <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-6">
              <h2 className="text-2xl font-bold text-slate-800 flex items-center">
                <Award className="text-teal-600 mr-3" size={28} /> EcoQuiz
              </h2>
              <span className="text-sm font-bold bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full">
                Pergunta {currentQ + 1} de {QUIZ_QUESTIONS.length}
              </span>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-slate-800 leading-snug">
                {QUIZ_QUESTIONS[currentQ].question}
              </h3>
            </div>

            <div className="space-y-4 mb-8">
              {QUIZ_QUESTIONS[currentQ].options.map((option, idx) => {
                let btnClass = "w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 font-medium ";
                
                if (!isAnswered) {
                  btnClass += "border-slate-200 hover:border-teal-400 hover:bg-teal-50 text-slate-700 hover:shadow-sm";
                } else if (idx === QUIZ_QUESTIONS[currentQ].correctAnswer) {
                  btnClass += "border-emerald-500 bg-emerald-50 text-emerald-800";
                } else if (idx === selectedAnswer) {
                  btnClass += "border-rose-500 bg-rose-50 text-rose-800";
                } else {
                  btnClass += "border-slate-100 opacity-50 text-slate-400 bg-slate-50";
                }

                return (
                  <button 
                    key={idx} 
                    onClick={() => handleAnswer(idx)}
                    className={btnClass}
                    disabled={isAnswered}
                  >
                    <div className="flex items-center">
                       <span className="w-8 h-8 rounded-full border border-current flex items-center justify-center mr-4 flex-shrink-0 text-sm">
                         {String.fromCharCode(65 + idx)}
                       </span>
                       {option}
                    </div>
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div className="animate-in fade-in slide-in-from-bottom-4 bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8 shadow-inner">
                <h4 className="font-bold text-blue-900 mb-2 flex items-center">
                  <BookOpen size={18} className="mr-2" /> Explicação:
                </h4>
                <p className="text-blue-800 text-sm leading-relaxed">{QUIZ_QUESTIONS[currentQ].explanation}</p>
              </div>
            )}

            <div className="flex justify-end pt-4 border-t border-slate-100">
              <button 
                onClick={nextQuestion}
                disabled={!isAnswered}
                className={`px-8 py-3.5 rounded-full font-bold transition-all flex items-center ${
                  isAnswered 
                    ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:-translate-y-0.5' 
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                }`}
              >
                {currentQ < QUIZ_QUESTIONS.length - 1 ? 'Próxima Pergunta' : 'Ver Resultado Final'}
                {isAnswered && <ChevronRight size={18} className="ml-2" />}
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-12 animate-in zoom-in duration-500">
            <div className="w-28 h-28 mx-auto bg-gradient-to-tr from-teal-400 to-emerald-600 rounded-full flex items-center justify-center text-white shadow-2xl mb-8 border-4 border-teal-50">
              <Award size={56} />
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Quiz Concluído!</h2>
            <p className="text-xl text-slate-600 mb-8 font-medium">
              Você acertou <span className="text-3xl font-black text-teal-600 mx-1">{score}</span> de {QUIZ_QUESTIONS.length} perguntas.
            </p>
            
            <div className="max-w-md mx-auto mb-10 p-6 rounded-2xl bg-slate-50 border border-slate-100">
              {score === QUIZ_QUESTIONS.length ? (
                <p className="text-emerald-700 font-bold">Excelente! 🏆<br/><span className="text-sm font-medium mt-2 block text-emerald-600/80">Você é um verdadeiro agente de saúde ambiental. Compartilhe esse conhecimento!</span></p>
              ) : (
                <p className="text-amber-700 font-bold">Bom trabalho! 👍<br/><span className="text-sm font-medium mt-2 block text-amber-600/80">Recomendamos revisar as informações na aba "Uso & Descarte" para gabaritar na próxima.</span></p>
              )}
            </div>

            <button 
              onClick={resetQuiz}
              className="px-10 py-4 bg-teal-600 text-white rounded-full font-bold hover:bg-teal-700 shadow-xl shadow-teal-500/20 transition-all hover:scale-105 flex items-center justify-center mx-auto"
            >
              <Recycle size={20} className="mr-2" /> Tentar Novamente
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .custom-scrollbar::-webkit-scrollbar { width: 6px; }
      .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
      .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 10px; }
      body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-teal-200 selection:text-teal-900 flex flex-col">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow">
        {activeTab === 'home' && <HomeView setActiveTab={setActiveTab} />}
        {activeTab === 'learn' && <LearnView />}
        {activeTab === 'map' && <MapSimulatorView />}
        {activeTab === 'quiz' && <QuizView />}
      </main>

      {/* Footer redesenhado */}
      <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center space-x-2 mb-6">
              <HeartPulse size={28} className="text-teal-500" />
              <span className="font-extrabold text-2xl text-white tracking-tight">Eco<span className="text-teal-500">Med</span></span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              Projeto Integrador de Engenharia de Software. Desenvolvido para promover práticas seguras e conscientizar a população sobre os riscos biológicos e ambientais.
            </p>
            <div className="inline-flex flex-col bg-slate-900 p-4 rounded-2xl border border-slate-800 shadow-inner">
              <span className="text-xs text-slate-500 font-semibold tracking-wider uppercase mb-1">Desenvolvido por</span>
              <span className="text-base font-bold text-teal-400 flex items-center">
                Andressa Evellyn de Andrade
                <ShieldCheck size={16} className="ml-2 text-emerald-500" />
              </span>
              <span className="text-xs text-slate-500 mt-1">Universidade Cruzeiro do Sul</span>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6 text-lg">Áreas Envolvidas</h4>
            <ul className="text-sm space-y-3 text-slate-400 font-medium">
              <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-2"></div>Ciências da Saúde</li>
              <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-2"></div>Ciências Biológicas</li>
              <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-2"></div>Ciências Humanas e Licenciaturas</li>
              <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-2"></div>Ciências Sociais Aplicadas</li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
             <h4 className="text-white font-bold mb-6 text-lg">Apoio Institucional (ONU)</h4>
             <div className="flex items-start space-x-4 bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-teal-900 transition-colors">
                <div className="bg-white p-1 rounded w-14 h-14 flex flex-col items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="text-green-700 font-black text-sm leading-none tracking-tighter">ODS</span>
                  <span className="text-green-700 font-black text-xl leading-none mt-0.5">3</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-white mb-1">Saúde e Bem-Estar</p>
                  <p className="text-xs text-slate-400 leading-relaxed">Assegurar uma vida saudável e promover o bem-estar para todos, em todas as idades (Meta Global 3.9).</p>
                </div>
             </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-slate-500 font-medium">
            © {new Date().getFullYear()} EcoMed. Projeto Acadêmico.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-slate-600">
             <Leaf size={18} />
             <Recycle size={18} />
             <Globe size={18} />
          </div>
        </div>
      </footer>
    </div>
  );
}