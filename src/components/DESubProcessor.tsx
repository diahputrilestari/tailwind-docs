export default function DESubProcessor() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <article className="bg-white shadow-sm rounded-lg overflow-hidden">
          <header className="bg-white border-b border-gray-200 px-6 py-8 sm:px-8 sm:py-10 text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Sub-processor 82DASH</h1>

          </header>

          <div className="px-6 py-8 sm:px-8 sm:py-10">
            <div className="prose prose-lg prose-gray max-w-none prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-li:text-gray-700 prose-li:mb-3 prose-li:leading-relaxed prose-strong:text-gray-900 prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-a:no-underline hover:prose-a:underline prose-ul:mb-6 prose-ul:mt-4">
              <div className="mt-4 overflow-auto">
                <table className="min-w-full text-sm text-left text-gray-700 border border-gray-300">
                  <thead className="bg-gray-100 text-xs uppercase">
                    <tr>
                      <th className="px-4 py-2 border border-gray-300">Unterauftragsverarbeiter</th>
                      <th className="px-4 py-2 border border-gray-300">Art und Zweck der Verarbeitung</th>
                      <th className="px-4 py-2 border border-gray-300">Kategorien personenbezogener Daten</th>
                      <th className="px-4 py-2 border border-gray-300">Ort der Verarbeitung</th>
                      <th className="px-4 py-2 border border-gray-300">Datenschutz- / Datenverarbeitungsrichtlinie</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="px-4 py-2 border">Vercel</td>
                      <td className="px-4 py-2 border">Hosting der Next.js-Frontend- und API-Routen; Speicherung von Server-Logs</td>
                      <td className="px-4 py-2 border">IP-Adressen, HTTP-Header, sämtliche an die API gesendeten Anfragen/Antworten</td>
                      <td className="px-4 py-2 border">EU und USA</td>
                      <td className="px-4 py-2 border text-blue-600 underline"><a href="https://vercel.com/legal/dpa" target="_blank">link</a></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-2 border">Supabase</td>
                      <td className="px-4 py-2 border">PostgreSQL-Datenbankmanagement, Authentifizierungsdienste und Objektspeicherung für Nutzer-Uploads</td>
                      <td className="px-4 py-2 border">Namen, E-Mail-Adressen, Passwort-Hashes, Session-Tokens, Profildaten, Bilder</td>
                      <td className="px-4 py-2 border">EU und USA</td>
                      <td className="px-4 py-2 border text-blue-600 underline"><a href="https://supabase.com/legal/dpa" target="_blank">link</a></td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-2 border">ImageKit</td>
                      <td className="px-4 py-2 border">Echtzeit-Bildoptimierung</td>
                      <td className="px-4 py-2 border">Hochgeladene Nutzerbilder und öffentlich zugängliche URLs, die auf diese verweisen (können Gesichtsbilder enthalten)</td>
                      <td className="px-4 py-2 border">Globales CDN-Edge-Netzwerk mit zentraler Verarbeitung in der EU</td>
                      <td className="px-4 py-2 border text-blue-600 underline"><a href="https://imagekit.io/gdpr/" target="_blank">link</a></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-2 border">SendGrid (Twilio)</td>
                      <td className="px-4 py-2 border">Transaktionale E-Mail-Zustellung (z. B. Anmeldung, Passwort-Reset, Benachrichtigungen, Erinnerungen, Rabattcodes)</td>
                      <td className="px-4 py-2 border">E-Mail-Adresse des Empfängers, Nachrichteninhalte, IP-Adresse, User-Agent für Klick-/Öffnungs-Tracking</td>
                      <td className="px-4 py-2 border">EU und USA</td>
                      <td className="px-4 py-2 border text-blue-600 underline"><a href="https://www.twilio.com/en-us/legal/data-protection-addendum" target="_blank">link</a></td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-2 border">OpenAI</td>
                      <td className="px-4 py-2 border">KI-basierte Bildklassifikation und Moderation (OpenAI Vision / Moderation API)</td>
                      <td className="px-4 py-2 border">Hochgeladene Bilder (können erkennbare Gesichter oder sensible Inhalte enthalten)</td>
                      <td className="px-4 py-2 border">USA</td>
                      <td className="px-4 py-2 border text-blue-600 underline"><a href="https://openai.com/policies/data-processing-addendum/" target="_blank">link</a></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-2 border text-blue-600 underline"><a href="https://bunny.net/">Bunny.net</a></td>
                      <td className="px-4 py-2 border">Video-Hosting und -Verarbeitung</td>
                      <td className="px-4 py-2 border">Hochgeladene Videos (können erkennbare Gesichter oder sensible Inhalte enthalten)</td>
                      <td className="px-4 py-2 border">EU / Global CDN</td>
                      <td className="px-4 py-2 border text-blue-600 underline"><a href="https://bunny.net/gdpr/" target="_blank">link</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </article>
      </div>
    </div>
  );
}
