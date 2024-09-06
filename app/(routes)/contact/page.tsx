import Container from "@/app/components/container.component";
import MobileHero from "@/app/components/mobile-hero.component";
import DesktopHeroSingle from "@/app/components/desktop-hero-single.component";
import SectionHeading from "@/app/components/section-heading.component";
import Paragraph from "@/app/components/paragraph.component";
import MapWrapper from "@/app/components/map-wrapper.component";
import DesktopDonation from "@/app/components/desktop-donation.component";
import MobileDonation from "@/app/components/mobile-donation.component";

import mobileHero from "../../../public/assets/contact_hero.jpg";
import Link from "next/link";

export default function ContactUs() {
  return (
    <div>
      <MobileHero
        image={mobileHero}
        alt="Hero Image"
        title="Contact Us"
      />
      <DesktopHeroSingle
        image={mobileHero}
        alt="Hero Image"
        title="Contact Us"
        subtitle="Where to find us and how to get in touch"
        position="100% 80%"
      />

      <Container>

        {/* Where to FInd Us */}
        <div className="px-8 py-8">
          <div className="flex flex-col gap-8">

            <div>
              <SectionHeading>Where to Find Us</SectionHeading>
              <div className="flex flex-col gap-4">
                <p className="body-2b text-neutral-900">The Community for Better Living</p>
                <p className="body-2r text-neutral-900">7074 Columbia Rd</p>
                <p className="body-2r text-neutral-900">Olmsted Township, OH 44138</p>
              </div>
            </div>

            <div className="h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
              <MapWrapper apiKey={process.env.MAPS_API_KEY} />
            </div>

          </div>
        </div>

        {/* How to Get In Touch */}
        <div className="px-8 py-8">
          <SectionHeading>How to Get In Touch</SectionHeading>
          <p className="body-2r text-neutral-900 md:w-[70%] lg:w-[50%]">
            You can reach us through any of the following contacts. Our
            preference is that you contact us by email, as we are a volunteer-run
            organization and can not always respond to every message immediately.

          </p>
          <div className="flex flex-col lg:flex-row gap-4 py-8 lg:w-2/3">
            <Link
              href="mailto:info@communityforbetterliving.org"
              className="w-full py-2 bg-primary-900 text-primary-100 body-2b md:body-1b lg:body-2b xl:body-1b text-center rounded-md">
              info@communityforbetterliving.org
            </Link>
            <Link href="tel:+14405417829" className="w-full py-2 bg-primary-900 text-primary-100 body-2b md:body-1b lg:body-2b xl:body-1b text-center rounded-md">
              (440) 541 - 7829
            </Link>
          </div>
        </div>

        <MobileDonation variant="secondary" />
      </Container>
      <DesktopDonation variant="secondary" />
    </div>
  )
}