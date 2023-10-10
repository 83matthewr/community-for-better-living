'use client'

import { useState } from "react";

import Container from "@/app/components/container.component";
import MobileHero from "@/app/components/mobile-hero.component";
import DesktopHeroSingle from "@/app/components/desktop-hero-single.component";
import ParagraphPicture from "@/app/components/paragraph-picture.component";
import SectionHeading from "@/app/components/section-heading.component";

import mobileHero from "../../../public/assets/brownbags.jpg";
import allWelcome from "../../../public/assets/all_welcome.jpg";
import Paragraph from "@/app/components/paragraph.component";
import CallToAction from "@/app/components/call-to-action.component";

const FOODBANK_DATES = [
  {
    date: "October 12, 2023",
    abbr_date: "Oct 12, 2023",
    time: "5:30pm-6:30pm"
  },
  {
    date: "October 26, 2023",
    abbr_date: "Oct 26, 2023",
    time: "5:30pm-6:30pm"
  },
  {
    date: "November 2, 2023",
    abbr_date: "Nov 2, 2023",
    time: "5:30pm-6:30pm"
  },
  {
    date: "November 16, 2023",
    abbr_date: "Nov 16, 2023",
    time: "5:30pm-6:30pm"
  },
  {
    date: "December 7, 2023",
    abbr_date: "Dec 7, 2023",
    time: "5:30pm-6:30pm"
  },
  {
    date: "December 21, 2023",
    abbr_date: "Dec 21, 2023",
    time: "5:30pm-6:30pm"
  },
]

export default function FoodBank() {
  const [lastDateIndex, setLastDateIndex] = useState(4);
  const [loadDisabled, setLoadDisabled] = useState(false);

  const loadMoreDates = () => {
    if (lastDateIndex + 4 >= FOODBANK_DATES.length) {
      setLastDateIndex(FOODBANK_DATES.length);
      setLoadDisabled(true);
    } else {
      setLastDateIndex(lastDateIndex + 4);
    }
  }

  return (
    <div>
      <MobileHero
        image={mobileHero}
        alt="Brown Food Bank Bags"
        title="Food Bank"
      />
      <DesktopHeroSingle
        image={mobileHero}
        alt="Brown Food Bank Bags"
        title="Food Bank"
        subtitle="In partnership with the Greater Cleveland Food Bank"
      />

      <Container>
        {/* Upcoming Dates */}
        <div className="px-8 pt-8 pb-4">
          <SectionHeading>Upcoming Dates</SectionHeading>
          <Paragraph attrs="mb-4 md:mb-8 md:w-[70%] lg:w-[50%]">
            We operate a Greater Cleveland Food Bank distribution. Our drive-thru
            distribution service provides food to families throughout our community twice each month.
          </Paragraph>
          <div className="flex flex-col gap-4 pb-4 md:pb-8">
            {FOODBANK_DATES.slice(0, lastDateIndex).map((date) => {
              return (
                <div key={date.date} className="flex flex-row justify-between items-center py-2 px-4 md:py-4 md:px-8 bg-primary-300 rounded-md shadow-md">
                  <h3 className="xs:hidden display-4 md:display-3 text-primary-900">{date.abbr_date}</h3>
                  <h3 className="hidden xs:block display-4 md:display-3 text-primary-900">{date.date}</h3>
                  <p className="display-5 md:display-4 text-neutral-900">{date.time}</p>
                </div>
              );
            })}
          </div>
          {!loadDisabled && (
            <p
              className="display-4 md:display-3 text-primary-900 w-fit mx-auto bg-primary-300 rounded-md shadow-md"
            >
              <button className="w-full py-2 px-4 md:px-8" onClick={loadMoreDates}>
                Load More
              </button>
            </p>
          )}
        </div>

        {/* Location */}
        <div className="px-8 pt-4 lg:py-16">
          <SectionHeading>Location</SectionHeading>
          <div className="bg-primary-900 p-4 lg:p-8 rounded-md">
            <h4 className="display-5 lg:display-3 text-primary-100 mb-2">7074 Columbia Rd</h4>
            <h4 className="display-5 lg:display-3 text-primary-100">Olmsted Township, OH 44138</h4>
          </div>
        </div>

        {/* All Are Welcome */}
        <ParagraphPicture
          image={allWelcome}
          alt="Friends sitting arm in arm"
        >
          <SectionHeading>All Are Welcome</SectionHeading>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur. Eget libero semper nulla leo habitant facilisis urna adipiscing.
            Nascetur morbi neque eget neque rutrum nulla eget orci. Mattis id adipiscing eget vitae dictumst nulla amet.
            Tristique gravida aliquet velit amet convallis auctor a facilisi. Non neque ac faucibus vulputate pharetra
            pellentesque nulla. Aliquam amet in consectetur gravida lectus faucibus tortor lectus. Fermentum nunc risus
            faucibus vestibulum et venenatis pharetra leo consectetur.
          </Paragraph>
        </ParagraphPicture>

        {/* What to Expect */}
        <div className="px-8 py-4 lg:py-16">
          <SectionHeading>What to Expect</SectionHeading>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">

            <div className="flex flex-col gap-4 lg:gap-6">
              <div className="w-full bg-primary-100 p-4 lg:p-8 rounded shadow">
                <h3 className="display-5 lg:display-4 text-primary-900 mb-2">Registration/Sign In</h3>
                <p className="body-2r lg:body-1r text-neutral-900">
                  Lorem ipsum dolor sit amet consectetur. Sit venenatis nunc aliquam quisque. At magnis
                  cursus feugiat dolor cursus dolor purus. Ut ut tellus vitae vitae. Morbi placerat eu
                  vestibulum semper at in lectus.
                </p>
              </div>
              <div className="w-full bg-primary-100 p-4 lg:p-8 rounded shadow">
                <h3 className="display-5 lg:display-4 text-primary-900 mb-2">What You Get</h3>
                <p className="body-2r lg:body-1r text-neutral-900">
                  Lorem ipsum dolor sit amet consectetur. Sit venenatis nunc aliquam quisque. At magnis
                  cursus feugiat dolor cursus dolor purus. Ut ut tellus vitae vitae. Morbi placerat eu
                  vestibulum semper at in lectus.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:gap-6">
              <div className="w-full bg-primary-100 p-4 lg:p-8 rounded shadow">
                <h3 className="display-5 lg:display-4 text-primary-900 mb-2">Drive-Thru</h3>
                <p className="body-2r lg:body-1r text-neutral-900">
                  Lorem ipsum dolor sit amet consectetur. Sit venenatis nunc aliquam quisque. At magnis
                  cursus feugiat dolor cursus dolor purus. Ut ut tellus vitae vitae. Morbi placerat eu
                  vestibulum semper at in lectus.
                </p>
              </div>
              <div className="w-full bg-primary-100 p-4 lg:p-8 rounded shadow">
                <h3 className="display-5 lg:display-4 text-primary-900 mb-2">Walk-Ins Welcome</h3>
                <p className="body-2r lg:body-1r text-neutral-900">
                  Lorem ipsum dolor sit amet consectetur. Sit venenatis nunc aliquam quisque. At magnis
                  cursus feugiat dolor cursus dolor purus. Ut ut tellus vitae vitae. Morbi placerat eu
                  vestibulum semper at in lectus.
                </p>
              </div>
            </div>
          </div>


        </div>

        {/* Call to Action */}
        <CallToAction text="Interested in helping provide food to hundreds of families in need?" />
      </Container>
    </div>
  )
}
