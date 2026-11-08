import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "UI/UX Design",
    description:
      "I will design the visual look and feel of your website, organize content, layout and images in a way that tells a story, and design the final UI",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "I will create, build, and maintain websites and web applications that are fully functional while utilizing various Front-End designs",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Wordpress Development",
    description:
      "I will develop high quality page designs, templates and components that persuade potential clients to take specific action. ",
  },
];

const Services = () => {
  return (
    <section id="services" className="mb-12 xl:mb-36 px-10">
      <div className="container mx-auto">
        <h4 className="text-center mb-2 text-lg fonto-Ovo"> What I Offer</h4>
        <h2 className="text-center text-5xl mb-12 font-Ovo">My Services</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
          My services are designed to help businesses and individuals establish
          a strong online presence. I focus on building responsive, fast, and
          visually engaging websites.
        </p>
        {/*grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Services;
