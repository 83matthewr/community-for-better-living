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
            Lorem ipsum dolor sit amet consectetur. Ornare elementum condimentum a interdum.
            Sed ut justo nunc metus. Aliquet sapien sed massa sollicitudin. Mattis malesuada
            sodales odio amet. Proin vitae aliquet arcu facilisi ipsum felis quam. Proin hac
            ipsum mauris sit laoreet massa mauris magna. Volutpat faucibus at aliquam diam risus.
            Felis porta nunc nisi pharetra amet amet elementum id. Libero nisl adipiscing ullamcorper
            quisque. In amet convallis tristique nulla aliquet semper pharetra. Convallis lobortis
            mattis arcu quis. Convallis id iaculis dolor leo quam turpis.
          </Paragraph>
        </ParagraphPicture>

        {/* Donation Section */}
        <div className="px-8 py-4 md:py-16">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="basis-1/2">
              <SectionHeading>Donations</SectionHeading>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur. Tellus dolor leo orci non erat turpis lorem vulputate mauris.
                Tristique iaculis sollicitudin commodo massa vel viverra rutrum. In lacus sit vulputate fringilla mus
                integer duis. Arcu integer nibh et ac turpis at cursus consequat. Blandit viverra pellentesque lorem
                sed non morbi a ridiculus. Nibh sed cursus adipiscing venenatis. Urna lobortis feugiat cursus amet
                aliquet orci fermentum eu. Luctus neque faucibus non at orci. Sit neque etiam egestas tempus elit
                quis in urna ipsum. Morbi sit venenatis semper eu. Felis tellus ultricies gravida cursus ut tortor.
                Malesuada leo enim hac velit. Urna varius faucibus mattis vitae sit ac.
              </Paragraph>
              <h3 className="display-3 lg:display-2 text-primary-900 py-8">
                “Lorem ipsum dolor sit amet consectetur. Faucibus eget quis vitae pulvinar”
              </h3>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur. Enim fermentum tellus quisque ridiculus leo sapien.
                Nullam pharetra a vitae aliquet diam pellentesque. Neque viverra egestas a id. Aenean mattis
                facilisis elementum velit bibendum tellus nulla. Est tincidunt hac aliquet massa viverra quis
                consequat aliquet sollicitudin. Est sed eget sollicitudin habitant aenean nunc. Aliquam amet
                mi sed ullamcorper arcu.
              </Paragraph>
            </div>

            <div className="px-4 md:px-16 lg:px-20 py-8 bg-secondary-100 shadow">
              <h3 className="display-3 text-primary-900 mb-8">Donations We Accept:</h3>
              <ul className="display-4 text-neutral-900 list-disc list-inside">
                <li className="mb-3">Monetary Donations</li>
                <p className="body-1r pl-12 mb-6">Lorem ipsum dolor sit amet consectetur.</p>
                <li className="mb-3">Gift Cards</li>
                <p className="body-1r pl-12 mb-6">Lorem ipsum dolor sit amet consectetur.</p>
                <li className="mb-3">Raffle Baskets</li>
                <p className="body-1r pl-12 mb-6">Lorem ipsum dolor sit amet consectetur.</p>
                <li className="mb-3">Canned Goods</li>
                <p className="body-1r pl-12 mb-6">Lorem ipsum dolor sit amet consectetur.</p>
                <li className="mb-3">Cat/Dog Food</li>
                <p className="body-1r pl-12 mb-6">Lorem ipsum dolor sit amet consectetur.</p>
                <li className="mb-3">Etc.</li>
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
            a physical donation (gift cards, canned goods, etc), email us using the link below to confirm your
            donation and set up a time to drop off the donation.
          </Paragraph>
          <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-4 md:gap-6">
            <Link href="" className="w-full py-2 bg-primary-900 text-primary-100 display-4 text-center rounded-md">
              Monetary Donations
            </Link>
            <Link href="" className="w-full py-2 bg-primary-900 text-primary-100 display-4 text-center rounded-md">
              Other Donations
            </Link>
          </div>
        </ParagraphPicture>
        <div className="px-8 py-4 lg:py-12"></div>

        {/* Volunteer Section */}
        <ParagraphPicture image={volunteerIntroImage} alt="Volunteer with us">
          <SectionHeading>Volunteer With Us</SectionHeading>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur. Cras aliquet ultrices faucibus feugiat morbi egestas
            aliquam. Facilisis sed vestibulum ut justo nibh. Penatibus ac auctor bibendum pretium ultrices
            nunc eget. Eu lobortis nam vel nunc ornare. Ac augue purus lacus et eget mi. Mi tortor odio non
            vitae. Potenti elementum mi dui quis urna sagittis pharetra faucibus. Rutrum suspendisse mi id
            nulla sociis sit lectus suspendisse.
          </Paragraph>
        </ParagraphPicture>

        <div className="px-8 py-4 lg:pb-16">
          <div className="bg-primary-100 p-4 md:p-8">
            <h3 className="display-3 md:display-2 lg:display-1 text-primary-900 text-center">
              It takes a village and we&#39;d love you to be a part of ours!
            </h3>
          </div>
        </div>

        <div className="px-8 py-4 lg:py-16">
          <SectionHeading>Volunteer Opportunities</SectionHeading>
          <div className="flex flex-col lg:flex-row gap-6 mt-2">
            <ImageCard image={foodbankVolunteerImage} alt="" height="250px">
              <div className="p-2 md:p-4 lg:p-0 xl:p-6">
                <h3 className="display-4 md:display-3 text-primary-900 mb-6">Food Bank</h3>
                <p className="body-2r md:body-1r text-neutral-900">
                  Lorem ipsum dolor sit amet consectetur. Libero posuere id id convallis vivamus nunc
                  a sit sit. Lobortis gravida orci elementum praesent. Sit nisl et vitae ultrices
                  condimentum arcu purus.
                </p>
              </div>
            </ImageCard>
            <ImageCard image={eventsVolunteerImage} alt="" height="250px">
              <div className="p-2 md:p-4 lg:p-0 xl:p-6">
                <h3 className="display-4 md:display-3 text-primary-900 mb-6">Events</h3>
                <p className="body-2r md:body-1r text-neutral-900">
                  Lorem ipsum dolor sit amet consectetur. Libero posuere id id convallis vivamus nunc
                  a sit sit. Lobortis gravida orci elementum praesent. Sit nisl et vitae ultrices
                  condimentum arcu purus.
                </p>
              </div>
            </ImageCard>
            <ImageCard image={otherVolunteeringImage} alt="" height="250px">
              <div className="p-2 md:p-4 lg:p-0 xl:p-6">
                <h3 className="display-4 md:display-3 text-primary-900 mb-6">Other</h3>
                <p className="body-2r md:body-1r text-neutral-900">
                  Lorem ipsum dolor sit amet consectetur. Libero posuere id id convallis vivamus nunc
                  a sit sit. Lobortis gravida orci elementum praesent. Sit nisl et vitae ultrices
                  condimentum arcu purus.
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
            Lorem ipsum dolor sit amet consectetur. Cras aliquet ultrices faucibus feugiat morbi egestas aliquam. 
            Facilisis sed vestibulum ut justo nibh. Penatibus ac auctor bibendum pretium ultrices nunc eget. 
            Eu lobortis nam vel nunc ornare. Ac augue purus lacus et eget mi. Mi tortor odio non vitae. 
            Potenti elementum mi dui quis urna sagittis pharetra faucibus. Rutrum suspendisse mi id nulla 
            sociis sit lectus suspendisse.
          </Paragraph>
        </ParagraphPicture>
        <div className="px-8 pb-16"></div>
      </Container>
    </div>
  )
}
