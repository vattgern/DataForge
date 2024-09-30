export default function Home() {
  return (
    <main className="mt-7">
      <h1 className="text-2xl font-bold">Возможности</h1>
      <section className="mt-5 p-5 grid grid-cols-4 grid-rows-3 gap-4 bg-gradient-to-r from-teal-500 to-blue-500">
        <div className="col-span-3 row-span-1 p-1.5 rounded-lg backdrop-blur-md bg-slate-500/[.50] text-white">
          <h2 className="font-bold text-xl">Мощные инструменты анализа</h2>
          <p className="text-sm">Приложение предоставляет широкий набор инструментов для анализа данных, включая визуализацию, фильтрацию, сортировку и базовые статистические функции.</p>
        </div>
        <div className="col-start-4 row-span-1 p-1.5 rounded-lg backdrop-blur-md bg-slate-500/[.50] text-white">
          <h2 className="font-bold text-xl">Интерфейс</h2>
          <p className="text-sm">Пользовательский интерфейс разработан так, чтобы быть интуитивно понятным и простым в использовании, даже для тех, кто не является экспертом в области анализа данных.</p>
        </div>
        <div className="col-span-2 p-1.5 rounded-lg backdrop-blur-md bg-slate-500/[.50] text-white">
          <h2 className="font-bold text-xl">Универсальность</h2>
          <p className="text-sm">Приложение подходит для анализа данных из различных источников и областей, будь то финансы, маркетинг, медицина или другие сферы.</p>
        </div>
        <div className="col-span-2 p-1.5 rounded-lg backdrop-blur-md bg-slate-500/[.50] text-white">
          <h2 className="font-bold text-xl">Гибкость и масштабируемость</h2>
          <p className="text-sm">Приложение разработано с учетом возможности масштабирования и добавления новых функций, что позволяет адаптировать его к растущим потребностям пользователей.</p>
        </div>
        <div className="p-1.5 rounded-lg backdrop-blur-md bg-slate-500/[.50] text-white">
          <h2 className="font-bold text-xl">Доступность</h2>
          <p className="text-sm">Веб-приложение доступно с любого устройства с подключением к интернету, что делает анализ данных удобным и доступным в любое время и в любом месте.</p>
        </div>
        <div className="p-1.5 rounded-lg backdrop-blur-md bg-slate-500/[.50] text-white">
          <h2 className="font-bold text-xl">Эффективность</h2>
          <p className="text-sm"> Использование веб-приложения позволяет компаниям и командам сократить затраты на дорогостоящее программное обеспечение и инструменты анализа данных.</p>
        </div>
        <div className="p-1.5 rounded-lg backdrop-blur-md bg-slate-500/[.50] text-white">
          <h2 className="font-bold text-xl">Визуализация</h2>
          <p className="text-sm">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.</p>
        </div>
        <div className="p-1.5 rounded-lg backdrop-blur-md bg-slate-500/[.50] text-white">
          <h2 className="font-bold text-xl">Визуализация</h2>
          <p className="text-sm">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.</p>
        </div>
      </section>
    </main>
  );
}
