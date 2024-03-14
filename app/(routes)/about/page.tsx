import Image from "next/image";

import Container from "@/app/components/container.component";
import SectionHeading from "@/app/components/section-heading.component";
import Paragraph from "@/app/components/paragraph.component";
import MobileHero from "@/app/components/mobile-hero.component";
import DesktopHeroSingle from "@/app/components/desktop-hero-single.component";
import ParagraphPicture from "@/app/components/paragraph-picture.component";
import DesktopDonation from "@/app/components/desktop-donation.component";
import MobileDonation from "@/app/components/mobile-donation.component";
import BoardMember from "@/app/components/board-member.component";

import desktopHero from "../../../public/assets/about_desktop_hero.jpg";
import mobileHero from "../../../public/assets/about_mobile_hero.jpg";
import paragraghImage from "../../../public/assets/about_paragraph_picture.jpg";
import divider1 from "../../../public/assets/about_us_divider_1.jpg";
import divider2 from "../../../public/assets/about_us_divider_2.jpg";
import placeholderImage from "../../../public/assets/profile_placeholder.jpg";
import dean_cinquemani from "../../../public/assets/dean_cinquemani.jpg";
import tammi_cinquemani from "../../../public/assets/tammi_cinquemani.jpg";
import glen_marek from "../../../public/assets/glen_marek.jpg";
import polly_dengel from "../../../public/assets/polly_dengel.jpg";
import jon_falkenstein from "../../../public/assets/jon_falkenstein.jpg";
import lisa_falkenstein from "../../../public/assets/lisa_falkenstein.jpg";
import gail_merda from "../../../public/assets/gail_merda.jpg";
import matthew_roberts from "../../../public/assets/matthew_roberts.jpg";
import Link from "next/link";


const BOARD_MEMBERS = [
  {
    name: "Dean Cinquemani",
    position: "Board Chair",
    img: dean_cinquemani,
    link: '/about/dcinquemani'
  },
  {
    name: "Glen Marek",
    position: "Treasurer",
    img: glen_marek,
    link: '/about/gmarek'
  },
  {
    name: "Tammi Cinquemani",
    position: "Clerk",
    img: tammi_cinquemani,
    link: '/about/tcinquemani'
  },
  {
    name: "Lisa Falkenstein",
    position: undefined,
    img: lisa_falkenstein,
    link: '/about/lfalkenstein'
  },
  {
    name: "Jon Falkenstein",
    position: undefined,
    img: jon_falkenstein,
    link: '/about/jfalkenstein'
  },
  {
    name: "Dr. Polly Dengel",
    position: undefined,
    img: polly_dengel,
    link: '/about/pdengel'
  },
  {
    name: "Celeste Mills",
    position: undefined,
    img: placeholderImage,
    link: '/about/cmills'
  },
  {
    name: "Cindy Oster",
    position: undefined,
    img: placeholderImage,
    link: '/about/coster'
  },
  {
    name: "Gail Merda",
    position: undefined,
    img: gail_merda,
    link: '/about/gmerda'
  },
  {
    name: "Matthew Roberts",
    position: undefined,
    img: matthew_roberts,
    link: '/about/mroberts'
  },
  {
    name: "Nate Pratt",
    position: undefined,
    img: placeholderImage,
    link: '/about/npratt'
  },
  {
    name: "Aaron Pratt",
    position: undefined,
    img: placeholderImage,
    link: '/about/apratt'
  },
];

