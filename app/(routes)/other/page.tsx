import Link from "next/link"

import Container from "@/app/components/container.component"
import MobileHero from "@/app/components/mobile-hero.component"
import DesktopHeroSingle from "@/app/components/desktop-hero-single.component"
import SectionHeading from "@/app/components/section-heading.component"
import Paragraph from "@/app/components/paragraph.component"
import ParagraphPicture from "@/app/components/paragraph-picture.component"
import CallToAction from "@/app/components/call-to-action.component"
import ImageCard from "@/app/components/image-card.component"

import mobileHero from "../../../public/assets/other_hero_mobile.jpg"
import desktopHero from "../../../public/assets/other_hero_desktop.jpg"
import introImage from "../../../public/assets/support_intro.jpg"
import marriageService from "../../../public/assets/marriage_service.jpg"
import parentingService from "../../../public/assets/parenting_counseling.jpg"
import spiritualityService from "../../../public/assets/spirituality_counseling.jpg"
import budgetService from "../../../public/assets/budgeting_service.jpg"
import willService from "../../../public/assets/will_service.jpg"
import mortgageService from "../../../public/assets/mortgage_service.jpg"
import resumeService from "../../../public/assets/resume_service.jpg"
import cookingService from "../../../public/assets/cooking_service.jpg"
import fitnessService from "../../../public/assets/fitness_service.jpg"

