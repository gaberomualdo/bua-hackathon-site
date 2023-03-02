import {
  InboxIcon,
  PencilAltIcon,
  TrashIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Disclosure } from "@headlessui/react";
import { Banner } from "./Banner";

const faqs = [
  {
    question: "When is Hack@BUA 2023?",
    answer:
      "The event will be held on Sunday, April 2nd, 2023",
  },
  {
    question: "Where is the event?",
    answer:
      "The event will be held on the Boston University Academy Campus, and is hosted by BU Academy high school students.",
  },
  {
    question: "Who is Hack@BUA for?",
    answer:
      "The event is for middle and high school students interested in technology and programming. All middle school and high school students are welcome regardless of skill level.",
  },
  {
    question: "How many judges will Hack@BUA 2023 have?",
    answer:
      "We'll have between 2-5 judges this year, who will be selecting the best projects to win awards at the end of the event.",
  },
  {
    question: "How many teams will Hack@BUA 2023 have?",
    answer: "We're aiming to have between 10-15 teams this year.",
  },
  {
    question: "How large is each team?",
    answer:
      "Each team should be generally between 2-5 people, but we can accommodate larger teams as well. You can also have more than 1 team join per school.",
  },
  {
    question: "How will lunch be served?",
    answer:
      "Participants will receive information on lunch locations on the BU campus once they're registered. The BU campus has numerous great dining locations that partipcipants can choose from.",
  },
];

