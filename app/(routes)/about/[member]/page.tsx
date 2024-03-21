import Image from "next/image";

import Paragraph from "@/app/components/paragraph.component";
import Container from "@/app/components/container.component";

import placeholderImage from "../../../../public/assets/profile_placeholder.jpg";
import dean_cinquemani from "../../../../public/assets/dean_cinquemani.jpg";
import tammi_cinquemani from "../../../../public/assets/tammi_cinquemani.jpg";
import glen_marek from "../../../../public/assets/glen_marek.jpg";
import polly_dengel from "../../../../public/assets/polly_dengel.jpg";
import jon_falkenstein from "../../../../public/assets/jon_falkenstein.jpg";
import dark_jon_falkenstein from "../../../../public/assets/dark_jon_falkenstein.jpg";
import lisa_falkenstein from "../../../../public/assets/lisa_falkenstein.jpg";
import gail_merda from "../../../../public/assets/gail_merda.jpg";
import matthew_roberts from "../../../../public/assets/matthew_roberts.jpg";
import Link from "next/link";

const BOARD_MEMBERS = [
    {
        key: "dcinquemani",
        name: "Dean Cinquemani",
        position: "Board Chair",
        img: dean_cinquemani,
        bio1: "Dean is a dynamic pastor and community leader with a proven track record of driving positive change in Olmsted Falls. As the founder, board chair, and director of the Community for Better Living since 2010, he has demonstrated his commitment to community development. In 2014, Dean assumed the role of board chair at Walk of Faith Community Center, further expanding his impact on the westside community. His focus on educating others on health, diet, finance, and spirituality showcases his dedication to holistic well-being. With a background in landscaping and sales education from two national schools, Dean possesses diverse skill sets that set him apart.",
        bio2: "In 2016, he led efforts to establish a partnership with CFB for their westernmost distribution center. Additionally, as an entrepreneur of a remodeling contracting firm, Dean is known for his quality craftsmanship and unwavering dedication to customer satisfaction. His ability to communicate effectively enables him to connect with individuals from all walks of life. Energetic and passionate about making a difference in the lives of others, Dean continues to be an influential force in shaping the future of his community."
    },
    {
        key: "gmarek",
        name: "Glen Marek",
        position: "Treasurer",
        img: glen_marek,
        bio1: "Glen has been the Treasurer for CBL (originally Walk of Faith Community Center) since 2009. He has a Bachelor's Degree in Accounting from Cleveland State University. He uses his knowledge in Accounting to help the Community Center to follow Generally Accepted Accounting Principles in their financial reporting. In addition to his role with CBL, Glen is a full-time employee of Minute Men Staffing and a Licensed Foster Parent in the State of Ohio."
    },
    {
        key: "tcinquemani",
        name: "Tammi Cinquemani",
        position: "Clerk",
        img: tammi_cinquemani,
        bio1: "Tammi is a dedicated professional with over 25 years of experience working in a medical office setting. Her attention to detail and ability to work well under pressure have been key factors in her success. In addition to her professional work, she has served as the secretary for the CBL board since 2010, where she has played an integral role in organizing fundraisers, community events, and food distribution through the CBL food pantry.",
        bio2: "Tammi is passionate about promoting healthy living and has actively participated in a cooking school that teaches local communities how to cook nutritious meals to prevent health issues such as high cholesterol, heart disease, and diabetes. She excels at keeping detailed records and supporting the CBL director and other board members. Tammi's diverse skill set allows her to effectively engage with community members and contribute positively to any project or initiative she undertakes. With a strong commitment to giving back to the community and improving overall well-being, Tammi continues to make a notable impact professionally and through her community service."
    },
    {
        key: "lfalkenstein",
        name: "Lisa Falkenstein",
        position: undefined,
        img: lisa_falkenstein,
        bio1: "Lisa brings over two decades of experience in the nonprofit sector to her role as a board member for CBL. Since 2000, she has actively championed positive change within local communities, firmly believing in the efficacy of grassroots efforts and the importance of a supportive environment for all. During her tenure as the Director of the Walk of Faith Community Center in Cleveland, Lisa helped with transformative initiatives, including a partnership with the Cleveland Foodbank to establish a vital food pantry serving the community. Her collaborative approach extended to working closely with local government entities to assess community needs, secure essential funding, and helped orchestrate a large-scale annual event called  \"We Care\", designed to provide invaluable support to the residents of west Cleveland.",
        bio2: "Beyond her contributions to the nonprofit sector, Lisa is also a small business owner deeply entrenched in the fabric of the Cleveland community. Her commitment to service and her entrepreneurial spirit underscores her dedication to making a lasting impact on the lives of those around her."
    },
    {
        key: "jfalkenstein",
        name: "Jon Falkenstein",
        position: undefined,
        img: jon_falkenstein,
        bio1: "Jon is a highly experienced and dedicated professional with a proven community outreach and board governance track record. With over 15 years of expertise in commercial and personal debt collections and a decade-long career progression within the manufacturing industry, he brings a unique blend of financial acumen and strategic insight to the table. Currently serving as an executive finance committee member at CBL, Jon thrives in dynamic environments where collaboration and innovation are key. As a customer service relations manager at a Fortune 500 company, his team leadership, negotiation, and mentoring skills have been instrumental in driving success. Passionate about community engagement and wellness initiatives, Jon is committed to positively impacting the local community."
    },
    {
        key: "pdengel",
        name: "Dr. Polly Dengel",
        position: undefined,
        img: polly_dengel,
        bio1: "Dr. Polly Dengel, is a Cleveland Clinic trained Internal Medicine specialist. She has long had a preference for preventing disease rather than treating it. Perhaps this stems from her training in Whole Person Care at the Loma Linda School of Medicine. This journey has led her to personal dietary and other lifestyle changes as she raised and cooked for her family and eventually entered retirement. She began offering classes for Cleveland Clinic patients in Spirituality and Healing in her office lobby in the early 2000s. From 2006 until the pandemic in 2020, she offered healthy cooking classes for the community at The Community for Better Living. As more research information became available, she incorporated the Whole Foods, Plant-based diet into her classes, believing this diet to be the healthiest option.",
        bio2: "Most recently, she has produced weekly Wellness Wednesday videos for CBL, covering a variety of dietary, fitness, and mental health/spirituality issues. One of her roles at CBL&apos;s Food Pantry is ordering the food for distribution. Her dream has been to find a way to gently educate and encourage Food Pantry clients to adopt healthier food choices and develop healthier options to offer them."
    },
    {
        key: "cmills",
        name: "Celeste Mills",
        position: undefined,
        img: placeholderImage,
    },
    {
        key: "coster",
        name: "Cindy Oster",
        position: undefined,
        img: placeholderImage,
        bio1: "Cynthia is a retired international journalist with over four decades of experience, with a primary focus on business, technology, science and health.  She was Editor-in-chief and Contributing Editor for many international and local publications, such as Bottom Line Weath, Bottom Line Personal, NewsBytes, IdeaBytes and Cleveland Magazine. With a life-long passion  for science and physics, Cynthia has given lectures and conducted workshops throughout northeast Ohio  on quantum physics and how our thoughts play a vital role in both creating our own future - and the future of the planet. ",
        bio2: "She has volunteered most of her adult life, working closely with non-profits, charitable organizations and churches.  She's been with The Community for Better Living for over six years."
    },
    {
        key: "gmerda",
        name: "Gail Merda",
        position: undefined,
        img: gail_merda,
        bio1: "Since 1987 Gail has supported and actively worked in the nonprofit arena. Starting with the grassroots organization Hard Hatted Women. as a facilitator and community educator. Then unto 9 to 5 National Organization of Working Women, educating and supporting women locally and nationally with Work and Family balance and Equal Rights. When 9 to 5 moved to Wisconsin, a position at Templum House of Cleveland for Women and Children in Domestic Violence was a perfect fit. She was the Community Educator and Volunteer Coordinator, bringing people together to gain understanding and actively help. She initiated the Santa Shop for residents. Children were entertained and shopped for mom, while moms shopped, choosing their child's gifts. It became an annual event.",
        bio2: "In her free time, Gail volunteered at the City Mission-Hunger Truck: bringing hot meals and warm clothing to the homeless on the streets of Cleveland. Joining Walk of Faith in 2001, shortly after, Gail and Lisa Falkenstein, found inroads to reach the community through outside events such as seasonal festivals, which included a puppet stage. Also, collaborated with other city-wide events such as the Night Out Against Crime events. Gail and Lisa went on to create and implement the We Care event that brought in other agencies, and sponsors, and was attended by hundreds. All offering awareness, education, inspiration, hope, and a day of safe family fun.",
        bio3: "At Walk of Faith, she volunteered in the food and clothing distribution and was on the board of the 501 c 3WOF Community Center. She also began to open the center to allow people to come in for coffee, juice, donuts, and warmth, whether homeless or waiting for the bus. It was later acknowledged by the pastor and was expanded to a breakfast ministry. She also volunteered with food and clothing distribution. She partnered with Lisa Falkenstein on the creation, planning, and promotion of events such as fundraisers and community events that bring others closer. She held a position on the 501 c3 board at Walk of Faith and is now positioned on the board at Community for Better Living."
    },
    {
        key: "mroberts",
        name: "Matthew Roberts",
        position: undefined,
        img: matthew_roberts,
    },
    {
        key: "npratt",
        name: "Nate Pratt",
        position: undefined,
        img: placeholderImage,
    },
    {
        key: "apratt",
        name: "Aaron Pratt",
        position: undefined,
        img: placeholderImage,
    },
];

export default function Member({ params }: { params: { member: string } }) {
    let member = BOARD_MEMBERS.filter((member) => member.key === params.member)[0];

    return (
        <Container>
            <div className="mt-28 px-8 pt-4 pb-16">
                <Link href="/about" className='bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                    Back to About Us
                </Link>
                <div className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] rounded-full mb-8 mt-12">
                    <Image
                        alt="Board Member Profile Image"
                        src={member.img}
                        placeholder="blur"
                        quality={60}
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                            borderRadius: '999px',
                            objectPosition: '0px 0px'
                        }}
                    />
                </div>
                <h1 className="display-1 mb-4">{member.name}</h1>
                {member.position && (<h2 className="display-sl mb-4">{member.position}</h2>)}
                {member.bio1 && (
                    <div className="mb-4">
                        <Paragraph>
                            {member.bio1}
                        </Paragraph>
                    </div>
                )}
                {member.bio2 && (
                    <div className="mb-4">
                        <Paragraph>
                            {member.bio2}
                        </Paragraph>
                    </div>
                )}
                {member.bio3 && (
                    <div className="mb-4">
                        <Paragraph>
                            {member.bio3}
                        </Paragraph>
                    </div>
                )}
            </div>
        </Container>
    )
}