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
import ChristmasEventImage from "../../../public/assets/2025christmas.jpg";
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
          <div className="flex flex-col 2xl:flex-row gap-6 items-center justify-center">
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

            <ImageCard image={luncheonImage} height="300px" alt="">
              <div className="2xl:h-[620px] flex flex-col gap-4 justify-between p-0 xs:p-2 lg:p-4">
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="display-2 text-primary-900">2nd Annual Grateful Women&apos;s Luncheon</h3>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="display-4 text-neutral-900">Date:</h4>
                    <p className="body-1r text-neutral-900">Saturday, November 8, 2025</p>
                    <p className="body-1r text-neutral-900">11:00 a.m. - 2:00 p.m.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="display-4 text-neutral-900">Location:</h4>
                    <p className="body-1r text-neutral-900">Hosted by Matteo&apos;s Italian Restaurant</p>
                    <p className="body-1r text-neutral-900">8072 Columbia Rd</p>
                    <p className="body-1r text-neutral-900">Olmsted Falls, OH 44138</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="body-1r text neutral-900">
                      Join us for a lunch buffet, dessert, beverages, a guest speaker, and raffles, all while helping raise
                      funds for The Community for Better Living&apos; Food Pantry and classes.
                    </p>
                    <p className="body-1r text neutral-900 mb-4">
                      $50/per Plate and all proceeds go directly to the Community for Better Living&apos;s Food Pantry. Please
                      register and pay ahead of time to reserve your seat!
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link
                    href="https://portal.dubsado.com/public/form/view/66a56fb579f4c3003a4b2e0d?"
                    className="w-full py-2 bg-primary-900 text-primary-100 body-2b md:body-1b lg:body-2b xl:body-1b text-center rounded-md"
                  >
                    Register
                  </Link>
                  <Link
                    href="https://www.paypal.com/ncp/payment/8NRH7GBX2T97G"
                    className="w-full py-2 bg-primary-900 text-primary-100 body-2b md:body-1b lg:body-2b xl:body-1b text-center rounded-md"
                  >
                    Pay
                  </Link>
                </div>

              </div>
            </ImageCard>

            <ImageCard image={ChristmasEventImage} height="300px" alt="">
              <div className="2xl:h-[620px] flex flex-col gap-4 justify-between p-0 xs:p-2 lg:p-4">
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="display-2 text-primary-900">5th Annual Adopt-a-Family</h3>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="display-4 text-neutral-900">Location:</h4>
                    <p className="body-1r text-neutral-900">7074 Columbia Rd</p>
                    <p className="body-1r text-neutral-900">Olmsted Falls, OH 44138</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="body-1r text neutral-900">
                      The Community for Better Living is seeking sponsors for our
                      5th annual Adopt-a-Family program. As a non-profit that serves the local community,
                      we are able to identify families in need during the holidays.
                      We primarily server the westside of Cleveland and have a client base
                      that includes Olmsted Falls/Township, Columbia Station, North Olmsted,
                      Westlake, Lakewood, Bay Village, Rocky River, Berea, Middleburg Heights,
                      Strongsville, Parma, and beyond.
                    </p>
                    <p className="body-1r text neutral-900 xl:py-6">
                      Help bring joy to local familiies this holiday!
                      By sponsoring a family, you&apos;ll provide them with gifts to make their holiday season
                      brighter. Your generosity can make a real difference in someone&apos;s life!
                      To learn more of to become a sponsor, please click the registration link below:
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link
                    href="http://bit.ly/4oocJel"
                    className="w-full py-2 bg-primary-900 text-primary-100 body-2b md:body-1b lg:body-2b xl:body-1b text-center rounded-md"
                  >
                    Register
                  </Link>
                  <Link
                    href="https://www.paypal.com/ncp/payment/GMP8PPZ7FA2MN"
                    className="w-full py-2 bg-primary-900 text-primary-100 body-2b md:body-1b lg:body-2b xl:body-1b text-center rounded-md"
                  >
                    Donate
                  </Link>
                </div>

              </div>
            </ImageCard>

            {/*  
            <ImageCard image={comingSoonImage} height="300px" alt="">
              <div className="2xl:h-[600px] px-0 py-8 lg:py-48 xs:px-2 lg:px-4 text-center">
                <div>
                  <h3 className="display-2 text-primary-900 mb-4">More Events Coming Soon...</h3>
                  <p className="body-1b text-neutral-700">Check back later for more info</p>
                </div>
              </div>
            </ImageCard>
            */}

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
