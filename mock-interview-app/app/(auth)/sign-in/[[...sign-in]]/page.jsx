import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative lg:col-span-5 lg:h-full xl:col-span-6 bg-gray-900">
          <img
            alt="Mock Interview Application"
            src="/images.jpg"
            className="w-full h-1/2 object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-end justify-center p-12">
            <div className="bg-gray-900 text-white p-4 rounded-lg">
              <h2 className="text-2xl font-bold text-[#800080] sm:text-3xl md:text-4xl mb-4">
                Welcome to Mock Interview Application
              </h2>

              <p className="leading-relaxed text-[#D8BFD8]">
                Welcome to Mock Interview Application – your AI-powered platform to practice and enhance your interview skills with personalized feedback and real-time assessments.
              </p>
            </div>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <SignIn />
          </div>
        </main>
      </div>
    </section>
  );
}

