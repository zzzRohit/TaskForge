export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Mini Trello
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Organize work in a simpler way.
            </h1>
          </div>
          <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm">
            Project setup ready
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Backlog</p>
            <h2 className="mt-3 text-3xl font-bold">12</h2>
            <p className="mt-2 text-sm text-slate-600">
              Ideas waiting to be prioritized.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">In progress</p>
            <h2 className="mt-3 text-3xl font-bold">4</h2>
            <p className="mt-2 text-sm text-slate-600">
              Key tasks currently moving forward.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Done</p>
            <h2 className="mt-3 text-3xl font-bold">7</h2>
            <p className="mt-2 text-sm text-slate-600">
              Completed items from this sprint.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
