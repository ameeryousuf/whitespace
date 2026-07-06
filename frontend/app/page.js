import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle, Quote } from 'lucide-react';
import Image from "next/image";

export default function Home() {

  const plans = [
    {
      isRecommended: false,
      name: 'Free',
      price: '0',
      desc: 'Capture ideas and find them quickly',
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks"
      ]
    },
    {
      isRecommended: true,
      name: 'Personal',
      price: '11.99',
      desc: 'Keep home and family on track',
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks"
      ]
    },
    {
      isRecommended: false,
      name: 'Organization',
      price: '49.99',
      desc: 'Capture ideas and find them quickly',
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks"
      ]
    }
  ];

  const sponsors = [
    {
      path: '/sponsor1.png',
      alt: 'apple',
      size: 70
    },
    {
      path: '/sponsor2.png',
      alt: 'microsoft',
      size: 200
    },
    {
      path: '/sponsor3.png',
      alt: 'slack',
      size: 200
    },
    {
      path: '/sponsor4.png',
      alt: 'google',
      size: 200
    },
  ]

  const testimonials = [
    {
      isHighlighted: false,
      quote: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
      avatar: "/A1.png",
      name: "Oberon Shaw, MCH",
      role: "Head of Talent Acquisition, North America"
    },
    {
      isHighlighted: true,
      quote: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
      avatar: "/A2.png",
      name: "Oberon Shaw, MCH",
      role: "Head of Talent Acquisition, North America"
    },
    {
      isHighlighted: true,
      quote: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
      avatar: "/A3.png",
      name: "Oberon Shaw, MCH",
      role: "Head of Talent Acquisition, North America"
    }
  ];

  return (

    <>
      <div className="w-full min-h-screen flex flex-col justify-start items-center">

        <section
          style={{
            backgroundImage: "url('bgwires1.png')"
          }}
          className="px-40 py-40 bg-cover bg-center w-full bg-[#043873] flex justify-start items-center gap-10"
        >
          <div className="w-[40vw]  flex flex-col justify-center items-start gap-5 text-white">
            <h1 className="text-5xl font-bold leading-16">
              Get More Done with <br /> Whitespace
            </h1>
            <p className="text-gray-200 leading-8">
              Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.
            </p>
            <button className='text-white bg-[#4F9CF9] text-sm px-6 py-2 rounded-sm hover:cursor-pointer duration-300 transition-all ease-out flex justify-center items-center gap-2'>
              Try Whitespace free
              <ArrowRight size={15} />
            </button>
          </div>
          <div

            className="w-[60vw] h-full flex justify-end items-center"
          >
            <Image
              src="/WorkTogether.png"
              alt="Team working together"
              width={500}
              height={500}
              className="object-cover"
              priority
            />
          </div>
        </section>

        <section
          style={{
            backgroundImage: "url('bgwires2.png')",
            backgroundPosition: "0% 60%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "20%",
          }}
          className="px-40 py-20 w-full flex justify-center items-center text-black gap-10"
        >
          <div className="w-[50%] h-full flex flex-col justify-center items-start gap-5">
            <h1 className="text-6xl font-bold leading-16">
              Project <br />
              <span
                style={{
                  backgroundImage: "url('bgUnderline.png')",
                  backgroundPosition: "0% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% auto",
                }}
                className="pb-2"
              >
                Management
              </span>
            </h1>
            <p className="text-gray-700 leading-8">
              Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
            </p>
            <button className='text-white bg-[#4F9CF9] text-sm px-6 py-2 rounded-sm hover:cursor-pointer duration-300 transition-all ease-out flex justify-center items-center gap-10'>
              Get Started
              <ArrowRight size={15} />
            </button>
          </div>
          <div className="w-[50%] flex justify-end items-center">
            <Image
              src="/WorkTogether.png"
              alt="Team working together"
              width={500}
              height={500}
              className="object-cover"
              priority
            />
          </div>
        </section>

        <section className="w-full px-40 py-20 flex items-stretch justify-center text-black gap-10">
          <div className="w-[50%] overflow-hidden flex justify-start items-center">
            <Image
              src="/WorkTogether.png"
              alt="Team working together"
              width={500}
              height={500}
              className="object-cover"
              priority
            />
          </div>

          <div className="w-[50%] flex flex-col justify-center items-start gap-5">
            <h1 className="text-6xl font-bold leading-16">
              Work
              <span
                style={{
                  backgroundImage: "url('bgUnderline.png')",
                  backgroundPosition: "0% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% auto",
                }}
                className="pb-2 px-4"
              >
                together
              </span>
            </h1>
            <p className="text-gray-700 leading-8">
              With whitepace, share your notes with your colleagues and collaborate on them.
              You can also publish a note to the internet and share the URL with others.
            </p>
            <button className="text-white bg-[#4F9CF9] text-sm px-6 py-2 rounded-sm hover:cursor-pointer duration-300 transition-all ease-out flex justify-center items-center gap-10">
              Try it now
              <ArrowRight size={15} />
            </button>
          </div>
        </section>

        <section className="bg-[#043873] w-full px-40 py-20 flex items-stretch justify-center gap-10 text-white">
          <div className="w-[50%] flex flex-col justify-center items-start gap-5">
            <h1 className="text-6xl font-bold leading-16">
              Use as
              <span
                style={{
                  backgroundImage: "url('bgUnderline.png')",
                  backgroundPosition: "0% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% auto",
                }}
                className="pb-2 px-4"
              >
                Extention
              </span>
            </h1>
            <p className="text-gray-200 leading-8">
              Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
            </p>
            <button className="text-white bg-[#4F9CF9] text-sm px-6 py-2 rounded-sm hover:cursor-pointer duration-300 transition-all ease-out flex justify-center items-center gap-10">
              Let's Go
              <ArrowRight size={15} />
            </button>
          </div>
          <div className="w-[50%] overflow-hidden flex justify-end items-center">
            <Image
              src="/WorkTogether.png"
              alt="Team working together"
              width={500}
              height={500}
              className="object-cover"
              priority
            />
          </div>
        </section>

        <section className="w-full px-40 py-20 flex items-stretch justify-center text-black gap-10 ">
          <div className="w-[50%] overflow-hidden flex justify-start items-center">
            <Image
              src="/WorkTogether.png"
              alt="Team working together"
              width={500}
              height={500}
              className="object-cover"
              priority
            />
          </div>
          <div className="w-[50%] flex flex-col justify-center items-start gap-5">
            <h1 className="text-6xl font-bold leading-16">
              Customize it to
              <span
                style={{
                  backgroundImage: "url('bgUnderline.png')",
                  backgroundPosition: "0% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% auto",
                }}
                className="pb-2 px-4"
              >
                your needs
              </span>
            </h1>
            <p className="text-gray-700 leading-8">
              Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
            </p>
            <button className="text-white bg-[#4F9CF9] text-sm px-6 py-2 rounded-sm hover:cursor-pointer duration-300 transition-all ease-out flex justify-center items-center gap-10">
              Let's Go
              <ArrowRight size={15} />
            </button>
          </div>

        </section>

        <section className="w-full px-40 py-20 min-h-screen flex justify-center items-center gap-10 text-black">
          <div className="w-full min-h-screen flex flex-col justify-start items-center gap-10">
            <h1 className="text-6xl font-bold leading-16">
              Choose
              <span
                style={{
                  backgroundImage: "url('bgUnderline.png')",
                  backgroundPosition: "0% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% auto",
                }}
                className="pb-2 px-4"
              >
                Your Plan
              </span>
            </h1>
            <p className="w-[80%] text-gray-700 leading-8 text-center">
              Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
            </p>
            <div className="w-full flex justify-center items-center gap-16">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`flex flex-col justify-center items-start p-8 rounded-2xl ${plan.isRecommended
                    ? "bg-[#043873] text-white scale-125"
                    : "bg-white text-black border border-[#FFE492]"
                    }`}
                >
                  <h3 className="text-lg font-semibold mb-4">
                    {plan.name}
                  </h3>

                  <p
                    className={`text-2xl font-bold mb-4 ${plan.isRecommended ? "text-[#FFE492]" : "text-black"
                      }`}
                  >
                    ${plan.price}
                  </p>

                  <p
                    className={`mb-6 text-sm leading-6 ${plan.isRecommended ? "text-[#FFFFFF]" : "text-[#212529]"
                      }`}
                  >
                    {plan.desc}
                  </p>

                  <ul className="flex flex-col gap-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle
                          className={`w-4 h-4 mt-0.5 shrink-0 ${plan.isRecommended ? "text-[#FFE492]" : "text-[#212529]"
                            }`}
                        />
                        <span
                          className={`text-xs leading-5 ${plan.isRecommended ? "text-[#FFFFFF]" : "text-[#212529]"
                            }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`bg-[#4F9CF9] text-xs px-6 py-2 rounded-sm hover:cursor-pointer ${plan.isRecommended
                      ? "bg-[#4F9CF9] text-white"
                      : "bg-white border border-[#FFE492] text-black"
                      }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          style={{
            backgroundImage: "url('bgwires3.png')",
            backgroundPosition: "0% 50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "20%",
          }}
          className="bg-[#043873] mt-10 w-full min-h-[50vh] px-40 py-20 flex flex-col justify-center items-center gap-10"
        >
          <h1 className="text-6xl font-bold leading-16 w-[80%]">
            Your work, everywhere
            <span
              style={{
                backgroundImage: "url('bgUnderline2.png')",
                backgroundPosition: "0% 100%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% auto",
              }}
              className="pb-2 px-4"
            >
              you are
            </span>
          </h1>
          <p className="w-[70%] text-gray-200 leading-8 text-center">
            Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>
          <button className='text-white bg-[#4F9CF9] text-sm px-6 py-2 rounded-sm hover:cursor-pointer duration-300 transition-all ease-out flex justify-center items-center gap-2'>
            Try Taskey
            <ArrowRight size={15} />
          </button>
        </section>

        <section className="w-full min-h-screen px-40 py-20 flex flex-col justify-center items-center text-black">
          <div className="w-full min-h-[50vh] flex justify-center items-center gap-10">
            <div className="w-[50%] h-full flex flex-col justify-center items-start gap-5">
              <h1 className="text-6xl font-bold leading-16">
                100%
                <span
                  style={{
                    backgroundImage: "url('bgUnderline.png')",
                    backgroundPosition: "0% 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% auto",
                  }}
                  className="pb-2"
                >
                  your data
                </span>
              </h1>
              <p className="text-gray-700 leading-8">
                The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
              </p>
              <button className='text-white bg-[#4F9CF9] text-sm px-6 py-2 rounded-sm hover:cursor-pointer duration-300 transition-all ease-out flex justify-center items-center gap-2'>
                Read more
                <ArrowRight size={15} />
              </button>
            </div>
            <div className="w-[50%] flex justify-end items-center">
              <Image
                src="/yourData.png"
                alt="Team working together"
                width={500}
                height={500}
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="w-full min-h-[50vh] flex flex-col justify-center items-center gap-10">
            <h1 className="text-6xl font-bold leading-16">
              Our
              <span
                style={{
                  backgroundImage: "url('bgUnderline.png')",
                  backgroundPosition: "0% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% auto",
                }}
                className="pb-2 px-4"
              >
                sponsors
              </span>
            </h1>
            <div className="w-full flex justify-between items-center">
              {sponsors.map((s, i) => (
                <Image
                  key={i}
                  src={s.path}
                  width={s.size}
                  height={s.size}
                  alt={s.alt}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          style={{
            backgroundImage: "url('bgWires4.png')"
          }}
          className="bg-[#043873] bg-cover bg-center w-full min-h-[60vh] px-40 py-20 flex justify-center items-center gap-10"
        >
          <div className="w-[50%] overflow-hidden flex justify-start items-center">
            <Image
              src="/Apps.png"
              alt="Team working together"
              width={500}
              height={500}
              className="object-cover"
              priority
            />
          </div>

          <div className="w-[50%] flex flex-col justify-center items-start gap-5">
            <h1 className="text-6xl font-bold leading-16">
              Work with Your Favorite Apps Using whitepace
            </h1>
            <p className="text-gray-200 leading-8">
              Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
            </p>
            <button className="text-white bg-[#4F9CF9] text-sm px-6 py-2 rounded-sm hover:cursor-pointer duration-300 transition-all ease-out flex justify-center items-center gap-10">
              Try it now
              <ArrowRight size={15} />
            </button>
          </div>
        </section>

        <section className="w-full min-h-screen px-40 py-2 flex flex-col justify-center items-center gap-10 text-black">
          <h1 className="text-6xl font-bold leading-16">
            What our client
            <span
              style={{
                backgroundImage: "url('bgUnderline.png')",
                backgroundPosition: "0% 100%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% auto",
              }}
              className="pb-2 px-2"
            >
              says
            </span>
          </h1>

          <div className="w-full grid grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`flex flex-col justify-between gap-6 p-8 rounded-2xl ${t.isHighlighted
                  ? "bg-[#4F9CF9] text-white"
                  : "bg-white text-black shadow-md"
                  }`}
              >
                <Quote
                  size={40}
                  className={`${t.isHighlighted ? "text-white fill-white" : "text-[#0a2647] fill-[#0a2647]"
                    }`}
                />

                <p
                  className={`leading-6 ${t.isHighlighted ? "text-gray-100" : "text-gray-700"
                    }`}
                >
                  {t.quote}
                </p>

                <hr
                  className={`w-full ${t.isHighlighted ? "border-white/30" : "border-gray-200"
                    }`}
                />

                <div className="flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    width={50}
                    height={50}
                    alt={t.name}
                    className="rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="font-bold">{t.name}</span>
                    <span
                      className={`text-sm ${t.isHighlighted ? "text-gray-200" : "text-gray-500"
                        }`}
                    >
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#043873] w-full min-h-[80vh] px-40 py-20 flex flex-col justify-center items-center gap-5">
          <h1 className="text-6xl font-bold leading-16">
            Try Whitespace today
          </h1>
          <p className="text-gray-200 leading-8 w-[25%] text-center">
            Get started for free. Add your whole team as your needs grow.
          </p>
          <button className="text-white bg-[#4F9CF9] text-sm px-6 py-2 rounded-sm hover:cursor-pointer duration-300 transition-all ease-out flex justify-center items-center gap-10">
            Try Taskey free
            <ArrowRight size={15} />
          </button>
          <p className="text-gray-200 leading-8">
            On a big team? Contact sales
          </p>
          <Image
            src={'/App-icon.png'}
            width={200}
            height={200}
            alt="app-icon"
          />
        </section>
        <Footer />
      </div>
    </>
  );
}
