
import React from 'react';

interface LegalModalProps {
  onClose: () => void;
}

const LegalModal: React.FC<LegalModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl p-8 md:p-12 animate-scale-in">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="prose prose-slate max-w-none">
          <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">Aviso Legal y Política de Privacidad</h1>
          
          <section className="mb-12">
            <h2 className="text-xl font-bold text-blue-900 mb-4 uppercase tracking-wider">1. Información General</h2>
            <div className="bg-slate-50 p-6 rounded-xl space-y-2 text-sm">
              <p><strong>Responsable:</strong> Tramisur Marbella SL</p>
              <p><strong>NIF:</strong> B01815281</p>
              <p><strong>Domicilio:</strong> Calle Juan de la Cierva, nº5 Bajo 29603 Marbella (Málaga)</p>
              <p><strong>Teléfono:</strong> 951 17 58 28 / 608 00 73 50</p>
              <p><strong>Email:</strong> info@tramisur.net</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-bold text-blue-900 mb-4 uppercase tracking-wider">2. Finalidad del Tratamiento</h2>
            <p className="text-slate-600 leading-relaxed">
              Tramisur trata sus datos para gestionar sus consultas, solicitudes de presupuestos y la prestación de servicios contratados. 
              En caso de remitirnos su currículum, los datos se tratarán para procesos de selección durante un año.
              Sus datos se conservarán mientras exista un interés mutuo o sea necesario por imperativo legal.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-bold text-blue-900 mb-4 uppercase tracking-wider">3. Legitimación y Destinatarios</h2>
            <p className="text-slate-600 leading-relaxed">
              La base legal es el consentimiento del usuario al contactar o la ejecución de un contrato. 
              <strong> Tramisur Marbella SL no cederá sus datos a terceros</strong>, salvo obligación legal o necesidad técnica para la prestación del servicio.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-bold text-blue-900 mb-4 uppercase tracking-wider">4. Sus Derechos</h2>
            <p className="text-slate-600 leading-relaxed">
              Tiene derecho a acceder, rectificar, suprimir sus datos, así como a la portabilidad y limitación del tratamiento. 
              Puede ejercerlos enviando un email a <strong>info@tramisur.net</strong> adjuntando copia de su DNI. 
              También puede reclamar ante la AEPD (www.aepd.es).
            </p>
          </section>

          <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4 pt-8">Política de Cookies</h1>
          
          <section className="mb-12">
            <p className="text-slate-600 leading-relaxed">
              Este sitio web utiliza cookies propias (técnicas y de sesión) y de terceros (Google Analytics) para mejorar la navegación 
              y analizar el tráfico de forma anónima. Las cookies técnicas son indispensables para el funcionamiento del sistema.
            </p>
            <div className="overflow-x-auto mt-6">
              <table className="min-w-full text-sm text-left text-slate-500">
                <thead className="bg-slate-50 text-slate-700 uppercase font-bold text-xs">
                  <tr>
                    <th className="px-6 py-3">Nombre</th>
                    <th className="px-6 py-3">Finalidad</th>
                    <th className="px-6 py-3">Duración</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-900">_ga, _gid</td>
                    <td className="px-6 py-4">Analítica web de Google. Estadísticas de uso.</td>
                    <td className="px-6 py-4">2 años / 24h</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-900">web_session_id</td>
                    <td className="px-6 py-4">Mantenimiento de sesión y preferencias de usuario.</td>
                    <td className="px-6 py-4">Sesión</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-sm italic">
              Puede configurar su navegador para bloquear o eliminar las cookies en cualquier momento a través de sus opciones de configuración.
            </p>
          </section>
        </div>
        
        <div className="mt-8 flex justify-center">
           <button 
             onClick={onClose}
             className="px-10 py-3 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-800 transition-all shadow-lg"
           >
             He leído y acepto los términos
           </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
