import ButtonLogin from "./components/ButtonLogin";

export default function Home() {
  const isLoggedIn = true;
  const name = "Sergey";

  return (
    <main className>
      {/* HEADER */}
      <section className="bg-base-200 ">
        <div className="flex justify-between items-center px-8 py-2 max-w-3xl mx-auto">
          <div className="font-bold">CodeFastSaaS</div>
          <div className="space-x-4 max-md:hidden"> 
            <a className="link link-hover"  href="">Pricing</a>
            <a className="link link-hover" href="">FAQ</a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
      {/* HERO */}
      <section className="text-center py-32 px-8 max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl  font-extrabold mb-6">Collect customer feedback to build better product</h1>
        <div className="opacity-90 mb-10">
          Create a feedback board in minutes, prioritize features, and
          build products your customers will love.
        </div>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>
      {/* PRICING */}
      <section className="bg-base-200">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">Pricing</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">A pricing that adapts to your needs</h2>
          <div className="p-8 bg-base-100 max-w-96 rounded-3xl mx-auto">
            <div className="flex gap-2  items-baseline">
              <div className="text-4xl font-black">$19</div>
              <div className="uppercase text-sm font-medium opacity-60">
                /monts
              </div>
            </div>
            <div>
              <ul>
                <li>Collect customer feedback</li>
                <li>Unlimited boards</li>
                <li>Admin dashboard</li>
                <li>24/7 support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}