'use client'

import { Dispatch, Key, MouseEvent, MouseEventHandler, SetStateAction, useState } from "react";
import Image from "next/image"
import Link from "next/link";

import Container from "../components/container.component";
import DesktopHeroSingle from "../components/desktop-hero-single.component";
import MobileHero from "../components/mobile-hero.component"
import SectionHeading from "../components/section-heading.component";
import Paragraph from "../components/paragraph.component";
import ImageCard from "../components/image-card.component"
import ImageTile from "../components/image-tile.component";
import ParagraphPicture from "../components/paragraph-picture.component";
import DesktopDonation from "../components/desktop-donation.component";
import MobileDonation from "../components/mobile-donation.component";

import homeHero from '../../public/assets/home_hero.jpg';
import homeHeroDesktop from '../../public/assets/home_hero_desktop.jpg';
import worship from '../../public/assets/worship_service.jpg';
import workshop from '../../public/assets/workshop.jpg';
import eventCard from '../../public/assets/events_card.jpg';
import foodbank from '../../public/assets/foodbank.jpg';
import handsTogether from '../../public/assets/handsTogether.jpg';
import familyTile from '../../public/assets/family_tile.jpg';
import healthTile from '../../public/assets/health_tile.jpg';
import spiritualityTile from '../../public/assets/spirit_tile.jpg';
import financeTile from '../../public/assets/finance_tile.jpg';
import funTile from '../../public/assets/fun_tile.jpg';
import workTile from '../../public/assets/work_tile.jpg';
import closeButtonWhite from '../../public/closeButtonWhite.svg';
import closeButtonBlack from '../../public/closeButtonBlack.svg';
import { IndexType } from "typescript";

const SERVICES = [
  {
    title: "Food Bank",
    image: foodbank,
    text:
      "We operate a Greater Cleveland Food Bank distribution. Our drive-thru distribution service provides" +
      " food to families throughout our community twice each month. All are welcome.",
    link: "/foodbank"
  },
  {
    title: "Worship",
    image: worship,
    text: "Saturdays from 10:45am-1:30pm with classes being taught on getting to know God better.",
    link: "/worship"
  },
  {
    title: "Events",
    image: eventCard,
    text:
      "We host community events and classes ranging from Car Shows to Chili Cook Off Competitions. " +
      "Join us for a great time!",
    link: "/events"
  },
  {
    title: "Other Services",
    image: workshop,
    text:
      "We offer a range of other services such as couseling, workshops, and classes to help improve " +
      "peoples lives.",
    link: "/other_services"
  }
];

const familyValueContent = (
  <div>

  </div>
)

