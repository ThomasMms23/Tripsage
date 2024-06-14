import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

// FAQ data array
const faqData = [
  {
    question:
      "How does Tripsage determine the best travel destinations for me?",
    answer:
      "Tripsage uses a sophisticated algorithm that considers your budget, seasonal preferences, and other personal preferences to suggest a list of destinations. Each suggestion is tailored to maximize your satisfaction and meet your specified criteria.",
  },
  {
    question:
      "What kind of safety information does Tripsage provide about destinations?",
    answer:
      "For each destination, Tripsage provides a safety index that includes crime rates, health care quality, and general travel advisories. This information is updated regularly to ensure you have the latest data for making safe travel decisions.",
  },
  {
    question:
      "Does Tripsage offer information on public transportation availability in destinations?",
    answer:
      "Yes, each destination guide includes detailed information on the availability and quality of public transportation. This includes tips on using local transit, costs, and the best passes or tickets to purchase for your stay.",
  },
  {
    question: "How can I customize my travel recommendations on Tripsage?",
    answer:
      "You can customize your recommendations by updating your profile preferences, including budget limits, preferred climates, cultural interests, and more. Tripsage adjusts its suggestions in real-time based on your changes to ensure tailored travel options.",
  },
  {
    question:
      "What makes Tripsage different from other travel recommendation platforms?",
    answer:
      "Unlike other platforms, Tripsage combines real-time data analytics with user preferences to provide personalized travel suggestions. Our platform also offers comprehensive information on safety, local transportation, and must-visit sites, ensuring a well-rounded travel planning experience.",
  },
  {
    question:
      "How often is the information about destinations updated on Tripsage?",
    answer:
      "Our destination data is updated weekly with inputs from global travel advisories, user reviews, and on-ground travel data. This ensures that the information we provide is current and reliable, helping you make the best travel decisions.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="flex justify-center w-full py-12 md:py-24 lg:py-32 dark:bg-main-color"
    >
      <div className="sm:w-full md:w-3/5 lg:w-3/5 xl:w-3/5 px-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-50">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 md:text-xl/relaxed dark:text-gray-400">
            Everything you need to know to plan your perfect trip with Tripsage.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem
              className="text-white"
              key={index}
              value={`item-${index + 1}`}
            >
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
