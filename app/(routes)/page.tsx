import Image from "next/image"
import Link from "next/link";

import DesktopHeroSingle from "../components/desktop-hero-single.component";
import MobileHero from "../components/mobile-hero.component"
import ImageCard from "../components/image-card.component"
import ImageTile from "../components/image-tile.component";
import ParagraphPicture from "../components/paragraph-picture.component";

import homeHero from '../../public/assets/home_hero.jpg';
import donation from '../../public/assets/donation.jpg'
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

export default function Home() {
  return (
    <div>
      <MobileHero image={homeHero} alt="Hero Image" title="The Community for Better Living" />
      <DesktopHeroSingle
        image={worship}
        alt="Hero Image"
        title="About Us"
        subtitle="Our story and how we serve our community"
        position="center bottom"
      />

      <div className="w-full md:w-5/6 max-w-screen-2xl mx-auto">

        {/* Intro Section */}
        <ParagraphPicture
          image={handsTogether}
          alt="All together"
          imageRight={true}
        >
          <h2 className="display-s xl:display-sl text-primary-900 mb-8">Making a difference</h2>
          <p className="body-2s xl:body-1s text-neutral-900">
            We are a 501c Community Service and Education Center located on the west side of Cleveland. We are supported by a volunteer network
            of wonderful people dedicated to finding ways to serve and care for anyone in need, including education, direct service,
            and family/community support. We host events to serve the community and also organize fun events to raise funds
            and support this very worthy cause.<br /><br />

            We are located on the Westside of Cleveland, just West of the Airport, at 7074 Columbia Rd, Olmsted Township, OH 44138.
            Our Phone Number is (440)541-7829 (please be patient as we are updating our number)
          </p>
        </ParagraphPicture>

        {/* Services */}
        <div className="px-8 pb-8 md:pb-16">
          <h2 className="display-s text-primary-900 mb-4">Services</h2>
          <p className="body-2s text-neutral-900 mb-8 md:w-[70%] lg:w-[50%]">
            Lorem ipsum dolor sit amet consectetur. Suspendisse ipsum nibh nulla venenatis arcu scelerisque pulvinar habitasse commodo.
            Turpis adipiscing accumsan aenean ut. In etiam sit mauris id. Quam venenatis enim pellentesque integer.
          </p>

          <div className="w-full flex flex-col 2xl:flex-row gap-8">
            <div className="w-full mx-auto flex flex-col md:flex-row gap-8">
              <ImageCard image={foodbank} height="250px" alt="Food Bank">
                <h3 className="display-3 text-primary-900 mb-2">Food Bank</h3>
                <p className="body-3r text-neutral-900 h-[88px]">
                  We operate a Greater Cleveland Food Bank distribution. Our drive-thru distribution service provides
                  food to families throughout our community twice each month. All are welcome.
                </p>
                <Link href="/foodbank" className="py-1 px-4 rounded bg-primary-900 text-white display-5">
                  Learn More
                </Link>
              </ImageCard>

              <ImageCard image={worship} height="250px" alt="Worship classes">
                <h3 className="display-3 text-primary-900 mb-2">Worship</h3>
                <p className="body-3r text-neutral-900 h-[88px]">
                  Saturdays from 10:45am-1:30pm with classes being taught on getting to know God better.
                </p>
                <Link href="/worship" className="py-1 px-4 rounded bg-primary-900 text-white display-5">
                  Learn More
                </Link>
              </ImageCard>
            </div>

            <div className="w-full mx-auto flex flex-col md:flex-row gap-8">
              <ImageCard image={eventCard} height="250px" alt="Events">
                <h3 className="display-3 text-primary-900 mb-2">Events</h3>
                <p className="body-3r text-neutral-900 h-[88px]">
                  We host community events and classes ranging from Car Shows to Chili Cook Off Competitions.
                  Join us for a great time!
                </p>
                <Link href="/events" className="py-1 px-4 rounded bg-primary-900 text-white display-5">
                  Learn More
                </Link>
              </ImageCard>

              <ImageCard image={workshop} height="250px" alt="Other services">
                <h3 className="display-3 text-primary-900 mb-2">Other Services</h3>
                <p className="body-3r text-neutral-900 h-[88px]">
                  We offer a range of other services such as couseling, workshops, and classes to help improve
                  peoples lives.
                </p>
                <Link href="/other_services" className="py-1 px-4 rounded bg-primary-900 text-white display-5">
                  Learn More
                </Link>
              </ImageCard>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="px-8 pb-8">
          <h2 className="display-s text-primary-900 mb-4">Our Values</h2>
          <p className="body-2s text-neutral-900 mb-8 md:w-[70%] lg:w-[50%]">
            Lorem ipsum dolor sit amet consectetur. Suspendisse ipsum nibh nulla venenatis arcu scelerisque
            pulvinar habitasse commodo. Turpis adipiscing accumsan aenean ut. In etiam sit mauris id. Quam
            venenatis enim pellentesque integer.
          </p>
          <div className="flex flex-col xs:flex-row lg:flex-col gap-2 lg:gap-6">
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-6">
              <ImageTile image={familyTile} title="Family" />
              <ImageTile image={healthTile} title="Health" />
              <ImageTile image={spiritualityTile} title="Spirituality" />
            </div>
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-6">
              <ImageTile image={financeTile} title="Finances" />
              <ImageTile image={funTile} title="Fun/Leisure" position="100% 35%" />
              <ImageTile image={workTile} title="Work" />
            </div>
          </div>
        </div>

        {/* Mobile Donation */}
        <div className="lg:hidden px-8 pb-8">
          <h2 className="display-s text-primary-900 mb-4">Help Our Cause</h2>
          <div className="w-full bg-primary-100 rounded-md shadow-md">
            <div className="w-full">
              <Image
                alt="Mountains"
                src={donation}
                sizes="100vw"
                // Make the image display full width
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '0.375rem 0.375rem 0 0'
                }}
              />
            </div>
            <div className="p-4">
              <p className="body-3r text-neutral-900 mb-4">
                If you can, please help us as we provide groceries and healthy living education free of charge to families
                in need across Northeast Ohio. Since the COVID-19 pandemic began in the spring of 2020, we have provided
                food to over 1000 families and continue to increase those numbers with your support.
              </p>
              <Link href="/support" >
                <p className="w-full py-2 text-center rounded bg-primary-900 text-white display-5">Support Us</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Donation */}
      <div className="hidden lg:block w-full h-[800px] bg-gradient-to-t from-primary-100 from-80% to-white">
        <div className="w-full md:w-5/6 max-w-screen-2xl mx-auto pt-[200px]">
          <ParagraphPicture
            image={donation}
            alt="Please donate"
            imageRight={false}
          >
            <h2 className="display-sl text-primary-900 mb-8">Help Our Cause</h2>
            <p className="body-1s text-neutral-900 mb-8">
              If you can, please help us as we provide groceries and healthy living education free of charge to families
              in need across Northeast Ohio. Since the COVID-19 pandemic began in the spring of 2020, we have provided
              food to over 1000 families and continue to increase those numbers with your support.
            </p>
            <Link href="/support" >
              <p className="w-[50%] py-2 text-center rounded bg-primary-900 text-white display-5">Support Us</p>
            </Link>
          </ParagraphPicture>
        </div>
      </div>
    </div>
  )
}
