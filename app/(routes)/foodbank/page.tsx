'use client'

import { useState, useEffect } from "react";

import Container from "@/app/components/container.component";
import MobileHero from "@/app/components/mobile-hero.component";
import DesktopHeroSingle from "@/app/components/desktop-hero-single.component";
import ParagraphPicture from "@/app/components/paragraph-picture.component";
import SectionHeading from "@/app/components/section-heading.component";
import Paragraph from "@/app/components/paragraph.component";
import CallToAction from "@/app/components/call-to-action.component";

import mobileHero from "../../../public/assets/brownbags.jpg";
import allWelcome from "../../../public/assets/all_welcome.jpg";


const FOODBANK_DATES = [
  {
    date: "September 12, 2024",
    abbr_date: "Sept 12, 2024",
    time: "5:30pm-6:30pm"
  },
  {
    date: "September 26, 2024",
    abbr_date: "Sept 26, 2024",
    time: "5:30pm-6:30pm"
  },
  {
    date: "October 10, 2024",
    abbr_date: "Oct 10, 2024",
    time: "5:30pm-6:30pm"
  },
  {
    date: "October 24, 2024",
    abbr_date: "Oct 24, 2024",
    time: "5:30pm-6:30pm"
  },
  {
    date: "November 7, 2024",
    abbr_date: "Nov 7, 2024",
    time: "5:30pm-6:30pm"
  },
  {
    date: "November 21, 2024",
    abbr_date: "Nov 21, 2024",
    time: "5:30pm-6:30pm"
  },
  {
    date: "December 5, 2024",
    abbr_date: "Dec 5, 2024",
    time: "5:30pm-6:30pm"
  },
  {
    date: "December 19, 2024",
    abbr_date: "Dec 19, 2024",
    time: "5:30pm-6:30pm"
  },
  {
    date: "January 9, 2025",
    abbr_date: "Jan 9, 2025",
    time: "5:30pm-6:30pm"
  },
  {
    date: "January 23, 2025",
    abbr_date: "Jan 23, 2025",
    time: "5:30pm-6:30pm"
  },
  {
    date: "February 13, 2025",
    abbr_date: "Feb 13, 2025",
    time: "5:30pm-6:30pm"
  },
  {
    date: "February 27, 2025",
    abbr_date: "Feb 27, 2025",
    time: "5:30pm-6:30pm"
  },
  {
    date: "March 13, 2025",
    abbr_date: "Mar 13, 2025",
    time: "5:30pm-6:30pm"
  },
  {
    date: "March 27, 2025",
    abbr_date: "Mar 27, 2025",
    time: "5:30pm-6:30pm"
  },
  {
    date: "April 10, 2025",
    abbr_date: "Apr 10, 2025",
    time: "5:30pm-6:30pm"
  },
  {
    date: "April 24, 2025",
    abbr_date: "Apr 24, 2025",
    time: "5:30pm-6:30pm"
  },
  {
    date: "May 8, 2025",
    abbr_date: "May 8, 2025",
    time: "5:30pm-6:30pm"
  },
  {
    date: "May 22, 2025",
    abbr_date: "May 22, 2025",
    time: "5:30pm-6:30pm"
  },
  {
    date: "June 12, 2025",
    abbr_date: "Jun 12, 2025",
    time: "5:30pm-6:30pm"
  },
  {
    date: "June 26, 2025",
    abbr_date: "Jun 26, 2025",
    time: "5:30pm-6:30pm"
  },
  {
    date: "July 10, 2025",
    abbr_date: "Jul 10, 2025",
    time: "5:30pm-6:30pm"
  },
  {
    date: "July 24, 2025",
    abbr_date: "Jul 24, 2025",
    time: "5:30pm-6:30pm"
  },
  {
    date: "August 14, 2025",
    abbr_date: "Aug 14, 2025",
    time: "5:30pm-6:30pm"
  },
  {
    date: "August 28, 2025",
    abbr_date: "Aug 28, 2025",
    time: "5:30pm-6:30pm"
  },
  {
    date: "September 11, 2025",
    abbr_date: "Sept 11, 2025",
    time: "5:30pm-6:30pm"
  },
  {
    date: "September 25, 2025",
    abbr_date: "Sept 25, 2025",
    time: "5:30pm-6:30pm"
  },
]