const VALUE_CONTENT = {
  "family": {
    title: "Family",
    text1: "Lorem ipsum dolor sit amet consectetur. Ornare elementum condimentum a interdum. Sed ut justo nunc metus. Aliquet sapien sed massa sollicitudin. Mattis malesuada sodales odio amet. Proin vitae aliquet arcu facilisi ipsum felis quam. Proin hac ipsum mauris sit laoreet massa mauris magna. Volutpat faucibus at aliquam diam risus. Felis porta nunc nisi pharetra amet amet elementum id. Libero nisl adipiscing ullamcorper quisque.",
    text2: "Lorem ipsum dolor sit amet consectetur. Ornare elementum condimentum a interdum. Sed ut justo nunc metus. Aliquet sapien sed massa sollicitudin. Mattis malesuada sodales odio amet. Proin vitae aliquet arcu facilisi ipsum felis quam. Proin hac ipsum mauris sit laoreet massa mauris magna. Volutpat faucibus at aliquam diam risus. Felis porta nunc nisi pharetra amet amet elementum id. Libero nisl adipiscing ullamcorper quisque.",
    image: familyTile,
    link: "",
    linkText: "Link",
    closeButtonColor: "black"
  },
  "health": {
    title: "Health",
    text1: "Lorem ipsum dolor sit amet consectetur. Ornare elementum condimentum a interdum. Sed ut justo nunc metus. Aliquet sapien sed massa sollicitudin. Mattis malesuada sodales odio amet. Proin vitae aliquet arcu facilisi ipsum felis quam. Proin hac ipsum mauris sit laoreet massa mauris magna. Volutpat faucibus at aliquam diam risus. Felis porta nunc nisi pharetra amet amet elementum id. Libero nisl adipiscing ullamcorper quisque.",
    text2: "Lorem ipsum dolor sit amet consectetur. Ornare elementum condimentum a interdum. Sed ut justo nunc metus. Aliquet sapien sed massa sollicitudin. Mattis malesuada sodales odio amet. Proin vitae aliquet arcu facilisi ipsum felis quam. Proin hac ipsum mauris sit laoreet massa mauris magna. Volutpat faucibus at aliquam diam risus. Felis porta nunc nisi pharetra amet amet elementum id. Libero nisl adipiscing ullamcorper quisque.",
    image: healthTile,
    link: "",
    linkText: "Link",
    closeButtonColor: "black"
  },
  "spirituality": {
    title: "Spirituality",
    text1: "Lorem ipsum dolor sit amet consectetur. Ornare elementum condimentum a interdum. Sed ut justo nunc metus. Aliquet sapien sed massa sollicitudin. Mattis malesuada sodales odio amet. Proin vitae aliquet arcu facilisi ipsum felis quam. Proin hac ipsum mauris sit laoreet massa mauris magna. Volutpat faucibus at aliquam diam risus. Felis porta nunc nisi pharetra amet amet elementum id. Libero nisl adipiscing ullamcorper quisque.",
    text2: "Lorem ipsum dolor sit amet consectetur. Ornare elementum condimentum a interdum. Sed ut justo nunc metus. Aliquet sapien sed massa sollicitudin. Mattis malesuada sodales odio amet. Proin vitae aliquet arcu facilisi ipsum felis quam. Proin hac ipsum mauris sit laoreet massa mauris magna. Volutpat faucibus at aliquam diam risus. Felis porta nunc nisi pharetra amet amet elementum id. Libero nisl adipiscing ullamcorper quisque.",
    image: spiritualityTile,
    link: "",
    linkText: "Link",
    closeButtonColor: "white"
  },
  "finances": {
    title: "Finances",
    text1: "Lorem ipsum dolor sit amet consectetur. Ornare elementum condimentum a interdum. Sed ut justo nunc metus. Aliquet sapien sed massa sollicitudin. Mattis malesuada sodales odio amet. Proin vitae aliquet arcu facilisi ipsum felis quam. Proin hac ipsum mauris sit laoreet massa mauris magna. Volutpat faucibus at aliquam diam risus. Felis porta nunc nisi pharetra amet amet elementum id. Libero nisl adipiscing ullamcorper quisque.",
    text2: "Lorem ipsum dolor sit amet consectetur. Ornare elementum condimentum a interdum. Sed ut justo nunc metus. Aliquet sapien sed massa sollicitudin. Mattis malesuada sodales odio amet. Proin vitae aliquet arcu facilisi ipsum felis quam. Proin hac ipsum mauris sit laoreet massa mauris magna. Volutpat faucibus at aliquam diam risus. Felis porta nunc nisi pharetra amet amet elementum id. Libero nisl adipiscing ullamcorper quisque.",
    image: financeTile,
    link: "",
    linkText: "Link",
    closeButtonColor: "white"
  },
  "fun": {
    title: "Fun/Leisure",
    text1: "Lorem ipsum dolor sit amet consectetur. Ornare elementum condimentum a interdum. Sed ut justo nunc metus. Aliquet sapien sed massa sollicitudin. Mattis malesuada sodales odio amet. Proin vitae aliquet arcu facilisi ipsum felis quam. Proin hac ipsum mauris sit laoreet massa mauris magna. Volutpat faucibus at aliquam diam risus. Felis porta nunc nisi pharetra amet amet elementum id. Libero nisl adipiscing ullamcorper quisque.",
    text2: "Lorem ipsum dolor sit amet consectetur. Ornare elementum condimentum a interdum. Sed ut justo nunc metus. Aliquet sapien sed massa sollicitudin. Mattis malesuada sodales odio amet. Proin vitae aliquet arcu facilisi ipsum felis quam. Proin hac ipsum mauris sit laoreet massa mauris magna. Volutpat faucibus at aliquam diam risus. Felis porta nunc nisi pharetra amet amet elementum id. Libero nisl adipiscing ullamcorper quisque.",
    image: funTile,
    link: "",
    linkText: "Link",
    closeButtonColor: "white"
  },
  "work": {
    title: "Work",
    text1: "Lorem ipsum dolor sit amet consectetur. Ornare elementum condimentum a interdum. Sed ut justo nunc metus. Aliquet sapien sed massa sollicitudin. Mattis malesuada sodales odio amet. Proin vitae aliquet arcu facilisi ipsum felis quam. Proin hac ipsum mauris sit laoreet massa mauris magna. Volutpat faucibus at aliquam diam risus. Felis porta nunc nisi pharetra amet amet elementum id. Libero nisl adipiscing ullamcorper quisque.",
    text2: "Lorem ipsum dolor sit amet consectetur. Ornare elementum condimentum a interdum. Sed ut justo nunc metus. Aliquet sapien sed massa sollicitudin. Mattis malesuada sodales odio amet. Proin vitae aliquet arcu facilisi ipsum felis quam. Proin hac ipsum mauris sit laoreet massa mauris magna. Volutpat faucibus at aliquam diam risus. Felis porta nunc nisi pharetra amet amet elementum id. Libero nisl adipiscing ullamcorper quisque.",
    image: workTile,
    link: "",
    linkText: "Link",
    closeButtonColor: "white"
  }
}

