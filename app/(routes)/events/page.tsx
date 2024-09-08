import Container from "@/app/components/container.component";
import MobileHero from "@/app/components/mobile-hero.component";
import DesktopHeroSingle from "@/app/components/desktop-hero-single.component";
import ParagraphPicture from "@/app/components/paragraph-picture.component";
import SectionHeading from "@/app/components/section-heading.component";
import Paragraph from "@/app/components/paragraph.component";
import CallToAction from "@/app/components/call-to-action.component";
import ImageCard from "@/app/components/image-card.component";

import mobileHero from "../../../public/assets/workshop.jpg";
import desktopHero from "../../../public/assets/events_hero.jpg";
import introImage from "../../../public/assets/events_intro.jpg";
import craftsImage from "../../../public/assets/crafts.jpg";
import carshowImage from "../../../public/assets/car_show_event.jpg";
import comingSoonImage from "../../../public/assets/coming_soon.jpg";
import luncheonImage from "../../../public/assets/luncheon_event.jpg";
import Link from "next/link";

const EVENTS_DATA = [
  {
    image1: carshowImage,
    image2: craftsImage,
    title: "Car & Craft Show Fundraiser",
    subtitle: undefined,
    date: "October 6, 2024",
    time: "1:00pm - 4:00pm",
    extra_date_info: "(Rain Date October 13)",
    location1: "7074 Columbia Rd",
    location2: "Olmsted Township, OH 44138"
  },
  {
    image1: luncheonImage,
    title: "Grateful Women's Luncheon",
    subtitle: "hosted by Perk Cup Cafe",
    date: "November 16, 2024",
    time: "11:00am - 2:00pm",
    location1: "561 Bagley Rd",
    location2: "Berea, OH 44017"
  }
];

