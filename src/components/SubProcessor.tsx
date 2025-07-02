export default function SubProcessor() {
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
                      <th className="px-4 py-2 border border-gray-300">Sub-processor</th>
                      <th className="px-4 py-2 border border-gray-300">Nature and Purpose of Processing</th>
                      <th className="px-4 py-2 border border-gray-300">Categories of personal data</th>
                      <th className="px-4 py-2 border border-gray-300">Location of Processing</th>
                      <th className="px-4 py-2 border border-gray-300">Privacy/Data Processing Policy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="px-4 py-2 border">Vercel</td>
                      <td className="px-4 py-2 border">Hosts the Next.js frontend & API routes; holds server logs</td>
                      <td className="px-4 py-2 border">IP addresses, HTTP headers, any request/response bodies sent to the API</td>
                      <td className="px-4 py-2 border">EU and USA</td>
                      <td className="px-4 py-2 border text-blue-600 underline"><a href="https://vercel.com/legal/dpa" target="_blank">link</a></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-2 border">Supabase</td>
                      <td className="px-4 py-2 border">Managed Postgres database, authentication service, and object storage for user uploads</td>
                      <td className="px-4 py-2 border">Names, email addresses, password hashes, session tokens, profile data, images</td>
                      <td className="px-4 py-2 border">EU and USA</td>
                      <td className="px-4 py-2 border text-blue-600 underline"><a href="https://supabase.com/legal/dpa" target="_blank">link</a></td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-2 border">ImageKit</td>
                      <td className="px-4 py-2 border">Real-time image optimisation</td>
                      <td className="px-4 py-2 border">User-uploaded images and the public URLs that reference them (may include facial images)</td>
                      <td className="px-4 py-2 border">Global CDN edge network with core processing in EU</td>
                      <td className="px-4 py-2 border text-blue-600 underline"><a href="https://imagekit.io/gdpr/" target="_blank">link</a></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-2 border">SendGrid (Twilio)</td>
                      <td className="px-4 py-2 border">Transactional e-mail delivery (sign-up confirmation, password reset, notifications, reminders, coupon codes, etc)</td>
                      <td className="px-4 py-2 border">Recipient e-mail address, message content, IP & user-agent in click/open tracking</td>
                      <td className="px-4 py-2 border">EU and USA</td>
                      <td className="px-4 py-2 border text-blue-600 underline"><a href="https://www.twilio.com/en-us/legal/data-protection-addendum" target="_blank">link</a></td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-2 border">OpenAI</td>
                      <td className="px-4 py-2 border">AI-based image classification & moderation (OpenAI Vision / Moderation API)</td>
                      <td className="px-4 py-2 border">Images you upload (may contain identifiable faces or sensitive content)</td>
                      <td className="px-4 py-2 border">USA</td>
                      <td className="px-4 py-2 border text-blue-600 underline"><a href="https://openai.com/policies/data-processing-addendum/" target="_blank">link</a></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-2 border text-blue-600 underline"><a href="https://bunny.net/">Bunny.net</a></td>
                      <td className="px-4 py-2 border">Video hosting and processing</td>
                      <td className="px-4 py-2 border">Videos you upload (may contain identifiable faces or sensitive content)</td>
                      <td className="px-4 py-2 border">EU / Global CDN</td>
                      <td className="px-4 py-2 border text-blue-600 underline"><a href="https://bunny.net/gdpr/" target="_blank">link</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <footer className="bg-gray-50 border-t border-gray-200 px-6 py-6 sm:px-8">
            <p className="text-sm text-gray-500 text-center">
              These terms of service are effective as of the date last updated above and supersede all prior versions.
            </p>
          </footer>
        </article>
      </div>
    </div>
  );
}