export default function Home() {
  const [currentDialog, setCurrentDialog] = useState("family");

  const openDialog = (value: string) => {
    setCurrentDialog(value);
    const dialog = document.querySelector('#valuesDialog') as HTMLDialogElement;
    if (dialog) {
      dialog.showModal();
    }
  }

  const closeDialog = () => {
    const dialog = document.querySelector('#valuesDialog') as HTMLDialogElement;
    if (dialog) {
      dialog.close();
    }
  }

  return (
    <div>
      <dialog
        id="valuesDialog"
        className="w-[90vw] md:w-[79vw] max-w-[1156px] mx-auto lg:h-[624px]
        rounded-md border-none outline-0 p-0"
      >
        <Image src={closeButtonBlack} alt="Close" height={28} width={27} className="absolute right-9 top-9 cursor-pointer" onClick={closeDialog} />
        <div className="flex flex-col lg:flex-row bg-secondary-100">
          <div className="w-full h-[400px] lg:h-[624px] lg:basis-1/2">
            {currentDialog === "family" && (
              <Image
                alt="Dialog Image"
                // @ts-ignore
                src={familyTile}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '0.375rem 0.375rem 0 0',
                  objectFit: 'cover'
                }}
              />
            )}
            {currentDialog === "health" && (
              <Image
                alt="Dialog Image"
                // @ts-ignore
                src={healthTile}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '0.375rem 0.375rem 0 0',
                  objectFit: 'cover'
                }}
              />
            )}
            {currentDialog === "spirituality" && (
              <Image
                alt="Dialog Image"
                // @ts-ignore
                src={spiritualityTile}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '0.375rem 0.375rem 0 0',
                  objectFit: 'cover'
                }}
              />
            )}
            {currentDialog === "finances" && (
              <Image
                alt="Dialog Image"
                // @ts-ignore
                src={financeTile}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '0.375rem 0.375rem 0 0',
                  objectFit: 'cover'
                }}
              />
            )}
            {currentDialog === "fun" && (
              <Image
                alt="Dialog Image"
                // @ts-ignore
                src={funTile}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '0.375rem 0.375rem 0 0',
                  objectFit: 'cover'
                }}
              />
            )}
            {currentDialog === "work" && (
              <Image
                alt="Dialog Image"
                // @ts-ignore
                src={workTile}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '0.375rem 0.375rem 0 0',
                  objectFit: 'cover'
                }}
              />
            )}
          </div>
          <div className="flex flex-col gap-4 p-4 xl:pr-24 lg:px-8 lg:py-12 lg:basis-1/2">
            {/* @ts-ignore */}
            <h3 className="display-3 text-primary-900">{VALUE_CONTENT[currentDialog].title}</h3>
            {/* @ts-ignore */}
            <p className="body-2s lg:body-1s text-neutral-900">{VALUE_CONTENT[currentDialog].text1}</p>
            {/* @ts-ignore */}
            <p className="body-2s lg:body-1s text-neutral-900">{VALUE_CONTENT[currentDialog].text2}</p>
            {/* @ts-ignore */}
            <Link href={VALUE_CONTENT[currentDialog].link}
              className="lg:w-[60%] mt-4 py-2 px-4 rounded bg-primary-900 text-white display-4 text-center">
              {/* @ts-ignore */}
              {VALUE_CONTENT[currentDialog].linkText}
            </Link>
          </div>
        </div>
      </dialog>

      <MobileHero image={homeHero} alt="Hero Image" title="The Community for Better Living" />
      <DesktopHeroSingle
        image={homeHeroDesktop}
        alt="Hero Image"
        title="The Community for Better Living"
        subtitle="A 501(C)3 making a positive impact in our community"
      />

      <Container>

        {/* Intro Section */}
        <ParagraphPicture
          image={handsTogether}
          alt="All together"
          imageRight={true}
        >
          <SectionHeading>Making a Difference</SectionHeading>
          <Paragraph>
            We are a 501c Community Service and Education Center located on the west side of Cleveland. We are supported by a volunteer network
            of wonderful people dedicated to finding ways to serve and care for anyone in need, including education, direct service,
            and family/community support. We host events to serve the community and also organize fun events to raise funds
            and support this very worthy cause.<br /><br />

            We are located on the Westside of Cleveland, just West of the Airport, at 7074 Columbia Rd, Olmsted Township, OH 44138.
            Our Phone Number is (440)541-7829 (please be patient as we are updating our number)
          </Paragraph>
        </ParagraphPicture>

        {/* Services */}
        <div className="px-8 pb-8 md:pb-16">
          <SectionHeading>Services</SectionHeading>
          <Paragraph attrs="mb-8 md:w-[70%] lg:w-[50%]">
            Lorem ipsum dolor sit amet consectetur. Suspendisse ipsum nibh nulla venenatis arcu scelerisque pulvinar habitasse commodo.
            Turpis adipiscing accumsan aenean ut. In etiam sit mauris id. Quam venenatis enim pellentesque integer.
          </Paragraph>

          <div className="w-full flex flex-col 2xl:flex-row gap-8">
            <div className="w-full mx-auto flex flex-col md:flex-row gap-8">
              {SERVICES.slice(0, 2).map((service) => {
                return (
                  <ImageCard key={service.title} image={service.image} height="250px" alt="">
                    <h3 className="display-3 text-primary-900 mb-2">{service.title}</h3>
                    <p className="body-2r text-neutral-900 h-[128px] xs:h-[96px] md:h-[128px]">
                      {service.text}
                    </p>
                    <Link href={service.link} className="py-1 px-4 rounded bg-primary-900 text-white display-5">
                      Learn More
                    </Link>
                  </ImageCard>
                )
              })}
            </div>

            <div className="w-full mx-auto flex flex-col md:flex-row gap-8">
              {SERVICES.slice(2, 4).map((service) => {
                return (
                  <ImageCard key={service.title} image={service.image} height="250px" alt="">
                    <h3 className="display-3 text-primary-900 mb-2">{service.title}</h3>
                    <p className="body-2r text-neutral-900 h-[128px] xs:h-[96px] md:h-[128px]">
                      {service.text}
                    </p>
                    <Link href={service.link} className="py-1 px-4 rounded bg-primary-900 text-white display-5">
                      Learn More
                    </Link>
                  </ImageCard>
                )
              })}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="px-8 pb-8">
          <SectionHeading>Our Values</SectionHeading>
          <Paragraph attrs="mb-8 md:w-[70%] lg:w-[50%]">
            Lorem ipsum dolor sit amet consectetur. Suspendisse ipsum nibh nulla venenatis arcu scelerisque pulvinar habitasse commodo.
            Turpis adipiscing accumsan aenean ut. In etiam sit mauris id. Quam venenatis enim pellentesque integer.
          </Paragraph>
          <div className="flex flex-col xs:flex-row lg:flex-col gap-2 lg:gap-6">
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-6">
              <ImageTile dialogClick={openDialog} image={familyTile} title="Family" value="family" />
              <ImageTile dialogClick={openDialog} image={healthTile} title="Health" value="health" />
              <ImageTile dialogClick={openDialog} image={spiritualityTile} title="Spirituality" value="spirituality" />
            </div>
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-6">
              <ImageTile dialogClick={openDialog} image={financeTile} title="Finances" value="finances" />
              <ImageTile dialogClick={openDialog} image={funTile} title="Fun/Leisure" value="fun" position="100% 35%" />
              <ImageTile dialogClick={openDialog} image={workTile} title="Work" value="work" />
            </div>
          </div>
        </div>

        {/* Mobile Donation */}
        <MobileDonation />
      </Container>

      {/* Desktop Donation */}
      <DesktopDonation />
    </div>
  )
}
