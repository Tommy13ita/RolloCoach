// Since we're using TypeScript with React 18+, we don't need to explicitly import React
import React, { useCallback } from 'react';
import { Play, Check, Phone, Star, Target, Users, Trophy, ArrowRight } from 'lucide-react';

function App() {
  const whatsappMessage = encodeURIComponent(`Ciao Rollo! 💥
Ho visto la tua pagina e voglio iniziare ad allenarmi con te.
Vorrei prenotare una call conoscitiva per capire meglio il percorso e iniziare il mio allenamento personalizzato, anche online se possibile.
Fammi sapere quando sei disponibile!
🥊 – [Il tuo nome]`);

  const whatsappUrl = `https://wa.me/393661319838?text=${whatsappMessage}`;

  const handleWhatsAppClick = useCallback(() => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }, [whatsappUrl]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-40"
            preload="metadata"
            aria-label="Video di allenamento di boxe"
          >
            <source src="https://videos.pexels.com/video-files/6253312/6253312-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-red-900/50 to-black/80"></div>
        </div>

        {/* Graffiti Overlay */}
        <div className="absolute inset-0 opacity-20 z-5">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff0000' fill-opacity='0.1'%3E%3Cpath d='M20 20h60v60H20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-none">
              <span className="block text-white drop-shadow-2xl">ALLENA IL CORPO.</span>
              <span className="block text-red-500 drop-shadow-2xl">COSTRUISCI LA MENTE.</span>
              <span className="block text-blue-500 drop-shadow-2xl">TRASFORMA LA TUA VITA.</span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-200 drop-shadow-lg">
            Con <span className="text-red-500 font-bold">Rollo Boxing Coach</span>, la boxe non è solo sport:
            è <span className="text-blue-500">mindset</span>, <span className="text-blue-500">trasformazione</span> e
            <span className="text-blue-500"> potenza personale</span>.
          </p>

          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-300 drop-shadow-lg">
            Se vuoi solo sudare, vai in palestra. Se vuoi cambiare la tua mentalità,
            il tuo corpo e il tuo stile di vita… <span className="text-white font-semibold">Allora alleniamoci insieme.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <span className="text-blue-500 font-semibold flex items-center gap-2 bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
              <Target className="w-5 h-5" />
              Allenamenti privati – Online o dal vivo
            </span>
            <span className="text-red-500 font-semibold flex items-center gap-2 bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
              <Phone className="w-5 h-5" />
              Prenota ora la tua call conoscitiva gratuita
            </span>
          </div>

          <button
            onClick={handleWhatsAppClick}
            className="bg-red-600 hover:bg-red-700 text-white font-black text-xl px-12 py-6 rounded-none transform hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-red-500 hover:border-yellow-400 cursor-pointer"
            aria-label="Prenota una call conoscitiva su WhatsApp"
          >
            🔴 PRENOTA LA CALL
          </button>
        </div>

      </section>

      {/* Chi è Rollo Section with Images */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative" id="chi-sono">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10">
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
              CHI È <span className="text-red-500">ROLLO</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gray-800/90 p-8 border-l-4 border-red-500 rounded-r-lg backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-blue-500 mb-4">
                  "Da outsider a coach: la mia storia non la trovi nei libri."
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Cresciuto a ritmo di sacrificio, disciplina e old school hip-hop,
                  ho trasformato la boxe in un'arma di rinascita personale. Oggi alleno
                  ragazzi, uomini e donne che vogliono smettere di seguire il flusso e
                  iniziare a scrivere la propria storia.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-red-600 p-6 text-center rounded-lg">
                  <Trophy className="w-8 h-8 mx-auto mb-3 text-blue-500" />
                  <h4 className="font-bold text-sm">Coach certificato in formazione</h4>
                </div>
                <div className="bg-blue-500 text-black p-6 text-center rounded-lg">
                  <Users className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-bold text-sm">Allenatore privato attivo online e in presenza</h4>
                </div>
                <div className="bg-gray-700 p-6 text-center rounded-lg">
                  <Target className="w-8 h-8 mx-auto mb-3 text-red-400" />
                  <h4 className="font-bold text-sm text-red-400">Creatore del metodo "Fight Your Limits™"</h4>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Coach Image */}
              <div className="relative mb-6">
                <img
                  src="/images/Sezione_chi_e_Rollo.jpeg"
                  alt="Boxing coach in action"
                  className="w-full h-96 object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-lg">"FOCUS. DISCIPLINA. RISULTATI."</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-600 to-blue-500 p-1 rounded-lg">
                <div className="bg-black p-8 rounded-lg">
                  <blockquote className="text-2xl md:text-3xl font-bold text-center text-white leading-relaxed">
                    "Con la boxe non impari solo a colpire.
                    <span className="text-red-500"> Impari a resistere.</span>
                    <span className="text-blue-500"> A scegliere.</span>
                    <span className="text-red-500"> A risorgere."</span>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Video Section */}
      <section className="py-20 bg-black relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
              ALLENAMENTO <span className="text-red-500">REALE</span>
            </h2>
            <p className="text-xl text-blue-500 font-semibold">Guarda come si allena un vero fighter</p>
            <div className="w-24 h-1 bg-red-500 mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">

            <div className="relative h-full">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-lg shadow-2xl"
                preload="metadata"
              >
                <source src="/videos/Video_preparazione.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Preparazione <span className="text-blue-500">Mentale</span> e <span className="text-red-500">Fisica</span>
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Ogni sessione inizia dalla testa. Focus, respirazione, visualizzazione.
                Poi si passa ai guanti. Tecnica, potenza, resistenza.
                <span className="text-red-500 font-semibold"> Zero compromessi.</span>
              </p>
              <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-blue-500 font-bold text-lg mb-2">
                  "Il ring ti insegna chi sei davvero."
                </p>
                <p className="text-gray-300">
                  Ogni colpo, ogni round, ogni goccia di sudore ha un significato.
                  Non stiamo solo allenando il corpo - stiamo forgiando il carattere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cosa Ottieni Section with Background Images */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
        {/* Background boxing gym image */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg"
            alt="Boxing gym atmosphere"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
              COSA <span className="text-blue-500">OTTIENI</span> ALLENANDOTI CON ME
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Nessun copia-incolla. Solo un percorso cucito su di te.
            </p>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Piano personalizzato su obiettivi reali",
                description: "forza, velocità, resistenza, mindset",
                image: "/images/Piano_personalizzato.jpeg"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Allenamenti one-to-one",
                description: "in presenza o online",
                image: "/images/Allenamenti_one_to_one.jpeg"
              },
              {
                icon: <Play className="w-8 h-8" />,
                title: "Analisi tecnica e feedback video",
                description: "Monitoraggio costante delle tue performance",
                image: "/images/Analisi_tecnica_e_feedback.jpeg"
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                title: "Monitoraggio progressi",
                description: "adattamenti mensili personalizzati",
                image: "/images/Monitoraggio_progressi.jpeg"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Motivazione costante",
                description: "stile autentico, zero fronzoli",
                image: "/images/Motivazione_costante.jpeg"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-red-500 transition-all duration-300 group overflow-hidden">
                <div className="h-32 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-red-500 mb-4 group-hover:text-blue-500 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">
              Per chi vuole cambiare per davvero. Niente scuse, niente fronzoli.
            </h3>
          </div>
        </div>
      </section>

      {/* Come Funziona Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
              COME <span className="text-red-500">FUNZIONA</span>
            </h2>
            <p className="text-xl text-blue-500 font-semibold">(IN 3 STEP)</p>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Prenota la call conoscitiva",
                description: "Ti ascolto. Capisco dove sei e dove vuoi arrivare. Niente schede generiche, solo realtà.",
                color: "red",
                image: "/images/Prenota_call.jpeg"
              },
              {
                step: "2",
                title: "Ricevi il tuo piano su misura",
                description: "Allenamenti, obiettivi, consigli tecnici e mentali. Online o live. Tu scegli, io creo.",
                color: "blue",
                image: "/images/Piano_personalizzato.jpeg"
              },
              {
                step: "3",
                title: "Inizia a combattere davvero",
                description: "Controlli settimanali, crescita reale, rispetto massimo.",
                color: "red",
                image: "https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg"
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-800 rounded-lg border-2 border-gray-700 hover:border-red-500 transition-all duration-300 h-full overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black mb-6 ${item.color === 'red' ? 'bg-red-600 text-white' : 'bg-blue-500 text-white'
                      }`}>
                      {item.step}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                {index < 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-white-500" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-red-600 to-blue-500 p-1 rounded-lg inline-block">
              <div className="bg-black px-8 py-4 rounded-lg">
                <p className="text-2xl font-bold text-white">
                  🎤 "You talk it, I walk it. Let's train."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonianze Section with Profile Images */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
              TESTIMONIANZE <span className="text-blue-500">REALI</span>
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Ho iniziato da zero. Dopo 2 mesi con Rollo, ho perso 7kg, ma soprattutto ho ritrovato testa e motivazione.",
                author: "Alessandro, 28 anni",
                image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
              },
              {
                quote: "Allenarsi con lui è come entrare in un pezzo rap. C'è ritmo, potenza, e ti porta a dare tutto.",
                author: "Valentina, 34 anni",
                image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
              },
              {
                quote: "Pensavo fosse solo boxe. Era crescita personale.",
                author: "Matteo, 21 anni",
                image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-800 rounded-lg border-l-4 border-blue-500 hover:transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-500 mr-4"
                      loading="lazy"
                      width="64"
                      height="64"
                    />
                    <div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-blue-500 fill-current" />
                        ))}
                      </div>
                      <cite className="text-red-400 font-semibold">– {testimonial.author}</cite>
                    </div>
                  </div>
                  <blockquote className="text-lg text-gray-300 leading-relaxed">
                    "📣 {testimonial.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Finale Section with Background Video */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-40"
            preload="metadata"
            aria-label="Video di allenamento di boxe"
          >
            <source src="https://videos.pexels.com/video-files/6253312/6253312-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-red-900/50 to-black/80"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-white leading-tight drop-shadow-2xl">
              🚨 I POSTI SONO <span className="text-blue-500">LIMITATI</span>
            </h2>
            <p className="text-2xl mb-6 text-gray-200 drop-shadow-lg">
              Solo <span className="text-blue-500 font-bold">5 atleti nuovi</span> al mese.
            </p>
            <p className="text-3xl font-bold text-white mb-8 drop-shadow-lg">
              Vuoi essere il prossimo a combattere con me?
            </p>
          </div>

          <div className="bg-black/70 backdrop-blur-sm p-8 rounded-lg mb-8 border-2 border-red-600">
            <h3 className="text-2xl font-bold text-blue-500 mb-4 flex items-center justify-center gap-2">
              <Phone className="w-6 h-6" />
              Prenota ora la tua call gratuita di 20 minuti
            </h3>
            <p className="text-lg text-gray-200 mb-6">
              Parliamo del tuo percorso, senza impegno. Ma con tutto il fuoco che hai dentro.
            </p>
          </div>

          <button
            onClick={handleWhatsAppClick}
            className="bg-blue-500 hover:text-black font-black text-2xl px-16 py-8 rounded-lg transform hover:scale-110 transition-all duration-300 shadow-2xl border-4 border-white hover:border-red-500 mb-8 cursor-pointer"
          >
            PRENOTA ORA
          </button>

          <div className="text-center">
            <p className="text-xl font-bold text-blue-500 drop-shadow-lg">
              Fight Your Limits™
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Rollo Boxing Coach. Fight Your Limits™ - Tutti i diritti riservati.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
