import Image from "next/image";
import Link from "next/link";

import Container from "@/app/components/container.component";
import MobileHero from "@/app/components/mobile-hero.component";
import DesktopHeroSingle from "@/app/components/desktop-hero-single.component";
import ParagraphPicture from "@/app/components/paragraph-picture.component";
import SectionHeading from "@/app/components/section-heading.component";
import Paragraph from "@/app/components/paragraph.component";
import CallToAction from "@/app/components/call-to-action.component";
import ImageCard from "@/app/components/image-card.component";

import mobileHero from "../../../public/assets/support_mobile_hero.jpg";
import desktopHero from "../../../public/assets/support_desktop_hero.jpg";
import introImage from "../../../public/assets/support_intro.jpg";
import donationImage from "../../../public/assets/donation.jpg";
import volunteerIntroImage from "../../../public/assets/about_us_divider_2.jpg";
import foodbankVolunteerImage from "../../../public/assets/about_desktop_hero.jpg";
import eventsVolunteerImage from "../../../public/assets/events_volunteering.jpg";
import otherVolunteeringImage from "../../../public/assets/other_volunteering.jpg";
import spreadTheWordImage from "../../../public/assets/spread_the_word.jpg";

export default function Support() {
  return (
    <div>
      <MobileHero image={mobileHero} alt="Hero Image" title="Support Us" />
      <DesktopHeroSingle image={desktopHero} alt="Hero Image" title="Support Us" subtitle="Help us make our community a better place" />

      <Container>
        {/* Intro */}
        <ParagraphPicture image={introImage} alt="An outdoor event">
          <SectionHeading>How You Can Help</SectionHeading>
          <Paragraph>
            Any worthwhile endeavor starts with an idea. But to thrive and grow, a community of 
            investors and like-minded people are always needed to carry it forward! The 
            Community for Better Living was born by an idea and was supported by a few 
            caring families. We have grown beyond our dreams and are now a living, breathing, 
            and vital part of the Olmsted Township community, with a reach into Cuyahoga and 
            Lorain counties. We now serve 300 families biweekly with our food pantry alone, 
            and have other programs and offerings to enrich lives. Please consider 
            joining our cause to make our community a better place.
          </Paragraph>
        </ParagraphPicture>

        {/* Donation Section */}
        <div className="px-8 py-4 md:py-16">
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            <div className="basis-1/2">
              <SectionHeading>Donations</SectionHeading>
              <Paragraph>
                The food bank portion of the Community for Better Living began in 2016, with the idea of 
                serving around 10 or 15 families throught the course of that first year. We quickly realized 
                that there was much more need in our community than anticipated and we had to open more space 
                in our center to provide for what was needed. Over the first four years of service, we saw 
                our numbers served grow to around 75 families for each food bank service. While many food banks 
                and service centers throughout Ohio closed their doors during the Covid-19 outbreak of 2020, 
                the Community for Better Living was committed to providing food to our community and continued 
                our food distributions twice each month. Our numbers served skyrocketed to as many as 300 
                families each service.
              </Paragraph>
              <h3 className="display-3 lg:display-3 text-primary-900 py-8">
                “While other centers closed during the Covid-19 outbreak, 
                we committed to providing food to our community”
              </h3>
              <Paragraph>
                This has put a great strain on the finances available to us for serving our community. 
                Though our affiliation with the Cleveland food bank does help us purchase food very cheaply, 
                we still must cover expenses to keep the center open and running due to rent and operating costs 
                to transport and store food in our building. We&apos;ve had help from many charitable donors and 
                we&apos;re always looking for others that are interested in helping serve our community. Every donation 
                has a large impact on our operation and puts food on the table for families in need.
              </Paragraph>
            </div>

            <div className="px-4 md:px-16 py-8 bg-secondary-100 shadow basis-1/2">
              <h3 className="display-3 text-primary-900 mb-8">Donations We Accept:</h3>
              <ul className="display-4 text-neutral-900 list-disc list-inside">
                <li className="mb-3">Monetary Donations</li>
                <p className="body-1r pl-12 mb-6">
                  All monetary donations are welcome. Follow the links to below for more information on how to send a donation.
                </p>
                <li className="mb-3">Gift Cards & Raffle Baskets</li>
                <p className="body-1r pl-12 mb-6">
                  We hold several fundraiser events each year and we use any donated gift cards and gift baskets as raffle prizes.
                </p>
                <li className="mb-3">Pet Food</li>
                <p className="body-1r pl-12 mb-6">
                  Many of the families we provide food to are also in need of pet food, so we always have a high demand for cat and dog food.
                </p>
                <li className="mb-3">Etc.</li>
                <p className="body-1r pl-12 mb-6">
                  If you have a donation not listed above, contact us using the links below and we will find a way to put it to use.
                </p>
              </ul>
            </div>
          </div>
        </div>

        {/* Help Our Cause Donation Section */}
        <div className="lg:hidden px-8 pt-8">
          <Image
            alt="Donation Image"
            src={donationImage}
            placeholder="blur"
            quality={40}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: '0.25rem'
            }}
          />
        </div>
        <ParagraphPicture image={donationImage} alt="Donation Image" imageRight={false}>
          <SectionHeading>Help Our Cause</SectionHeading>
          <Paragraph attrs="mb-8">
            If you can, please help us as we provide groceries and healthy living education free of charge
            to families in need across Northeast Ohio. Since the COVID-19 pandemic began in the spring of
            2020, we have provided food to over 1000 families and continue to increase those numbers with
            your support. You can make a monetary donation by following the link below to our PayPal. To make
            a physical donation (cash, check, gift cards, pet food, etc), email us using the link below to confirm your
            donation and set up a time to drop off the donation.
          </Paragraph>
          <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-4 md:gap-6">
            <Link 
              href="https://www.paypal.com/donate/?hosted_button_id=X4L4Q9CAXKVYC" 
              className="w-full py-2 bg-primary-900 text-primary-100 display-4 text-center rounded-md">
              Monetary Donations
            </Link>
            <Link 
              href="mailto:info@communityforbetterliving.org" 
              className="w-full py-2 bg-primary-900 text-primary-100 display-4 text-center rounded-md">
              Other Donations
            </Link>
          </div>
        </ParagraphPicture>
        <div className="px-8 py-4 lg:py-12"></div>

        {/* Volunteer Section */}
        <ParagraphPicture image={volunteerIntroImage} alt="Volunteer with us">
          <SectionHeading>Volunteer With Us</SectionHeading>
          <Paragraph>
            The Community for Better Living is always happy to welcome new volunteers. We strive to offer a wide variety 
            of services and events in service to our community and we are always in need of helping hands. We will find 
            a place and role for anybody willing to contribute their time and put it to good use. Consider 
            getting involved with any of the opportunities listed below!
          </Paragraph>
        </ParagraphPicture>

        <div className="px-8 py-4 lg:py-16">
          <SectionHeading>Volunteer Opportunities</SectionHeading>
          <div className="flex flex-col lg:flex-row gap-6 mt-2">
            <ImageCard image={foodbankVolunteerImage} alt="" height="250px">
              <div className="p-2 md:p-4 lg:p-0 xl:p-6">
                <h3 className="display-4 md:display-3 text-primary-900 mb-4">Food Bank</h3>
                <p className="body-2r md:body-1r text-neutral-900">
                  There are many volunteer opportunities for our food bank service. We are always in need of 
                  extra hands to help pack bags with groceries, to unload our food delivery the morning of every service,
                  to load cars with groceries, to check people in during service, and much more. Reach out to see how 
                  you can help.
                </p>
              </div>
            </ImageCard>
            <ImageCard image={eventsVolunteerImage} alt="" height="250px">
              <div className="p-2 md:p-4 lg:p-0 xl:p-6">
                <h3 className="display-4 md:display-3 text-primary-900 mb-4">Events</h3>
                <p className="body-2r md:body-1r text-neutral-900">
                  Hosting a wide range of different events, there are many opportunities to volunteer and 
                  become a part of the fun. From playing a character role in a Murder Mystery event, to helping direct 
                  classic muscle cars in a car show, there are many ways to help.
                </p>
              </div>
            </ImageCard>
            <ImageCard image={otherVolunteeringImage} alt="" height="250px">
              <div className="p-2 md:p-4 lg:p-0 xl:p-6">
                <h3 className="display-4 md:display-3 text-primary-900 mb-4">Other</h3>
                <p className="body-2r md:body-1r text-neutral-900">
                  Keep your eyes open to our <Link href="" className="text-blue underline">social media feeds</Link> for other 
                  opportunities to volunteer with the center. if you have a thought or an idea of something you&apos;d like to see 
                  done that you&apos;d be willing to be involved in, please contact us.
                </p>
              </div>
            </ImageCard>
          </div>
        </div>

        {/* Call To Action */}
        <CallToAction text="Interested in helping us make a difference?" />

        {/* Spread the Word */}
        <div className="lg:hidden px-8 pt-8">
          <Image
            alt=""
            src={spreadTheWordImage}
            placeholder="blur"
            quality={40}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: '0.25rem'
            }}
          />
        </div>
        <ParagraphPicture image={spreadTheWordImage} alt="">
          <SectionHeading>Spread the Word</SectionHeading>
          <Paragraph>
            Help us network! Be so kind as to tell your friends and co-workers about the work we are doing 
            to improve our community. You never know who may need assistance or who may want to get involved to help us reach our goals.
          </Paragraph>
        </ParagraphPicture>
        <div className="px-8 pb-16"></div>
      </Container>
    </div>
  )
}
