export default function Banner() {
  return (
    <section className="w-full h-screen flex justify-center bg-theme text-soft-white relative overflow-hidden">
      <div className="max-w-[1920px] mx-auto w-full h-full flex relative">
        <h1
          className="absolute right-0 top-0 h-full flex flex-col uppercase font-family-inter font-bold text-[10rem] pr-2 rotate-180 leading-none"
          style={{ writingMode: "vertical-rl" }}
        >
          <span>henrique</span>
          <span>soubhia</span>
        </h1>
      </div>
    </section>
  );
}