export default function About() {
  return (
    <div>
      <MobileHero
        image={mobileHero}
        alt="Hero Image"
        title="About Us"
      />
      <DesktopHeroSingle
        image={desktopHero}
        alt="Hero Image"
        title="About Us"
        subtitle="Our story and how we serve our community"
      />

      <Container>

        {/* Intro Paragraphs */}
        <div className="px-8 pt-8 pb-4">
          <SectionHeading>Our Story</SectionHeading>
          <div className="flex flex-col lg:flex-row gap-6">
            <Paragraph attrs="basis-1/2">
              The Community for Better Living began in the very early 2000s with the challenge to become a beacon
              of help and guidance in the community. We started by offering classes in healthy cooking, CPR,
              autism awareness, financial planning, online identity protection, and healthy, judgment free
              spirituality along with anything else we found that would be a help to the community. All of the classes
              we offer have always been free to the public and designed to help our community live better, more fulfilling lives.
              In 2010, we settled at our current location off Columbia Rd. While a sister organization, Walk of
              Faith Community center, began to settle its roots on the west side of Cleveland partnering with the Greater
              Cleveland Food Bank in serving that area as a pantry distribution center and hot breakfast for anyone in need.
            </Paragraph>
            <Paragraph attrs="basis-1/2">
              In 2014, both centers drew a bit closer as they began to share the same board chair and director and in 2016,
              at the urging of the Greater Cleveland Food Bank, the Community for Better Living began food pantry service
              on the second and fourth Thursdays of the month. Shortly thereafter the Walk of Faith Community center lost
              their lease and the two centers merged and became one as the Community for Better Living. We continue to
              run food pantry services twice a month and hold classes and event to help enrich our community. All are welcome
              to join any of our services and become a part of our community.
            </Paragraph>
          </div>
        </div>

        {/* Two Pictures Divider */}
        <div className="hidden lg:block px-8 py-16">
          <div className="flex flex-row gap-6">
            <div className="w-full h-[350px]">
              <Image
                alt=""
                src={divider1}
                placeholder="blur"
                quality={40}
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  borderRadius: '5px'
                }}
              />
            </div>
            <div className="w-full h-[350px]">
              <Image
                alt=""
                src={divider2}
                placeholder="blur"
                quality={40}
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  borderRadius: '5px'
                }}
              />
            </div>
          </div>
        </div>

        {/* Quote Divider */}
        <div className="px-8 py-4">
          <div className="bg-primary-300 p-4 md:p-10 rounded">
            <h3 className="display-4 md:display-3 text-primary-900">
              “Our mission is to identify the needs in our community, design programs to meet those needs, and support
              individuals and families through education, resources, and encouragement”
            </h3>
          </div>
        </div>

        <ParagraphPicture
          image={paragraghImage}
          alt="Picture"
        >
          <SectionHeading>Serving Our Community</SectionHeading>
          <Paragraph>
            We have been dedicated to providing a range of services that meet the needs and interests of our community
            members including a food pantry, community family events, classes on various topics and a weekly spiritual
            group that meets on Saturdays.<br /><br />
            We are fortunate to have a group of passionate volunteers who give their hearts to helping those they serve
            in our community. Without them, we could not fulfill the mission of CBL.<br /><br />
            We operate with integrity, transparency, and accountability in all that we do and all that we offer, and we
            hold ourselves to the highest standards in all that we do. We finance our organization through grants and
            contributions of compassionate donors that share our mission and vision.
          </Paragraph>
        </ParagraphPicture>

        {/* Board Members */}
        <div className="px-8 pt-4 pb-12 md:pb-16 lg:pb-2">
          <SectionHeading>Our Board</SectionHeading>
          <div className="flex flex-col md:flex-row gap-2">

            <div className="flex flex-col xl:flex-row gap-2 w-full">
              <div className="flex flex-col gap-2 w-full">
                {BOARD_MEMBERS.slice(0, 3).map((member) => {
                  return (
                    <Link key={member.name} href={member.link} >
                      <BoardMember name={member.name} position={member.position} image={member.img} />
                    </Link>
                  )
                })}
              </div>
              <div className="flex flex-col gap-2 w-full">
                {BOARD_MEMBERS.slice(3, 6).map((member) => {
                  return (
                    <Link key={member.name} href={member.link} >
                      <BoardMember name={member.name} position={member.position} image={member.img} />
                    </Link>
                  )
                })}
              </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-2 w-full">
              <div className="flex flex-col gap-2 w-full">
                {BOARD_MEMBERS.slice(6, 9).map((member) => {
                  return (
                    <Link key={member.name} href={member.link} >
                      <BoardMember name={member.name} position={member.position} image={member.img} />
                    </Link>
                  )
                })}
              </div>
              <div className="flex flex-col gap-2 w-full">
                {BOARD_MEMBERS.slice(9, 12).map((member) => {
                  return (
                    <Link key={member.name} href={member.link} >
                      <BoardMember name={member.name} position={member.position} image={member.img} />
                    </Link>
                  )
                })}
              </div>
            </div>

          </div>

        </div>

        <MobileDonation />
      </Container>
      <DesktopDonation />
    </div>
  )
}
