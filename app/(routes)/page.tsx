import Image from "next/image"

import MobileHero from "../components/mobile-hero.component"
import brownBags from "../../public/assets/brownbags.jpg"
import donation from '../../public/assets/donation.jpg'

export default function Home() {
  return (
    <div>
      <MobileHero image={brownBags} />
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

        <div className="px-8 pb-8">
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
              <button className="w-full py-2 rounded bg-primary-900 text-white display-5">
                Support Us
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
