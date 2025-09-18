/*
  I'm really not sure how to make this look good,
  I want big high quality photos of every subteam doing their work and a small photo of the subteam leader.
  Each team needs a blurb, no call to action, that's what the join team is for
  Front page links need to have seperate anchor tags here, we also need outreach/finance on front page
*/

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShimmerTitle from "@/components/ShimmerTitle";
import SubteamCard from "./subteamComponent";
import { colors } from "@/config/colors";
import { Metadata } from "next";

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

  return (
    <main className="min-h-screen text-white" style={{ backgroundColor: colors.background.primary }}>

      <div style={{ margin: 0, padding: 0, width: '100%' }}>
        <Navbar />
        
        <div>
          <h1 className="text-4xl sm:text-6xl font-bold text-center mb-4 px-4 pt-8">
            <ShimmerTitle>Meet the Team</ShimmerTitle>
          </h1>
          
            <div className="flex flex-col">

            {/* Business Team Section */}
            <div className="flex flex-col items-center justify-center w-full py-6">
              <h2
                className="text-5xl font-semibold mb-8 text-center"
                style={{
                  color: "white",
                  textShadow: `1px 1px 0px ${colors.electricBlue}`,
                }}
              >
                Business Team
              </h2>

            </div>
            <div className="flex justify-center w-full px-4">
              <div className="w-1/3">
                <SubteamCard
                  subteamName="Outreach"
                  photoPaths={["Outreach.jpg"]}
                  blurb={OutreachBlurb}
                  leadName="Naveen Challa"
                  leadPhotoPath="Megh.jpeg"
                  aspectRatio={16/9}
                />
              </div>
              <div className="w-1/3">
                <SubteamCard
                  subteamName="Finance"
                  photoPaths={["Finance.JPG"]}
                  blurb={FinanceBlurb}
                  leadName="Max Simonen Luke"
                  leadPhotoPath="Max.jpg"
                  aspectRatio={16/9}
                />
              </div>
            </div>

            {/* Electrical Team Section */}
            <div className="flex flex-col items-center justify-center w-full py-6 mt-10">
              <h2
                className="text-5xl font-semibold mb-8 text-center"
                style={{
                  color: "white",
                  textShadow: `1px 1px 0px ${colors.electricBlue}`,
                }}
              >
                Electrical Team
              </h2>
              
              <div className="flex justify-center w-full px-4">
                <div className="w-1/3">
                  <SubteamCard
                    subteamName="LV"
                    photoPaths={["LV.png"]}
                    blurb={OutreachBlurb}
                    leadName="Naveen Challa"
                    leadPhotoPath="Megh.jpeg"
                    aspectRatio={16/9}
                  />
                </div>
                <div className="w-1/3">
                  <SubteamCard
                    subteamName="HV"
                    photoPaths={["HV.jpg"]}
                    blurb={FinanceBlurb}
                    leadName="Victor Kalastirsky"
                    leadPhotoPath="Megh.jpeg"
                    aspectRatio={16/9}
                  />
                </div>
              </div>
              
              <div className="flex justify-center w-full px-4 pt-8">
                <div className="w-1/3">
                  <SubteamCard
                    subteamName="Battery"
                    photoPaths={["Accumulator.png"]}
                    blurb={OutreachBlurb}
                    leadName="Aethlyn Lim"
                    leadPhotoPath="Megh.jpeg"
                    aspectRatio={16/9}
                  />
                </div>
                <div className="w-1/3">
                  <SubteamCard
                    subteamName="Firmware"
                    photoPaths={["Firmware.jpg"]}
                    blurb={FinanceBlurb}
                    leadName="Jack Nystrom"
                    leadPhotoPath="Megh.jpeg"
                    aspectRatio={16/9}
                  />
                </div>
              </div>
            </div>

            {/* Mechanical Team Section */}
            <div className="flex flex-col items-center justify-center w-full py-6 mt-10">
              <h2
                className="text-5xl font-semibold mb-8 text-center"
                style={{
                  color: "white",
                  textShadow: `1px 1px 0px ${colors.electricBlue}`,
                }}
              >
                Mechanical Team
              </h2>
              
              {/* First row - 3 cards */}
              <div className="flex justify-center w-full px-4 mb-8">
                <div className="w-1/3">
                  <SubteamCard
                    subteamName="Aerodynamics"
                    photoPaths={["Aerodynamics.jpg"]}
                    blurb={AerodynamicsBlurb}
                    leadName="Megh Patel"
                    leadPhotoPath="Megh.jpeg"
                    aspectRatio={16/9}
                  />
                </div>
                <div className="w-1/3">
                  <SubteamCard
                    subteamName="Ergonomics"
                    photoPaths={["Ergonomics.jpg"]}
                    blurb={ErgonomicsBlurb}
                    leadName="Justin Judge"
                    leadPhotoPath="Megh.jpeg"
                    aspectRatio={16/9}
                  />
                </div>
                <div className="w-1/3">
                  <SubteamCard
                    subteamName="Chassis"
                    photoPaths={["Chassis.jpeg"]}
                    blurb={ChassisBlurb}
                    leadName="Gavin Leach"
                    leadPhotoPath="Megh.jpeg"
                    aspectRatio={16/9}
                  />
                </div>
              </div>
              
              {/* Second row - 3 cards */}
              <div className="flex justify-center w-full px-4 mb-8">
                <div className="w-1/3">
                  <SubteamCard
                    subteamName="Suspension"
                    photoPaths={["Suspension.jpg"]}
                    blurb={SuspensionBlurb}
                    leadName="Mira Verma"
                    leadPhotoPath="Megh.jpeg"
                    aspectRatio={16/9}
                  />
                </div>
                <div className="w-1/3">
                  <SubteamCard
                    subteamName="Drivetrain"
                    photoPaths={["drivetrain.jpg"]}
                    blurb="The drivetrain team is responsible for transferring power from the motor to the wheels efficiently and reliably. We design and manufacture the gear reduction system, differential, and wheel assemblies that convert electrical energy into forward motion."
                    leadName="Cameron Bannasch"
                    leadPhotoPath="Megh.jpeg"
                    aspectRatio={16/9}
                  />
                </div>
                <div className="w-1/3">
                  <SubteamCard
                    subteamName="Vehicle Dynamics"
                    photoPaths={["VD.jpg"]}
                    blurb={VDBlurb}
                    leadName="Caleb Shin"
                    leadPhotoPath="Megh.jpeg"
                    aspectRatio={16/9}
                  />
                </div>
              </div>
              
              {/* Third row - 3 cards */}
              <div className="flex justify-center w-full px-4">
                <div className="w-1/3">
                  <SubteamCard
                    subteamName="Welding"
                    photoPaths={["Welding.jpg"]}
                    blurb={WeldingBlurb}
                    leadName="Christian Reyes-Moreno"
                    leadPhotoPath="Megh.jpeg"
                    aspectRatio={16/9}
                  />
                </div>
                <div className="w-1/3">
                  <SubteamCard
                    subteamName="Manufacturing"
                    photoPaths={["manf.png"]}
                    blurb={ManufacturingBlurb}
                    leadName="Ben Grau"
                    leadPhotoPath="Megh.jpeg"
                    aspectRatio={16/9}
                  />
                </div>
                <div className="w-1/3">
                  <SubteamCard
                    subteamName="Composites"
                    photoPaths={["Composites.jpg"]}
                    blurb={CompositesBlurb}
                    leadName="Daniel Au"
                    leadPhotoPath="Megh.jpeg"
                    aspectRatio={16/9}
                  />
                </div>
              </div>
            </div>

            </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
