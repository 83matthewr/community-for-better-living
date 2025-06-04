'use client'

import { useState } from "react";
import Image from "next/image"
import Link from "next/link";

import Container from "../components/container.component";
import DesktopHeroSingle from "../components/desktop-hero-homepage.component";
import MobileHero from "../components/mobile-hero.component"
import SectionHeading from "../components/section-heading.component";
import Paragraph from "../components/paragraph.component";
import ImageCard from "../components/image-card.component"
import ImageTile from "../components/image-tile.component";
import ParagraphPicture from "../components/paragraph-picture.component";
import DesktopDonation from "../components/desktop-donation.component";
import MobileDonation from "../components/mobile-donation.component";

import homeHero from '../../public/assets/home_hero.jpg';
import homeHeroDesktop from '../../public/assets/about_us_divider_1.jpg';
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

const SERVICES = [
  {
    title: "Food Bank",
    image: foodbank,
    text: "We are the westernmost distribution center for the Greater Cleveland Food Bank. " +
      "Our drive-thru distribution service provides food to families throughout the " +
      "community twice a month. Everyone is welcome to come.",
    link: "/foodbank"
  },
  {
    title: "Worship",
    image: worship,
    text: "We host a worship service starting 11:00am every Saturday. Our goal is to improve " +
      "personal relationship and understanding of God by studying the Bible. We dont push " +
      "doctrine or denominational differences, all are welcome to join.",
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
];

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
      {/*
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
                quality={40}
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
                quality={40}
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
                quality={40}
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
                quality={40}
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
                quality={40}
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
                quality={40}
              />
            )}
          </div>
          <div className="flex flex-col gap-4 p-4 xl:pr-24 lg:px-8 lg:py-12 lg:basis-1/2">
            <h3 className="display-3 text-primary-900">{VALUE_CONTENT[currentDialog].title}</h3>
            {/* @ts-ignore
            <p className="body-2s lg:body-1s text-neutral-900">{VALUE_CONTENT[currentDialog].text1}</p>
            {/* @ts-ignore
            <p className="body-2s lg:body-1s text-neutral-900">{VALUE_CONTENT[currentDialog].text2}</p>
            {/* @ts-ignore
            <Link href={VALUE_CONTENT[currentDialog].link}
              className="lg:w-[60%] mt-4 py-2 px-4 rounded bg-primary-900 text-white display-4 text-center">
              {/* @ts-ignore
              {VALUE_CONTENT[currentDialog].linkText}
            </Link>
          </div>
        </div>
      </dialog>
      */}

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
            The Community for Better Living(CBL) is a 501(c) 3 community service and education
            center on Cleveland&#39;s west side. Our mission is made possible by a community
            volunteer network of people who are integral to finding ways to serve and care for
            anyone in need. Our offerings include education, direct services, and family/community
            support. In addition, we host events to serve the community, all while raising funds and
            supporting this worthy cause.<br /><br />

            We are located on the Westside of Cleveland, just West of the Airport, at 7074 Columbia Rd, Olmsted Township, OH 44138.
          </Paragraph>
        </ParagraphPicture>

        
        {/* Services */}
        <div className="px-8 pb-8 md:pb-16">
          <SectionHeading>Services</SectionHeading>
          <Paragraph attrs="mb-8 md:w-[70%] lg:w-[50%]">
            The Community for Better Living is dedicated to serving and enriching the people of our
            local community. To this end, we offer a variety of free and open-to-the-public services.
          </Paragraph>

          <div className="flex flex-col lg:flex-row gap-6 mt-2">
            <ImageCard image={foodbank} alt="" height="250px">
              <div className="p-2 md:p-4 lg:p-0 xl:p-6">
                <h3 className="display-4 md:display-3 text-primary-900 mb-4">Food Bank</h3>
                <p className="body-2r md:body-1r text-neutral-900 h-[180px] xs:h-[128px] md:h-[120px] lg:h-[240px] xl:h-[200px]">
                  We are the westernmost distribution center for the Greater Cleveland Food Bank.
                  Our drive-thru distribution service provides food to families throughout the
                  community twice a month. Everyone is welcome to come.
                </p>
                <Link href="/foodbank" className="py-1 px-4 rounded bg-primary-900 text-white display-5 object-bottom">
                  Learn More
                </Link>
              </div>
            </ImageCard>
            <ImageCard image={worship} alt="" height="250px">
              <div className="p-2 md:p-4 lg:p-0 xl:p-6">
                <h3 className="display-4 md:display-3 text-primary-900 mb-4">Worship</h3>
                <p className="body-2r md:body-1r text-neutral-900 h-[180px] xs:h-[128px] md:h-[120px] lg:h-[240px] xl:h-[200px]">
                  We host a worship service starting at 11:00 a.m. every Saturday. By studying the Bible, we aim to improve
                  personal relationships and our understanding of God. We don&#39;t push doctrine or denominational
                  differences; all are welcome to join, fostering a sense of community and acceptance.
                </p>
                <Link href="/worship" className="py-1 px-4 rounded bg-primary-900 text-white display-5">
                  Learn More
                </Link>
              </div>
            </ImageCard>
            <ImageCard image={eventCard} alt="" height="250px">
              <div className="p-2 md:p-4 lg:p-0 xl:p-6">
                <h3 className="display-4 md:display-3 text-primary-900 mb-4">Events</h3>
                <p className="body-2r md:body-1r text-neutral-900 h-[180px] xs:h-[128px] md:h-[120px] lg:h-[240px] xl:h-[200px]">
                  We host community events and classes ranging from Car Shows to Chili Cook Off Competitions.
                  Join us for a great time!
                </p>
                <Link href="/events" className="py-1 px-4 rounded bg-primary-900 text-white display-5">
                  Learn More
                </Link>
              </div>
            </ImageCard>
          </div>
        </div>

        {/* Testimonial */}
        <div className="px-8 pt-4 pb-8 lg:pt-12 lg:pb-24">
          <div className="bg-primary-300 p-4 lg:p-8 rounded-md">
            <h4 className="display-5 lg:display-4 text-primary-900 mb-4">
              &quot;Thank you so much for providing food while I&#39;ve been off work and homeless. My job was
              downsized in April, and I didn&#39;t see it coming. I&#39;m a worker, but it felt like my whole life stopped.
              Everything was blocked. Even though I know God has this situation under control and it&#39;s not too
              hard for him, it&#39;s way too big for me.
            </h4>
            <h4 className="display-5 lg:display-4 text-primary-900 mb-4">
              The food you provided made an immediate difference. I didn&#39;t realize the reason I didn&#39;t feel well
              might have been because I wasn&#39;t eating right. Thank you! Your kindness alleviated the stress and
              feelings of overwhelm, too. Thank you for the loving work you do on behalf of others, even me.&quot;
            </h4>
            <h4 className="display-5 lg:display-4 text-primary-900">
              - Carol, CBL Client
            </h4>
          </div>
        </div>


        {/* Values 
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
        */}

        {/* Mobile Donation */}
        <MobileDonation />
      </Container>

      {/* Desktop Donation */}
      <DesktopDonation />
    </div>
  )
}