const features = [
  {
    name: "Coding Skills",
    description:
      "You'll improve your coding skills by working on a project in a competitive environment. Hackathons like Hack@BUA are a great way to improve your coding skills.",
    icon: InboxIcon,
  },
  {
    name: "Building Collaborative Projects",
    description:
      "At Hack@BUA, you'll build a project in a collaborative setting, allowing you to work with other students in an exciting environment.",
    icon: UsersIcon,
  },
  {
    name: "Idea Generation & Innovation",
    description:
      "You and your team will learn how to create ideas and innovate exciting solutions to problems. These are vital skills and you'll learn them at Hack@BUA.",
    icon: TrashIcon,
  },
  {
    name: "Presenting a Project",
    description:
      "You'll present the project you build to a team of judges, and learn useful skills on presenting projects in the process.",
    icon: PencilAltIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function App() {
  return (
    <div className="bg-white relative">
      <div className="sticky w-full top-0 bg-white z-50">
        <Banner />
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <img className="h-12 w-auto sm:h-14" src="/logo.jpg" alt="" />
            </a>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="https://forms.gle/KtLU19PjPTdzFZxj7"
              target="_blank"
              rel="noreferrer"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-red-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-red-700 hover:to-red-700"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>

      <main>
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <div
                  className="absolute inset-0 bg-red-600"
                  style={{
                    backgroundImage: "url(code.png)",
                    backgroundSize: "3rem auto",
                    backgroundRepeat: "repeat",
                  }}
                />
                <div className="absolute inset-0 bg-red-600 opacity-30" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                  <span className="block text-white">Hack@BUA</span>
                  <span className="mt-1 block font-bold text-red-200 text-3xl sm:text-4xl">
                    Sunday, April 2nd, 2023
                  </span>
                  <span className="mt-1 block font-bold text-red-200 text-3xl sm:text-4xl">
                    Registration Deadline: March 19th 2023
                  </span>
              

                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-white text-shadow sm:max-w-3xl">
                  Hack@BUA is a hackathon{" "}
                  <strong>for middle and high school students in New England</strong>.
                  We're hosted by Boston University Academy, a Boston school.
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <a
                      href="https://forms.gle/KtLU19PjPTdzFZxj7"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-red-700 bg-white hover:bg-red-50 sm:px-8"
                    >
                      Register Now
                    </a>
                    <a
                      href="#schedule"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-400 bg-opacity-60 hover:bg-opacity-100 sm:px-8"
                    >
                      View Schedule
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Cloud */}
        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
              Sponsored By
            </p>
            <div className="mt-6">
              <div className="flex flex-col items-center md:flex-row space-y-4 md:space-y-0 md:space-x-16 justify-center">
                <img
                  alt="BUA Logo"
                  className="h-16 w-auto"
                  src="/bua.svg.png"
                  style={{ filter: "grayscale(100%)", opacity: 0.5 }}
                />
                <img
                  alt="BU Logo"
                  className="h-16 w-auto"
                  src="/bu.svg.png"
                  style={{ filter: "grayscale(100%)", opacity: 0.5 }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-y" id="schedule">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Event Schedule
              </h2>
              <p class="text-center text-lg text-gray-400 mt-2">April 2nd, 2023</p>
              {[
                {
                  time: "9:00 AM – 10:00 AM",
                  text: "Opening Ceremony, BU Photonics Building, Room 906",
                },
                {
                  time: "10:00 AM - 12:30 PM",
                  text: "Coding & Project Development, BU Photonics Building, Room 906",
                },
                {
                  time: "12:30 PM - 1:30 PM",
                  text: "Lunch, Boston University Campus",
                },
                {
                  time: "1:30 PM – 5:00 PM",
                  text: "Coding & Project Development, BU Photonics Building, Room 906",
                },
                {
                  time: "5:00 PM – 6:00 PM",
                  text: "Presentations & Judging, BU Photonics Building, Room 906",
                },
                {
                  time: "6:00 PM – 6:30 PM",
                  text: "Participant Social Event, BU Photonics Building, Room 906",
                },
                {
                  time: "6:30 PM – 7:00 PM",
                  text: "Awards & Closing Ceremony, BU Photonics Building, Room 906",
                },
              ].map((e) => (
                <div className="w-full max-w-6xl mt-6 flex items-center">
                  <div className="px-4 py-2 bg-red-600 text-white text-center w-48 rounded-full">
                    {e.time}
                  </div>
                  <p className="text-base text-gray-700 ml-4">{e.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-100 border-b">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Registration & Cost
              </h2>
              <p class="text-center text-lg text-gray-600 mt-6">
                To register,{" "}
                <a
                  className="text-blue-600 hover:underline font-bold"
                  href="https://forms.gle/KtLU19PjPTdzFZxj7"
                  rel="noreferrer"
                  target="_blank"
                >
                  sign up with this form
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Trophy & Prizes
              </h2>
              <p class="text-center text-lg text-gray-600 mt-6">
                Winners of the hackathon will receive a{" "}
                <strong>BUA Hackathon Trophy</strong> and each of the team's
                members will receive Amazon <strong>gift cards</strong>.<br />
                <br />
                Prizes will be awarded at the closing ceremony and decided by
                our team of expert judges – which includes software engineers in
                the tech industry, top computer science professors in Boston,
                and more.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
              <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Frequently asked questions
              </h2>
              <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                {faqs.map((faq) => (
                  <Disclosure as="div" key={faq.question} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt className="text-lg">
                          <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                            <span className="font-medium text-gray-900">
                              {faq.question}
                            </span>
                            <span className="ml-6 h-7 flex items-center">
                              <ChevronDownIcon
                                className={classNames(
                                  open ? "-rotate-180" : "rotate-0",
                                  "h-6 w-6 transform"
                                )}
                                aria-hidden="true"
                              />
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                          <p className="text-base text-gray-500">
                            {faq.answer}
                          </p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Gradient Feature Section */}
        <div className="bg-red-700">
          <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              You'll learn...
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name}>
                  <div>
                    <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-white">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-base text-red-200">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white">
          <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Want to attend?</span>
              <span className="block bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">
                Register your school today.
              </span>
            </h2>
            <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
              <a
                href="https://forms.gle/KtLU19PjPTdzFZxj7"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center bg-gradient-to-r from-red-600 to-red-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-red-700 hover:to-red-700"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
