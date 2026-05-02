import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How much does your service cost?",
    answer:
      "Our most popular option is $98/hour for 2 professional cleaners (minimum 2.5 hours).\n\nFor smaller or lighter jobs, we also offer custom estimates with 1 cleaner based on your needs. We'll help you choose the best option.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking your cleaning at least 2 days in advance to secure your preferred time.\n\nAs a growing and in-demand company, our schedule fills up quickly - but we always do our best to accommodate urgent requests when possible.",
  },
  {
    question: "Do you bring your own supplies?",
    answer:
      "Yes, we bring all necessary cleaning supplies and equipment. Eco-friendly products are available upon request.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer:
      "No, you don't have to be home. Many clients provide access, and we handle everything.",
  },
  {
    question: "How long will the cleaning take?",
    answer:
      "Most cleanings take between 2.5 to 5 hours, depending on the size and condition of the space.",
  },
  {
    question: "What's the difference between standard and deep cleaning?",
    answer:
      "Standard cleaning is for regular maintenance (dusting, wiping, vacuuming).\nDeep cleaning is more detailed and focuses on buildup, hard-to-reach areas, and overall deeper results.",
  },
  {
    question: "Do you clean inside the fridge, oven, or windows?",
    answer: "Yes, these can be added as extra services.",
  },
  {
    question: "Are you insured?",
    answer: "Yes, we are a fully insured company.",
  },
  {
    question: "Do you offer recurring cleaning?",
    answer:
      "Yes! We offer weekly, bi-weekly, and monthly services with discounted rates.",
  },
  {
    question: "What if I'm not satisfied with the cleaning?",
    answer:
      "Please let us know the same day - we'll do our best to fix any issues.",
  },
  {
    question: "How do I book a cleaning?",
    answer:
      "You can text us, call us, or request a quote online - we respond quickly.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">FAQ</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know before booking your cleaning service
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`item-${index}`}
                className="border-0 rounded-xl px-5 bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600 whitespace-pre-line leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
