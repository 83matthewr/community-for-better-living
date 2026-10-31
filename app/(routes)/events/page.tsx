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

            <ImageCard image={ChristmasEventImage} height="300px" alt="">
              <div className="2xl:h-[950px] flex flex-col gap-4 justify-between p-0 xs:p-2 lg:p-4">
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="display-2 text-primary-900">6th Annual Adopt-A-Family</h3>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="body-1r text neutral-900">
                      We are looking for donors and sponsors to adopt families in need this Christmas season to ensure every family can enjoy a joyful holiday season.<br/><br/>

                      Our families are identified through our Food Pantry as being in need, and each one meets the income eligibility requirements set by the Greater 
                      Cleveland Food Bank. When you adopt a family, you&apos;re helping neighbors right here in our surrounding communities.<br/><br/>
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="display-4 text-neutral-900">Shopping Guidelines:</h3>
                    <p className="body-1r text neutral-900">
                      1. The spending limit should be up to $75 per child. If you choose to adopt a family, please make sure each child gets an 
                      equal amount in gifts<br/><br/>

                      2. Please purchase practical items and something fun from the list provided.<br/><br/>

                      3. Presents should be wrapped and labeled with the child&apos;s name and family number.<br/><br/>

                      4. If the gift requires batteries, please include them.<br/><br/>

                      5. If choosing a family, you can also include a gift card for groceries or a meal (for example, pizza). 
                      Some past adopters have also added toiletries & laundry detergent, etc.<br/><br/>

                      The drop-off date for presents will be Saturday, December 5th, between 1 - 3 pm. Please place all presents in a box or bag 
                      with the individual or family number clearly labeled on the outside.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="display-4 text-neutral-900">Drop-off Date:</h4>
                    <p className="body-1r text-neutral-900">December 5, 2026</p>
                    <p className="body-1r text-neutral-900">1:00 - 3:00pm</p>
                  </div>
                  <div className="flex flex-col gap-1 mb-6">
                    <h4 className="display-4 text-neutral-900">Drop-off Location:</h4>
                    <p className="body-1r text-neutral-900">7074 Columbia Rd</p>
                    <p className="body-1r text-neutral-900">Olmsted Falls, OH 44138</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="display-3 text-primary-900">To Register, please call or text Tammi at (440) 541-7829</h3>
                  </div>
                </div>
              </div>
            </ImageCard>

            <ImageCard image={comingSoonImage} height="300px" alt="">
              <div className="2xl:h-[950px] px-0 py-8 lg:py-64 xs:px-2 lg:px-4 text-center">
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
