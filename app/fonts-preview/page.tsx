export default function FontsPreview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Font Family Preview
          </h1>
          <p className="text-lg text-slate-600">
            Didot & Manrope — Locally configured fonts
          </p>
        </div>

        {/* Didot Font Family */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="border-b border-slate-200 pb-6 mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Didot</h2>
              <p className="text-slate-600">
                Elegant serif typeface — Perfect for headlines and luxury
                branding
              </p>
            </div>

            {/* Didot Regular */}
            <div className="mb-12">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-700">
                  Regular
                </h3>
                <span className="text-sm text-slate-500 font-mono">
                  font-didot font-normal
                </span>
              </div>
              <div className="space-y-4">
                <p className="font-didot font-normal text-6xl text-slate-900">
                  The Quick Brown Fox
                </p>
                <p className="font-didot font-normal text-4xl text-slate-800">
                  Jumps Over The Lazy Dog
                </p>
                <p className="font-didot font-normal text-2xl text-slate-700">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </p>
                <p className="font-didot font-normal text-xl text-slate-600">
                  abcdefghijklmnopqrstuvwxyz 0123456789
                </p>
              </div>
            </div>

            {/* Didot Bold */}
            <div className="mb-12">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-700">Bold</h3>
                <span className="text-sm text-slate-500 font-mono">
                  font-didot font-bold
                </span>
              </div>
              <div className="space-y-4">
                <p className="font-didot font-bold text-6xl text-slate-900">
                  The Quick Brown Fox
                </p>
                <p className="font-didot font-bold text-4xl text-slate-800">
                  Jumps Over The Lazy Dog
                </p>
                <p className="font-didot font-bold text-2xl text-slate-700">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </p>
                <p className="font-didot font-bold text-xl text-slate-600">
                  abcdefghijklmnopqrstuvwxyz 0123456789
                </p>
              </div>
            </div>

            {/* Didot Italic */}
            <div className="mb-12">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-700">Italic</h3>
                <span className="text-sm text-slate-500 font-mono">
                  font-didot italic
                </span>
              </div>
              <div className="space-y-4">
                <p className="font-didot italic text-6xl text-slate-900">
                  The Quick Brown Fox
                </p>
                <p className="font-didot italic text-4xl text-slate-800">
                  Jumps Over The Lazy Dog
                </p>
                <p className="font-didot italic text-2xl text-slate-700">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </p>
                <p className="font-didot italic text-xl text-slate-600">
                  abcdefghijklmnopqrstuvwxyz 0123456789
                </p>
              </div>
            </div>

            {/* Didot Title */}
            <div>
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-700">Title</h3>
                <span className="text-sm text-slate-500 font-mono">
                  font-didot-title
                </span>
              </div>
              <div className="space-y-4">
                <p className="font-didot-title text-6xl text-slate-900">
                  The Quick Brown Fox
                </p>
                <p className="font-didot-title text-4xl text-slate-800">
                  Jumps Over The Lazy Dog
                </p>
                <p className="font-didot-title text-2xl text-slate-700">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </p>
                <p className="font-didot-title text-xl text-slate-600">
                  abcdefghijklmnopqrstuvwxyz 0123456789
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Manrope Font Family */}
        <section>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="border-b border-slate-200 pb-6 mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Manrope
              </h2>
              <p className="text-slate-600">
                Modern sans-serif typeface — Perfect for body text and UI
                elements
              </p>
            </div>

            {/* Manrope ExtraLight */}
            <div className="mb-10">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-700">
                  ExtraLight (200)
                </h3>
                <span className="text-sm text-slate-500 font-mono">
                  font-manrope font-extralight
                </span>
              </div>
              <div className="space-y-3">
                <p className="font-manrope font-extralight text-5xl text-slate-900">
                  The Quick Brown Fox Jumps Over The Lazy Dog
                </p>
                <p className="font-manrope font-extralight text-lg text-slate-600">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                  0123456789
                </p>
              </div>
            </div>

            {/* Manrope Light */}
            <div className="mb-10">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-700">
                  Light (300)
                </h3>
                <span className="text-sm text-slate-500 font-mono">
                  font-manrope font-light
                </span>
              </div>
              <div className="space-y-3">
                <p className="font-manrope font-light text-5xl text-slate-900">
                  The Quick Brown Fox Jumps Over The Lazy Dog
                </p>
                <p className="font-manrope font-light text-lg text-slate-600">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                  0123456789
                </p>
              </div>
            </div>

            {/* Manrope Regular */}
            <div className="mb-10">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-700">
                  Regular (400)
                </h3>
                <span className="text-sm text-slate-500 font-mono">
                  font-manrope font-normal
                </span>
              </div>
              <div className="space-y-3">
                <p className="font-manrope font-normal text-5xl text-slate-900">
                  The Quick Brown Fox Jumps Over The Lazy Dog
                </p>
                <p className="font-manrope font-normal text-lg text-slate-600">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                  0123456789
                </p>
              </div>
            </div>

            {/* Manrope Medium */}
            <div className="mb-10">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-700">
                  Medium (500)
                </h3>
                <span className="text-sm text-slate-500 font-mono">
                  font-manrope font-medium
                </span>
              </div>
              <div className="space-y-3">
                <p className="font-manrope font-medium text-5xl text-slate-900">
                  The Quick Brown Fox Jumps Over The Lazy Dog
                </p>
                <p className="font-manrope font-medium text-lg text-slate-600">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                  0123456789
                </p>
              </div>
            </div>

            {/* Manrope SemiBold */}
            <div className="mb-10">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-700">
                  SemiBold (600)
                </h3>
                <span className="text-sm text-slate-500 font-mono">
                  font-manrope font-semibold
                </span>
              </div>
              <div className="space-y-3">
                <p className="font-manrope font-semibold text-5xl text-slate-900">
                  The Quick Brown Fox Jumps Over The Lazy Dog
                </p>
                <p className="font-manrope font-semibold text-lg text-slate-600">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                  0123456789
                </p>
              </div>
            </div>

            {/* Manrope Bold */}
            <div className="mb-10">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-700">
                  Bold (700)
                </h3>
                <span className="text-sm text-slate-500 font-mono">
                  font-manrope font-bold
                </span>
              </div>
              <div className="space-y-3">
                <p className="font-manrope font-bold text-5xl text-slate-900">
                  The Quick Brown Fox Jumps Over The Lazy Dog
                </p>
                <p className="font-manrope font-bold text-lg text-slate-600">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                  0123456789
                </p>
              </div>
            </div>

            {/* Manrope ExtraBold */}
            <div>
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-700">
                  ExtraBold (800)
                </h3>
                <span className="text-sm text-slate-500 font-mono">
                  font-manrope font-extrabold
                </span>
              </div>
              <div className="space-y-3">
                <p className="font-manrope font-extrabold text-5xl text-slate-900">
                  The Quick Brown Fox Jumps Over The Lazy Dog
                </p>
                <p className="font-manrope font-extrabold text-lg text-slate-600">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                  0123456789
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Guide */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">How to Use These Fonts</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Didot Family</h3>
                <ul className="space-y-2 text-indigo-100">
                  <li>
                    <code className="bg-white/20 px-2 py-1 rounded">
                      font-didot
                    </code>{" "}
                    — Regular Didot
                  </li>
                  <li>
                    <code className="bg-white/20 px-2 py-1 rounded">
                      font-didot-title
                    </code>{" "}
                    — Didot Title variant
                  </li>
                  <li>
                    Use with{" "}
                    <code className="bg-white/20 px-2 py-1 rounded">
                      font-bold
                    </code>{" "}
                    or{" "}
                    <code className="bg-white/20 px-2 py-1 rounded">
                      italic
                    </code>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Manrope Family</h3>
                <ul className="space-y-2 text-indigo-100">
                  <li>
                    <code className="bg-white/20 px-2 py-1 rounded">
                      font-manrope
                    </code>{" "}
                    — Base family
                  </li>
                  <li>
                    Weights:{" "}
                    <code className="bg-white/20 px-2 py-1 rounded">
                      font-extralight
                    </code>{" "}
                    to{" "}
                    <code className="bg-white/20 px-2 py-1 rounded">
                      font-extrabold
                    </code>
                  </li>
                  <li>7 weight variants available (200-800)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