export default function FoodBank() {
  const [firstDateIndex, setFirstDateIndex] = useState(0);
  const [lastDateIndex, setLastDateIndex] = useState(4);
  const [loadDisabled, setLoadDisabled] = useState(false);

  useEffect(() => {
    let firstDate = new Date(FOODBANK_DATES[firstDateIndex].date).getTime();
    let currentDate = new Date(Date.now()).getTime() - 100000000;
    if (firstDate < currentDate) {
      setFirstDateIndex(firstDateIndex + 1);
      setLastDateIndex(lastDateIndex + 1);
    }
  }, [firstDateIndex, lastDateIndex])

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
            We are the westernmost distribution center for the Greater Cleveland Food Bank.
            Our drive-thru service provides food to families throughout our community twice each month.
            All are welcome to register and get food.
          </Paragraph>
          <div className="flex flex-col gap-4 pb-4 md:pb-8">
            {FOODBANK_DATES.slice(firstDateIndex, lastDateIndex).map((date) => {
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
            As a member of the Greater Cleveland Food Bank and it&apos;s Affiliates with the USDA and FDA,
            we follow Civil Rights regulations and policies. In this way, we don&apos;t discriminate
            on the basis of race, color, national origin, sex, age, or disability. We also have
            provisions to accomodate those who do not speak English. All are welcome.
          </Paragraph>
        </ParagraphPicture>

        {/* What to Expect */}
        <div className="px-8 py-4 lg:py-16">
          <SectionHeading>What to Expect</SectionHeading>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">

            <div className="flex flex-col gap-4 lg:gap-6 basis-1/2">
              <div className="w-full bg-primary-100 p-4 lg:p-8 rounded shadow basis-1/2">
                <h3 className="display-5 lg:display-4 text-primary-900 mb-2">Registration/Sign In</h3>
                <p className="body-2r lg:body-1r text-neutral-900 lg:h-[220px] xl:h-[150px] 2xl:[h-130px]">
                  If you are making your first visit to a Greater Cleveland Food Bank Distribution Center,
                  we will need the following information to register your family: Name, Address,
                  Phone Number, Date of Birth, and the number of people in your household. Volunteers
                  will check in registered families and load their car with groceries at the front of
                  the drive-thru line.
                </p>
              </div>
              <div className="w-full bg-primary-100 p-4 lg:p-8 rounded shadow basis-1/2">
                <h3 className="display-5 lg:display-4 text-primary-900 mb-2">Groceries</h3>
                <p className="body-2r lg:body-1r text-neutral-900 lg:h-[220px] xl:h-[150px] 2xl:[h-130px]">
                  Each food bank service, we purchase and transport fresh food from the Greater
                  Cleveland Food Bank to our center. We typically provide two or three bags of
                  groceries containing dry goods, produce, and meat to each family. Our supply
                  can run low depending on the volume of families coming through,
                  but we do our best to provide groceries to everyone that comes to get food.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:gap-6 basis-1/2">
              <div className="w-full bg-primary-100 p-4 lg:p-8 rounded shadow basis-1/2">
                <h3 className="display-5 lg:display-4 text-primary-900 mb-2">Drive-Thru</h3>
                <p className="body-2r lg:body-1r text-neutral-900 lg:h-[220px] xl:h-[150px] 2xl:[h-130px]">
                  We open our doors for service at 5:30pm and begin checking in and loading cars.
                  When you arrive, pull into the drive-thru line and stay in your car.
                  Please be respectful of others in line and those in the parking lot as
                  there are other businesses open during our distribution. When your turn comes, you&apos;ll
                  move slowly forward to the check-in area where a volunteer will greet you
                  at your car and begin the check-in process.
                </p>
              </div>
              <div className="w-full bg-primary-100 p-4 lg:p-8 rounded shadow basis-1/2">
                <h3 className="display-5 lg:display-4 text-primary-900 mb-2">Walk-Ins Welcome</h3>
                <p className="body-2r lg:body-1r text-neutral-900 lg:h-[220px] xl:h-[150px] 2xl:[h-130px]">
                  If you don&apos;t have a car, but you have an alternate way to transport 2-3 large
                  bags of groceries to your home, you are welcome to check-in and receive food.
                  Walk up to the front of the building and notify a volunteer that you would
                  like to check-in.
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
