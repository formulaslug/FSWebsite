/*
  I'm really not sure how to make this look good,
  I want big high quality photos of every subteam doing their work and a small photo of the subteam leader.
  Each team needs a blurb, no call to action, that's what the join team is for
  Front page links need to have seperate anchor tags here, we also need outreach/finance on front page
*/

import Navbar from "@/components/Navbar";
import ShimmerTitle from "@/components/ShimmerTitle";
import { colors } from "@/config/colors";
import { Metadata } from "next";
import ScrollToSection from "./ScrollToSection";

export const metadata: Metadata = {
  title: "Formula Slug - Team",
  description: "Formula Slug's Website - Meet the Team",
};

export default function TeamPage() {
  const CompositesBlurb = "Pushing the limits of performance starts with cutting weight without compromising strength. Our composites team engineers precision carbon fiber components such as the aerodynamics package, steering wheel, seat, body shell, and accumulator fan cowling Every part we craft blends lightweight efficiency with durability that endures the high forces of racing."
  const VDBlurb = "Vehicle Dynamics is the invisible foundation of all motor vehicles. Our members often work between subteams, focusing on the physics behind every static and dynamic property of our cars. We design things that often cannot be seen, but are impossible to ignore. If you’re looking for a physics/mathematics-driven position, please consider joining Vehicle Dynamics!"
  const ErgonomicsBlurb = "The Ergonomics team focuses on systems that directly interact with the driver, focused on driver performance, connection, usability, safety, and comfort. They are responsible for the research, design, manufacturing, and testing of the pedal box, driver seating, steering system, brakes, and play a large role in the overall cockpit/chassis design. Their work heavily impacts the drivability and driving experience of the car."
  const AccumulatorBlurb = "The accumulator team builds the battery pack that powers the car—it’s a subteam where mechanical and electrical work come together. With tasks ranging from pack design to modeling the container and cooling systems, we ensure the accumulator delivers power safely and reliably."
  const OutreachBlurb = "The Outreach Team at Formula Slug is responsible for both internal and external promotion, helping to shape and maintain the team’s image and brand. Through social media, partnerships with industry and academia, and engaging storytelling, the team connects with supporters, potential sponsors, and new talent. By showcasing the daily innovations and the collaboration behind every project, Outreach highlights Formula Slug not just as a team that engineers a car, but as a supportive, hands-on community dedicated to excellence both on and off the track."
  const FinanceBlurb = "The finance team is an amazing opportunity to gain experience understanding how different parts of an organization come together to make financial decisions. We work directly with subteams to create budgets and track expenses, while also coordinating fundraising efforts and developing financial proposals."
  const AerodynamicsBlurb = "The aerodynamics subteam develops high-performance wings and bodywork to optimize downforce and minimize drag for maximum lap times. Join us to gain hands-on experience with CFD analysis, wind tunnel testing, and composite manufacturing while designing the aerodynamic package that gives our car its competitive edge."
  const FirmwareBlurb = "The firmware team manages the embedded software that controls and interconnects the electrical components of the car. We program everything from battery management and data logging to throttle control and dashboard screens. If you love c++ and microcontrollers or want to help out with mission-critical software, then this is the team for you."
  const SoftwareBlurb = "The software team develops tools and systems that support vehicle simulation and autonomous driving. We build models to predict performance, design algorithms for control and perception, and ensure the car can make real-time decisions on and off the track. Our work connects data, software, and hardware to improve both driver and vehicle performance. The software team will be a big commitment and we expect dedication and curiosity whether you come in with no experience or lots of experience."
  const ChassisBlurb = "The Chassis is the glue that holds the car together. As a member of the chassis team you will learn top level system integration, how to work with complex CAD structures in Onshape, create complex simulations using Ansys to create lightweight & rigid steel tub frame frame"
  const ManufacturingBlurb = "BEN GRAU!"
  const WeldingBlurb = "Mr Morenious"
  const SuspensionBlurb = "Suspension Team puts the car in motion. We design and engineer the system that links the drivetrain, steering, braking, and aerodynamic components to the chassis and wheels. By applying advanced physics and mathematics, we develop precise kinematic geometries that align with our vehicle dynamics objectives. Through rigorous force and load analyses, we bring the car to life, optimizing for performance in acceleration, braking, and cornering while ensuring the highest levels of driver safety."
  const LVBlurb = "WESLEY"
  const HVBlurb = "The High Voltage team's primary responsibility is ensuring the energy inside the accumulator makes its way to the motor. This involves designing circuits that interface with the motor controller, placing high-current cabling to carry the power, collaborating with other teams to optimally position tractive system components, and more! In addition to the on-board system, we also design and assemble a custom charger for the accumulator."

  const subteamCard = ({
    subteam,
    teamPhoto,
    blurb,
    leftPhoto,
    leadName,
  }: {
    subteam: any;
    teamPhoto: string;
    blurb: string;
    leftPhoto: boolean;
    leadName: string;
  }) => {
    const photoElement = (
      <div className="flex items-center justify-center w-full md:w-full p-0 md:h-50vh overflow-hidden mt-5 md:mr-20 md:ml-20">
        <img
          src={`/photos/${teamPhoto}`}
          alt={`${subteam} Team Photo`}
          className="w-full h-full object-cover min-w-full min-h-full"
          style={{ margin: "0" }}
        />
      </div>
    );

    const textElement = (
      <div className="flex flex-col justify-center items-center w-full md:w-full p-4">
        <h2
          className="text-5xl font-semibold mb-2 text-center"
          style={{
        marginTop: "5vh",
        color: colors.slugYellow,
        textShadow: `2px 2px 0px ${colors.electricBlue}`,
          }}
        >
          {subteam}
        </h2>
        <p 
          className="text-white text-center text-xl flex items-center justify-center h-full w-95% md:w-3/4"
        >
          "{blurb}"
        </p>
        <div className="mt-4 flex justify-end items-center w-full mr-10">
          <span className="text-white text-xl font-semibold mr-2">-{leadName}</span>
          <span className="text-white text-lg">| {subteam} Lead</span>
        </div>
      </div>
    );

    return (
      <div
        className="flex flex-col w-full md:h-[50vh]"
        style={{
          padding: "0",
          width: "100%",
        }}
      >
        <div className="flex flex-col md:flex-row w-full h-full">
          {/* Mobile layout - always text first, then photo */}
          <div className="flex flex-col md:hidden w-full">
        {textElement}
        {photoElement}
          </div>
          
          {/* Desktop layout - respects leftPhoto prop */}
          <div className="hidden md:flex md:flex-row w-full h-full">
        {leftPhoto ? (
          <>
            <div className="flex w-2/3">{photoElement}</div>
            <div className="flex w-1/3">{textElement}</div>
          </>
        ) : (
          <>
            <div className="flex w-1/3">{textElement}</div>
            <div className="flex w-2/3">{photoElement}</div>
          </>
        )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen text-white" style={{ backgroundColor: colors.background.primary }}>
      <ScrollToSection />

      <div style={{ margin: 0, padding: 0, width: '100%' }}>
        <Navbar />
        
        <div>
          <ShimmerTitle>
            Meet the Team
          </ShimmerTitle>
          
            <div className="flex flex-col">



            {/* Business Teams */}
            {subteamCard({ subteam: "Outreach", teamPhoto: "Outreach.jpg", blurb: OutreachBlurb, leftPhoto: true, leadName: "Naveen Challa" })}
            {subteamCard({ subteam: "Finance", teamPhoto: "Finance.JPG", blurb: FinanceBlurb, leftPhoto: false, leadName: "Max Simonen Luke" })}


            {/* Electrical Teams */}
            <div id="electrical">
            {subteamCard({ subteam: "Accumulator", teamPhoto: "Accumulator.png", blurb: AccumulatorBlurb, leftPhoto: true, leadName: "Aethlyn Lim" })}
            {subteamCard({ subteam: "Firmware", teamPhoto: "Firmware.jpg", blurb: FirmwareBlurb, leftPhoto: false, leadName: "Jack Nystrom" })}
            {subteamCard({ subteam: "High Voltage", teamPhoto: "HV.jpg", blurb: HVBlurb, leftPhoto: true, leadName: "Victor Kalastirsky" })}
            {subteamCard({ subteam: "Low Voltage", teamPhoto: "LV.PNG", blurb: LVBlurb, leftPhoto: false, leadName: "Wesley Kronmiller" })}
            </div>


            {/* Software Teams */}
            <div id="software">
            {subteamCard({ subteam: "Software", teamPhoto: "Software.png", blurb: SoftwareBlurb, leftPhoto: true, leadName: "Nathaniel Platt" })}
            </div>


            {/* Mechanical Teams */}
            <div id="mechanical">
            {subteamCard({ subteam: "Suspension", teamPhoto: "Suspension.jpg", blurb: SuspensionBlurb, leftPhoto: false, leadName: "Mira Verma" })}
            {subteamCard({ subteam: "Aerodynamics", teamPhoto: "Aerodynamics.jpg", blurb: AerodynamicsBlurb, leftPhoto: true, leadName: "Megh Patel" })}
            {subteamCard({ subteam: "Welding", teamPhoto: "Welding.jpg", blurb: WeldingBlurb, leftPhoto: false, leadName: "Mr Christian Reyo-Morenious" })}
            {subteamCard({ subteam: "Composites", teamPhoto: "Composites.jpg", blurb: CompositesBlurb, leftPhoto: true, leadName: "Daniel Au" })}
            {subteamCard({ subteam: "Chassis", teamPhoto: "Chassis.jpeg", blurb: ChassisBlurb, leftPhoto: false, leadName: "Gavin Leach" })}
            {subteamCard({ subteam: "Vehicle Dynamics", teamPhoto: "VD.jpg", blurb: VDBlurb, leftPhoto: true, leadName: "Caleb Shin" })}
            {subteamCard({ subteam: "Ergonomics", teamPhoto: "Ergonomics.jpg", blurb: ErgonomicsBlurb, leftPhoto: false, leadName: "Justin Judge" })}
            {subteamCard({ subteam: "Manufacturing", teamPhoto: "Manufacturing.png", blurb: ManufacturingBlurb, leftPhoto: true, leadName: "Ben Grau" })}
            </div>


            </div>
        </div>
      </div>
    </main>
  );
}
