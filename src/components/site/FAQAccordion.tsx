import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/content";

export function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, i) => (
        <AccordionItem key={faq.pregunta} value={`faq-${i}`} className="border-border">
          <AccordionTrigger className="cursor-pointer py-5 text-left text-base font-semibold text-primary hover:no-underline">
            {faq.pregunta}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
            {faq.respuesta}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
