import MobileHero from "@/app/components/mobile-hero.component";
import DesktopHeroSingle from "@/app/components/desktop-hero-single.component";
import ParagraphPicture from "@/app/components/paragraph-picture.component";
import SectionHeading from "@/app/components/section-heading.component";
import Paragraph from "@/app/components/paragraph.component";
import CallToAction from "@/app/components/call-to-action.component";

import mobileHero from "../../../public/assets/workshop.jpg";
import desktopHero from "../../../public/assets/events_hero.jpg";
import introImage from "../../../public/assets/events_intro.jpg";
import craftsImage from "../../../public/assets/crafts.jpg";
import carshowImage from "../../../public/assets/car_show_event.jpg";
import ImageCard from "@/app/components/image-card.component";

const EVENTS_DATA = [
  {
    image1: carshowImage,
    image2: craftsImage,
    title: "Car & Craft Show Fundraiser",
    subtitle: undefined,
    date: "October 1, 2023",
    time: "1:00pm - 4:00pm",
    extra_date_info: "(Rain Date October 15)",
    location1: "7074 Columbia Rd",
    location2: "Olmsted Township, OH 44138"
  },
  {
    image1: carshowImage,
    image2: craftsImage,
    title: "Car & Craft Show Fundraiser",
    subtitle: undefined,
    date: "October 1, 2023",
    time: "1:00pm - 4:00pm",
    extra_date_info: "(Rain Date October 15)",
    location1: "7074 Columbia Rd",
    location2: "Olmsted Township, OH 44138"
  }
];

export default function Events() {
  return (
    <div>
      <MobileHero image={mobileHero} alt="Hero Image" title="Events" />
      <DesktopHeroSingle image={desktopHero} alt="Hero Image" title="Events" subtitle="Community events free to the public" />

      <div className="w-full md:w-5/6 max-w-screen-2xl mx-auto">
        {/* Intro */}
        <ParagraphPicture image={introImage} alt="An outdoor event">
          <SectionHeading>Community Events & Classes</SectionHeading>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur. Ornare elementum condimentum a interdum.
            Sed ut justo nunc metus. Aliquet sapien sed massa sollicitudin. Mattis malesuada
            sodales odio amet. Proin vitae aliquet arcu facilisi ipsum felis quam. Proin hac
            ipsum mauris sit laoreet massa mauris magna. Volutpat faucibus at aliquam diam risus.
            Felis porta nunc nisi pharetra amet amet elementum id. Libero nisl adipiscing ullamcorper
            quisque. In amet convallis tristique nulla aliquet semper pharetra. Convallis lobortis
            mattis arcu quis. Convallis id iaculis dolor leo quam turpis.
          </Paragraph>
        </ParagraphPicture>

        {/* Events Section */}
        <div className="px-8 py-4 md:py-16">
          <SectionHeading>Upcoming Events</SectionHeading>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            {EVENTS_DATA.map((event) => {
              return (
                <ImageCard image={event.image1} height="300px" alt="">
                  <div className="flex flex-col gap-4 p-8">
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
            })}
          </div>
        </div>

        {/* Call To Action */}
        <CallToAction text="Have an idea for an event? Interested in helping us make a difference?" />
      </div>
    </div>
  )
}
