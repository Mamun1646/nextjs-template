import Image from "next/image"

export default function CH1() {
  return (
    <div >

      <div className="bg-gray-200 mx-20 my-20 py-4">
        <div className="lg:grid lg:grid-cols-4">
          <div className="bg-purple-600 lg:col-span-2 rounded-lg p-6 mt-10 mx-4 relative">
            <Image
              src="/bg-pattern-quotation.svg"
              alt="Picture of the author"
              className="right-10 top-0 absolute"
              width={70}
              height={70}
            />
            <div className="flex space-x-4">
              <Image
                src="/image-daniel.jpg"
                alt="Picture of the author"
                className="rounded-full ring-2 ring-white"
                width={40}
                height={10}
              />
              <p className="flex flex-col">
                <span className="text-white"> Daniel Clifford</span>

                <span className="text-xs text-slate-300 ">Verified Graduate</span>
              </p>
            </div>
            <p className="text-white text-lg">
              I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company
              I joined. I honestly feel I got every penny’s worth.
            </p>
            <p className="text-slate-300 text-xs">
              “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and
              have heard some people who had an amazing experience here. I signed up for the free intro course and found
              it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling -
              time of my life. Since completing the course, I’ve successfully switched careers, working as a Software
              Engineer at a VR startup. ”
            </p>
          </div>
          <div className="bg-gray-600  rounded-lg p-6 mt-10 mx-4 relative">
            <div className="flex space-x-4">
              <Image
                src="/image-jonathan.jpg"
                alt="Picture of the author"
                className="rounded-full ring-2 ring-white"
                width={40}
                height={10}
              />
              <p className="flex flex-col">
                <span className="text-white"> Jeanette Harmon</span>

                <span className="text-xs text-slate-300 ">Verified Graduate</span>
              </p>
            </div>
            <p className="text-white text-lg"> An overall wonderful and rewarding experience</p>
            <p className="text-slate-300 text-xs">
              “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while
              doing something I love. ”
            </p>
          </div>
          <div className="bg-white lg:row-start-2 rounded-lg p-6 mt-10 mx-4 relative">
            <div className="flex space-x-4">
              <Image
                src="/image-daniel.jpg"
                alt="Picture of the author"
                className="rounded-full ring-2 ring-white"
                width={40}
                height={10}
              />
              <p className="flex flex-col">
                <span className="text-md"> Patrick Abrams</span>

                <span className="text-xs text-slate-600 ">Verified Graduate</span>
              </p>
            </div>
            <p className=" text-lg text-gray-800">
              Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning
              from their experiences was easy.
            </p>
            <p className="text-slate-400 text-xs">
              “ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me
              the confidence necessary to be able to go out in the world and present myself as a capable junior
              developer. The standard is above the rest. You will get the personal attention you need from an incredible
              community of smart and amazing people. ”
            </p>
          </div>
          <div className="bg-gray-800 lg:col-span-2 rounded-lg p-6 mt-10 mx-4 relative">
            <div className="flex space-x-4">
              <Image
                src="/image-daniel.jpg"
                alt="Picture of the author"
                className="rounded-full ring-2 ring-white"
                width={40}
                height={10}
              />
              <p className="flex flex-col">
                <span className="text-white"> Kira Whittle</span>

                <span className="text-xs text-slate-300 ">Verified Graduate</span>
              </p>
            </div>
            <p className="text-white text-lg">Such a life-changing experience. Highly recommended!</p>
            <p className="text-slate-300 text-xs">
              “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from
              professionals who can help me learn programming step by step. I was encouraged to enroll by a former
              student of theirs who can only say wonderful things about the program. The entire curriculum and staff did
              not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team
              project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial
              could ever have. In fact, I’ve often referred to it during interviews as an example of my developent
              experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers.
              100% recommend! ”
            </p>
          </div>
          <div className="bg-white lg:row-start-1 lg:col-start-4  lg:row-span-2    rounded-lg p-6 mt-10 mx-4 relative">
            <div className="flex space-x-4">
              <Image
                src="/image-kira.jpg"
                alt="Picture of the author"
                className="rounded-full ring-2 ring-black"
                width={40}
                height={10}
              />
              <p className="flex flex-col">
                <span className=""> Daniel Clifford</span>

                <span className="text-xs text-slate-600 ">Verified Graduate</span>
              </p>
            </div>
            <p className=" text-lg">
              I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company
              I joined. I honestly feel I got every penny’s worth.
            </p>
            <p className="text-slate-700 text-xs">
              “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and
              have heard some people who had an amazing experience here. I signed up for the free intro course and found
              it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling -
              time of my life. Since completing the course, I’ve successfully switched careers, working as a Software
              Engineer at a VR startup. ”
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
