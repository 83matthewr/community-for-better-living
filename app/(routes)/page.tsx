import MobileHero from "../components/mobile-hero.component"
import brownBags from "../../public/assets/brownbags.jpg"

export default function Home() {
  return (
    <div>
      <MobileHero image={brownBags}/>
      <div className="container mx-auto">
        <div className="p-8">
          <h2 className="display-s text-primary-900 mb-4">Making a difference</h2>
          <p className="body-2s text-neutral-900">
            We are a 501c Community Service and Education Center located on the west side of Cleveland. We are supported by a volunteer network
            of wonderful people dedicated to finding ways to serve and care for anyone in need, including education, direct service,
            and family/community support. We host events to serve the community and also organize fun events to raise funds
            and support this very worthy cause.<br /><br />

            We are located on the Westside of Cleveland, just West of the Airport, at 7074 Columbia Rd, Olmsted Township, OH 44138.
            Our Phone Number is (440)541-7829 (please be patient as we are updating our number)
          </p>
        </div>
        <div className="px-8 pb-8">
          <h2 className="display-s text-primary-900 mb-4">Services</h2>
          <p className="body-2s text-neutral-900">
            Lorem ipsum dolor sit amet consectetur. Suspendisse ipsum nibh nulla venenatis arcu scelerisque pulvinar habitasse commodo.
            Turpis adipiscing accumsan aenean ut. In etiam sit mauris id. Quam venenatis enim pellentesque integer.
          </p>
        </div>
      </div>
    </div>
  )
}
