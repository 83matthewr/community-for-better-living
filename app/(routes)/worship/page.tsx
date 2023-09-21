
import Container from "@/app/components/container.component"
import MobileHero from "@/app/components/mobile-hero.component"
import DesktopHeroSingle from "@/app/components/desktop-hero-single.component"
import SectionHeading from "@/app/components/section-heading.component"
import Paragraph from "@/app/components/paragraph.component"
import ParagraphPicture from "@/app/components/paragraph-picture.component"
import CallToAction from "@/app/components/call-to-action.component"
import MapWrapper from "@/app/components/map-wrapper.component";

import mobileHero from "../../../public/assets/worship_hero_mobile.jpg"
import desktopHero from "../../../public/assets/worship_hero_desktop.jpg"
import introImage from "../../../public/assets/worship_service.jpg"
import BeliefContainer from "@/app/components/belief-container.component"
import BeliefStatement from "@/app/components/belief-statement.component"

const BELIEF_STATEMENTS = [
  {
    title: "The Creator God",
    text:
      "We firmly believe in the existence of a loving and creative God who is the source of all life and creation. This divine Creator’s boundless wisdom and love are revealed through the beauty and diversity of the world around us"
  },
  {
    title: "Jesus Christ, the Son",
    text:
      "We acknowledge Jesus Christ as the Son of God and Savior of humanity. His life, teaching, death, and resurrection exemplify the depth of God’s love for us and provide a pathway to reconciliation and redemption"
  },
  {
    title: "The Inspired Bible",
    text:
      "While recognizing that the Bible is inspired by God, we understand that it was written by imperfect humans in various historical and cultural contexts. We approach the Bible with humility, recognizing that its messages are conveyed through the lens of human experiences and cultural influences"
  },
  {
    title: "Embracing Imperfection",
    text:
      "As followers of Christ, we acknowledge our own imperfections and those of others. We understand that the Bible’s narratives include stories of people who struggled, made mistakes, and learned from their experiences. We humbly recognize that none of us are without flaws"
  },
  {
    title: "Christ as the Ultimate Example",
    text:
      "We hold Jesus Christ as the ultimate example of the kind of people we are called to be. His love, compassion, humility, and selflessness guide us in our journey of faith. We seek to reflect these qualities in our interactions with others and our approach to life"
  },
  {
    title: "Inclusivity and Diversity",
    text:
      "Just as Christ called all people to follow Him without exception, we embrace the diversity of humanity. Regardless of one’s background, identity, history, or life circumstances, we affirm the inherent worth and dignity of every individual. All are invited to learn about the God of love and grace"
  },
  {
    title: "Sharing Knowledge with Humility",
    text:
      "We are committed to sharing the knowledge we have about God’s love and teachings with humility and respect. We recognize that our understanding is an ongoing journey, and we remain open to continuous learning and growth in our faith"
  },
  {
    title: "Judgement Free Community",
    text:
      "In our community, we strive to create an environment free from judgment. We recognize that each person’s journey is unique, and we welcome all to join us in exploring and deepening their relationship with God without fear of condemnation or exclusion"
  },
  {
    title: "Love in Action",
    text:
      "We believe that faith is not only expressed in words, but also in actions. We are called to embody Christ’s love by serving others, advocating for justice, and contributing to the well-being of our communities and the world"
  }
];

