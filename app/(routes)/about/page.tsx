
import MobileHero from "@/app/components/mobile-hero.component"
import DesktopHeroSingle from "@/app/components/desktop-hero-single.component"
import ParagraphPicture from "@/app/components/paragraph-picture.component"

import desktopHero from "../../../public/assets/about_desktop_hero.jpg";
import mobileHero from "../../../public/assets/about_mobile_hero.jpg";
import paragraghImage from "../../../public/assets/about_paragraph_picture.jpg";

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

      <div className="w-full md:w-5/6 max-w-screen-2xl mx-auto">

        <ParagraphPicture
          image={paragraghImage}
          alt="Picture"
        >
          <h2 className="display-s xl:display-sl text-primary-900 mb-8">Serving Our Community</h2>
          <p className="body-2s xl:body-1s text-neutral-900">
            We have been dedicated to providing a range of services that meet the needs and interests of our community
            members including a food pantry, community family events, classes on various topics and a weekly spiritual
            group that meets on Saturdays.<br /><br />
            We are fortunate to have a group of passionate volunteers who give their hearts to helping those they serve
            in our community. Without them, we could not fulfill the mission of CBL.<br /><br />
            We operate with integrity, transparency, and accountability in all that we do and all that we offer, and we
            hold ourselves to the highest standards in all that we do. We finance our organization through grants and
            contributions of compassionate donors that share our mission and vision.
          </p>
        </ParagraphPicture>

      </div>
    </div>
  )
}