export default function Events() {
  return (
    <div>
      <MobileHero image={mobileHero} alt="Hero Image" title="Events" />
      <DesktopHeroSingle image={desktopHero} alt="Hero Image" title="Events" subtitle="Community Events free and open to the public" />

      <Container>
        {/* Intro */}
        <ParagraphPicture image={introImage} alt="An outdoor event">
          <SectionHeading>Community Events & Classes</SectionHeading>
          <Paragraph>
            The Community for Better Living fosters a vibrant and connected neighborhood. We host a variety of
            engaging events designed to build relationships, fundraise, and have a blast!
            Our events allow you to meet your neighbors, make new friends, and strengthen your community spirit.
            Explore new interests, learn valuable skills, and find ways to contribute to the well-being of those around
            you. We offer free, family-friendly events that bring laughter, joy, and a sense of belonging.<br /><br />

            Whether you&#39;re a long-time resident or just getting to know the area, we welcome you with open arms.
            Our events are open to the public, so come join the fun!
            We&#39;re constantly planning exciting new events, so be sure to check back frequently for upcoming
            offerings. You can also sign-up for our newsletter to receive updates directly in your inbox.
            Together, let&#39;s make our community an even better place to live!
          </Paragraph>
        </ParagraphPicture>

        {/* Events Section */}
        <div className="px-8 py-4 md:py-16">
          <SectionHeading>Upcoming Events</SectionHeading>
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
            { /* EVENTS_DATA.map((event) => {
              return (
                <ImageCard key={event.title} image={event.image1} height="300px" alt="">
                  <div className="lg:h-[350px] flex flex-col gap-4 p-0 xs:p-2 lg:p-4">
                    <div>
                      <h3 className="display-2 text-primary-900">{event.title}</h3>
                      {event.subtitle && <p className="display-s text-neutral-700">{event.subtitle}</p>}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="display-4 text-neutral-900">Date:</h4>
                      <p className="body-1r text-neutral-900">{event.date}</p>
                      <p className="body-1r text-neutral-900">{event.time}</p>
                      {event.extra_date_info && <p className="body-1r text-neutral-900">{event.extra_date_info}</p>}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="display-4 text-neutral-900">Location:</h4>
                      <p className="body-1r text-neutral-900">{event.location1}</p>
                      <p className="body-1r text-neutral-900">{event.location2}</p>
                    </div>
                  </div>
                </ImageCard>
              )
            }) */}
            <ImageCard image={carshowImage} height="300px" alt="">
              <div className="lg:h-[624px] xl:h-[600px] 2xl:h-[554px] flex flex-col gap-4 p-0 xs:p-2 lg:p-4">
                <div>
                  <h3 className="display-2 text-primary-900">Car & Craft Show Fundraiser</h3>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="display-4 text-neutral-900">Date:</h4>
                  <p className="body-1r text-neutral-900">October 6, 2024</p>
                  <p className="body-1r text-neutral-900">1:00 p.m. - 4:00 p.m.</p>
                  <p className="body-1r text-neutral-900">(Rain Date October 13)</p>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="display-4 text-neutral-900">Location:</h4>
                  <p className="body-1r text-neutral-900">7074 Columbia Rd</p>
                  <p className="body-1r text-neutral-900">Olmsted Township, OH 44138</p>
                </div>
                <div className="flex flex-col gap-4 lg:h-[224px] xl:h-[200px]">
                  <p className="body-1r text neutral-900">
                    An afternoon of classic cars, local homemade crafts, mouthwatering food, raffles and more!
                    All proceeds will directly benefit the Community for Better Living&apos;s Food Pantry and other outreach services.
                  </p>
                  <p className="body-1b text neutral-900">$10 fee to enter your car into the show.</p>
                  <p className="body-1b text neutral-900 mb-8">$30 fee for Craft Vendor Registration.</p>
                </div>
                <Link href="https:\\hello.dubsado.com/public/form/view/660ee4ac057c22003ae8353c" >
                  <p className="sm:w-full lg:w-[300px] py-2 text-center rounded bg-primary-900 text-white display-4">Register Here</p>
                </Link>
              </div>
            </ImageCard>
            <ImageCard image={luncheonImage} height="300px" alt="">
              <div className="lg:h-[624px] xl:h-[600px] 2xl:h-[554px] flex flex-col gap-4 p-0 xs:p-2 lg:p-4">
                <div>
                  <h3 className="display-2 text-primary-900">Grateful Women&apos;s Luncheon</h3>
                  <p className="display-s text-neutral-700">hosted by Perk Cup Cafe</p>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="display-4 text-neutral-900">Date:</h4>
                  <p className="body-1r text-neutral-900">Saturday, November 16, 2024</p>
                  <p className="body-1r text-neutral-900">11:00 a.m. - 2:00 p.m.</p>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="display-4 text-neutral-900">Location:</h4>
                  <p className="body-1r text-neutral-900">561 W Bagley Rd</p>
                  <p className="body-1r text-neutral-900">Berea, OH 44017</p>
                </div>
                <div className="flex flex-col gap-4 lg:h-[224px] xl:h-[200px]">
                  <p className="body-1r text neutral-900">
                    Join us for a lunch buffet, dessert, beverages, guest speaker, and raffles, all
                    while helping raise funds for The Community For Better Living&apos;s Food Pantry.
                  </p>
                  <p className="body-1b text text-primary-900 mb-4">
                    Registration is Required.
                  </p>
                </div>
                <Link href="https:\\hello.dubsado.com/public/form/view/66a56fb579f4c3003a4b2e0d" >
                  <p className="sm:w-full lg:w-[300px] py-2 text-center rounded bg-primary-900 text-white display-4">Register Here</p>
                </Link>
              </div>
            </ImageCard>
            { /*(EVENTS_DATA.length % 2 === 1) && (
              <ImageCard image={comingSoonImage} height="300px" alt="">
                <div className="lg:h-[350px] px-0 py-8 lg:py-32 xs:px-2 lg:px-4 text-center">
                  <div>
                    <h3 className="display-2 text-primary-900 mb-4">More Events Coming Soon...</h3>
                    <p className="body-1b text-neutral-700">Check back later for more info</p>
                  </div>
                </div>
              </ImageCard>
            ) */}
          </div>
        </div>

        {/* Call To Action */}
        <CallToAction text="Have an idea for an event? Interested in helping us make a difference?" />
      </Container>
    </div>
  )
}