export default function Worship() {
  return (
    <div>
      <MobileHero image={mobileHero} alt="Hero Image" title="Worship & Bible Study" />
      <DesktopHeroSingle
        image={desktopHero}
        alt="Hero Image"
        title="Worship & Bible Study"
        subtitle="Saturdays from 10:45am-1:30pm with 
          classes being taught on getting to know God better"
      />

      <Container>
        <ParagraphPicture image={introImage} alt="Bible Study">
          <SectionHeading>Worship With Us</SectionHeading>
          <Paragraph>
            Anyone and everyone is welcome to join us at the Community for Better Living for worship
            services. We believe in learning more about the God who created and loves us all.
            Our goal is to help people from different backgrounds develop a personal relationship
            with Him by studying Jesus&apos; time on earth and the men who were closest to Him. If you&apos;re
            seeking a relationship with Christ, you are more than welcome to join us. No obligations,
            just an open mind, an open heart, and a desire to learn. We have no hidden agendas and we
            strive not to judge others. Instead, our focus is on gaining knowledge of God through the
            life of Christ and serving others as a way of life.
          </Paragraph>
        </ParagraphPicture>

        {/* Address and Service Times */}
        <div className="px-8 pt-4 pb-8 lg:py-16">
          <div className="flex flex-col lg:flex-row">
            <div className="mb-4 lg:mb-0 h-[400px] w-full lg:basis-1/2 lg:order-last shadow-md">
              <MapWrapper apiKey={process.env.MAPS_API_KEY} />
            </div>
            <div className="p-8 xl:mr-[100px] w-full bg-secondary-100 shadow-md rounded lg:basis-1/2 ">
              <h3 className="display-3 lg:display-2 text-primary-900 mb-4">Service Times:</h3>
              <h4 className="display-4 lg:display-3 text-neutral-900 mb-8">Saturdays @ 11:00am</h4>
              <h3 className="display-3 lg:display-2 text-primary-900 mb-4">Address:</h3>
              <h4 className="display-4 lg:display-4 text-neutral-900 mb-2">7074 Columbia Rd</h4>
              <h4 className="display-4 lg:display-4 text-neutral-900">Olmsted Township, OH 44138</h4>
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <div className="px-8 py-4 lg:py-16">
          <SectionHeading>What to Expect</SectionHeading>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">

            <div className="flex flex-col gap-4 lg:gap-6">
              <div className="w-full bg-primary-100 p-4 lg:p-8 rounded shadow">
                <h3 className="display-5 lg:display-4 text-primary-900 mb-2">Music & Worship</h3>
                <p className="body-2r lg:body-1r text-neutral-900">
                  Lorem ipsum dolor sit amet consectetur. Sit venenatis nunc aliquam quisque. At magnis
                  cursus feugiat dolor cursus dolor purus. Ut ut tellus vitae vitae. Morbi placerat eu
                  vestibulum semper at in lectus.
                </p>
              </div>
              <div className="w-full bg-primary-100 p-4 lg:p-8 rounded shadow">
                <h3 className="display-5 lg:display-4 text-primary-900 mb-2">Bible Study</h3>
                <p className="body-2r lg:body-1r text-neutral-900">
                  Lorem ipsum dolor sit amet consectetur. Sit venenatis nunc aliquam quisque. At magnis
                  cursus feugiat dolor cursus dolor purus. Ut ut tellus vitae vitae. Morbi placerat eu
                  vestibulum semper at in lectus.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:gap-6">
              <div className="w-full bg-primary-100 p-4 lg:p-8 rounded shadow">
                <h3 className="display-5 lg:display-4 text-primary-900 mb-2">Dress Code</h3>
                <p className="body-2r lg:body-1r text-neutral-900">
                  Lorem ipsum dolor sit amet consectetur. Sit venenatis nunc aliquam quisque. At magnis
                  cursus feugiat dolor cursus dolor purus. Ut ut tellus vitae vitae. Morbi placerat eu
                  vestibulum semper at in lectus.
                </p>
              </div>
              <div className="w-full bg-primary-100 p-4 lg:p-8 rounded shadow">
                <h3 className="display-5 lg:display-4 text-primary-900 mb-2">No Motives</h3>
                <p className="body-2r lg:body-1r text-neutral-900">
                  Lorem ipsum dolor sit amet consectetur. Sit venenatis nunc aliquam quisque. At magnis
                  cursus feugiat dolor cursus dolor purus. Ut ut tellus vitae vitae. Morbi placerat eu
                  vestibulum semper at in lectus.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Beliefs Section */}
        <div className="px-8 py-8 lg:py-16">
          <div className="w-[100%] md:w-[75%] lg:w-[50%] mx-auto text-center border-b-4 border-primary-900">
            <h3 className="display-s lg:display-sl text-primary-900 mb-4">What We Believe</h3>
            <p className="body-2r lg:body-1r text-neutral-900 mb-8">We are a Christian church, guided by the following beliefs</p>
          </div>
          <div className="py-8 flex flex-col gap-8">
            <BeliefContainer>
              {BELIEF_STATEMENTS.slice(0,2).map((belief) => {
                return <BeliefStatement key={belief.title} title={belief.title} text={belief.text} />
              })}
            </BeliefContainer>
            <BeliefContainer>
              {BELIEF_STATEMENTS.slice(2,4).map((belief) => {
                return <BeliefStatement key={belief.title} title={belief.title} text={belief.text} />
              })}
            </BeliefContainer>
            <BeliefContainer>
              {BELIEF_STATEMENTS.slice(4,6).map((belief) => {
                return <BeliefStatement key={belief.title} title={belief.title} text={belief.text} />
              })}
            </BeliefContainer>
            <BeliefContainer>
              {BELIEF_STATEMENTS.slice(6,8).map((belief) => {
                return <BeliefStatement key={belief.title} title={belief.title} text={belief.text} />
              })}
            </BeliefContainer>
            <BeliefContainer>
              {BELIEF_STATEMENTS.slice(8,9).map((belief) => {
                return <BeliefStatement key={belief.title} title={belief.title} text={belief.text} />
              })}
            </BeliefContainer>
          </div>
          <div className="mt-8 lg:mt-16 w-[100%] md:w-[75%] lg:w-[50%] border-b-4 border-primary-900 mx-auto"></div>
        </div>

        <CallToAction text="Have a talent you’d like to bring to our worship services?" />
      </Container>
    </div>
  )
}
