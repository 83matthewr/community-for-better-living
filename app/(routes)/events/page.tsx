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
import BingoEventImage from "../../../public/assets/bingo.jpg";
import DanceEventImage from "../../../public/assets/dancingEvent.jpg";
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
        <div className="flex flex-col gap-6 px-8 py-4 md:py-16">
          <SectionHeading>Upcoming Events</SectionHeading>
          <div className="flex flex-col 2xl:flex-row gap-6 items-center justify-center">

            <ImageCard image={BingoEventImage} height="300px" alt="">
              <div className="2xl:h-[600px] flex flex-col gap-4 justify-between p-0 xs:p-2 lg:p-4">
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="display-2 text-primary-900">Fall Bingo Night</h3>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="display-4 text-neutral-900">Date:</h4>
                    <p className="body-1r text-neutral-900">Saturday, October 24, 2026</p>
                    <p className="body-1r text-neutral-900">6:00 - 8:00pm</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="display-4 text-neutral-900">Location:</h4>
                    <p className="body-1r text-neutral-900">7074 Columbia Rd</p>
                    <p className="body-1r text-neutral-900">Olmsted Falls, OH 44138</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="body-1r text neutral-900">
                      Welcome to our Bingo Night Fundraiser, Fall Event. This event will be family friendly and open to all! All kids must accompany an adult, 
                      please. Popcorn and drinks will be provided. We will have prizes for the games and raffles to enter, if you would like. Entering raffles 
                      is not required, but appreciated. All funds raised from the raffles go directly to the food bank to help us feed more families in need. 
                    </p>
                    <ul className="list-disc list-inside">
                      <li>Raffle tickets are $1 or 12 for $10 </li>
                      <li>Raffle winners must be present to win</li>
                      <li>If you wear a costume, you get an extra raffle ticket (please keep all costumes family friendly)</li>
                      <li>It is free to play. We will provide the stamper, if you need one, and the game cards</li>
                    </ul>
                    <p className="body-1r text neutral-900">
                      Come out and have some fun!
                    </p>
                  </div>
                </div>
              </div>
            </ImageCard>

            <ImageCard image={DanceEventImage} height="300px" alt="">
              <div className="2xl:h-[600px] flex flex-col gap-4 justify-between p-0 xs:p-2 lg:p-4">
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="display-2 text-primary-900">Beginner&apos;s Line Dancing (Save the Date)</h3>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="display-4 text-neutral-900">Date:</h4>
                    <p className="body-1r text-neutral-900">Saturday, September 12, 2026</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="display-4 text-neutral-900">Location:</h4>
                    <p className="body-1r text-neutral-900">7074 Columbia Rd</p>
                    <p className="body-1r text-neutral-900">Olmsted Falls, OH 44138</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="body-1r text neutral-900">
                      More details coming soon.
                    </p>
                  </div>
                </div>
              </div>
            </ImageCard>

          </div>

          <div className="flex flex-col 2xl:flex-row gap-6 items-center justify-center">

            <ImageCard image={carshowImage} height="300px" alt="">
              <div className="2xl:h-[680px] flex flex-col gap-4 justify-between p-0 xs:p-2 lg:p-4">
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="display-2 text-primary-900">4th Annual Car Show (Save the Date)</h3>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="display-4 text-neutral-900">Date:</h4>
                    <p className="body-1r text-neutral-900">Sunday, October 4, 2026</p>
                    <p className="body-1r text-neutral-900">1:00 - 4:00pm</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="display-4 text-neutral-900">Location:</h4>
                    <p className="body-1r text-neutral-900">7074 Columbia Rd</p>
                    <p className="body-1r text-neutral-900">Olmsted Falls, OH 44138</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="display-4 text-neutral-900">Registration:</h4>
                    <p className="body-1r text-neutral-900">$10 per car (Participants receive a dash plaque!)</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="body-1r text neutral-900">
                      Rev those engines for a cause! We are thrilled to invite you to our 4th Annual Car Show Fundraiser benefitting The Community for Better Living (CBL).<br/><br/>

                      Join us for a day filled with incredible cars, great food, and exciting raffles. Whether you&apos;re showing off your pride and joy or just coming to enjoy the view, 
                      your support helps us continue our mission of providing food pantry services and community support in partnership with the Greater Cleveland Food Bank.<br/><br/>

                      Trophies will be awarded across several categories! Could you be our next 2026 winner?<br/><br/>
                      All proceeds go directly to helping our neighbors in need. Let&apos;s make this our biggest year yet!
                    </p>
                  </div>
                </div>
              </div>
            </ImageCard>

            <ImageCard image={comingSoonImage} height="300px" alt="">
              <div className="2xl:h-[680px] px-0 py-8 lg:py-48 xs:px-2 lg:px-4 text-center">
                <div>
                  <h3 className="display-2 text-primary-900 mb-4">More Events Coming Soon...</h3>
                  <p className="body-1b text-neutral-700">Check back later for more info</p>
                </div>
              </div>
            </ImageCard>

          </div>
        </div>

        {/* Call To Action */}
        <CallToAction text="Have an idea for an event? Interested in helping us make a difference?" />
      </Container>
    </div>
  )
}
