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
import CaptainCard from "./captainComponent";
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
  const ManufacturingBlurb = "Have you ever wanted to manufacture a car? To be hands on with almost every part? On Manufacturing, you’ll get experience making parts with industry-grade machines like mills and routers. You’ll learn not just how to use the tools, but the theory and decision-making behind them. With opportunities to pursue CAM, material science, and cost logistics—skills that translate directly into future careers. If you're unfamiliar, we’ll guide you through the path to expertise; all we’re looking for is dedicated people to go the distance!"
  const WeldingBlurb = "The Welding Team’s focus is on welding our critical components, from aluminum to chromoly, we handle it all. We specialize in TIG welding, a process valued for its precision, strength, and reliability. If you’re ready to build with skill and join a hands-on team, come be part of the Welding Team!"
  const SuspensionBlurb = "Suspension Team puts the car in motion. We design and engineer the system that links the drivetrain, steering, braking, and aerodynamic components to the chassis and wheels. By applying advanced physics and mathematics, we develop precise kinematic geometries that align with our vehicle dynamics objectives. Through rigorous force and load analyses, we bring the car to life, optimizing for performance in acceleration, braking, and cornering while ensuring the highest levels of driver safety."
  const LVBlurb = "The Low Voltage system ties the whole car together, providing safety systems, a communication network, and power for everything but the motor. You might enjoy working on the LV system if you're interested in logic puzzles, circuit design, PCB Layout, or soldering."
  const HVBlurb = "The High Voltage team's primary responsibility is ensuring the energy inside the accumulator makes its way to the motor. This involves designing circuits that interface with the motor controller, placing high-current cabling to carry the power, collaborating with other teams to optimally position tractive system components, and more! In addition to the on-board system, we also design and assemble a custom charger for the accumulator."
  const drivetrainBlurb = "The drivetrain is the system that connects the motor to the wheels. It takes electrical energy from the battery, converts it into mechanical rotation, and transmits that motion to drive the wheels. It's design requires optimizing torque delivery, minimizing weight, and ensuring reliability during harsh driving."
  const autonomousBlurb = "Autonomous is a challenge that involves racing without a driver, creating challenging computer vision and vehicle dynamics problems. This requires combining multiple types of sensors, such as cameras, lidar, and inertial measurement to interpret the vehicle’s surroundings and determine optimal control. This is a multidisciplinary effort spanning machine learning, vehicle dynamics modeling, as well as electrical and mechanical design to extract maximum performance from our race car."

  return (
    <main className="min-h-screen text-white" style={{ backgroundColor: colors.background.primary }}>
      <ScrollToSection />

      <div style={{ margin: 0, padding: 0, width: '100%' }}>
        <Navbar />
        
        <div>
          <h1 className="text-4xl sm:text-6xl font-bold text-center mb-4 px-4 pt-8">
            <ShimmerTitle>Meet the Team</ShimmerTitle>
          </h1>
          
            <div className="flex flex-col">

            {/* Captains Section */}
            <div className="flex flex-col items-center justify-center w-full py-6">
              <h2
                className="text-5xl font-semibold mb-8 text-center"
                style={{
                  color: "white",
                  textShadow: `1px 1px 0px ${colors.electricBlue}`,
                }}
              >
                Captains
              </h2>
              
              {/* Desktop: 5 cards in one row, Mobile: 3 + 2 split */}
              <div className="hidden lg:flex justify-center w-full px-4">
                <div className="w-1/5 px-2">
                  <CaptainCard
                    captainName="Maitreyi Patel"
                    team="Team Captain"
                    photoPath="MaitreyiPatel.jpg"
                    aspectRatio={3/4}
                  />
                </div>
                <div className="w-1/5 px-2">
                  <CaptainCard
                    captainName="Andrew She"
                    team="Team Captain"
                    photoPath="AndrewShe.jpg"
                    aspectRatio={3/4}
                  />
                </div>
                <div className="w-1/5 px-2">
                  <CaptainCard
                    captainName="Nathaniel Platt"
                    team="Software Captain"
                    photoPath="NathanielPlatt.jpg"
                    aspectRatio={3/4}
                  />
                </div>
                <div className="w-1/5 px-2">
                  <CaptainCard
                    captainName="Cole Lewis"
                    team="Electrical Captain"
                    photoPath="ColeLewis.jpg"
                    aspectRatio={3/4}
                  />
                </div>
                <div className="w-1/5 px-2">
                  <CaptainCard
                    captainName="Brenner Krogh"
                    team="Mechanical Captain"
                    photoPath="BrennerKrogh.jpg"
                    aspectRatio={3/4}
                  />
                </div>
              </div>
              
              {/* Mobile/Tablet: 2 wide rows */}
              <div className="lg:hidden w-full px-4">
                {/* First row - 2 captains */}
                <div className="flex justify-center w-full mb-6 gap-4">
                  <div className="w-1/2">
                    <CaptainCard
                      captainName="Maitreyi Patel"
                      team="Team Captain"
                      photoPath="MaitreyiPatel.jpg"
                      aspectRatio={3/4}
                    />
                  </div>
                  <div className="w-1/2">
                    <CaptainCard
                      captainName="Andrew She"
                      team="Team Captain"
                      photoPath="AndrewShe.jpg"
                      aspectRatio={3/4}
                    />
                  </div>
                </div>
                
                {/* Second row - 2 captains */}
                <div className="flex justify-center w-full mb-6 gap-4">
                  <div className="w-1/2">
                    <CaptainCard
                      captainName="Nathaniel Platt"
                      team="Software Captain"
                      photoPath="NathanielPlatt.jpg"
                      aspectRatio={3/4}
                    />
                  </div>
                  <div className="w-1/2">
                    <CaptainCard
                      captainName="Cole Lewis"
                      team="Electrical Captain"
                      photoPath="ColeLewis.jpg"
                      aspectRatio={3/4}
                    />
                  </div>
                </div>
                
                {/* Third row - 1 captain centered */}
                <div className="flex justify-center w-full">
                  <div className="w-1/2">
                    <CaptainCard
                      captainName="Brenner Krogh"
                      team="Mechanical Captain"
                      photoPath="BrennerKrogh.jpg"
                      aspectRatio={3/4}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Business Team Section */}
            <div id="business" className="flex flex-col items-center justify-center w-full py-6">
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

            <div className="flex flex-col lg:flex-row justify-center w-full px-4 gap-4">
              <div className="w-full lg:w-1/3">
                <SubteamCard
                  subteamName="Outreach"
                  photoPaths={["Outreach.jpg"]}
                  blurb={OutreachBlurb}
                  leadName="Naveen Challa"
                  leadPhotoPath="NaveenChalla.jpg"
                  aspectRatio={16/9}
                />
              </div>
              <div className="w-full lg:w-1/3">
                <SubteamCard
                  subteamName="Finance"
                  photoPaths={["Finance.JPG"]}
                  blurb={FinanceBlurb}
                  leadName="Max Simonen Luke"
                  leadPhotoPath="MaxLuke.jpg"
                  aspectRatio={16/9}
                />
              </div>
            </div>

            {/* Electrical Team Section */}
            <div id="electrical" className="flex flex-col items-center justify-center w-full py-6 mt-10">
              <h2
                className="text-5xl font-semibold mb-8 text-center"
                style={{
                  color: "white",
                  textShadow: `1px 1px 0px ${colors.electricBlue}`,
                }}
              >
                Electrical Team
              </h2>
              
              <div className="flex flex-col lg:flex-row justify-center w-full px-4 gap-4">
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="LV"
                    photoPaths={["LV.png"]}
                    blurb={LVBlurb}
                    leadName="Wesley Kronmiller"
                    leadPhotoPath="WesleyKronmiller.jpg"
                    aspectRatio={16/9}
                  />
                </div>
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="HV"
                    photoPaths={["HV.jpg"]}
                    blurb={HVBlurb}
                    leadName="Victor Kalastirsky"
                    leadPhotoPath="VictorKalastirsky.jpg"
                    aspectRatio={16/9}
                  />
                </div>
              </div>
              
              <div className="flex flex-col lg:flex-row justify-center w-full px-4 pt-8 gap-4">
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="Battery"
                    photoPaths={["Accumulator.png"]}
                    blurb={AccumulatorBlurb}
                    leadName="Aethlyn Lim"
                    leadPhotoPath="AethlynLim.JPG"
                    aspectRatio={16/9}
                  />
                </div>
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="Firmware"
                    photoPaths={["Firmware.jpg"]}
                    blurb={FirmwareBlurb}
                    leadName="Jack Nystrom"
                    leadPhotoPath="JackNystrom.JPG"
                    aspectRatio={16/9}
                  />
                </div>
              </div>
            </div>

            {/* Mechanical Team Section */}
            <div id="mechanical" className="flex flex-col items-center justify-center w-full py-6 mt-10">
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
              <div className="flex flex-col lg:flex-row justify-center w-full px-4 mb-8 gap-4">
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="Aerodynamics"
                    photoPaths={["Aerodynamics.jpg"]}
                    blurb={AerodynamicsBlurb}
                    leadName="Megh Patel"
                    leadPhotoPath="MeghPatel.jpg"
                    aspectRatio={16/9}
                  />
                </div>
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="Ergonomics"
                    photoPaths={["Ergonomics.jpg"]}
                    blurb={ErgonomicsBlurb}
                    leadName="Justin Judge"
                    leadPhotoPath="JustinJudge.JPG"
                    aspectRatio={16/9}
                  />
                </div>
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="Chassis"
                    photoPaths={["Chassis.jpeg"]}
                    blurb={ChassisBlurb}
                    leadName="Gavin Leach"
                    leadPhotoPath="GavinLeach.jpg"
                    aspectRatio={16/9}
                  />
                </div>
              </div>
              
              {/* Second row - 3 cards */}
              <div className="flex flex-col lg:flex-row justify-center w-full md:px-2 mb-8 gap-4">
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="Suspension"
                    photoPaths={["Suspension.jpg"]}
                    blurb={SuspensionBlurb}
                    leadName="Mira Verma"
                    leadPhotoPath="MiraVerma.jpg"
                    aspectRatio={16/9}
                  />
                </div>
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="Drivetrain"
                    photoPaths={["drivetrain.jpg"]}
                    blurb={drivetrainBlurb}
                    leadName="Cameron Bannasch"
                    leadPhotoPath="CameronBannasch.JPG"
                    aspectRatio={16/9}
                  />
                </div>
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="Vehicle Dynamics"
                    photoPaths={["VD.jpg"]}
                    blurb={VDBlurb}
                    leadName="Caleb Shin"
                    leadPhotoPath="CalebShin.png"
                    aspectRatio={16/9}
                  />
                </div>
              </div>
              
              {/* Third row - 3 cards */}
              <div className="flex flex-col lg:flex-row justify-center w-full px-4 gap-4">
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="Welding"
                    photoPaths={["welding.jpg"]}
                    blurb={WeldingBlurb}
                    leadName="Christian Reyes-Moreno"
                    leadPhotoPath="ChristianMoreno.png"
                    aspectRatio={16/9}
                  />
                </div>
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="Manufacturing"
                    photoPaths={["manf.png"]}
                    blurb={ManufacturingBlurb}
                    leadName="Ben Grau"
                    leadPhotoPath="BenGrau.jpg"
                    aspectRatio={16/9}
                  />
                </div>
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="Composites"
                    photoPaths={["Composites.jpg"]}
                    blurb={CompositesBlurb}
                    leadName="Daniel Au"
                    leadPhotoPath="DanielAu.jpg"
                    aspectRatio={16/9}
                  />
                </div>
              </div>
            </div>

            {/* Software Team Section */}
            <div id="software" className="flex flex-col items-center justify-center w-full py-6 mt-10">
              <h2
                className="text-5xl font-semibold mb-8 text-center"
                style={{
                  color: "white",
                  textShadow: `1px 1px 0px ${colors.electricBlue}`,
                }}
              >
                Software Team
              </h2>
              
              <div className="flex flex-col lg:flex-row justify-center w-full px-4 gap-4">
                <div className="w-full lg:w-1/3">
                  <SubteamCard
                    subteamName="Autonomous"
                    photoPaths={["autonomous.jpg"]}
                    blurb={autonomousBlurb}
                    leadName="Daniel Rhee"
                    leadPhotoPath="DanielRhee.JPG"
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