export default function Other() {
  return (
    <div>
      <MobileHero image={mobileHero} alt="Hero Image" title="Counseling, Workshops, & More" />
      <DesktopHeroSingle
        image={desktopHero}
        alt="Hero Image"
        title="Counseling, Workshops, & More"
        subtitle="Lorem ipsum dolor sit amet consectetur"
      />

      <Container>
        <ParagraphPicture image={introImage} alt="Bible Study">
          <SectionHeading>Services to Support You</SectionHeading>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur. Eros lorem nullam sagittis ornare nunc nibh justo.
            Neque eros viverra pellentesque rhoncus mauris metus. Diam nibh sagittis non semper.
            Nisi egestas massa donec sed enim enim risus eu. Pellentesque malesuada quis congue
            aliquam lorem cursus et urna. Tincidunt nibh morbi curabitur odio.
          </Paragraph>
        </ParagraphPicture>

        <div className="px-8 py-4 lg:py-16">
          <SectionHeading>Counseling Services</SectionHeading>
          <div className="flex flex-col lg:flex-row gap-6 mt-2">
            <ImageCard image={marriageService} alt="" height="250px">
              <div className="p-2 md:p-4 lg:p-0 xl:p-6">
                <h3 className="display-4 md:display-3 text-primary-900 mb-6">Marriage</h3>
                <p className="body-2r md:body-1r text-neutral-900 mb-6">
                  Lorem ipsum dolor sit amet consectetur. Libero posuere id id convallis vivamus nunc
                  a sit sit. Lobortis gravida orci elementum praesent. Sit nisl et vitae ultrices
                  condimentum arcu purus.
                </p>
                <Link href="" className="py-2 px-4 rounded bg-primary-900 text-white body-2b lg:body-1b">Request Counseling</Link>
              </div>
            </ImageCard>
            <ImageCard image={parentingService} alt="" height="250px">
              <div className="p-2 md:p-4 lg:p-0 xl:p-6">
                <h3 className="display-4 md:display-3 text-primary-900 mb-6">Parenting</h3>
                <p className="body-2r md:body-1r text-neutral-900 mb-6">
                  Lorem ipsum dolor sit amet consectetur. Libero posuere id id convallis vivamus nunc
                  a sit sit. Lobortis gravida orci elementum praesent. Sit nisl et vitae ultrices
                  condimentum arcu purus.
                </p>
                <Link href="" className="py-2 px-4 rounded bg-primary-900 text-white body-2b lg:body-1b">Request Counseling</Link>
              </div>
            </ImageCard>
            <ImageCard image={spiritualityService} alt="" height="250px">
              <div className="p-2 md:p-4 lg:p-0 xl:p-6">
                <h3 className="display-4 md:display-3 text-primary-900 mb-6">Spirituality</h3>
                <p className="body-2r md:body-1r text-neutral-900 mb-6">
                  Lorem ipsum dolor sit amet consectetur. Libero posuere id id convallis vivamus nunc
                  a sit sit. Lobortis gravida orci elementum praesent. Sit nisl et vitae ultrices
                  condimentum arcu purus.
                </p>
                <Link href="" className="py-2 px-4 rounded bg-primary-900 text-white body-2b lg:body-1b">Request Counseling</Link>
              </div>
            </ImageCard>
          </div>
        </div>

        <div className="px-8 py-4 lg:py-16">
          <SectionHeading>Financial Services</SectionHeading>
          <div className="flex flex-col lg:flex-row gap-6 mt-2">
            <ImageCard image={budgetService} alt="" height="250px">
              <div className="p-2 md:p-4 lg:p-0 xl:p-6">
                <h3 className="display-4 md:display-3 text-primary-900 mb-6">Budgeting</h3>
                <p className="body-2r md:body-1r text-neutral-900 mb-6">
                  Lorem ipsum dolor sit amet consectetur. Libero posuere id id convallis vivamus nunc
                  a sit sit. Lobortis gravida orci elementum praesent. Sit nisl et vitae ultrices
                  condimentum arcu purus.
                </p>
                <Link href="" className="py-2 px-4 rounded bg-primary-900 text-white body-2b lg:body-1b">Lorem Ipsum</Link>
              </div>
            </ImageCard>
            <ImageCard image={willService} alt="" height="250px">
              <div className="p-2 md:p-4 lg:p-0 xl:p-6">
                <h3 className="display-4 md:display-3 text-primary-900 mb-6">Wills & Trusts</h3>
                <p className="body-2r md:body-1r text-neutral-900 mb-6">
                  Lorem ipsum dolor sit amet consectetur. Libero posuere id id convallis vivamus nunc
                  a sit sit. Lobortis gravida orci elementum praesent. Sit nisl et vitae ultrices
                  condimentum arcu purus.
                </p>
                <Link href="" className="py-2 px-4 rounded bg-primary-900 text-white body-2b lg:body-1b">Lorem Ipsum</Link>
              </div>
            </ImageCard>
            <ImageCard image={mortgageService} alt="" height="250px">
              <div className="p-2 md:p-4 lg:p-0 xl:p-6">
                <h3 className="display-4 md:display-3 text-primary-900 mb-6">Mortgage/Loans</h3>
                <p className="body-2r md:body-1r text-neutral-900 mb-6">
                  Lorem ipsum dolor sit amet consectetur. Libero posuere id id convallis vivamus nunc
                  a sit sit. Lobortis gravida orci elementum praesent. Sit nisl et vitae ultrices
                  condimentum arcu purus.
                </p>
                <Link href="" className="py-2 px-4 rounded bg-primary-900 text-white body-2b lg:body-1b">Lorem Ipsum</Link>
              </div>
            </ImageCard>
          </div>
        </div>

        <div className="px-8 py-4 lg:py-16">
          <SectionHeading>Health Services</SectionHeading>
          <div className="flex flex-col lg:flex-row gap-6 mt-2">
            <ImageCard image={resumeService} alt="" height="250px">
              <div className="p-2 md:p-4 lg:p-0 xl:p-6">
                <h3 className="display-4 md:display-3 text-primary-900 mb-6">Resume Workshops</h3>
                <p className="body-2r md:body-1r text-neutral-900 mb-6">
                  Lorem ipsum dolor sit amet consectetur. Libero posuere id id convallis vivamus nunc
                  a sit sit. Lobortis gravida orci elementum praesent. Sit nisl et vitae ultrices
                  condimentum arcu purus.
                </p>
                <Link href="" className="py-2 px-4 rounded bg-primary-900 text-white body-2b lg:body-1b">Lorem Ipsum</Link>
              </div>
            </ImageCard>
            <ImageCard image={cookingService} alt="" height="250px">
              <div className="p-2 md:p-4 lg:p-0 xl:p-6">
                <h3 className="display-4 md:display-3 text-primary-900 mb-6">Cooking Classes</h3>
                <p className="body-2r md:body-1r text-neutral-900 mb-6">
                  Lorem ipsum dolor sit amet consectetur. Libero posuere id id convallis vivamus nunc
                  a sit sit. Lobortis gravida orci elementum praesent. Sit nisl et vitae ultrices
                  condimentum arcu purus.
                </p>
                <Link href="" className="py-2 px-4 rounded bg-primary-900 text-white body-2b lg:body-1b">Lorem Ipsum</Link>
              </div>
            </ImageCard>
            <ImageCard image={fitnessService} alt="" height="250px">
              <div className="p-2 md:p-4 lg:p-0 xl:p-6">
                <h3 className="display-4 md:display-3 text-primary-900 mb-6">Fitness Classes</h3>
                <p className="body-2r md:body-1r text-neutral-900 mb-6">
                  Lorem ipsum dolor sit amet consectetur. Libero posuere id id convallis vivamus nunc
                  a sit sit. Lobortis gravida orci elementum praesent. Sit nisl et vitae ultrices
                  condimentum arcu purus.
                </p>
                <Link href="" className="py-2 px-4 rounded bg-primary-900 text-white body-2b lg:body-1b">Lorem Ipsum</Link>
              </div>
            </ImageCard>
          </div>
        </div>

        <CallToAction text="Lorem ipsum dolor sit amet consectetur" />
      </Container>
    </div>
  )
}